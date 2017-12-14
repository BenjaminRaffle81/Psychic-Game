// global variable declaration

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {
    // variable declaration
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 

    // add element to array
    guessesSoFar.push(userGuess);  

    // win and loss conditions
    if (userGuess == computerGuess) {
        wins++;
        alert("MAZEL TOV! YOU WON!");
        guessesLeft = 9; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert("AY GAVALT! YOU BLEW IT!");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--;
    }  

    // dynamic html creation
    var html = "<center><h1>The Psychic Rabbi!</h1></center><center><p>Try to read my mind...Good luck, bubala, I'm a steel trap!</p></center><center><p>Mitzvahs: " + wins + "</p></center><center><p>Jewish Guilt (Losses): " + losses + "</p></center><center><p>Chances Left: " + guessesLeft +  "</p></center><center><p>Screw-Ups: " +guessesSoFar +"</p></center>";

    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}
