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
var bothGuesses = document.querySelectorAll('.guess-box')

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
var secondInputForm = document.querySelector('.form-two');

var randomNumberChosen;

var rightSideOfGame = document.querySelector('.right-side-container');

var winnersName;

var rangeErrorMsg = document.querySelector('.range-error');

var guessErrorMsg = document.querySelector('.guess-error-msg1');

var secondGuessErrorMsg = document.querySelector('.guess-error-msg2');

var nameErrorMsg = document.querySelector('.name-error-msg');

var message = document.querySelector('.messages');


updateButton.addEventListener('click', minAndMaxRangeInput);

submitGuessButton.addEventListener('click', submitPrintScore);

resetGuessButton.addEventListener('click', resetInputGiven);

clearButton.addEventListener('click', clearGame);

guessOne.addEventListener('keyup', displayClearButton);
guessTwo.addEventListener('keyup', displayClearButton);

// submitGuessButton.disabled = true;

function minAndMaxRangeInput() {
	firstRange.innerText = minRangeInput.value;
  secondRange.innerText = maxRangeInput.value;
  randomNumber();
}

function randomNumber() {
	randomNumberChosen = Math.floor(Math.random() * (Number(maxRangeInput.value) - Number(minRangeInput.value) + 1) + Number(minRangeInput.value));
  console.log(randomNumberChosen);  
}


function submitPrintScore() {

	challengerScoreOne.innerText = firstChallengerName.value;
	challengerScoreTwo.innerText = secondChallengerName.value;

	numberGuessedOne.innerText = guessOne.value;
	numberGuessedTwo.innerText = guessTwo.value;

  minValuesWithinRange();
  maxValueWithinRange();
  console.log('Submited');
  // firstEmptyRangeInput();
  // secondEmptyRangeInput();
  // emptyChallengerNameOne();
  // emptyChallengerNameTwo();


  enableResetGuessButton();

	scoreOutput();

  randomNumber();

  clearGame();

  // disableSubmitButton();
}

// function disableSubmitButton() {

//   if (firstChallengerName.value !== "" || secondChallengerName.value !== "") {
//     submitGuessButton.disabled = false;
//   } 

//    if (guessOne.value !== "" || guessTwo.value !== "") {
//     submitGuessButton.disabled = false;
//   } 
// }

// Function that resets the the form

function resetInputGiven() {
  for (var i = 0; i < allInputs.length; i++) {
    console.log(allInputs[i].value = "");
  }

  levelOfScoreOne.innerText = 'Score';
  levelOfScoreTwo.innerText = 'Score';
  
  numberGuessedOne.innerText = '0';
  numberGuessedTwo.innerText = '0';

  firstRange.innerText = '0';
  secondRange.innerText = '0';

  challengerScoreOne.innerText = 'Challenger 1 Name';
  challengerScoreTwo.innerText = 'Challenger 2 Name';

  randomNumber();

  disableResetGuessButton();

  disableClearButton();
}



function scoreOutput() {
  if (parseInt(guessOne.value) < randomNumberChosen) {
	  levelOfScoreOne.innerText = `that's too low`;
  } else if (parseInt(guessOne.value) > randomNumberChosen) {
      levelOfScoreOne.innerText = `that's too high`;
  } else if (parseInt(guessOne.value) === randomNumberChosen) {
      levelOfScoreOne.innerText = `BOOM!`;
      winnersName = firstChallengerName.value;
      winningCard();
  };

  if (parseInt(guessTwo.value) < randomNumberChosen) {
      levelOfScoreTwo.innerText = `that's too low`;
  } else if (parseInt(guessTwo.value) > randomNumberChosen) {
	  levelOfScoreTwo.innerText = `that's too high`;
  } else if (parseInt(guessTwo.value) === randomNumberChosen) {
      levelOfScoreTwo.innerText = `BOOM!`;
      winnersName = secondChallengerName.value;
      winningCard();
  };
 } 


