---
slug: oink
title: Oink
excerpt: Reshaping digital financial experience for kids and preteens by introducing tangible interface.
coverImage: /images/posts/oink/cover.png
tags:
  - UI Design
  - UX Design
hidden: false
teammates:
  - Lucy Bell
  - Hyeonseok Lee
  - Hoyeon Lee
  - Sunwook Kim
startDate: 2023-08-20T11:38:06.000Z
endDate: 2023-12-19T15:00:00.000Z
importance: 1
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
</script>

<div class="button_container"> 
  <SparklingHighlight>
      <Button href="https://youtu.be/I8RZJOs1q6Y">
        <YoutubeIcon slot="icon" />
        Explanation Video
      </Button>
  </SparklingHighlight>
</div>

## Context

_This is a collaboration with [NH Bank Korea](https://banking.nonghyup.com/nhbank.html) under the theme **"Life Finance Platform Service Design"**. The basic idea is that how can we design financial experience that makes life better._

Oink is an attempt to reshape the financial experience for kids and preteens. The problem with the current financial experience is that it is so... _in the air_, in a sense that you cannot really touch it; the money you have is just _numbers_ on the screen.

It may make sense for adults that have to manage their complex finance (I am also trying to learn how to be financially responsible) but it does not make sense for kids who just started to learn about money. So, what we're trying to do was bring back some of charming characteristics of physical money to digital banking tools for children.

## Overview and Background

### Primary Research

After our initial research, we came to realize this problem from the two observations

1. **Financial experimenting during childhood is important**
2. **The financial literacy in Korea is low** (and I believe it can also be said for the most part of the world)

<LightBoxImage  src="/images/posts/oink/research.png" alt="Claims supporting our two observations" withLightbox={true}/>

### Surveys & Interview

After we had our base hypothesis, we designed a series of survey and interview questions to better define the problem in details.

<LightBoxImage src="/images/posts/oink/survey-design.png" alt="Claims supporting our two observations" withLightbox={true}/>

The result is them compiled and analyze into more digestible presentation.

<LightBoxImage src="/images/posts/oink/survey.png" alt="Claims supporting our two observations" withLightbox={true}/>

We found that around 50% of children switched from using cash to debit card at around 12-14 years old. The main reason they make the switch is because of **_convenience_**.

The interesting part is what changed after they started using digital money. There are some positive changes like the children gets more freedom to spend but that eventually leads to negative effects like overconsumptions and lack of planning.

## Problem

The problem we see here is that the change from physical money to digital one may be too sudden. From physical assets that you can **see**, reduced to just a numerical representation on a screen.

In order to better encourage good financial habit since teenage year, maybe a better transition to help children acclimated themselves to the digital financial world.

<LightBoxImage src="/images/posts/oink/problem-1.png" alt="Claims supporting our two observations" withLightbox={true}/>

Another problem is that financial education needs to start early but it's not always easy to have an effective financial conversation between kids and parents.

<LightBoxImage src="/images/posts/oink/problem-2.png" alt="Claims supporting our two observations" withLightbox={true}/>

And that's the overarching theme of out problem; "Transition Period of Cash to Digital Money"

## Target User

So, we decided our target user to be 7-13 years old kids and their parents. If the product is expected to ship in 4-5 years, they would be

- **Kids**  
  [_Alpha Generation_](https://en.wikipedia.org/wiki/Generation_Alpha)  
  The biggest feature of Alpha Generation is that they are the generation directly influenced by the popularization of smartphones and the ubiquitous society. They will grow up and become a member of the financial world.

- **Parents**  
  [_MZ Generation_](https://en.namu.wiki/w/MZ%EC%84%B8%EB%8C%80)  
  Generation MZ (a South Korean specific term) refers to the Millennials who were born in the early to mid-1990s, and Generation Z who were born in the mid to late 1990s. It is a generation with characteristics of diversity, leisure-oriented, value-based consumption (environmental and ethical values), self-centered, digital native, and fun-seeking.

<LightBoxImage src="/images/posts/oink/target.png" alt="Claims supporting our two observations" withLightbox={true}/>

## Goals

We set some goals and objective for each goal so we have a common understanding among members and other stakeholders.

1. **create a seamless transition from physical to digital money**  
   to achieve this we need to
   - Help them understand the value of digital money
   - Visualize digital money
   - Simulate the physical manipulation of digital money
2. **Form good money management habits**  
   to encourage good habits we need to
   - Make savings appealing
   - Foster thoughtful spending and saving
3. **Encourage conversations about money between kids and parents**
   - Provide talking topic and common place to talk

## Ideation

Ok. Now we have our goals and objectives, let's think about how to achieve them.

To better formulate and shape the solution, we tried to draw inspiration from the problems.

With the results from surveys, interviews, and literature reviews we decided to separately analyze the problem in 3 areas of personal finance for kids:

1. Earning
2. Spending
3. Savings

<LightBoxImage src="/images/posts/oink/ideation-1.png" alt="Claims supporting our two observations" withLightbox={true}/>

Then we create an affinity diagram of the painpoints.

<LightBoxImage src="/images/posts/oink/ideation-2.png" alt="Claims supporting our two observations" withLightbox={true}/>

The recurring theme found in the post-its are that digital money sometimes are too _abstract_. So, after some weeks of researching, we came upon a promising solution; **"Tangible User Interface"**.

<LightBoxImage src="/images/posts/oink/ideation-3.png" alt="Claims supporting our two observations" withLightbox={true}/>

The initial idea is that we have a physical piggy bank that kids can pretend to drag the money on their mobile screen and drop them into the piggy bank as if they are putting real bank notes into the piggy bank. (Like some of those weird apps from the early era of smartphones that let you pretend to be drinking beer out of your phone.)

<div class="drawing_container">
  <LightBoxImage src="/images/posts/oink/ideation-4.png" alt="Claims supporting our two observations" withLightbox={true}/>
  <LightBoxImage src="/images/posts/oink/beer-app.jpeg" alt="Claims supporting our two observations" withLightbox={true}/>
</div>

<LightBoxImage src="/images/posts/oink/ideation-5.png" alt="Claims supporting our two observations" withLightbox={true}/>

Which is cute but it didn't fully answers all of our [goals](#goals). But it got the ball rolling! We ended up liking the potential user experience of this idea so much that we started to build the solutions around it.

What if dragging around bank notes icons isn't just contained in the saving interface, but it is the main idea of this financial interface?

## Design

With that in mind, we divided the team into 2 parts: one developing a rough Information Architecture (IA) of the system while the other gather references and moodboards.

<LightBoxImage src="/images/posts/oink/design-1.png" alt="Information Architecture of the system" caption={true} withLightbox={true}/>

<LightBoxImage src="/images/posts/oink/design-2.png" alt="references and moodboard" caption={true} withLightbox={true}/>

Then we started to design and iterate through the interface. This is how one iteration looks like.

<LightBoxImage src="/images/posts/oink/design-3.png" alt="early iteration of the design" caption={true} withLightbox={true}/>

After each iteration, a team meeting is organized and we go through the user flow together. I had so much fun in this process

because we get to disect the prototype with the teammates, discuss the rationale behind each design or interactions, and defend your own design.

<LightBoxImage src="/images/posts/oink/design-4.png" alt="A white board after our brainstorming session" withLightbox={true}/>

## Final Product

<p>
And after a month of iterations discussion, out of our blood, sweat, and tears came
<SparklingHighlight>
Oink!
</SparklingHighlight>
 :D
</p>

It might be better for your experience if you see this [video](https://youtu.be/I8RZJOs1q6Y) before we dive into the product.

### Home Page - Kid's UI

<LightBoxImage src="/images/posts/oink/product-phone-home.png" alt="Claims supporting our two observations" withLightbox={true}/>

Filled with draggable bills and coins representing the amount the child currently has in their bank account

Drop shadows on the bills and coins make use of the existing mental model that the objects are draggable

<div class="phone_and_description">
<img src="/images/posts/oink/product-phone-bottomNav.gif" alt="Claims supporting our two observations"/>

**Bottom Navigation**  
Swipe left or right to navigate between components and click to view details

</div>

### Wallet - Kid's UI

**Interaction with Bills and Coins**  
Bills and coins in the wallet can be interacted with in several ways

<img src="/images/posts/oink/product-phone-wallet1.gif" alt="Claims supporting our two observations"/>

<div class="phone_and_description">

  <LightBoxImage src="/images/posts/oink/product-phone-bill1.png" alt="Claims supporting our two observations" noBg={true} withLightbox={true}/>

  <div>

**Combining Bills or Coins**  
 Long press and drag bills or coins together to combine into a larger bill or coin

  </div>

</div>

<div class="phone_and_description">

  <LightBoxImage src="/images/posts/oink/product-phone-bill2.png" alt="Claims supporting our two observations" noBg={true} withLightbox={true}/>

  <div>

**Dividing Bills or Coins**  
 Long press a bill or coin to break it down into smaller bills

  </div>

</div>

### Spending - Kid's UI

<img src="/images/posts/oink/product-phone-spending1.gif" alt="Claims supporting our two observations"/>

<div class="phone_and_description">

<LightBoxImage src="/images/posts/oink/product-phone-spending2.png" alt="Claims supporting our two observations" noBg={true} withLightbox={true}/>
<div>

**Purchase History**  
Can easily find any recent transactions and has the ability to filter by week, month, and year

Designed after a receipt slip to make it more familiar to child’s understanding of the world

</div>

</div>

### Card - Kid's UI

The kid can drag the money they have in their homepage into their card to top-up before any usage. this design choice is to simulate the need to look into the physical wallet before buying anything.

<img src="/images/posts/oink/product-phone-card2.gif" alt="Claims supporting our two observations"/>

<div class="phone_and_description">

<LightBoxImage src="/images/posts/oink/product-phone-card1.png" alt="Claims supporting our two observations" noBg={true} withLightbox={true}/>
<div>

**Balance Information**  
Displayed on the card is the amount in the child’s account and how much of their daily limit is remaining to be used

Use of visually interesting, but simple UX to increase the usability for kids

</div>

</div>

<div class="phone_and_description">

<LightBoxImage src="/images/posts/oink/product-phone-card3.png" alt="Claims supporting our two observations" withLightbox={true}/>
<div>

**Card Drawer**  
Drawer pops up from the card to show the balance inside in the visual form of cash

The drawer is hovering on the wallet to enable the user drag the money outside the card

</div>

</div>

### Piggy Bank - Kid's UI

<div class="phone_and_description">

<LightBoxImage src="/images/posts/oink/product-phone-pig1.png" alt="Claims supporting our two observations" withLightbox={true}/>
<div>

Tag phone on the physical piggy bank making a pig component to appear on the bottom navigation of their phone

On the phone the child can begin planning their goals and saving

</div>

</div>
<Callout type="info">

_"For young users, [digital] interface use is often developmentally inappropriate and can be a stumbling block to interactive learning. Exploring and manipulating physical objects is a key component of young children's world and of their learning."_  
_- Revelle et al., 2005_

</Callout>

### Goals - Kid's UI

<LightBoxImage src="/images/posts/oink/product-phone-goal1.png" alt="Claims supporting our two observations" withLightbox={true}/>

To encourage savings and give them a sense of purpose, the child is able to choose any item they are hoping to purchase and set the amount needed and when they hope to achieve it

<Callout type="info">

_"Individuals who vividly put down their goal are 1.2-1.4 times more likely to successfully accomplish their goals"_  
_- Murphy, 2018_

</Callout>

<LightBoxImage src="/images/posts/oink/product-phone-goal2.png" alt="Claims supporting our two observations" withLightbox={true}/>

Check on progress towards set long term goal with a visual graph

Money is categorized into actual money saved (represented in pink) and the money earned from the simulated compound interest (represented in orange)

### Saving - Kid's UI

<img src="/images/posts/oink/product-phone-saving1.gif" alt="Claims supporting our two observations"/>

When organizing money into spending, short term savings, and savings towards their goal the child can save in their physical piggy bank

Saving their goal money in the physical piggy bank gives a sense of accomplishment, but also distance, knowing they cannot spend that money

### Compound Interest - Kid's UI

<img src="/images/posts/oink/product-phone-compoundInterest1.gif" alt="Claims supporting our two observations"/>

Compound interest is a simple concept that children can easily grasp as their first introduction into the more complex financial world

Compound interest is simulated in conjunction with their parents through their long term savings goal. The interest the child get is going to be from the parents (this is how it is "simulated") so they have more flexibility in managing the interest rates.

The fun animation brings excitement and attention to the new concept making it easier to learn

### Dashboard - Parents' UI

<LightBoxImage src="/images/posts/oink/product-phone-dashboard1.png" alt="Claims supporting our two observations" withLightbox={true}/>

Parents are able to easily track their child’s spending by viewing what’s currently in their account and their recent transactions

These transactions are also broken up by categories and visually shown in a circle graph to determine where their child is spending most of their money

### Transfer - Parents' UI

<img src="/images/posts/oink/product-phone-transfer1.gif" alt="Claims supporting our two observations"/>

Within the child’s analysis screen, parents are also able to quickly send money to their child

After confirming the amount, the parents is prompted to bring their phone close to their child’s, where the number is transformed into bills so they are able to visually see the money being added to their wallet

## Impacts

### Individual Impact

<LightBoxImage src="/images/posts/oink/product-phone-impact1.png" alt="Claims supporting our two observations" withLightbox={true}/>

**Fill children's childhoods with healthy financial experiences**  
Through the experience of moving and exchanging bills and coins, children will be able to perceive money as colors and shapes, not numbers, and as a result will be able to read numerical values.

By stacking and labeling money in their wallet compartments, kids get the experience of practicing planned spending in different areas. They'll move away from seeing their balance as a number that's always available to them and start spending with a sense of direction.
Kids can save money based on goals, recognize that they can't spend it, and feel a sense of accomplishment in reaching their goals.

The experience of not spending money right away, but investing it in the future and earning additional interest, can help them weigh immediate happiness against long-term gains.

**Parents will be able to have healthy conversations with their kids.**  
Our app suggests new conversation topics. Your child will be able to set new savings goals and check them off, and you'll be able to see them and give them more compound interest to encourage them to save.

Instead of getting mad at them for spending a big chunk of money out of the blue, you'll have the opportunity to understand and praise them for the hard work they've put into saving to get there.

You could even meet them face-to-face every time they ask you for their pocket money and have a short conversation about the amount.

### Social Impact

<LightBoxImage src="/images/posts/oink/product-phone-impact2.png" alt="Claims supporting our two observations" withLightbox={true}/>

**Attract the smart customers of tomorrow**  
With an easily accessible admin screen in NH's existing app, parents can attract kids as future customers. With financial literacy, customers are expected to quickly see the benefits of "investing," whether it's trading stocks or buying bonds.

## What I learned

1. Making things easy to use is not easy
2. Complete the whole project and refining over iterations is more effective than getting every details right in one go.
3. Face-to-face meeting is uncomfortable and inconvenient, but it is fun and it is the best way to get things done.

I am the kind of person who likes to see how far the crazy ideas would go. So, often times I would ended up building upon others' so-called _dumb ideas_ rather than trying to find their limitations. This team is the first team that believe in the same principle as me. Every team member would try adding on to the ideas on the post-it board and rarely disregard any of them. It would started out sounding kinda funny but then we often ended up with beautiful and unique interactions.

<p>
This team showed me 
  <MarkerHighlight color="secondary">
    how powerful any ideas can be with a little bit of everyone's help.
  </MarkerHighlight>
</p>

## What I wish were more explored

We had quite a short time period in developing this project. So, we rely so heavily on researches and surveys because extensive user testing and heuristics evaluation are not very feasible. I wish we had a little more time to make a testable prototype and conduct user tests to verify our design. However, I am satisfied with the progress we managed to achieve in such a short time frame. Maybe with more experience we can achieve more in the future.

<p>
  If you are interested in a project with more emphasis on verifying design choices and user experience evaluation, check out my project 
  <SparklingHighlight>
    <a href="/baobal">
      Baobal!
    </a>
  </SparklingHighlight>
</p>

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
  
  .button_container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
  }

  /* img:not(.show_nobg) {
		box-shadow: var(--image-shadow);
  } */
</style>
