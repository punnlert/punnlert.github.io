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
importance: 3
---

<script lang="ts">
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import LightBoxImage from "$lib/components/molecules/LightBoxImage.svelte";
  import TintHighlight from "$lib/components/molecules/TintHighlight.svelte";
  import MarkerHighlight from "$lib/components/molecules/MarkerHighlight.svelte";
  import SparklingHighlight from "$lib/components/molecules/SparklingHighlight.svelte";
  import Button from "$lib/components/atoms/Button.svelte";

  import YoutubeIcon from "$lib/icons/socials/youtube.svelte"; 
  import BlogIcon from "$lib/icons/blog.svelte";
  import SlideIcon from "$lib/icons/slides.svelte";
  import DocumentIcon from "$lib/icons/document.svelte";

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

  const usertestGQM = [
    {src: "/images/posts/baobal/usertest-gqm1.png", alt: "User Test GQM 1"},
    {src: "/images/posts/baobal/usertest-gqm2.png", alt: "User Test GQM 2"},
    {src: "/images/posts/baobal/usertest-gqm3.png", alt: "User Test GQM 3"},
  ]

  const usertestTasks = [
    {src: "/images/posts/baobal/usertest-task1.png", alt: "User Test Task 1"},
    {src: "/images/posts/baobal/usertest-task2.png", alt: "User Test Task 2"},
    {src: "/images/posts/baobal/usertest-task3.png", alt: "User Test Task 3"},
    {src: "/images/posts/baobal/usertest-task4.png", alt: "User Test Task 4"},
  ]
</script>

<div class="button_container"> 
  <SparklingHighlight>
      <Button href="https://drive.google.com/file/d/1x7tsklOYHSgqUX5qG54zCxzYMxKm4OY-/view?usp=sharing" target="_blank">
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

To identify the needs that out product has to satisfy, we conducted interviews with 9 potential target users; the workaholics. Then, we identify any interesting moments or remarks throughout the interview and develop our contextual models: sequence model, physical model, and artifact model.

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

To better get the context of how our target user feels, we developed what's called a "Point of View" of workaholics.

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

From the Point of View statement, we made a user persona for everybody in the team to be on the same page about who to design for.
<LightBoxImage src="/images/posts/baobal/ideation-persona.png" alt="A persona for our application" />

### How Might We's

To better empathise with the user, it's important to ask ourselves "How might we ..." (or HMWs) questions that forces us to think in the target users' shoes.
<LightBoxImage src="/images/posts/baobal/ideation-HMWs.png" alt="HMWs brainstorming in figjam page" caption={true} />

Then we selected 3 HMWs that we think best captures the target user struggles with these criteria:

- encourage creative problem-solving
- focus on user’s needs
- does not suggest solutions

<LightBoxImage src="/images/posts/baobal/ideation-bestHMWs.png" alt="3 best HMWs" caption={true}/>

We tried to come up with as many solution as we can for each HMWs and picked 3 best solutions and draw a user scenario storyboard for each one of them.

We got stuck staring at the HMWs board for some time. Ideas come and go. Some good, some bad; but none really hits. You know -- when you brainstormed and all the ideas are... okay but none _slaps_ yet. Until someone said
"If workaholics often forgot how imbalanced their life is, how about we _really_ show them the imbalance."

<LightBoxImage src="/images/posts/baobal/ideation-solution1.png" alt="Early conception of our solutions" caption={true}/>

So, the idea of mapping abstract concept, like time, to a more concrete concept, like weight, kind of become the central theme of our application. The visualization makes the imbalance of their life more digestible, relatable, and ... somewhat more dramatic.

### 3 Best Solutions

1. We randomise and deconstruct tasks into their schedule
2. Join ‘one challenge a day’ with friends and get rewarded with stamps and points
3. Track the amount of time dedicated to different tasks to visualise the work-life balance

### Storyboards

<Carousel images={ideationScenariosImages} label="images" withLightbox={true}></Carousel>

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/1zFMgVtaQ9DSuMJ0A7S_ZZg-Y1r8RIqJY/view?usp=sharing">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

## Prototyping

So with the main solutions agreed upon, we work on translating those solutions into low-fi UI screens and wireframes.

### Low-Fidelity (Paper)

After we finish the early design, we made a quick paper prototype to verify it before moving on to higher fidelity prototypes.

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

1. Create a challenge and invite your friend to join it.
2. Add a task to your to-do list
3. Schedule a time in your calendar to complete your task
4. Check your work-life balance

#### Screens for Paper Prototype

<Carousel images={paperPrototypeScreens} label="images" withLightbox={true}></Carousel>

We asked 4 participants to participate in this prototype testing. First, we gave them a short briefing and then asked them to complete the 4 tasks mentioned before.

