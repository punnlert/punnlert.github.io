---
title: Lambda Studio
slug: lambda-studio
coverImage: /images/posts/lambda-studio/cover.png
excerpt: >-
  A MIDI controller with an ability to sample soundwaves... using a barcode
  reader!
hidden: false
tags:
  - Interaction Design
  - Product Design
  - Microcomputer
contribution:
  - Project Lead
keywords:
  - Interactive Product Design
  - Musical Instrument
startDate: 2023-03-01T11:46:13.000Z
endDate: 2023-06-13T15:00:00.000Z
importance: 2
awards:
  - name: Shinsegae Daejeon
    logo: /images/posts/lambda-studio/awards/shinsegae.png
  - name: Nexperium
    logo: /images/posts/lambda-studio/awards/nexperium.png
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
  import LightBoxImage from "$lib/components/molecules/LightBoxImage.svelte";
  import TintHighlight from "$lib/components/molecules/TintHighlight.svelte";
  import MarkerHighlight from "$lib/components/molecules/MarkerHighlight.svelte";
  import SparklingHighlight from "$lib/components/molecules/SparklingHighlight.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import YoutubeIcon from "$lib/icons/socials/youtube.svelte"; 
  import YouTube from 'svelte-youtube';


  import Carousel from "$lib/components/molecules/Carousel.svelte";

  const options = {
		height: '390',
		width: '640',
		//  see https://developers.google.com/youtube/player_parameters
		playerVars: {
			autoplay: 1
		}
	};

  const boothImages = [
    {src: "/images/posts/lambda-studio/exhibition-1.png", alt: "Visitors interacting with the furniture at the exhibition booth"},
    {src: "/images/posts/lambda-studio/exhibition-2.png", alt: "Close-up view of the exhibition display with furniture pieces"},
  ]

  const barcodeScanner = [
    {src: "/images/posts/lambda-studio/barcode-reader-2.png", alt: "Visitors interacting with the furniture at the exhibition booth"},
    {src: "/images/posts/lambda-studio/barcode-reader-3.png", alt: "Close-up view of the exhibition display with furniture pieces"},
  ]

  const body = [
    {src: "/images/posts/lambda-studio/main-body-1.jpg", alt: "Visitors interacting with the furniture at the exhibition booth"},
    {src: "/images/posts/lambda-studio/main-body-2.jpg", alt: "Close-up view of the exhibition display with furniture pieces"},
  ]
</script>

This work was exhibited at Nexperium Shinsegae, Daejeon from August 2023 - November 2024

<Carousel images={boothImages} label="images" withLightbox={true}></Carousel>

The inspiration comes from this <a href="https://www.youtube.com/watch?v=bOfpQt4KFCc" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 4px;">video<svg width="14" height="14" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; transition: transform 0.2s ease;"><path fill-rule="evenodd" clip-rule="evenodd" vector-effect="non-scaling-stroke" d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z" fill="currentColor" /></svg></a>

After I watched the video, I instantly think about music concept called _sampling_. Sampling is when you record the sound of things around you or other music and manipulate that sound to be used in your own way.

So I experiment with a barcode reader

<LightBoxImage src="/images/posts/lambda-studio/barcode-reader-1.png" alt="inside the barcode reader" caption={true} withLightbox={true}/>

And found out which pin outputs the reflection frequency from the laser.

<Carousel images={barcodeScanner} label="images" withLightbox={true}></Carousel>

So, I tested out sampling the soundwaves from the barcode reading and modulate the frequency according to midi note outputs from raspberry pi pico

<LightBoxImage src="/images/posts/lambda-studio/raspberrypi-pico.jpg" alt="A participant during one of the user testing" caption={true} withLightbox={true}/>

Then, I construct the main body in the shape of piano + guitar and used a mechanical keyboard keys as buttons to send out midi signals for all the sound waves.

<Carousel images={body} label="images" withLightbox={true}></Carousel>

This is the finished product

<LightBoxImage src="/images/posts/lambda-studio/main-body-3.jpg" alt="A participant during one of the user testing" caption={true} withLightbox={true}/>

<div class="youtube-container">
	<YouTube videoId="eOKXdr7k4nk" {options} />
</div>

<style lang=scss>
  a:hover svg {
    transform: rotate(45deg);
  }

.youtube-container {
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background: var(--color--page-background);

  :global(div) {
    width: 100%;
    max-width: 1200px;
  }

  :global(iframe) {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
}

</style>
