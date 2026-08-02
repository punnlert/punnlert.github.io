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
hidden: false
startDate: 2025-03
endDate: 2025-10
importance: 1
---
<script>
  import Image from "$lib/components/atoms/Image.svelte";
  import LightBoxImage from "$lib/components/molecules/LightBoxImage.svelte";
  import Button from "$lib/components/atoms/Button.svelte"
  import YoutubeIcon from "$lib/icons/socials/youtube.svelte"; 
  import GithubIcon from "$lib/icons/socials/github.svelte"; 
  import MdiWeb from '~icons/mdi/web'
  import Carousel from "$lib/components/molecules/Carousel.svelte";

  const sketchImg = [
      {src: "images/posts/aesop/case_design_1.png", alt: "iterations of cases"},
      {src: "images/posts/aesop/case_design_2.png", alt: "intermediate case design"},
  ]

  const caseConceptImg = [
      {src: "images/posts/aesop/case_concept_1.png", alt: "case early concept 1"},
      {src: "images/posts/aesop/case_concept_2.png", alt: "case early concept 2"},
      {src: "images/posts/aesop/case_concept_3.png", alt: "case early concept 3"},
  ]

  const caseManuImg = [
      {src: "images/posts/aesop/case_manufacture_1.jpg", alt: "Case surface finishing after print"},
      {src: "images/posts/aesop/case_manufacture_2.jpg", alt: "Case surface finishing after print"},
  ]

  const pcbImg = [
      {src: "images/posts/aesop/PCB_manufacture_1.png", alt: "case early concept 1"},
      {src: "images/posts/aesop/PCB_manufacture_2.jpg", alt: "case early concept 2"},
  ]

  const exhibitionImg = [
      {src: "images/posts/aesop/booth_1.jpg  ", alt: "booth close up 1"},
      {src: "images/posts/aesop/booth_2.jpg  ", alt: "booth close up 2"},
      {src: "images/posts/aesop/booth_3.jpg  ", alt: "booth close up 3"},
      {src: "images/posts/aesop/booth_4.jpg  ", alt: "booth close up 4"},
      {src: "images/posts/aesop/booth_5.jpg  ", alt: "booth close up 5"},
      {src: "images/posts/aesop/booth_6.jpg  ", alt: "booth close up 6"},
      {src: "images/posts/aesop/booth_7.jpeg ", alt: "booth close up 7"},
      {src: "images/posts/aesop/booth_8.jpeg ", alt: "booth close up 8"},
      {src: "images/posts/aesop/booth_9.jpeg ", alt: "booth close up 9"},
      {src: "images/posts/aesop/booth_10.jpeg", alt: "booth close up 10"},
      {src: "images/posts/aesop/booth_11.jpeg", alt: "booth close up 11"},
      {src: "images/posts/aesop/booth_12.jpeg", alt: "booth close up 12"},
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

["Aesop"](https://en.wikipedia.org/wiki/Aesop) was a Greek storyteller telling morality fables. Spoken word fables are the first form of human storytelling; as primal as fire and ashes. Would spoken words help us be more engaged in the books we read?

[Researches](https://www.researchgate.net/publication/353850247_Rethinking_the_workweek_Results_from_a_longitudinal_time-use_study_of_a_30-hour_workweek_experiment) have suggested that modern lifestyle suffers from fractured and disconnected leisure time. In other words, the free time we have is often interrupted by other tasks, like long commute time to work, house chores, or socializing. This leaves only small block of time between each task for us to enjoy ourselves. Smartphone and social media is the most likely method people use to unwind because it is easy to access and require less attention to enjoy.

Researcher have also shown that there is a steady [decline in reading for pleasure](https://www.sciencedirect.com/science/article/pii/S2589004225015494). I don't know if the former issue causes the latter. So, I asked around my friends at the bookclub and got sentiments that

1. Yes, they wouldn't read if they don't have the long stretch of designated time of the day to do so (which is challenging for undergraduate students whose life are filled with team projects, procrastinated homework, and parties) and

2. Reading requires lots of attention that if they do read during those fragmented free time, it's not long enough for them to process the information and they would end up reading the same part again anyway.

One of the colleages happen to mention how they incorporate audiobook with their daily reading. They would listen to the audiobooks during the day when they are commuting and doing trivial chores, and then they would come home and read before bed. I think this is a good way to incorporate reading into daily life, so I designed this device.

### What is aesop

<Image src="/images/posts/aesop/intro_1.png" alt="aesop in use"/>

aesop is a audiobook reader that can sync your audiobook with your physical book. When you want to continue from the page that you left off, simply scan the page number or manually input it with the rotating knob.

<Image src="/images/posts/aesop/aesop_find.png" alt="How to find pages on aesop" caption={true}/>

If you forgot anything about the characters or events, simply ask aesop and it will tell you the page number they appeared in.

<Image src="/images/posts/aesop/aesop_ask.png" alt="How to ask about things in aesop" caption={true}/>

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

<Image src="/images/posts/aesop/circuit.png" alt="aesop initial test circuit" caption={true}/>

<img src="images/posts/aesop/prototype_demo.gif" alt="demo for prototype"/>

#### Case

I made multiple sketches of body enclosures with multiple ways of attaching the device to a book.

<Carousel images={sketchImg} label="images" withLightbox={true}></Carousel>

Later on, I designed a magnetic back so that the devices can changes the attachment depending on the user's need. This is the early conceptual rendering to discuss with all the stakeholders.

<Carousel images={caseConceptImg} label="images" withLightbox={true}></Carousel>

The case design is incremental along with the [PCB Design.](#pcb-design) Any component conflict on the PCB (like if this component is here it would block other component during installation) and the case have to go through a minor or major adjustment.

<Carousel images={caseManuImg} label="images" withLightbox={true}></Carousel>

#### PCB Design

I designed a PCB (Printed Circuit Board) as a Raspberry Pi HAT (Hardware Attached on Top). It took a couple version along with the case development to resolve all the components position conflict. It took a lot of soldering until the final layout is ready.
<Image src="/images/posts/aesop/PiZeroHat_01.jpg" alt="placeholder"/>

<Carousel images={pcbImg} label="images" withLightbox={true}></Carousel>

#### Programming

I designed the software screen with [Lopaka.](https://lopaka.app/projects) And import it into my software written in python.

Developing the software for this was not an easy task, especially since I did not have any prior experience developing for embedded Linux-based device. In the end, even though the aesop is not the fastest to boot up (2 minutes), it still boots up and work for the demo.

<Image src="/images/posts/aesop/screen_design.png" alt="Screen designing"/>

### Final Product

<Image src="/images/posts/aesop/PCB_exploded_view.png" alt="Exploded view with PCB and all of the case assembly" caption={true}/>

<LightBoxImage src="/images/posts/aesop/final_rendering.png" alt="Final rendering" caption={true}/>
<LightBoxImage src="/images/posts/aesop/final_product_photoshoot.png" alt="Final product photoshoot" caption={true}/>

<LightBoxImage src="/images/posts/aesop/promotional_shoot.png" alt="Promotional shoot" caption={true}/>

### Exhibition

This work was exhibited at KAIST ID Exhibition 2025. The exhibition took place at KAIST and Nodeul Gallery, Seoul.

<Carousel images={exhibitionImg} label="images" withLightbox={true}></Carousel>

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

