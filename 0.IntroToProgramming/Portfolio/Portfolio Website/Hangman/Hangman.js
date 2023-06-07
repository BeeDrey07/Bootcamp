var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "success",
    "dragon",
    "mountain",
    "victory"
];

var word = pickWord();
var answerArray = setUpAnswerArray();

 // Game code goes here 
var remainingLetters = word.length;
var noOfGuesses = word.length * 2;
while (remainingLetters > 0 && noOfGuesses > 0) {
    // Show the player their progress
    showPlayerProgress();
    // Take input from player
    var guess = prompt("Guess a letter, or click Cancel to stop playing. You have " + noOfGuesses + " guesses left.").toLowerCase();
    noOfGuesses--;
    // Update answerArray and remainingLetters for every correct guess
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else { 
        // Update answerArray and remainingLetters for every correct guess}
        var correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer();

function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function setUpAnswerArray() {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress() {
    alert(answerArray.join(" "));
}

function updateGameState() {
    var correctGuesses = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] == "_") {
                answerArray[j] = guess;
                correctGuesses++;
            } else {
                alert("You have already guessed this letter.");
                guess = " ";
            }
        }
    } return correctGuesses;
} 
function showAnswerAndCongratulatePlayer() {
    if (remainingLetters == 0) {
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
    } else {
        alert('You ran out of guesses. Better luck next time!');
    }
}