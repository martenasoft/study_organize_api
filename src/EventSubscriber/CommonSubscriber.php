<?php

namespace App\EventSubscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class CommonSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            RequestEvent::class => ['createUser', EventPriorities::POST_READ]
        ];
    }

    public function createUser(RequestEvent $event): void
    {
        dump($event); die;

    }
}