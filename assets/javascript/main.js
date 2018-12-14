var letters = [
  'a','b','c','d','e',
  'f','g','h','i','j',
  'k','l','m','n','o',
  'p','q','r','s','t',
  'u','v','w','x','y','z'];


  var randomLetter = Math.floor(Math.random() * letters.length;
  
  var guesses = document.getElementById("guesses");
  var lastResult = document.getElementById("lastResult");
  var submit = document.getElementById("submit");
  var guessText = document.getElementById("guessText");
  var guessCount = 1;

  function checkGuess() {
    var userGuess = Number(guessText.value);
    guesses.innerHTML += userGuess + " ";

    if(guessCount == 10) {
      lastResult.innerHTML = "Lose!";
      disableForm();
    } else {
      
      if(userGuess == randomLetter) {
        lastResult.innerHTML = "Win!";

        disableForm();
      } else {
        lastResult.innerHTML = "Wrong!";
        
      }
      }
      guessCount++;
      guessText.value = "";
    }
  
  function disableForm() {
    var wholeForm = document.querySelector(".form"); 
    wholeForm.style.opacity = 0.5;
    guessText.setAttribute("disabled", "disabled");
    submit.setAttribute("disabled", "disabled");
  }

  submit.onclick = checkGuess;