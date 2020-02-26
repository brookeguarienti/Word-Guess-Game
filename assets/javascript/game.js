// Start the game with a score of 0
var wins = 0;

// Array of animal words
var animals = ["lion", "tiger", "bear", "chicken", "pig"];

// Variable to hold the index of current computer chosen word
var animalsIndex = 0;

// Answer Array that holds the letters guessed 
var answerArray = [];

// 
var generatedWord = [];

// Answer Array Index
var answerArrayIndex = 0;

// Number of guesses availble
var numGuessLeft = 10;

// display letters guessed 
var incorrectGuesses = [];

// variable that holds string of word guess
var animalsGuess = "";

// variable that holds string of letters that will equal the animal guess
var letter = "";

// variable that holds correct letter guessed
var correctGuesses = [];

// function to call to reset game 
var restart = function() {
  animalsIndex = 0;

// Answer Array that holds the letters guessed 
 answerArray = [];

// 
 generatedWord = [];

// Answer Array Index
 answerArrayIndex = 0;

// Number of guesses availble
 numGuessLeft = 10;

// display letters guessed 
 incorrectGuesses = [];

// iable that holds string of word guess
 animalsGuess = "";

// iable that holds string of letters that will equal the animal guess
 letter = "";

// iable that holds correct letter guessed
 correctGuesses = [];
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
  generatedWord = animalsGuess.split("")
  console.log(generatedWord)
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

  // function that renders the guessed answer 
  function renderAnswerArray() {
    document.querySelector("#current-word").innerHTML = answerArray;
  }

  function winLogic () {
    if (JSON.stringify(answerArray) === JSON.stringify(generatedWord)) {
      wins++;
      updateWins();
      restart();
      renderAnswerArray();
      renderAnimals();
  } else{
    console.log("no win yet")
  }
}


// MAIN PROCESS
// ==================================================================================================

// Calling functions to start the game
renderAnimals();
updateWins();
renderAnswerArray();


// When the user presses a key, it will run the following function
document.onkeyup = function (event) {

    // If there are no more words, stop the function
    if (animalsIndex === animals.length) {
        return;
      }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userGuess = event.key.toLowerCase();

    // If userGuess does not match a letter in the word, then...
    if (animalsGuess.indexOf(userGuess) < 0) {

      // numGuess will decrease 
      numGuessLeft--;

      // If numbGuessLeft equals 0, then...
      if (numGuessLeft === 0) {
        restart();
        renderAnswerArray();
        renderAnimals();
      }

      // display num-guess guess
      document.querySelector("#num-guess").innerHTML = numGuessLeft;

      // display userGuess letter
      incorrectGuesses.push(userGuess)
      document.querySelector("#letter").innerHTML = incorrectGuesses.join(' ');
      
      // when we choose a correct letter, then it goes into the current word array and equals 
    } if (animalsGuess.indexOf(userGuess) > -1) {

      // change all keys to lowercase 
      var userGuess = event.key.toLowerCase();


       // display correct letter of the answerArray that was guessed
       for (var i = 0; i < animalsGuess.length; i++) {
         if (userGuess === animalsGuess[i]){
           answerArray[i] = userGuess
           document.querySelector("#current-word").innerHTML = answerArray.join(' ');
           console.log(answerArray) 
         }
       }

       winLogic() 
    }
    } 
