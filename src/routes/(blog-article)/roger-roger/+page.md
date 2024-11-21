---
slug: roger-roger
title: Roger, Roger
excerpt: Travel through space with your friends in this cooperative rocket controlling game. Shoot some asteroids, save some astronauts, and try not to fight!
coverImage: /images/posts/roger-roger/cover.png
tags:
  - Coding
  - Javascript
  - Game Design
hidden: false
startDate: 2023-02-20T11:40:39.000Z
---

<script>
  import Image from "$lib/components/atoms/Image.svelte";
  import Button from "$lib/components/atoms/Button.svelte"
  import YoutubeIcon from "$lib/icons/socials/youtube.svelte"; 
  import GithubIcon from "$lib/icons/socials/github.svelte"; 
</script>

<div class="button_container"> 
    <Button href="https://github.com/punnlert/RogerRoger-ID311-Individual-Project">
      <GithubIcon slot="icon" />
      Github
    </Button>
    <Button href="https://youtu.be/GxBwiM4es7w">
      <YoutubeIcon slot="icon" />
      YouTube
    </Button>
</div>

<Image src="/images/posts/roger-roger/start_page.png" alt="Start Page" />

## Introduction

"Roger, Roger" is a cooperative game about a rocket travelling through space. Players have to navigate through asteroids by cooperative with each other. There is a total of 3 controls that can be accessed: trajectory control, acceleration control, and gun. trajectory control lets the player control the y-axis of the rocket, acceleration control lets the player control the x-axis, and gun lets player shoots.

<Image src="/images/posts/roger-roger/gameplay_1.png" alt="Picture showing gameplay while the rocket shoots the asteroid" />
<Image src="/images/posts/roger-roger/gameplay_2.png" alt="Start Page" />

## The main screen

Upon the welcome screen, the player will be greeted with the title of the game, the IP address of the server, and the prompt "press space". The reason behind the IP address being displayed will be explained in [the control screen](#the-control-screen) section.

<Image src="/images/posts/roger-roger/start_page.png" alt="Start Page" />

After all the players have connected and the captain pressed spacebar, the main screen shows the players the rocket they are controlling. It also shows the score and lives they have left.

<Image src="/images/posts/roger-roger/score_and_info.png" alt="Start Page" />

Group of asteroids are streaming through the right side of the screen at different velocity. The players have to use this visual display to based their control on.

<Image src="/images/posts/roger-roger/asteroid_streaming.png" alt="Start Page" />

If the rocket ran out of life, the game ends. The last page will display the final score and whether you got the new highscore.

<Image src="/images/posts/roger-roger/gameplay_2.png" alt="Start Page" />
<Image src="/images/posts/roger-roger/new_highscore.png" alt="Start Page" />

## The control screen

The control screen consisted of two parts: socket connection input and the control.

Socket connection input lets the player input the IP address of the server to gain control of the rocket. If the connection is successful, green circle appears on the right side of the input. This is because I want the server to be able to be hosted on the computer and in that case the IP address would be dynamically assigned.
<Image src="/images/posts/roger-roger/IP_input.jpg" alt="Start Page" />

### Gun controls

lets the player controls the gun. There is a two seconds cooldown period for gun firing.
<Image src="/images/posts/roger-roger/gun_control.PNG" alt="Start Page" />

### Trajectory control

lets the player controls the up-down movement of the spaceship
<Image src="/images/posts/roger-roger/trajectory_control.PNG" alt="Start Page" />

### Acceleration

lets the player controls the left-right of the spaceship
<Image src="/images/posts/roger-roger/acceleration.PNG" alt="Start Page" />

## The game mechanics

Player navigate through the group of asteroids. if they get hit, their lives decreases. they get points for shooting the asteroid depending on the size of it. There are astronauts that you can save. But you can hurt them if you accidentally shoot them. So, be careful around them. But the velocity increase with the score. The gun have a cooldown period of two seconds so players have to be conservative about their shooting. You can collect some lives as you go and save yourselves from dying. If you accidentally shoot the lives, they disappear.

To see a clearer picture, you can check my demo on [YouTube](https://youtu.be/GxBwiM4es7w)

## How to start?

After you clone the repository, you have to go into every folder `/client/display; gun-control; horizontal control; vertical control` and `/server` then run `npm install` for each one of them.

If you use Visual Studio Code and have a 'Go Live' extension, you can launch the control pages by go into `/client` then click go live.

For the display of the main screen, go into `/client/display` directory and run `npm run dev`

To initiate the server, go into`/server` then run `npx nodemon 'index.js'`

If there is an IP address appearing on your 'display' screen, you are ready to play!

## Highlight

After finishing all the code, I tried to draw some pixel art to elevate the gaming experience. So, I drew this astronaut and asteroid.

<div class="drawing_container">
    <Image src="/images/posts/roger-roger/astronaut.png" alt="Start Page" />
    <Image src="/images/posts/roger-roger/asteroid.png" alt="Start Page" />
</div>

I also learned to postpone the socket.io connection and connect to the input IP (in the [control sections](#the-control-screen)) and I am really proud of it.

## Software

The game use node to host the server, P5JS to draw the graphics, and socket.io to allow the communication between devices.

## The architecture

This is the UML of the game code.
<Image src="/images/posts/roger-roger/RogerRogerUML.drawio.png" alt="Start Page" />

## What I would do to make it better

Right now, the obstacles are extended from the class asteroid. That is not very organized in terms of the readability of the code. So, in the future, I would like to restructure it to have a base class of "hittable" and extends every obstacle from there.

I would also like to add collectibles other than "lives" and "astronaut"; like temporary life extension or gun boost that modify the property of the bullet fired.

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