function clearGame() {
  for (var i = 0; i < bothGuesses.length; i++) {
  	console.log(bothGuesses[i].value = "");
  }
  disableClearButton();
}


function displayClearButton() {
     for (var i = 0; i < bothGuesses.length; i++) {
      if (bothGuesses[i].value !== "") {
        console.log('enable button');
        enableClearButton();
      }
     }
};


function winningCard() {
  rightSideOfGame.insertAdjacentHTML('afterbegin', 
      `<article class="results-of-game">
      <h3 class="challenger-card-names"><span class="challenger-1-results">${firstChallengerName.value}</span> <span class="vs-text">VS</span> <span class="challenger-2-results">${secondChallengerName.value}</span></h3>
      <h5 class="winners-name">${winnersName}</h5>
      <h6 class="winner-text">WINNER</h6>
      <div class="bottom-of-results-card">
        <p class="guesses-text"><span class="number-of-guesses">0</span>GUESSES    </p>
        <p class="mins-text"><span class="number-of-mins">0.0</span>MINUTES</p>
        <p>IMG</p>
      </div>`

  )};

  // nameErrorMsg.removeAttribute('hidden');

  // The Guess fields should only accept values that fall within the defined min and max range

function minValuesWithinRange() {
  if(parseInt(guessOne.value) < parseInt(minRangeInput.value)) {
      guessErrorMsg.insertAdjacentHTML('afterbegin', 
        `<p class="guess-error-msg1 color">Number out of range!</p>`)
        console.log('This is not a valid input');
        guessErrorMsg.classList.add('color');
    } else {
      guessErrorMsg.innerText= "";
       guessErrorMsg.classList.remove('color');
      };
  }

function maxValueWithinRange() {
  if(parseInt(guessTwo.value) > parseInt(maxRangeInput.value)) {
    guessErrorMsg.insertAdjacentHTML('afterbegin',
      `<p class="guess-error-msg2 color">Number out of range!</p>`
      )
       guessErrorMsg.classList.add('color');
  } else {
        guessErrorMsg.innerText= "";
      };

}

// function firstEmptyRangeInput() {
//   if (guessOne.value === " "){
//     secondGuessErrorMsg.insertAdjacentHTML('afterbegin',
//       `<p class="guess-error-msg2">Enter guess!</p>`
//       )
//       secondGuessErrorMsg.add('color');
//   } else {
//       guessErrorMsg.innerText= "";
//       };
//   }

// function secondEmptyRangeInput() {
//   if(guessTwo.value === " ") {
//     secondGuessErrorMsg.insertAdjacentHTML('afterbegin',
//       `<p class="guess-error-msg2 color">Enter guess!</p>`
//       )
//       secondGuessErrorMsg.add('color');
//   } else {
//       guessErrorMsg.innerText= "";
//       };
// }

// function emptyChallengerNameOne() {
//   if(firstChallengerName === "") {
//     insertAdjacentHTML('afterbegin',
//      `<p class="name-error-msg color">Enter name!</p>`
//     )
//      nameErrorMsg.add('color');
     
//   } else {
//     guessErrorMsg.innerText= "";
//       };
// }

// function emptyChallengerNameTwo() {
//   if(secondChallengerName === "") {
//     insertAdjacentHTML('afterbegin',
//       `<p class="name-error-msg color">Enter name!</p>`
//       )
//       nameErrorMsg.add('color');
//   } else {
//       guessErrorMsg.innerText= "";
//       };
// }

// disableResetGuess

function disableResetGuessButton() {
  resetGuessButton.disabled = true;
  resetGuessButton.classList.add('disableButtonColor');
}

function enableResetGuessButton() {
  resetGuessButton.disabled = false;
  resetGuessButton.classList.add('enableButtonColor');
}

function disableClearButton() {
  clearButton.disabled = true; 
  clearButton.classList.add('disableButtonColor');
}

function enableClearButton() {
  clearButton.disabled = false;
  clearButton.classList.add('enableButtonColor');
  clearButton.classList.remove('disableButtonColor');

}
