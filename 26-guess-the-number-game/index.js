let computerGuess; // Variable to store the randomly generated number
const gameArea = document.getElementById("gameArea");
const startpage = document.querySelector(".card");
const newGmbtn = document.querySelector(".newGame");
const gameHead = document.getElementById("guHeader");
const gameInput = document.getElementById("guessinput");
const entBtn = document.getElementById("enter");
const backBtn = document.querySelector(".back");

const easyBtn = document.getElementById("easyM");
const hardBtn = document.getElementById("hardM");


let userGuess = []; // Stores the user's guesses

let music1 = new Audio("./sounds/music1.wav");
let music2 = new Audio("./sounds/music2.wav");
let music3 = new Audio("./sounds/music3.wav");
let music4 = new Audio("./sounds/music4.wav");
let error_alert = new Audio("./sounds/error.mp3");

//play this audio whenever the page loads or reloads
window.onload = function () {
  music1.play();
};

// Initialize the game
const init = () => {
  computerGuess = Math.floor(Math.random() * 100) + 1;
  gameArea.style.display = "none";
};

//function to start new game
const startNewGame = () => {
  backBtn.style.display="none";
  newGmbtn.style.display = "block";
  newGmbtn.addEventListener("click", function newGmbtnClick() {
    window.location.reload();
    startpage.style.display = "flex";
    gameInput.setAttribute("placeholder", "1 to 100");
    entBtn.style.cursor = "pointer";
    entBtn.setAttribute("title", "Click to enter your answer");
    gameArea.style.display = "none";
  });

  gameInput.setAttribute("disabled", true);
  entBtn.setAttribute("disabled", true);
  entBtn.style.cursor="default";
  entBtn.setAttribute("title","Game Over");
  gameInput.setAttribute("placeholder","Game Over");
 
};

//function to perform game as per the selected mode
const SelectMode = (mode, totalGuess) => {
  music1.play();
  startpage.style.display = "none";
  gameArea.style.display = "flex";
  entBtn.style.cursor = "pointer";
  backBtn.style.display = "block";
  newGmbtn.style.display = "none";
  document.getElementById(mode).style.display = "block";
  //set the totalGuess to 10 for easy and  5 for hard
  //compare between the actual number and the user guess on entering the number
  entBtn.addEventListener("click",()=>compareGuess(totalGuess));
};

//function to compare between the user guess and computer guess as per the game mode
const compareGuess = (maxGuess) => {

  const userNum = Number(document.getElementById("guessinput").value);
  if (userNum <= 0 || userNum>100) {
    error_alert.play();
    alert("Please enter a valid number");
    gameInput.value = "";
  } else {
      music4.play();
    userGuess = [...userGuess, userNum];
    //userGuess=[(spread operator which includes previous values to the array),userNum];
    document.querySelector(".guesses").innerHTML = userGuess;
    //check the value low or high
    if (userGuess.length < maxGuess) {
      if (userNum > computerGuess) {
        gameHead.innerHTML = "Your Guess is high &#128558;";
        gameInput.value = "";
      } else if (userNum < computerGuess) {
        gameHead.innerHTML = "Your Guess is low &#128531;";
        gameInput.value = "";
      } else {
        gameHead.innerHTML = `Yep !! it's ${userNum} &#128512;`;
        music2.play();
        gameInput.value = "";
        startNewGame();
      }
    } else {
      if (userNum > computerGuess) {
        gameHead.innerHTML = `You loose &#128557; !! the correct number was ${computerGuess}`;
        music3.play();
        gameInput.value = "";
        startNewGame();
      } else if (userNum < computerGuess) {
        gameHead.innerHTML = `You loose &#128557; !! the correct number was ${computerGuess}`;
        music3.play();
        gameInput.value = "";
        startNewGame();
      } else {
        gameHead.innerHTML = `Yep !! it's ${userNum} &#128512;`;
        music2.play();
        gameInput.value = "";
        startNewGame();
      }
    }
    document.querySelector(".attempts").innerHTML = userGuess.length;
  }
};



// go back to the home page on clicking the back button
backBtn.addEventListener("click", () => {
  window.location.reload();
  startpage.style.display = "flex";
  gameArea.style.display = "none";
});

//on clicking on the easy and hard mode buttons
easyBtn.addEventListener("click",()=>SelectMode("easy",10));
hardBtn.addEventListener("click",()=>SelectMode("hard", 5));

init();
