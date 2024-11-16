---
slug: oink
title: Oink
date: 2023-04-22T21:55:27.154Z
excerpt: Reshaping digital financial experience for kids and preteens by introducing tangible interface.
coverImage: /images/posts/oink/cover.png
tags:
  - UX Design
  - UI Design
hidden: false
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

If you want a bite-sized summary, check out this [video](https://youtu.be/I8RZJOs1q6Y)

## Context

Oink is an attempt to reshape the financial experience for kids and preteens. The problem with the current financial experience is that it is so... _in the air_, in a sense that you cannot really touch it; the money you have is just _numbers_ on the screen.

It may make sense for adults that have to manage their complex finance (I am also trying to learn how to be financially responsible) but it does not make sense for kids who just started to learn about money. So, what we're trying to do was bring back some of charming characteristics of physical money to digital banking tools for children.

## Overview and Background

**Primary Research**  
After our initial research, we came to realize this problem from the two observations

1. **Financial experimenting during childhood is important**
2. **The financial literacy in Korea is low** (and I believe it can also be said for the most part of the world)

<Image  src="/images/posts/oink/research.png" alt="Claims supporting our two observations" />

**Surveys & Interview**  
After we had our base hypothesis, we designed a series of survey and interview questions to better define the problem in details.

<Image src="/images/posts/oink/survey-design.png" alt="Claims supporting our two observations" />

The result is them compiled and analyze into more digestible presentation.

<Image src="/images/posts/oink/survey.png" alt="Claims supporting our two observations" />

We found that around 50% of children switched from using cash to debit card at around 12-14 years old. The main reason they make the switch is because of **_convenience_** (which, i know, is obvious but we like to make sure).

The interesting part is what changed after they started using digital money. There are some positive changes like the children gets more freedom to spend but that eventually leads to negative effects like overconsumptions and lack of planning.

## Problem

<!-- With the results from surveys, interviews, and literature reviews we decided to separately analyze the problem in 3 areas of personal finance for kids:

1. Earning
2. Spending
3. Savings

<Image src="/images/posts/oink/ideation-1.png" alt="Claims supporting our two observations" />

Then we create an affinity diagram of the painpoints.

<Image src="/images/posts/oink/ideation-2.png" alt="Claims supporting our two observations" /> -->

The problem we see here is that the change from physical money to digital one may be too sudden. From physical assets that you can **see**, reduced to just a numerical representation on a screen.

In order to better encourage good financial habit since teenage year, maybe a better transition to help children acclimated themselves to the digital financial world.

<Image src="/images/posts/oink/problem-1.png" alt="Claims supporting our two observations" />

Another problem is that financial education needs to start early but it's not always easy to have an effective financial conversation between kids and parents.

<Image src="/images/posts/oink/problem-2.png" alt="Claims supporting our two observations" />

And that's the overarching theme of out problem; "Transition Period of Cash to Digital Money"

## Target User

So, we decided our target user to be 7-13 years old kids and their parents. If the product is expected to ship in 4-5 years, they would be

- **Kids**  
  [_Alpha Generation_](https://en.wikipedia.org/wiki/Generation_Alpha)  
  The biggest feature of Alpha Generation is that they are the generation directly influenced by the popularization of smartphones and the ubiquitous society. They will grow up and become a member of the financial world.

- **Parents**  
  [_MZ Generation_](https://en.namu.wiki/w/MZ%EC%84%B8%EB%8C%80)  
  Generation MZ (a South Korean specific term) refers to the Millennials who were born in the early to mid-1990s, and Generation Z who were born in the mid to late 1990s. It is a generation with characteristics of diversity, leisure-oriented, value-based consumption (environmental and ethical values), self-centered, digital native, and fun-seeking.

<Image src="/images/posts/oink/target.png" alt="Claims supporting our two observations" />

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

<Image src="/images/posts/oink/ideation-1.png" alt="Claims supporting our two observations" />

Then we create an affinity diagram of the painpoints.

<Image src="/images/posts/oink/ideation-2.png" alt="Claims supporting our two observations" />

The recurring theme found in the post-its are that digital money sometimes are too _abstract_. So, after some weeks of researching, we came upon a promising solution; **"Tangible User Interface"**.

<Image src="/images/posts/oink/ideation-3.png" alt="Claims supporting our two observations" />

The initial idea is that we have a physical piggy bank that kids can pretend to drag the money on their mobile screen and drop them into the piggy bank as if they are putting real bank notes into the piggy bank. (Like some of those weird apps from the early era of smartphones that let you pretend to be drinking beer out of your phone.)

<div class="drawing_container">
  <Image src="/images/posts/oink/ideation-4.png" alt="Claims supporting our two observations" />
  <Image src="/images/posts/oink/beer-app.jpeg" alt="Claims supporting our two observations" />
</div>

<Image src="/images/posts/oink/ideation-5.png" alt="Claims supporting our two observations" />

Which is cute but it didn't fully answers all of our [goals](#goals). But it got the ball rolling! We ended up liking the potential user experience of this idea so much that we started to build the solutions around it.

What if dragging around bank notes icons isn't just contained in the saving interface, but it is the main idea of this financial interface?

<style>
  .drawing_container {
    width: 100%;
    display: grid;
    align-items: end;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
</style>
