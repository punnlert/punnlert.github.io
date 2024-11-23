---
slug: baobal
title: Baobal
excerpt: Have you ever think that sometimes productivity application is a little bit toxic? Baobal is a productivity app that places more emphasis on work/life balance.
coverImage: /images/posts/baobal/cover.png
tags:
  - HCI
  - HCI Research
  - UI Design
  - UX Design
  - UX Research
hidden: false
teammates:
  - Zhi Lin Yap
  - Damir Zhumatayev
  - Karen Dolmagambetov
startDate: 2023-08-20T11:38:06.000Z
endDate: 2023-12-19T15:00:00.000Z
importance: 2
---

<script lang="ts">
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
  import TintHighlight from "$lib/components/molecules/TintHighlight.svelte";
  import MarkerHighlight from "$lib/components/molecules/MarkerHighlight.svelte";
  import SparklingHighlight from "$lib/components/molecules/SparklingHighlight.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import YoutubeIcon from "$lib/icons/socials/youtube.svelte"; 
  import BlogIcon from "$lib/icons/blog.svelte";
  import SlideIcon from "$lib/icons/slides.svelte";
  import Carousel from "$lib/components/molecules/Carousel.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';

  const needfindingImages = [
    {src: "/images/posts/baobal/needfinding-sequence.png", alt: "Sequence Model"},
    {src: "/images/posts/baobal/needfinding-physical.png", alt: "Sequence Model"},
    {src: "/images/posts/baobal/needfinding-artifact.png", alt: "Sequence Model"},
  ]
  const ideationScenariosImages = [
    {src: "/images/posts/baobal/ideation-storyboard1.png", alt: "Storyboard for solution 1"},
    {src: "/images/posts/baobal/ideation-storyboard2.png", alt: "Storyboard for solution 2"},
    {src: "/images/posts/baobal/ideation-storyboard3.png", alt: "Storyboard for solution 3"},
  ]

  const paperPrototypeScreens = [
    {src: "/images/posts/baobal/paperprototype-screen1.png", alt: "Paper Prototype Screen 1"},
    {src: "/images/posts/baobal/paperprototype-screen2.png", alt: "Paper Prototype Screen 2"},
    {src: "/images/posts/baobal/paperprototype-screen3.png", alt: "Paper Prototype Screen 3"},
    {src: "/images/posts/baobal/paperprototype-screen4.png", alt: "Paper Prototype Screen 4"},
    {src: "/images/posts/baobal/paperprototype-screen5.png", alt: "Paper Prototype Screen 5"},
  ]

  const paperPrototypeTentativeSols = [
    {src: "/images/posts/baobal/paperprototype-tentativesol1.png", alt: "Paper Prototype Tentetive Solution 1"},
    {src: "/images/posts/baobal/paperprototype-tentativesol2.png", alt: "Paper Prototype Tentetive Solution 2"},
    {src: "/images/posts/baobal/paperprototype-tentativesol3.png", alt: "Paper Prototype Tentetive Solution 3"},
    {src: "/images/posts/baobal/paperprototype-tentativesol4.png", alt: "Paper Prototype Tentetive Solution 4"},
    {src: "/images/posts/baobal/paperprototype-tentativesol5.png", alt: "Paper Prototype Tentetive Solution 5"},
  ]

  const digitalPrototypeTasks = [
    {src: "/images/posts/baobal/digitalprototype-task1.png", alt: "Digital Prototype Task 1"},
    {src: "/images/posts/baobal/digitalprototype-task2.png", alt: "Digital Prototype Task 2"},
    {src: "/images/posts/baobal/digitalprototype-task3.png", alt: "Digital Prototype Task 3"},
    {src: "/images/posts/baobal/digitalprototype-task4.png", alt: "Digital Prototype Task 4"},
  ]

  const digitalPrototypeScreens = [
    {src: "/images/posts/baobal/digitalprototype-screen1.png", alt: "Digital Prototype Screen 1"},
    {src: "/images/posts/baobal/digitalprototype-screen2.png", alt: "Digital Prototype Screen 2"},
    {src: "/images/posts/baobal/digitalprototype-screen3.png", alt: "Digital Prototype Screen 3"},
    {src: "/images/posts/baobal/digitalprototype-screen4.png", alt: "Digital Prototype Screen 4"},
  ]


  const digitalPrototypeTentativeSols = [
    {src: "/images/posts/baobal/digitalprototype-tentativesol1.png", alt: "Digital Prototype Tentative Solution 1"},
    {src: "/images/posts/baobal/digitalprototype-tentativesol2.png", alt: "Digital Prototype Tentative Solution 2"},
    {src: "/images/posts/baobal/digitalprototype-tentativesol3.png", alt: "Digital Prototype Tentative Solution 3"},
    {src: "/images/posts/baobal/digitalprototype-tentativesol4.png", alt: "Digital Prototype Tentative Solution 4"},
  ]
