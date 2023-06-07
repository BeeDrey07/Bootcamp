var secret = Math.floor(Math.random() * 10) + 1;
var guess = "";

while (guess !== secret) {
    var guess = parseInt(prompt("Please guess the secret number (1-10)"));
    if (guess > secret) {
        alert("Incorrect, too high!");
    } else if (guess < secret) {
        alert("Incorrect, too low!");
    }
}
alert("Correct!");


