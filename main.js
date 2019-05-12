

// Range Input
// User will be putting in his min-range and max-range
// When they press update, min and max range will be stored and used to print current range in the name and guess section
// Min and Max variables will also be used to make sure user does not go out of range
var allInputs = document.querySelectorAll('input');

var minRangeInput = document.querySelector('#min-range');
var maxRangeInput = document.querySelector('#max-range');
var updateButton = document.querySelector('.update-button');

var firstRange = document.querySelector('.range-one');
var secondRange = document.querySelector('.range-two'); 

var firstChallengerName = document.querySelector('#name-challenger-1');
var secondChallengerName = document.querySelector('#name-challenger-2');

var guessOne = document.querySelector('#guess-1');
var guessTwo = document.querySelector('#guess-2');

var submitGuessButton = document.querySelector('.submit-guess');
var resetButton = document.querySelector('.reset-game');
var clearButton = document.querySelector('.clear-game');

var challengerScoreOne = document.querySelector('.challenger-1-score');
var challengerScoreTwo = document.querySelector('.challenger-2-score');

var numberGuessedOne = document.querySelector('.number-guessed-1');
var numberGuessedTwo = document.querySelector('.number-guessed-2');

var levelOfScoreOne = document.querySelector('.num-score-1');
var levelOfScoreTwo = document.querySelector('.num-score-2');

var inputForm = document.querySelector('.form-one');

var randomNumber = function () {
	return Math.floor(Math.random() * (maxRangeInput.value - minRangeInput.value) + minRangeInput.value);
}


updateButton.addEventListener('click', givenInput);

submitGuessButton.addEventListener('click', submitPrintScore);

// resetButton.addEventListener('click', );
 
clearButton.addEventListener('click', clearGame);



function givenInput () {
	firstRange.innerText = minRangeInput.value;
  secondRange.innerText = maxRangeInput.value;
}


function submitPrintScore () {
	challengerScoreOne.innerText = firstChallengerName.value;
	challengerScoreTwo.innerText = secondChallengerName.value;

	numberGuessedOne.innerText = guessOne.value;
	numberGuessedTwo.innerText = guessTwo.value;
}


if (minRangeInput.value < randomNumber()) {
	levelOfScoreOne.innerText = `That's too low!`;
} else if (minRangeInput.value > randomNumber()) {
    levelOfScoreOne.innerText = `That's too high!`;
} else {
    levelOfScoreOne.innerText = `BOOM!`;
}


if (maxRangeInput.value < randomNumber()) {
    levelOfScoreTwo.innerText = `That's too low`;
} else if (maxRangeInput.value > randomNumber()) {
	levelOfScoreTwo.innerText = `That's too high!`;
} else {
    levelOfScoreOne.innerText = `BOOM!`;
}

//Create a function that clears all of the number inputs
//The function should go through and empty out each input

//

function clearGame() {
  for (var i = 0; i < allInputs.length; i++) {
  	console.log(allInputs[i].value = "");
  }
  clearButton.disabled = true;
}


//Disable buttons when the page loads
// resetButton.disabled = true;
// clearButton.disabled = true;

//function that turns on the clear and guess buttons
//once the user clicks the submit button, the two buttons will change to false

//disabled when entered
//event listener added to the input fields
//"this" calls the event listener - check the length
inputForm.addEventListener('keyup', disableClearButton);

function disableClearButton() {
  for (var i = 0; i < allInputs.length; i++) {
      if (allInputs[i].value !== "") {
  console.log('clear button is enabled');
  clearButton.disabled = false;
//  } else {
// //    console.log('clear button is enabled');
//    clearButton.disabled = true;
}
}
};



// if (clearbutton.disabled === true) {
//   clearButton.css.style = "background-color:#"
// } else {
//    clearButton.css.style = "background-color:#"
// }



// Name and Guess
// Reminder of ranges lies at the top to remind user to choose a number between them
// User fills in name and guess
// User submits guess
// Reset guess button deletes guess
// Clear game button deletes name and guess
// If name or guess is not inputed, error message pops up


// Latests Score
// Shows the name input from two players entered in box above
// Shows if current guess was too low or too high for each of the two players
// Player has to keep guessing until one of them has the right answer

//Results of Game
// Winner pops up on the left side of the page 
// Prints out names of both users
// Shows how many minutes it took them to guess the right number
// User can close winner window with the close button in the bottom

// Variables at the top
// Event Listeners in the middle
// At the end functions