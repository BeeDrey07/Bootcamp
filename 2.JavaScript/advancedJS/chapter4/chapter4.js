// !! PRACTICE EXERCISE 4.1 !!

// 1. Create a variable with a Boolean value.

// let mood = prompt("How are you feeling today? Tired or energized? ");

// 2. Output the value of the variable to the console.

// console.log(mood);

// 3. Check whether the variable is true and if so, output a message to the console, 
// using the following syntax:
// if(myVariable){
// //action
// } 

// if(mood == "tired") {
//     alert("You should get some rest!");
// }

// 4. Add another if statement with an ! in front of the variable to check whether 
// the condition is not true, and create a message that will be printed to the 
// console in that instance. You should have two if statements, one with an 
// ! and the other without. You could also use an if and an else statement 
// instead—experiment!

// if(mood !== "tired") {
//     alert("Then what are you waiting for? Let's get coding !");
// }

// if(mood == "tired"){
//     alert("You should get some rest...");
// } else {
//     alert("Then what are you waiting for? Let's get coding!");
// }

// 5. Change the variable to the opposite to see how the result changes.

// !! PRACTICE EXERCISE 4.2 !!

// 1. Create a prompt to ask the user's age

// let age = Number(prompt("How old are you?"));

// 3. Declare a message variable that you will use to hold the console message for the user

// let message = "";

// 4. If the input age is equal to or greater than 21, set the message variable to 
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to 
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if 
// none are true
// 7. Output the response message variable to the console

// if (age >= 21) {
//     alert("You may enter the venue and purchase alcohol.");
// } else if (19 <= age && age < 21) {
//     alert("You may enter the venue, but you cannot purchase alcohol.");
// } else {
//     alert("You may not enter the venue.");
// }

// !! PRACTICE EXERCISE 4.3 !!

// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check whether 
// their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console

// const id = false;
// const message = (id) ? "allowed" : "denied";
// alert(message);

// !! PRACTICE EXERCISE 4.4 !!

// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value 
// is assigned by generating a random number 0-5, for 6 possible results. You 
// can increase this number as you add more results.

// let randomNumber = Math.floor(Math.random() * 6);

// 2. Create a prompt that can get a string value input from a user that you can 
// repeat back in the final output.

// let question = String(prompt("Ask the Magic 8-ball a question."));

// 3. Create 6 responses using the switch statement, each assigned to a different 
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence 
// printed for the user. You can assign different string values for each case, 
// assigning new values depending on the results from the random value. 
// 5. Output the user's original question, plus the randomly selected case 
// response, to the console after the user enters their question.

// let response = "";

// switch(randomNumber){
//     case 0:
//         response = "Defintely!"
//         break;
//     case 1:
//         response = "That's a big no!"
//         break;
//     case 2:
//         response = "Hmm... maybe?"
//         break;
//     case 3:
//         response = "Sometimes."
//         break;
//     case 4:
//         response = "Yeah why not."
//         break;
//     default:
//         response = "Yikes! Ask me a different question."
//         break;
// } 
// alert(question + " " + response);

// !! PRACTICE EXERCISE 4.5 !!
// 1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type

// let prize = Number(prompt("Please choose a number between 1 and 10?"));

// 3. Create a variable to use for the output message containing the value "My Selection: "

// let message = "My Selection: ";

// 4. Using the switch statement (and creativity), provide a response back 
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable 
// strings and the output message string

// let output = "";

// switch(prize) {
//     case 1:
//         output = " an iPhone 14.";
//     break;
//     case 2:
//         output = " 2 movie tickets.";
//     break;
//     case 3:
//         output = " a flat screen tv.";
//     break;
//     case 4:
//         output = " a box of 12 donuts.";
//     break;
//     case 5:
//         output = " a car.";
//     break;
//     case 6:
//         output = " a trip for two on your dream vacation.";
//     break;
//     case 7:
//         output = " free membership for a year at a gym near you.";
//     break;
//     case 8:
//         output = " R10.";
//     break;
//     case 9:
//         output = " R100 000.";
//     break;
//     case 10:
//         output = " a mansion.";
//     break;
//     default:
//         output = " Nothing, because you didn't pick a number between 1 and 10."
//     break;
// }
// alert(message + prize + " Congratulations! You win : " + output );

// !! CHAPTER PROJECTS !!

// EVALUATING A NUMBER GAME 

// Ask the user to enter a number and check whether it's greater than, equal to, or less 
// than a dynamic number value in your code. Output the result to the user.

// num = 62
// guess = Number(prompt("Guess a number between 1 and 100."));

