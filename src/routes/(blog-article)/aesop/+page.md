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

<div class="button_container"> 
    <Button href="https://steezy.lol">
      <MdiWeb />
        Live Webpage
    </Button>
</div>

## Introduction

<LightBoxImage src="/images/posts/roger-roger/gameplay_1.png" alt="Picture showing gameplay while the rocket shoots the asteroid" withLightbox={true}/>
<LightBoxImage src="/images/posts/roger-roger/gameplay_2.png" alt="Start Page" withLightbox={true}/>

## The main screen

<LightBoxImage src="/images/posts/roger-roger/start_page.png" alt="Start Page" withLightbox={true}/>

<LightBoxImage src="/images/posts/roger-roger/score_and_info.png" alt="Start Page" withLightbox={true}/>

<LightBoxImage src="/images/posts/roger-roger/asteroid_streaming.png" alt="Start Page" withLightbox={true}/>

<LightBoxImage src="/images/posts/roger-roger/gameplay_2.png" alt="Start Page" withLightbox={true}/>
<Image src="/images/posts/roger-roger/new_highscore.png" alt="Start Page" withLightbox={true}/>

## The control screen

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

