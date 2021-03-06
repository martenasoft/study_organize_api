<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/authentication", name="app_login", methods={"POST"})
     */
    public function login(): Response
    {
        $user = $this->getUser();

        return $this->json([
            'user' => $user instanceof User ? $user : null
        ]);
    }

    /**
     * @Route("/register", name="app_register", methods={"POST"})
     */
    public function register(Request $request, EntityManagerInterface $entityManager, JWTEncoderInterface $encoder): Response
    {

        $post = json_decode($request->getContent(), true);

        $user = new User();
        $user
            ->setEmail($post['email'])
            ->setPassword($post['password'])
            ->setPlainPassword($post['plainPassword'])
        ;

        $entityManager->persist($user);
        $entityManager->flush();


        return $this->json([
            'token' => $encoder->encode(['username' => $user->getUsername()])
        ]);
    }




   /* public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }*/

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
