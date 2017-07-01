var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = "";
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];

//resets the game after a win or loss
function reset() {
alert('Welcome to a New Game');
guessesLeft = 9;
computerChoice = alpha[Math.floor(Math.random() * alpha.length)];
document.getElementById("myForm").reset();
document.getElementById("guessesLeft").innerHTML = (guessesLeft);
console.log(computerChoice);
console.log(guessesLeft);}

//sets up the behavior of the game
function setGame () {

computerChoice = alpha[Math.floor(Math.random() * alpha.length)];
//console.log(computerChoice)


document.onkeyup = function(event){
	var userGuess = event.key;


//console.log(userGuess);
//console.log(computerChoice);

if (userGuess === computerChoice){
	wins++;  
	alert("You Win!");
	delete computerChoice;
	reset() //calls the reset
document.getElementById("wins").innerHTML = (wins);}


else if (userGuess !== computerChoice){
			guessesLeft--  // = guessesLeft -1;
			document.getElementById("guessesLeft").innerHTML = (guessesLeft);}
	
//console.log(wins);
//console.log(guessesLeft);

if (guessesLeft === 0){
	losses++;
	guessesLeft = 9;
	alert("Game Over! You are out of Guesses");
	reset() //calls the reset
	//console.log(losses);
	document.getElementById("losses").innerHTML = (losses);
	}
//console.log(guessesLeft)
}

}
//calls the game to start
setGame()


