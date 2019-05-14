

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

var resetGuessButton = document.querySelector('.reset-game');

var clearButton = document.querySelector('.clear-game');


var challengerScoreOne = document.querySelector('.challenger-1-score');
var challengerScoreTwo = document.querySelector('.challenger-2-score');

var numberGuessedOne = document.querySelector('.number-guessed-1');
var numberGuessedTwo = document.querySelector('.number-guessed-2');

var levelOfScoreOne = document.querySelector('.num-score-1');
var levelOfScoreTwo = document.querySelector('.num-score-2');

var inputForm = document.querySelector('.form-one');

var randomNumberChosen;

var rightSideOfGame = document.querySelector('.results-of-game');

var winnersName;
var resultOfWinnersName;





updateButton.addEventListener('click', minAndMaxRangeInput);

submitGuessButton.addEventListener('click', submitPrintScore);

resetGuessButton.addEventListener('click', resetInputGiven);

clearButton.addEventListener('click', clearGame);

inputForm.addEventListener('keyup', disableClearButton);


function minAndMaxRangeInput () {
	firstRange.innerText = minRangeInput.value;
  secondRange.innerText = maxRangeInput.value;

    randomNumber();
}

function randomNumber() {
	randomNumberChosen = Math.floor(Math.random() * (Number(maxRangeInput.value) - Number(minRangeInput.value) + 1) + Number(minRangeInput.value));
  console.log(randomNumberChosen);
}


function submitPrintScore () {
	challengerScoreOne.innerText = firstChallengerName.value;
	challengerScoreTwo.innerText = secondChallengerName.value;

	numberGuessedOne.innerText = guessOne.value;
	numberGuessedTwo.innerText = guessTwo.value;

  resetGuessButton.disabled = false;
  resetGuessButton.style = "background-color:#6E6E6E"

	scoreOutput();
}

// Function that resets the the form

function resetInputGiven () {
  for (var i = 0; i < allInputs.length; i++) {
    console.log(allInputs[i].value = "");
  }
  // inputForm.reset();

  levelOfScoreOne.innerText = 'Score';
  levelOfScoreTwo.innerText = 'Score';
  
  numberGuessedOne.innerText = '0';
  numberGuessedTwo.innerText = '0';

  firstRange.innerText = '0';
  secondRange.innerText = '0';

  challengerScoreOne.innerText = 'Challenger 1 Name';
  challengerScoreTwo.innerText = 'Challenger 2 Name';

  randomNumber();

  resetGuessButton.disabled = true;
  resetGuessButton.style = "background-color:#D0D2D3";

  clearButton.disabled = true;
  clearButton.style = "background-color:#D0D2D3";
}



function scoreOutput() {
  if (parseInt(guessOne.value) < randomNumberChosen) {
	  levelOfScoreOne.innerText = `that's too low`;
	  console.log ('Amand');
  } else if (parseInt(guessOne.value) > randomNumberChosen) {
      levelOfScoreOne.innerText = `that's too high`;
      console.log ('Consi');
  } else if (parseInt(guessOne.value) === randomNumberChosen) {
      levelOfScoreOne.innerText = `BOOM!`;
      console.log ('Elo');
      winnersName = firstChallengerName.value;
      winningCard();
  };

  if (parseInt(guessTwo.value) < randomNumberChosen) {
      levelOfScoreTwo.innerText = `that's too low`;
      console.log ('Sie');
  } else if (parseInt(guessTwo.value) > randomNumberChosen) {
	  levelOfScoreTwo.innerText = `that's too high`;
	  console.log ('Rra');
  } else if (parseInt(guessTwo.value) === randomNumberChosen) {
      levelOfScoreTwo.innerText = `BOOM!`;
      console.log ('Lop');
      winnersName = secondChallengerName.value;
      winningCard();
  };
 } 
 

//Create a function that clears all of the number inputs
//The function should go through and empty out each input


function clearGame() {
  for (var i = 0; i < allInputs.length; i++) {
  	console.log(allInputs[i].value = "");
  }
  clearButton.disabled = true;
  clearButton.style = "background-color:#D0D2D3";
}


//disabled when entered
//event listener added to the input fields
//"this" calls the event listener - check the length


function disableClearButton() {
  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value !== "") {
      console.log('clear button is enabled');
      clearButton.disabled = false;
      clearButton.style = "background-color:#6E6E6E";
     }
   }
};


function winningCard() {

  rightSideOfGame.insertAdjacentHTML('afterbegin', 

    ` <h3 class="challenger-card-names"><span class="challenger-1-results">${firstChallengerName.value}</span> <span class="vs-text">VS</span> <span class="challenger-2-results">${secondChallengerName.value}</span></h3>
      <h5 class="winners-name">${winnersName}</h5>
      <h6 class="winner-text">WINNER</h6>
      <div class="bottom-of-results-card">
        <p class="guesses-text"><span class="number-of-guesses">0</span>GUESSES</p>
        <p class="mins-text"><span class="number-of-mins">0.0</span>MINUTES</p>
        <p>IMG</p>
      </div>`

  )};
// function changeButtonColor() {
// if (clearButton.disabled === true) {
//   clearButton.style = "background-color:#000000"
// } else {
//    clearButton.style = "background-color:#ffffff"
// }
// }
// changeButtonColor();

// Range Input
// User will be putting in his min-range and max-range
// When they press update, min and max range will be stored and used to print current range in the name and guess section
// Min and Max variables will also be used to make sure user does not go out of range


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