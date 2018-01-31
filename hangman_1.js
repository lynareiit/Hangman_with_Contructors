// dependency for inquirer npm package
var inquirer = require("inquirer");

//create word constructor representing current word to guess. 
//will contain word specific logic and data. require it here
var currentWord = require("./word.js");
//create Letter constructor. 
//each letter object should display either a character or an underscore.
//will contain letter specific logic and data . require it here
var Letter = require("./letter.js");
//keep track of remaining guesses
console.log("1" + currentWord);
function GameStart(){
console.log("Start game has started");
	guessesRemaining = 12;
	answerSpaces = [];
	currentLetters = [];
	lettersGuessed = [];
	flipper = false;
	console.log("2" + currentWord);
	word = function() {

		currentLetters = currentWord.split("");
		console.log(currentLetters);
			for (var i = 0; i < currentWord.length; i++) {
					answerSpaces[i] = " _ ";
			}

			console.log(answerSpaces.join(""));
			console.log("Guesses remaining: " + guessesRemaining);	
			
	};

userGuess = function() {
	console.log("inquirer guess function started");
	inquirer.prompt([
      {
        name: "letter",
        message: "Let's play HangMom! Guess a letter: "
      }	
	]).then(function(letter){
		for (var i = 0; i < currentLetters.length; i++) {
			if(letter.letter === currentLetters[i]){
				flipper = true;
				lettersGuessed.push(letter.letter);
				answerSpaces[i] = letter.letter;
				console.log(answerSpaces);
				userGuess();
			}
}
			else if (flipper === false){
				for (var j = 0; j < currentLetters.length; j++) {
					if (currentLetters[j] === letter.letter) {
					answerSpaces[j] = letter.letter;
					console.log("letter " + letter.letter + "is not in the word!");
					guessesRemaining--;
					
		 			console.log(lettersGuessed);
		 			console.log(answerSpaces + "array test");
					console.log(guessesRemaining);
					console.log(answerSpaces.join(""));
					}else {
					console.log("You already guessed this letter!");
					}	

				}
			})
		}
	


console.log("test " + guessesRemaining);
	printStats = function(){
		if (currentLetters.toString() === answerSpaces.toString()) {
		console.log ("Nice work! You win!");
		startGame();
		//loss
	} else if (guessesRemaining === 0) {
		inquirer.prompt([
      {
        name: "playagain",
        type: "confirm",
        message: "You lose! Wanna try again? "
    }])

    .then(function(answer) {
      if(answer.playagain){
        StartGame();
      } else{
        console.log("See ya next time!");
      }
    })}
	}
	word();
	console.log(currentWord);
	userGuess();
}
var Game = new GameStart();