<LightBoxImage src="/images/posts/baobal/paperprototype-participant1.png" alt="A participant during one of the user testing" caption={true} withLightbox={true}/>

<a name="criteria"></a>

The observations gathered from the user testing were then categorized according to their severity: High, Medium, Low. The rating criteria is

<ul>
  <li> <TintHighlight color="highlight-red">High</TintHighlight>: Occurs when significant confusion arises for participants during the completion of major tasks.</li>
  <li><TintHighlight color="highlight-yellow">Medium</TintHighlight>: Encompasses minor inconveniences or slight confusion that participants may encounter when performing tasks.</li>
  <li><TintHighlight color="primary">Low</TintHighlight>: Refers to inconveniences that do not obstruct the completion of necessary tasks.</li>
</ul>

### Observations

Then, we brainstormed solutions to patch them.

<LightBoxImage src="/images/posts/baobal/paperprototype-observations1.png" alt="A participant during one of the user testing" withLightbox={true}/>

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

With the details of core user experience (navigation, metaphor, UI element placement) established in paper prototype, we move on to the finer details like interactive feedback, efficiency issues, and layout.

We choose to implement our interface in digital prototype to identify those usability issue.

#### Tasks

- Join challenge
- Create task
- Schedule task
- Check balance

#### Screens for Digital Prototype

<Carousel images={digitalPrototypeScreens} label="images" withLightbox={true}></Carousel>

Even thought this version is a more _"polished"_ version than the paper prototype, some corners are cut for efficiency.

<p>
We intentionally <MarkerHighlight color="secondary">refrained from including detailed hard-coded data for tasks</MarkerHighlight> in our design. Our rationale was to <MarkerHighlight color="secondary">prevent overwhelming users with unrelated content.</MarkerHighlight> Instead, we aimed to keep the focus squarely on the core concept and functionality of our design.
</p>

### Observations

