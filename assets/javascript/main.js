var psychicLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];


var winnerWinnerChickenDinner = 0;
var booHooBigOleLose = 0;



var lettersGuessed = []; 
var remainingAttempts = 8;

document.onkeyup = function(event) {
  var yourGuess = event.key; 
  lettersGuessed.push(yourGuess); 
  var psychicAns = psychicLetters[Math.floor(Math.random() *    psychicLetters.length)];

  
  if (yourGuess === psychicAns) {
    winnerWinnerChickenDinner++;
    remainingAttempts = 8;
  }
  
  else {
    remainingAttempts--;
  }

  
  if (remainingAttempts === 0){
    booHooBigOleLose++;
    remainingAttempts = 8;
  }





  var html = "<h1>Thinking of a letter A-Z:</h1>" + "<h3>Win Count: " +
   winnerWinnerChickenDinner + "</h3>" + "<h3>Lose Count: "+ booHooBigOleLose +
    "<h3>Guesses Remaining: " + remainingAttempts + "<h3>Guessed Letters: " +  lettersGuessed.join(', '); 
  document.querySelector("#psychicgame").innerHTML = html;
}