</script>

<div class="button_container"> 
  <SparklingHighlight>
      <Button href="https://drive.google.com/file/d/1x7tsklOYHSgqUX5qG54zCxzYMxKm4OY-/view?usp=sharing">
        <BlogIcon slot="icon" />
        Documentation
      </Button>
  </SparklingHighlight>
</div>

## Context

Have you ever feel like your to-do-note-taking-life-planning-work-grinding app is making you overwork? As an undergrad student, I often find myself scared of lacking behind others; whether it be in class, school activities, or career path. And I often hear my friend complain about the same thing; _what if they work too little?_

But rarely do someone ask themselves _"Do I work too much?"_

With the modern mindset that over-emphasize the importance of **productivity,** many have find themselves becoming a "workaholic"

<Callout type="info">
  A workaholic <br> is a person who works compulsively. A workaholic experiences an inability to limit the amount of time they spend on work despite negative consequences such as damage to their relationships or health.
</Callout>

And one of the thing we noticed is that, while there are an abundance of productivity app that can help you work **more**, none of them can help you work **less**. And that is what we are trying to do in this project.

## Needfinding

To identify the needs that out product has to satisfy, we conducted interviews with 9 potential target users. Then, we identify any interesting moments or remarks throughout the interview and develop our contextual models: sequence model, physical model, and artifact model.

<Carousel images={needfindingImages} label="images" withLightbox={true}></Carousel>

Then we proceed to identify the needs from the insights we found in the model.

### Needs

- They need for a sense of work-life integration, rather than strict separation
- They need to recognize that breaks are not bad
- They need a positive and motivating competitive environment
- They need consistent reassurance that they have worked hard
- They need to maintain focus and concentration
- They need a reliable support system from peers
- They need to manage anxiety stemming from concerns about productivity
- They need to actively track and manage work commitments
- They need to set achievable, realistic goals
- They need effective resting techniques, such as the Pomodoro method
- They require tools to measure progress and accomplishments

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/1yDkNvHZ7Hq9DcPJA49tkmu7zSecXPwtx/view?usp=sharing">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

## Ideation

### Point of View

We developed a Point of View statement for our target user.

<p>
Young workaholics juggling between internships and studies
<MarkerHighlight color="secondary">
need to
</MarkerHighlight>
moderate their pursuit of self-improvement through attainable goals and progress monitoring
<MarkerHighlight color="secondary">
because
</MarkerHighlight>
their work perception can lead to excessive, unhealthy decisions.
</p>

### Persona

From the Point of View statement, we made a user persona.
<Image src="/images/posts/baobal/ideation-persona.png" alt="A persona for our application" withLightbox={true} />

### How Might We's

To better empathise with the user, it's important to ask ourselves "How might we ..." (or HMWs) questions that forces us to think in the target users' shoes.
<Image src="/images/posts/baobal/ideation-HMWs.png" alt="HMWs brainstorming in figjam page" caption={true} withLightbox={true} />

Then we selected 3 HMWs that we think best captures the target user struggles with these criteria:

- encourage creative problem-solving
- focus on user’s needs
- does not suggest solutions

<Image src="/images/posts/baobal/ideation-bestHMWs.png" alt="3 best HMWs" caption={true} withLightbox={true}/>

We tried to come up with as many solution as we can for each HMWs and picked 3 best solutions and draw a user scensrio storyboard for each one of them.

### 3 Best Solutions

- We randomise and deconstruct tasks into their schedule
- Join ‘one challenge a day’ with friends and get rewarded with stamps and points
- Track the amount of time dedicated to different tasks to visualise the work-life balance

### Storyboards

<Carousel images={ideationScenariosImages} label="images" withLightbox={true}></Carousel>

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/1zFMgVtaQ9DSuMJ0A7S_ZZg-Y1r8RIqJY/view?usp=sharing">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

## Prototyping

### Low-Fidelity (Paper)

We made a quick paper prototype to verify our early iteration design.

We chose paper prototype because it is:

- **faster to build**: sketching is faster than programming
- <b>easier to change</b>: lower investment and easy to make changes between user tests, or even during a user test.
  <MarkerHighlight color="secondary">
  This also makes people more ready to criticize because it is less burdensome to make changes.
  </MarkerHighlight>
- **focus on the big picture**: designers don't waste time on details and customer can make more creative suggestion on the interaction
- **non-programmers can help**: designers who don't have experience in programming can do a hands-on help