// if (guess > num) {
//     alert("Oops! Too high.");
// } else if (guess === num) {
//     alert("Correct!!!");
// } else {
//     alert("Oops! Too low.");
// }

// FRIEND CHECKER GAME

// Ask the user to enter a name, using the switch statement to return a confirmation 
// that the user is a friend if the name selected is known in the case statements. You 
// can add a default response that you don't know the person if it's an unknown name. 
// Output the result into the console.

// let guess = prompt("Can you guess the names of my friends?");
// let message = ""

// switch(guess) {
//     case "Robyn":
//     case "Jade":
//     case "Joe":
//     case "Taylor":
//     case "Jack":
//         message = "Yes I know " + guess + "!";
//         break;
//     default:
//         message = "No, who's " + guess + "?";
//         break;
// } 
// alert(message);

// ROCK PAPER SCISSORS GAME

// This is a game between a player and the computer, where both will make a random 
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
// Scissors will beat out Paper. You can use JavaScript to create your own version of 
// this game, applying the logic with an if statement. Since this project is a little more 
// difficult, here are some suggested steps:

// 1. Create an array that contains the variables Rock, Paper, and Scissors.

let gameArr = ["rock", "paper", "scissors"];

// 2. Set up a variable that generates a random number 0-2 for the player and then 
// do the same for the computer's selection. The number represents the index 
// values in the array of the 3 items.

let computer = gameArr[Math.floor(Math.random() * 3)];
let player = prompt("Choose rock, paper or scissors.");

// 3. Create a variable to hold a response message to the user. This can show the 
// random results for the player and then also the result for the computer of the 
// matching item from the array. 

message = "";

// 4. Create a condition to handle the player and computer selections. If both are 
// the same, this results in a tie. 
// 5. Use conditions to apply the game logic and return the correct results. 
// There are several ways to do this with the condition statements, but you 
// could check which player's index value is bigger and assign the victory 
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the 
// computer selection and the result of the game.

if (computer === player) {
    message = "Looks like it's a tie! Try again."
} else if (computer === "rock" && player === "paper") {
    message = "Paper covers rock. Player won!";
} else if (computer === "paper" && player === "rock") {
    message = "Paper covers rock. Computer won!";
} else if (computer === "rock" && player === "scissors") {
    message = "Rock crushes scissors. Computer won!";
} else if (computer === "scissors" && player === "rock") {
    message = "Rock crushes scissors. Player won!";
} else if (computer === "paper" && player === "scissors") {
    message = "Scissors cuts paper. Player won!";
} else {
    message = "Scissors cuts paper. Computer won!";
}
alert("Computer: " + computer + "\n" + "Player: " + player + "\n" + message);

// !! SELF-CHECK QUIZ !!

// 1. What will be outputted to the console in this instance?
// const q = '1';
// switch (q) {
//  case '1':
//  answer = "one";
//  break;
//  case 1:
//  answer = 1;
//  break;
//  case 2:
//  answer = "this is the one";
//  break;
//  default:
//  answer = "not working";
// }
// console.log(answer);

// "one" will be ouputted to the console.
// CORRECT

// 2. What will be outputted to the console in this instance?
// const q = 1;
// switch (q) {
//  case '1':
//  answer = "one";
//  case 1:
//  answer = 1;
//  case 2:
//  answer = "this is the one";
//  break;
//  default:
//  answer = "not working";
// }
// console.log(answer);

//"not working" will be outputted to the console.
// INCORRECT. "this is the one" (because that's where the break is.)

// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder = 
// "login";
// console.log(userOkay);

// "login"
// CORRECT

// 4. What will be outputted to the console in this instance?
// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//  htmlOutput = "Welcome, that is a user";
// } else {
//     htmlOutput = "Denied, not a user ";
//    }
//    console.log(htmlOutput + ": " + userInput);

// "Welcome, that is a user: John"
// CORRECT

// 5. What will be outputted to the console in this instance?
// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
//  output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
//  output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
//  output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {
//  output = "Dinner time";
// } else if (myTime >= 22) {
//  output = "Time to go to sleep";
// } else {
//  output = "You should be sleeping";
// }
// console.log(output);

// "Wake up, it's morning."
// CORRECT

// 6. What will be outputted to the console in this instance?
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);
// console.log(a > b && b > a);
// console.log(d > b || b > a);
// console.log(d > b && b > a);

// true -- CORRECT
// false -- CORRECT
// true -- CORRECT
// true -- CORRECT

// 7. What will be outputted to the console in this instance?

// let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` : ${val} was LESS or Equal to 100`;
// console.log(message);
// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);

// "100 was LESS or Equal to 100" -- CORRECT
// `100 is Even` -- CORRECT













