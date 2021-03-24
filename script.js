/*
SITE Prework | Light and Sound Memory Game | Lisa Leung
JS

Global Variables
Game Start & End Functions
Game Button Lit Functions
External Code:
Sound Synthesis Functions
Init Sound Synthesizer
*/

//Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5; //NOTE: must be between 0.0 and 1.0

var guessCounter = 0;

//Game Start & End Functions
function startGame(){
  progress = 0; //reset
  gamePlaying = true; //changed from false
  //hide startBtn, reveal stopBtn
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false; //changed from true
  //hide stopBtn, reveal startBtn
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

//Game Win/Lose Functions
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//Game Button Lit Functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
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
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
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
    loseGame();
  }else if (btn == pattern[guessCounter]){
    if(guessCounter == progress){
      
      if(progress == (pattern.length - 1)){
        //win condition
        winGame();
      }else{
        //correct pattern
        progress++;
        playClueSequence();
      }
      
    }else{
      //next guess
      guessCounter++;
      
    }
  }
  // add game logic here
}

//External Code from the Writeup at https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework#heading-6-starting-and-stopping-the-game

// Sound Synthesis Functions

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
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
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)