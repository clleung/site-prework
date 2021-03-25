/*
SITE Prework | Light and Sound Memory Game | Lisa Leung
JS

Global Constants
Global Variables
Game Start & End Functions
Game Win/Lose Functions
Game Button Lit Functions
Pattern Generation Function
Clue Functions
Guess Functions

External Code:
Sound Synthesis Functions
Init Sound Synthesizer
*/
/*
Copied directly from Google Developers to solve the audio issue:
from the site—"If you create your AudioContext on page load, you’ll have to call resume() at some time after the user interacted with the page (e.g., user clicked a button). Alternatively, the AudioContext will be resumed after a user gesture if start() is called on any attached node."
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
*/
// One-liner to resume playback when user interacted with the page.
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
}); 

//Global Constants=
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5; //NOTE: must be between 0.0 and 1.0

var guessCounter = 0;
var strikes = 0;

var clueHoldTime = 1000; //how long to hold each clue's light/sound

//Game Start & End Functions
function startGame(){
  progress = 0; //reset
  gamePlaying = true; //changed from false
  //hide startBtn, reveal stopBtn
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  patternGen();
  playClueSequence();
  
}
function stopGame(){
  gamePlaying = false; //changed from true
  //hide stopBtn, reveal startBtn
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  resetGame();
}


//Game Win/Lose Functions
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  resetGame();
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
  resetGame();
}
function resetGame(){
  pattern = [];
  progress = 0;
  gamePlaying = false;

  tonePlaying = false;
  volume = 0.5; 

  guessCounter = 0;
  strikes = 0;

  clueHoldTime = 1000;
}
//Game Button Lit Functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}
//Pattern Generation Functions
function patternGen(){
  var len = (Math.floor(Math.random() * 10) + 5);
  console.log("The pattern is length " + len);
  var j;
  for(j = 0; j <= len - 1; j++){
    /*Math.random & Math.floor usage from: https://www.w3schools.com/jsref/jsref_random.asp*/
    pattern.push(Math.floor(Math.random() * 9) + 1);
  }
  console.log("patGen: pattern currently is " + pattern);
}

//Clue Functions
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0;i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
//Guess Functions
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }else if (btn != pattern[guessCounter]){
    //incorrect
    strikes++;
    if(strikes == 3){
      /*includes the most recent error*/
      loseGame();
    }else{
      playClueSequence(); //need to maintain the sequence even if it's incorrect
    }

  }else if (btn == pattern[guessCounter]){
    
    if(guessCounter == progress){
      
      if(progress == (pattern.length - 1)){
        //win condition
        winGame();
      }else{
        //correct pattern
        progress++;
        if(clueHoldTime > 200){
          clueHoldTime *= 0.8;
        }
        
        console.log("The clueHoldTime is now " + clueHoldTime);
        playClueSequence();
      }
      
    }else{
      //next guess
      guessCounter++;
      
    }
  }
  
}

//External Code from the Writeup at https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework#heading-6-starting-and-stopping-the-game

// Sound Synthesis Functions

const freqMap = {
  /*C major, freq from: https://pages.mtu.edu/~suits/notefreqs.html*/
  1: 261.6,       /*C4*/
  2: 293.6,       /*D4*/
  3: 329.6,       /*E4*/
  4: 349.2,       /*F4*/
  5: 392.0,       /*G4*/
  6: 440.0,       /*A4*/
  7: 493.8,       /*B4*/
  8: 523.2,       /*C5*/
  9: 587.3        /*D5*/
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);