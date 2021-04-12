<?php

namespace App\Entity;

use App\Repository\CalendarRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\RangeFilter;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\Type as JSMType;
use App\Filter\CalendarFilter;

/**
 * @ORM\Entity(repositoryClass=CalendarRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"read"}, "datetime_format" = "Y-m-d"},
 *     denormalizationContext={"groups"={"write"}, "datetime_format" = "Y-m-d"}
 * )
 *
 * @ApiFilter(CalendarFilter::class, properties={"start"})
 * @ApiFilter(OrderFilter::class, properties={"start":"DESC"})
 */
class Calendar
{
    /**
     * @Groups({"read"})
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"read", "write"})
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @Groups({"read", "write"})
     * @ORM\Column(type="date")
     */
    private $start;

    /**
     * @Groups({"read", "write"})
     * @ORM\Column(type="date")
     */
    private $end;

    /**
     * @Groups({"read", "write"})
     * @ORM\Column(type="text", nullable=true)
     */
    private $about;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(\DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(\DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getAbout(): ?string
    {
        return $this->about;
    }

    public function setAbout(string $about): self
    {
        $this->about = $about;

        return $this;
    }
}
