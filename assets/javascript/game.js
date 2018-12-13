
//Declare and Define global counters
var count, wordChoice, randomWord, guessLeft, cycle, guessedLetters, wins, losses;
cycle = 0;
wins = 0;
losses = 0;

//Function for start of a New Game
var initialSetup = function() {
    count = [];
    wordChoice = ['Narnia', 'Hogwarts', 'Westeros', 'Redwall', 'Hyrule', 'Middle Earth'];
    randomWord = wordChoice[Math.floor(Math.random()*wordChoice.length)];
    guessLeft = randomWord.length;
    guessedLetters = [];
    console.log(randomWord);
    for (i = 0; i < randomWord.length; i++) {
        count.push('-');   
    }
    return count;
}

//Boolian function stating if user guessed correctly
var guessIncluded = function(guess) {
    if (randomWord.includes(guess)) {
        return true;
    } else {
        return false;
    } 
}

//Update UI to display correct guess
var correctGuess = function(guess, count) {
    for (i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == guess) {
            count.splice(i, 1, guess);
        }  
    }
    return count;
}

//Function for All during game items
document.onkeyup = function (event) {
    var userchoice = event.key;

    //Correct Initial Display
    cycle ++
    if (cycle <= 1) {
    initialSetup();
    stringInit = count.join('');
    document.getElementById("hyphens").innerHTML = stringInit;
    document.getElementById("guess-counter").innerHTML = guessLeft;
    document.getElementById("changeMe").textContent = "Current Word";
    document.getElementById("guessedLetters").innerHTML = guessedLetters;

    //Update UI on Guess
    } else {
        guessedLetters.push(" " + userchoice + " ");
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        //Correct Guess
        if (guessIncluded(userchoice)){
            correctGuess(userchoice, count);
            stringInit = count.join('');
            document.getElementById("hyphens").innerHTML = stringInit;
            //If Player Wins
            if (!count.includes('-')) {
                initialSetup();
                cycle = 0;
                wins++
                document.getElementById("wins").innerHTML = wins;

            }
        //Incorrect Guess
        } else {
            guessLeft--
            document.getElementById("guess-counter").innerHTML = guessLeft;
            //If Player Looses
            if (guessLeft === 0) {
                initialSetup();
                cycle = 0;
                losses++;
                document.getElementById("losses").innerHTML = losses;
            }
        }
    }
    return [guessLeft, count]
}







