---
slug: aesop
title: aesop
excerpt: >-
  aesop is an audiobook reading device that sync your physical book with your
  audiobook, helping you switch between them according to your needs!
coverImage: /images/posts/aesop/cover.png
tags:
  - Product Design
  - Real Production
  - Interaction Design
hidden: true 
startDate: 2025-03
endDate: 2025-10
importance: 3
---
<script>
  import Image from "$lib/components/atoms/Image.svelte";
  import LightBoxImage from "$lib/components/molecules/LightBoxImage.svelte";
  import Button from "$lib/components/atoms/Button.svelte"
  import YoutubeIcon from "$lib/icons/socials/youtube.svelte"; 
  import GithubIcon from "$lib/icons/socials/github.svelte"; 
  import MdiWeb from '~icons/mdi/web'
  import Carousel from "$lib/components/molecules/Carousel.svelte";

  const circuitImg = [
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
  ]

  const sketchImg = [
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
  ]

  const finalImg = [
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
      {src: "images/placeholder.png", alt: "placeholder"},
  ]
</script>

### Introduction

aesop is a audiobook reader that can sync your audiobook with your physical book. When you want to continue from the page that you left off, simply scan the page number or manually input it with the rotating knob.

<Image src="/images/placeholder.png" alt="placeholder"/>

If you forgot anything about the characters or events, simply ask aesop and it will tell you the page number they appeared in.

<Image src="/images/placeholder.png" alt="placeholder"/>

### Background

Researches have suggested that modern lifestyle suffers from fractured and disconnected leisure time. In other words, the free time we have is often interrupted by other tasks, like long commute time to work, house chores, or socializing. This leaves only small block of time between each task for us to enjoy ourselves. Smartphone and social media is the most likely method people use to unwind because it is easy to access and require less attention to enjoy.

<Image src="/images/placeholder.png" alt="placeholder"/>

Researcher have also shown that there is a steady decline in reading for pleasure. I don't know if the former issue causes the latter. So, I asked around my friends at the bookclub and got sentiments that

1. Yes, they wouldn't read if they don't have the long stretch of designated time of the day to do so (which is challenging for undergraduate students whose life are filled with team projects, procrastinated homework, and parties) and

2. Reading requires lots of attention that if they do read during those fragmented free time, it's not long enough for them to process the information and they would end up reading the same part again anyway.

I happen to have found a reddit post mentioning how they incorporate audiobook with their daily reading. They would listen to the audiobooks during the day when they are commuting and doing trivial chores, and then they would come home and read before bed. I think this is a good way to incorporate reading into daily life, so I designed this device.

### Development

#### Electronics

I begin the development on the circuit. I made a prototype on the breadboard and noted the connections made. The whole device consisted of

1. Microcomputer (Raspberry Pi)
2. Microphone
3. Camera
4. Audio output circuit
5. Rotary Encoder
6. Control Buttons
7. E-ink display

<Carousel images={circuitImg} label="images" withLightbox={true}></Carousel>

#### Case

I made multiple sketches of body enclosures with multiple ways of attaching the device to a book.

<Carousel images={sketchImg} label="images" withLightbox={true}></Carousel>

I like this design the most because it also turns the device into a bookmard. Later on, I designed a magnetic back so that the devices can changes the attachment depending on the user's need.

<Image src="/images/placeholder.png" alt="placeholder"/>

The case design is incremental along with the [PCB Design.](#pcb-design) Any component conflict on the PCB (like if this component is here it would block other component during installation) and the case have to go through a minor or major adjustment.

#### PCB Design

I designed a PCB (Printed Circuit Board) as a Raspberry Pi HAT (Hardware Attached on Top). It took a couple version along with the case development to resolve all the components position conflict. It took a lot of soldering until the final layout is ready.
<Image src="/images/placeholder.png" alt="placeholder"/>
<Image src="/images/placeholder.png" alt="placeholder"/>

#### Programming

Developing the software for this was not an easy task, especially since I did not have any prior experience developing for embedded Linux-based device. In the end, even though the aesop is not the fastest to boot up (2 minutes), it still boots up and work for the demo.

### Final Product

<Image src="/images/placeholder.png" alt="placeholder"/>
<Carousel images={finalImg} label="images" withLightbox={true}></Carousel>

### Exhibition

This work was exhibited at KAIST ID Exhibition 2025. The exhibition took place at KAIST and Nodeul Gallery, Seoul.
<Image src="/images/placeholder.png" alt="placeholder"/>

### What I learned

This project was very huge and ambitious for me at the time. I imagine how cool it must be to love a project so much and polish it until it is nice and shiny -- all by myself! However, as I progress, I soon realize why product _realization_ is a team work. Turns out ideating, designing, fabricating, programming, and testing is a lot of work for one person in the time frame of one year. At the end I came out exhausted and tired yet strangely satisfy having completed more or less what I have envisioned. I learned a great deal about handheld ergonomics, 3D modelling for assembly, rendering, PCB designing, programming for embedded device. It was a joy to implement and develop and it inspires me to make more physical products.

<style>
    .drawing_container {
        width: 100%;
        display: grid;
		grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .button_container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }
</style>

