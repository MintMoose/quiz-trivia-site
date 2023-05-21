# Quizzical Trivia site using React

## Summary
The Quizzical Trivia site is a React-based web application developed as a solo project. It was built with the goal of reinforcing fundamental React concepts while adhering to a given [Figma design](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0%3A1 "Figma Design") and project requirements.

The application allows users to engage in trivia quizzes by fetching questions from the Open Trivia Database API. It presents a user-friendly interface with features such as randomized question order, multiple-choice answers, and dynamic scoring. The site provides immediate feedback on the user's performance, displaying the number of correct answers at the end of each quiz.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#final-project-screenshots)
  - [Links](#links)
  - [What I learnt](#what-i-learnt)
  - [Continued development](#continued-development)


## Overview

### Final Project Screenshots
<span>
  <img src=images/quizzical-home.png height=300/>
<img src=images/quizzical-input.png height=300/>
<img src=images/quizzical-quiz.png height=300/>
</span>

### Links
- Live Site URL: 

## Usage
Make sure you have Node.js and npm installed. In the project directory, run the following commands:

### `npm install`
This command downloads the required package dependencies to run the project locally.

### `npm start`
Runs the app in development mode. Open http://localhost:3000 to view it in your browser.

The page will automatically reload when you make changes. Any lint errors will be displayed in the console.

## What I Learnt
This project allowed me to independently create a React app from scratch without relying on a predefined solution. It reinforced my understanding of React by applying past knowledge gained from tutorials and conducting independent research. Using Jest for unit testing greatly contributed to my understanding of DOM manipulation and the concept of mocking data.

## Testing screenshot
<div>
<img src=images/test-running.png height=100/>
</div>

## Continued development

To further enhance the project, the following improvements can be made:

 - Correct the opentdb API data to ensure proper display of special characters, such as quotes.
 - Improve the CSS structure to make the site more friendly and responsive on different devices.
 - Add comprehensive testing coverage to App.js and address any issues with Jest parsing the nanoid library, which uses ECMAScript modules syntax not natively supported by Jest.
