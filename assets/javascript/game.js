// Start the game with a score of 0
var wins = 0

// Array of animal words
var animals = ["Lion", "Tiger", "Bear", "Chicken", "Pig"]

// Variable to hold the index of current question
var animalsIndex = 0

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word");
var numGuess = document.getElementById("num-guess");
var letter = document.getElementById("letter");



// FUNCTIONS
// ==================================================================================================

// Function to render questions.
function renderAnimals() {
    // If there are still more animals, render the next one.
    if (animalsIndex <= (animals.length - 1)) {
      document.querySelector("#current-word").innerHTML = animals[animalIndex];
    }
  }
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

    //Choose a random word from animals
    var animals = animals[Math.floor(math.random() * animals.length)];

    //
    for (var i = 0; i < animals.length; i++) {
        answerArray[i] = "_";
    }

    if ((userGuess))
}