<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/register", name="app_register", methods={"POST"})
     */
    public function register(
        Request $request,
        EntityManagerInterface $entityManager,
        JWTEncoderInterface $encoder,
        UserPasswordEncoderInterface $passwordEncode
    ): Response {
        $post = json_decode($request->getContent(), true);

        $user = new User();
        $user
            ->setEmail($post['email'])
            ->setPassword($post['password'])
            ->setPlainPassword($post['plainPassword']);

        $user->setPassword(
            $passwordEncode->encodePassword(
                $user,
                $user->getPlainPassword()
            )
        );
        $entityManager->persist($user);

        $entityManager->flush();


        return $this->json(
            [
                'token' => $encoder->encode(['username' => $user->getUsername()])
            ]
        );
    }

    /**
     * @Route("/api/get-user", name="get_user")
     */
    public function getUserData(): Response
    {
        return $this->json($this->getUser());
    }
}
