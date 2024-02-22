# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Here](https://github.com/svetstoykov/react-practice/tree/frontendmentor-faq-accordion/frontendmentor-faq-accordion)
- Live Site URL: [Here](https://65d721d3818cc203c8036ee6--tourmaline-bubblegum-a5bcb0.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to add transitions to elements:

```css
.question-content {
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.collapsed {
    max-height: 0;
}

.expanded {
    max-height: 300px;
}
```

Also how to add background images via CSS

```css
body {
    background-color: var(--light-pink);
    background-image: url("./assets/background-pattern-desktop.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 100vh;
    display: grid;
    place-content: center;
}
```
