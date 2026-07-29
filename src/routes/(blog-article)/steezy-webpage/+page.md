---
slug: steezy-webpage
title: Steezy Webpage
excerpt: >-
  Web design for a skating shoe protection brand. How I designed a website that
  encapsulates the dynamic, gritty, and street nature of Thailand's skate
  culture.
coverImage: /images/posts/steezy-webpage/cover.png
tags:
  - Creative Web Design
  - Front End Development
hidden: false
startDate: 2026-07-05T00:00:00.000Z
importance: 3
---
<script>
  import Image from "$lib/components/atoms/Image.svelte";
  import LightBoxImage from "$lib/components/molecules/LightBoxImage.svelte";
  import Button from "$lib/components/atoms/Button.svelte"
  import MdiWeb from '~icons/mdi/web'
  import Quote from "$lib/components/molecules/Quote.svelte";
</script>

<div class="button_container"> 
    <Button href="https://steezy.lol">
      <MdiWeb />
        Live Webpage
    </Button>
</div>

This brand is a communication design student's graduation project. He contacted me to help designing and implementing his website. I begin by asking him questions about the brand identity and motiff. Along with that, he provided me a CI document for the do's and don'ts, the allowed color palette, the typeface to be used. He wants the website to be a simple minimalistic website, with references like [supreme](https://supreme.com/stores); another steet brand that he take lots of inspiration from.

<Quote>
Having a limited choice in how the website should look (the fixed brand's identity), my design lies in the motions graphics and interaction with the website.
</Quote>

I identified 2 themes that I can use as a motif for the website:

1. Motions: Skateboarders and motions are like bread and butter. When picture skateboarding, you see a blurry figure zooms pass by and you see them doing tricks.
2. Gritty: Skateboarding is always rough. You always take risk. You perform tricks at high speed and fall on hard, rough concrete.

## Main page

<LightBoxImage src="/images/posts/steezy-webpage/steezy-home.png" alt="Main page of steezy website" withLightbox={true}/>

I put a simple high contrast image of the brand and keep to page monotonous to keep the minimalistic style.

## About page

The about page is one of the most important pages. I want to make it dynamic and interactive. So, I link the current scroll to one of the brands advertising video. As the visitor scroll down, the video plays.

<img src="/images/posts/steezy-webpage/steezy-about.gif"/>

<div class="button_container"> 
    <Button href="https://steezy.lol/about">
      <MdiWeb />
            Try the scroll
    </Button>
</div>

## Contacts page

Another thing that the brand owner mentioned was that he loves graffity and tagging. So, in the contact page, the user can use their cursor to "paint" the information onto the site.

<img src="/images/posts/steezy-webpage/steezy-contact.gif"/>

<div class="button_container"> 
    <Button href="https://steezy.lol/contact">
      <MdiWeb />
            Try the contact page
    </Button>
</div>

## Products page

The product page is a simple, minimalistic grid with a lot of breathing room.

<LightBoxImage src="/images/posts/steezy-webpage/steezy-products.png" alt="Main page of steezy website" withLightbox={true}/>

## What I learned

I always want to try implementing fun and interactive website but my problem is I don't have the material to fully implement one. This is a great opportunity for me to try implement quirky, unique interactivity; from simple stuff like implementing [smooth scrolling](https://github.com/darkroomengineering/lenis), to challenging new stuffs like [video on scroll](#about-page), [text reveal effect](#contacts-page),

<style lang="scss">
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

