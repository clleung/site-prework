# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Lisa Leung**

Time spent: **8** hours spent in total

Link to project: [Github](github.com/clleung/site-prework)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Applied color scheme to the buttons and background
* [x] Styled images and icons (and credited them)
* [x] Added alt tag to images and icons/names for accessibility 
* [x] Provided links to references within the code for easy access
* [x] Organized CSS and JS and left comments. 


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/5gR0jds.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  * [The writeup] (https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework#heading-6-starting-and-stopping-the-game)
    * Main game functions, infrastructure of the game.
  * [Markdown Guide] (https://www.markdownguide.org/basic-syntax/)
  * [JSHint] (https://jshint.com/) 
    * Debugging: syntax, brackets, etc.
  * [Material Design Icons] (https://material.io/resources/icons/?icon=chat_bubble_outline&style=outline)
  * [Coolors Color Generator] (https://coolors.co/f94144-f3722c-f79926-f9c74f-90be6d-43aa8b-4d908e-cee8f3-73568f-903c5b)
  * [Google Autoplay Policy Changes] (https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio)
    * Debugging: audio issues with running the site through Glitch
  * [W3Schools] (https://www.w3schools.com/)
    * Syntax for HTML Buttons and Images
    * Syntax for CSS borders
    * [Math.random and Math.floor usage] (https://www.w3schools.com/jsref/jsref_random.asp*/)
  * [Physical Music - Notes] (https://pages.mtu.edu/~suits/notefreqs.html)
  
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

    It was initially a challenge to debug some of the newer features (randomization and speedup) in Glitch due to my unfamiliarity with Google's autoplay policies. I also had issues with some simpler syntax debugging, as I am typically used to using VSCode. 

    To overcome those issues, I conducted searches on Google, used the console, and even tried compiling everything locally to ensure everything was correct. In particular, I made sure to credit my sources and ensure I understood why the issues were being made.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  * How can I learn to integrate fundamental JS smoothly with other libraries?
  * How can I determine the most efficient and correct way to code certain features (libraries, frameworks, etc.)?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    Given a few more hours to work on the project, I would complete the remaining optional tasks as a challenge to myself, create more pages, and expand the light and sound buttons to the entire web page, passively cycling through the sounds and buttons (which would be updated in color and frequency) to make it seem more enticing; I would also consider adding a more intriguing user interface to make it seem like an arcade game. 

    On the other hand, I would have also liked to pursue methods of making games such as this one more accessible. Due to my personal time limit, I was only able to use icons and words as a visual assistant, but I would have liked to link the game to the keyboard and perhaps even attempt to use a library so that the user can try to sing the notes in response.



## License

    Copyright [Lisa Leung]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.