The prototype is made in a way that can support the verification of 4 tasks that appears in the end-to-end scenarios captured in the [storyboards](#storyboards)

#### Tasks

1. Create a challenge and invite your friend (Damir) to join it.
2. Add a task to your to-do list
3. Schedule a time in your calendar to complete your task
4. Check your work-life balance

#### Screens for Paper Prototype

<Carousel images={paperPrototypeScreens} label="images" withLightbox={true}></Carousel>

We asked 4 participants to participate in this prototype testing. First, we gave them a short briefing and then asked them to complete the 4 tasks mentioned before.

<Image src="/images/posts/baobal/paperprototype-participant1.png" alt="A participant during one of the user testing" caption={true} withLightbox={true}/>

<a name="criteria"></a>

The observations gathered from the user testing were then categorized according to their severity: High, Medium, Low. The rating criteria is

<ul>
  <li> <TintHighlight color="highlight-red">High</TintHighlight>: Occurs when significant confusion arises for participants during the completion of major tasks.</li>
  <li><TintHighlight color="highlight-yellow">Medium</TintHighlight>: Encompasses minor inconveniences or slight confusion that participants may encounter when performing tasks.</li>
  <li><TintHighlight color="primary">Low</TintHighlight>: Refers to inconveniences that do not obstruct the completion of necessary tasks.</li>
</ul>

Then, we brainstormed solutions to patch them.

<Image src="/images/posts/baobal/paperprototype-observations1.png" alt="A participant during one of the user testing" withLightbox={true}/>

<Carousel images={paperPrototypeTentativeSols} label="images" withLightbox={true}></Carousel>

This stage is one of the most interesting part of UX/HCI research for me. I never thought that presenting a low-fidelity prototype for user testing is a good idea. As a tidy person myself, I prefer showing finished and polished works and ask for others opinion. But performing paper prototype user testing change my perspective on that.

<p>
When I show unfinished rough-on-the-edges kind of works, people tend to feel that it is the early stage of development. And because of that they are more likely to suggest changes that are more <b>radical and creative</b> because for that kind of work <MarkerHighlight color="secondary">change is easy.</MarkerHighlight> Whereas if I show a very finished product and every detail is polished, they think that "well, at this point, the change wouldn't worth much".
</p>

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/1J25rmjyzjp4kM8PcLfNM78ENu75vUTrI/view?usp=sharing">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

### High-Fidelity (Digital)

With the details of core user experience (interaction, UI element placement) established in paper prototype, we move on to the finer details like interactive feedback, efficiency issues, and layout.

We choose to implement our interface in digital prototype to identify those usability issue.

#### Screens for Digital Prototype

<Carousel images={digitalPrototypeScreens} label="images" withLightbox={true}></Carousel>

Even thought this version is a more _"polished"_ version than the paper prototype, some corners are cut for efficiency.

<ul>
<li>We intentionally <MarkerHighlight color="secondary">refrained from including hard-coded data for tasks and emojis</MarkerHighlight> in our design. Our rationale was to <MarkerHighlight color="secondary">prevent overwhelming users with unrelated content.</MarkerHighlight> Instead, we aimed to keep the focus squarely on the core concept and functionality of our design.</li>

<li>We opted to streamline the user experience by <MarkerHighlight color="secondary">eliminating the 'Joining Challenges with Friends' feature.</MarkerHighlight> Instead, users can now select a challenge and join independently. This decision simplifies the user journey, eliminating the need for users to search for or invite friends, reducing cognitive load. It offers an intuitive and straightforward experience.</li>
</ul>

Since we were trying to identify different issues this time, the task list and task structure are different. The instruction for each task is provided because discoverability and learnability are not our concern for this test.

#### Tasks

<Carousel images={digitalPrototypeTasks} label="images" withLightbox={true}></Carousel>

And, the same as paper prototype, we categorized the observation into 3 severity using the same [criteria](#criteria).

<Carousel images={digitalPrototypeTentativeSols} label="images" withLightbox={true}></Carousel>

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/1yKLYoUp2EBXEhNKtzkcxC0mCmd66L3iu/view?usp=sharing">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

## Heuristic Evaluation

After refining the interface according to the result of digital prototype testing, we submitted our interface for heuristic evaluation

## Iteration and User Testing

## Final Product

<div class="show-prototype">
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://embed.figma.com/proto/x2eQnkccqsbfs496fZGNDv/Digital-Prototype-(Old)?page-id=777%3A3246&node-id=777-3254&node-type=canvas&viewport=284%2C216%2C0.07&scaling=scale-down&content-scaling=fixed&starting-point-node-id=777%3A3254&embed-host=share&footer=false" allowfullscreen ></iframe>
</div>

<style lang="scss">
  .drawing_container {
    width: 100%;
    display: grid;
    align-items: end;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .phone_and_description {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    @media (max-width: 1000px) {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
    }
  }

  .show-form iframe {
    width: 90%;
    aspect-ratio: 1/1.35;
  }

  .show-form {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .show-prototype iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }

  .show-prototype {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }
  
  .button_container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      gap: 10px;
      width: 100%;
  }

</style>
