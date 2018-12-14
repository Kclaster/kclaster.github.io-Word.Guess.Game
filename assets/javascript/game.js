

var wordGuessGame = {
    cycle: 0,
    wins:0,
    losses:0,
    count:[],
    wordChoice: '',
    RandomWord: '',
    guessLeft: 0,
    guessedLetters: [],
    initialSetup: function() {
        this.count = [],
        this.wordChoice = ['Narnia', 'Hogwarts', 'Westeros', 'Redwall', 'Hyrule', 'Middle Earth'];
        this.randomWord = this.wordChoice[Math.floor(Math.random()*this.wordChoice.length)];
        this.guessLeft = this.randomWord.length;
        this.guessedLetters = [];
        console.log(this.randomWord);
        for (i = 0; i < this.randomWord.length; i++) {
            this.count.push('-');   
        }
        return this.count;
    },
    guessIncluded: function(guess) {
        if(this.randomWord.includes(guess)) {
            return true;
        } else {
            return false;
        }
    },
    correctGuess: function(guess, count) {
        var i = 0;
        for (i = 0; i < this.randomWord.length; i++) {
            if (this.randomWord[i] == guess) {
                count.splice(i,1,guess);
            }
        }
        return count;
    }
    };

//Function for All during game items
window.addEventListener('keypress', function (event) {
    var userchoice = event.key;

    //Correct Initial Display
    wordGuessGame.cycle ++
    if (wordGuessGame.cycle <= 1) {
    wordGuessGame.initialSetup();
    stringInit = wordGuessGame.count.join('');
    document.getElementById("hyphens").innerHTML = stringInit;
    document.getElementById("guess-counter").innerHTML = wordGuessGame.guessLeft;
    document.getElementById("changeMe").textContent = "Current Word";
    document.getElementById("guessedLetters").innerHTML = wordGuessGame.guessedLetters;

    //Update UI on Guess
    } else {
        wordGuessGame.guessedLetters.push(" " + userchoice + " ");
        document.getElementById("guessedLetters").innerHTML = wordGuessGame.guessedLetters;
        //Correct Guess
        if (wordGuessGame.guessIncluded(userchoice)){
            wordGuessGame.correctGuess(userchoice, wordGuessGame.count);
            stringInit = wordGuessGame.count.join('');
            document.getElementById("hyphens").innerHTML = stringInit;
            //If Player Wins
            if (!wordGuessGame.count.includes('-')) {
                wordGuessGame.cycle = 0;
                wordGuessGame.wins++
                document.getElementById("wins").innerHTML = wordGuessGame.wins;

            }
        //Incorrect Guess
        } else {
            wordGuessGame.guessLeft--
            document.getElementById("guess-counter").innerHTML = wordGuessGame.guessLeft;
            //If Player Looses
            if (wordGuessGame.guessLeft === 0) {
                wordGuessGame.cycle = 0;
                wordGuessGame.losses++;
                document.getElementById("losses").innerHTML = wordGuessGame.losses;
            }
        }
    }
    return [wordGuessGame.guessLeft, wordGuessGame.count]
}


)