And, the same as paper prototype, we categorized the observation into 3 severity using the same [criteria](#criteria) and then tried to come up with solutions for each of them.

<Carousel images={digitalPrototypeTentativeSols} label="images" withLightbox={true}></Carousel>

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/1yKLYoUp2EBXEhNKtzkcxC0mCmd66L3iu/view?usp=sharing">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

<!-- ## Heuristic Evaluation

After refining the interface according to the result of digital prototype testing, we submitted our interface, along with request form, for heuristic evaluation from fellow HCI enthusiasts.

### Refined Digital Prototype

<div class="show-prototype">
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://embed.figma.com/proto/x2eQnkccqsbfs496fZGNDv/Digital-Prototype-(Old)?page-id=777%3A3246&node-id=777-3254&node-type=canvas&viewport=284%2C216%2C0.07&scaling=scale-down&content-scaling=fixed&starting-point-node-id=777%3A3254&embed-host=share&footer=false" allowfullscreen ></iframe>
</div>

<div class="button_container">
  <Button href="https://drive.google.com/file/d/1D8i5xlUP35XcUV7LNMeQ-ZRDzRU53DbE/view?usp=sharing">
    <DocumentIcon slot="icon" />
    HE Request Form
  </Button>
</div>

And received feedbacks about the usability issues of the interface along with suggested fixes. The interface evaluation is based on these usability dimension

<Image src="/images/posts/baobal/heuristicseval-usability1.png" alt="A participant during one of the user testing" withLightbox={true}/> -->

## User Testing

Now, after all the revision and polishing, we reached the late stage of prototyping. Unlike [paper prototype](#low-fidelity-paper) and [digital prototype](#high-fidelity-digital) where only tasks for chosen scenarios work, most of the functionalites of this prototype are clearly defined and most of the core interaction work.

So, this test place more focus on improving the interface rather than testing the interaction. We put together a protocol document for the test that serves as a test documentation as well as a concrete plan for the test execution.

### Test Protocol

We defined the goal we want to achieve, what questions help verify those goals, and what metrics we should use to measure the questions.
<Carousel images={usertestGQM} label="images" withLightbox={true}></Carousel>

We use our previously mentioned [user persona](#persona) as our user profile.

The methods we will use for collecting the test result are:

- Think aloud
- Interviews
- Survey questions
  - Likert scale
  - NASA task load index

The 4 main tasks to be perform along with conditions are:
<Carousel images={usertestTasks} label="images" withLightbox={true}></Carousel>

You can try performing the tasks yourself with this prototype!

<div class="show-prototype">
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://embed.figma.com/proto/x2eQnkccqsbfs496fZGNDv/Digital-Prototype-(Old)?page-id=777%3A3246&node-id=777-3254&node-type=canvas&viewport=284%2C216%2C0.07&scaling=scale-down&content-scaling=fixed&starting-point-node-id=777%3A3254&embed-host=share&footer=false" allowfullscreen ></iframe>
</div>

<LightBoxImage src="/images/posts/baobal/usertest-usertest.png" alt="A participant during one of the user testing" caption={true} noBg={true} withLightbox={true}/>

We choose test users based on the defined characteristics of representative users:

- Undergraduate students
- Overwhelmed with work. Working in lab, internship, etc, while also dealing with academic responsibility
- Strive to regain work - life balance

The whole protocol along with the script can be found [here](https://docs.google.com/document/d/10_L4-MPPJk5LPyO9YnG7A-yfgrivi9LEI9hbp8_eSzw/edit?usp=sharing)

### Result

Similarly to previous two prototypes, we concluded our observations and reflected on the study process.
I feel like the observations are too detailed to be mentioned here so if you want to check them out you can do so by looking at the [slides](#user-test-slides)

What I want to share are the takeaways from this user testing session.

Performing a real structured user testing, I can see insights that I wouldn't know had I never done it. It's one thing to learn about it in the classroom but to really prepare for it and _think_ about the process in a real project feels a lot different for me.
I learned that:

1. Surprisingly, it is very hard not to impact or influence the user decision while testing.
2. They might feel inclined to give positive feedback when they are aware of being recorded and observed.
3. Their needs can be more diverse than I expected (no matter how big i expected, it always exceeded that!)

<a name="user-test-slides"></a>

<div class="button_container"> 
  <Button href="https://drive.google.com/file/d/14gh7auPP54QxN-btqg5p7shjaDG7Mnu8/view?usp=drive_link">
    <SlideIcon slot="icon" />
    Slides
  </Button>
</div>

## Final Product

To recap before diving into the solutions, I want to mention the [How Might We](#how-might-wes) questions once again and our solution approach them.

<LightBoxImage src="/images/posts/baobal/final-hmw.png" alt="A participant during one of the user testing" withLightbox={true}/>

And we answered all those How Might We's in the interface. Let me explain those answers as the How Did We's

### How did we make their leisure as important as their work?

<img src="/images/posts/baobal/finalproduct-hdw1.gif" alt="How Did We statement 1"/>

The proportion of their completed work-related tasks to life-related tasks is displayed in see-saw scale to emphasize the notion of imbalance between the two kinds of task.

### How did we help them turn their goals into something more attainable?

<img src="/images/posts/baobal/finalproduct-hdw2.gif" alt="How Did We statement 2"/>

We let them categorize the task they add to the to-do list as a work-task or a life-task and color coded the two. A filter can be applied to see only one of the two kinds of task.

<img src="/images/posts/baobal/finalproduct-hdw3.gif" alt="How Did We statement 3"/>

The user can schedule time specific tasks into a calendar interface. From the [needs](#needs) that we listed, we try to address the user's need to actively track and manage commitments by this list interface.

### How did we make other areas of self-improvement more attractive?

<img src="/images/posts/baobal/finalproduct-hdw4.gif" alt="How Did We statement 4"/>

We included a section dedicated to challenges that user can join and complete. The user can participate in completing one challenge a day and log their journey of challenges. There is a section dedicated to recommending challenges the user may like and another section dedicated to recommending challenges outside the user's comfort zone.

## What I learned

Conducting this project helped me reflected on many valuable insights that I am grateful for. I got the opportunity to try to conduct the procedural way of user experience / human-computer interaction research. I learned how to identify needs and develop the solutions to answer them. I verifed those solutions by performing user tests on prototypes of vary fidelity. I learned how to be systematic about user tests and observations.

Ultimately, I got yet another lesson on teamwork.

<p>
Normally, I would be in a team full of designers with strong passion to deliver the best user experience who likes to let our imagination run wild with little notion of practicality. In this team, I was surrounded by developers and computer science major students. And they showed me different perspective that I would never see in other teams. Of course, it's fun to dream big but sometimes being nudge by the people who build it can give you a better design constrains in real world. And in return I think I also gave them the courage to dream. <MarkerHighlight color="secondary">That is what "designer" means to me. Not the person with the ability to create, but the one who brings out the creativity of everybody in the team.</MarkerHighlight>
</p>

## What I wish were more explored

Because prototype offers so little to explore, I wish we can get to early implementation stage and conduct another user study with semi-implemented product. I want to see how a feature is tested before launch using evaluative UX method in larger scale (like tree test, AB test)

I wish we can get a glimpse of how all of this documentation get passed on to the implementation stage. I want to see how the developers deal with these information and what role do designers play in the next step. I want to see how my concept can be brought alive as a real world product.

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
