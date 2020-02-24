// Start the game with a score of 0
var wins = 0;

// Array of animal words
var animals = ["Lion", "Tiger", "Bear", "Chicken", "Pig"];

// Variable to hold the index of current question
var animalsIndex = 0;

// Answer Array
var answerArray = [];

// Number of guesses availble
numGuessLeft = 10;

// display letters guessed 
var incorrectGuesses = [];

// 
var animalsGuess = "";

//
var letter = "";

//
var restart = function() {
  numGuessLeft = 0;
  incorrectGuesses = [];
  numGuess = numGuessLeft;
  letter = "";
}

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word");
var numGuess = document.getElementById("num-guess");
var letter = document.getElementById("letter");



// FUNCTIONS
// ==================================================================================================

// Function to render word.
function renderAnimals() {

  //Choose a random word from animals
  animalsGuess = animals[Math.floor(Math.random() * animals.length)];

    // If there are still more animals, render the next one.
    // if (animalsIndex <= (animals.length - 1)) {
      

      for (var i = 0; i < animalsGuess.length; i++) {
        answerArray[i] = "_";
    }

    currentWordText.innerHTML = answerArray.join(' ');
    }
  // }
  // Function that updates the wins
  function updateWins() {
    document.querySelector("#wins").innerHTML = wins;
  }


// MAIN PROCESS
// ==================================================================================================

// Calling functions to start the game
renderAnimals();
updateWins();


// When the user presses a key, it will run the following function
document.onkeyup = function (event) {

    // If there are no more questions, stop the function
    if (animalsIndex === animals.length) {
        return;
      }

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userGuess = event.key.toLowerCase();

    // If userGuess does not match a letter in the word, then...
    if (animalsGuess.indexOf(userGuess) < 0) {

      // numGuess will decrease 
      numGuessLeft--;
      if (numGuessLeft === 0) {
        restart()
      }
      // display num-guess guess
      document.querySelector("#num-guess").innerHTML = numGuessLeft;

      incorrectGuesses.push(userGuess)
      document.querySelector("#letter").innerHTML = incorrectGuesses.join(',');

    }
}