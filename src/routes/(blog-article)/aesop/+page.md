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
</script>

<!-- <div class="button_container">  -->
<!--     <Button href="https://steezy.lol"> -->
<!--       <MdiWeb /> -->
<!--         Live Webpage -->
<!--     </Button> -->
<!-- </div> -->

## Introduction

aesop is a audiobook reader that can sync your audiobook with your physical book. When you want to continue from the page that you left off, simply scan the page number or manually input it with the rotating knob.

<Image src="/images/placeholder.png" alt="placeholder"/>

If you forgot anything about the characters or events, simply ask aesop and it will tell you the page number they appeared in.

<Image src="/images/placeholder.png" alt="placeholder"/>

## Background

Researches have suggested that modern lifestyle suffers from fractured and disconnected leisure time. In other words, the free time we have is often interrupted by other tasks, like long commute time to work, house chores, or socializing. This leaves only small block of time between each task for us to enjoy ourselves. Smartphone and social media is the most likely method people use to unwind because it is easy to access and require less attention to enjoy.

<Image src="/images/placeholder.png" alt="placeholder"/>

Researcher have also shown that there is a steady decline in reading for pleasure. I don't know if the former issue causes the latter. So, I asked around my friends at the bookclub and got sentiments that

1. Yes, they wouldn't read if they don't have the long stretch of designated time of the day to do so (which is challenging for undergraduate students whose life are filled with team projects, procrastinated homework, and parties) and

2. Reading requires lots of attention that if they do read during those fragmented free time, it's not long enough for them to process the information and they would end up reading the same part again anyway.

I happen to have found a reddit post mentioning how they incorporate audiobook with their daily reading. They would listen to the audiobooks during the day when they are commuting and doing trivial chores, and then they would come home and read before bed. I think this is a good way to incorporate reading into daily life, so I designed this device.

<!-- <LightBoxImage src="/images/posts/roger-roger/gameplay_1.png" alt="Picture showing gameplay while the rocket shoots the asteroid" withLightbox={true}/> -->
<!-- <LightBoxImage src="/images/posts/roger-roger/gameplay_2.png" alt="Start Page" withLightbox={true}/> -->
<!---->
<!-- ## The main screen -->
<!---->
<!-- <LightBoxImage src="/images/posts/roger-roger/start_page.png" alt="Start Page" withLightbox={true}/> -->
<!---->
<!-- <LightBoxImage src="/images/posts/roger-roger/score_and_info.png" alt="Start Page" withLightbox={true}/> -->
<!---->
<!-- <LightBoxImage src="/images/posts/roger-roger/asteroid_streaming.png" alt="Start Page" withLightbox={true}/> -->
<!---->
<!-- <LightBoxImage src="/images/posts/roger-roger/gameplay_2.png" alt="Start Page" withLightbox={true}/> -->
<!-- <Image src="/images/posts/roger-roger/new_highscore.png" alt="Start Page" withLightbox={true}/> -->
<!---->
<!-- ## The control screen -->

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

