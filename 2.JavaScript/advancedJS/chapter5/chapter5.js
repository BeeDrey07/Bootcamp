//while loop examples:

// while loop looking for a value in an array
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//     }
// }

// fill an array with the Fibonacci sequence using a loop
// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray);

// !! PRACTICAL EXERCISE 5.1 !!

// In this exercise we will create a number guessing game that takes user input and 
// replies based on how accurate the user's guess was.

// 1. Create a variable to be used as the max value for the number guessing game.

// 2. Generate a random number for the solution using Math.random() and 
// Math.floor(). You will also need to add 1 so that the value is returned as 
// 1-[whatever the set max value is]. You can log this value to the console for 
// development to see the value as you create the game, then when the game is 
// complete you can comment out this console output.

// 3. Create a variable that will be used for tracking whether the answer is correct 
// or not and set it to a default Boolean value of false. We can update it to be 
// true if the user guess is a match. 

// 4. Use a while loop to iterate a prompt that asks the user to enter a number 
// between 1 and 5, and convert the response into a number in order to match 
// the data type of the random number.

// 5. Inside the while loop, check using a condition to see if the prompt value is 
// equal to the solution number. Apply logic such that if the number is correct, 
// you set the status to true and break out of the loop. Provide the player with 
// some feedback as to whether the guess was high or low, and initiate another 
// prompt until the user guesses correctly. In this way we use the loop to keep 
// asking until the solution is correct, and at that point we can stop the iteration 
// of the block of code.

// let max = 5
// let randomNum = Math.floor(Math.random() * max) + 1;
// let correct = false;

// while (!correct) {
//     let guess = Number(prompt("Guess a number between 1 and 5."));
//     if( guess === randomNum) {
//         alert("Correct!");
//         correct = true;
//     } else if (guess > randomNum) {
//         alert("Oops! Too high..");
//     } else {
//         alert("Oops! Too low...");
//     }
// }

// !! PRACTICE EXERCISE 5.2 !!
// In this exercise, we will create a basic counter that will increase a dynamic variable 
// by a consistent step value, up to an upper limit.

// 1. Set the starting counter to 0

// 2. Create a variable, step, to increase your counter by

// 3. Add a do while loop, printing the counter to the console and incrementing it 
// by the step amount each loop

// 4. Continue to loop until the counter is equal to 100 or more than 100

// let counter = 0
// let step = 0

// do {
//     console.log(counter++)
//     step++
// }
// while(counter < 100);

// !! PRACTICE EXERCISE 5.3 !!

// In this exercise we will use a for loop to create an array that holds objects. Starting 
// with creating a blank array, the block of code within the loop will create an object 
// that gets inserted into the array.

// 1. Setup a blank array, myWork.

// 2. Using a for loop, create a list of 10 objects, each of which is a numbered 
// lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false
// status for every other item to indicate whether the class will be running this 
// year. For example:
// name: 'Lesson 1', status: true

// 3. You can specify the status by using a ternary operator that checks whether 
// the modulo of the given lesson value is equal to zero and by setting up a 
// Boolean value to alternate the values each iteration.

// 4. Create a lesson using a temporary object variable, containing the name 
// (lesson with the numeric value) and predefined status (which we set up in 
// the previous step).

// 5. Push the objects to the myWork array.

// 6. Output the array to the console.

// let myWork = [];

// for(let x = 1; x < 11 ; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         name : `Lesson ${x}`,
//         status : stat };
//     myWork.push(temp)
// } 
// console.log(myWork);

// !! PRACTICE EXERCISE 5.4 !!

// In this exercise we will be generating a table of values. We will be using loops to 
// generate rows and also columns, which will be nested within the rows. Nested arrays 
// can be used to represent rows in a table. This is a common structure in spreadsheets, 
// where each row is a nested array within a table and the contents of these rows are 
// the cells in the table. The columns will align as we are creating an equal number of 
// cells in each row.

// 1. To create a table generator, first create an empty array, myTable, to hold your 
// table data.

// 2. Set variable values for the number of rows and columns. This will allow us 
// to dynamically control how many rows and columns we want within the 
// table. Separating the values from the main code helps make updates to the 
// dimensions easier.

// 3. Set up a counter variable with an initial value of 0. The counter will be used 
// to set the content and count the values of the cells within the table.

// 4. Create a for loop with conditions to set the number of iterations, and to 
// construct each row of the table. Within it, set up a new temporary array 
// (tempTable) to hold each row of data. The columns will be nested within 
// the rows, generating each cell needed for the column. 

// 5. Nest a second loop within the first to count the columns. Columns are run 
// within the row loop so that we have a uniform number of columns within 
// the table. 

// 6. Increment the main counter each iteration of the inner loop, so that we track 
// a master count of each one of the cells and how many cells are created.

// 7. Push the counter values to the temporary array, tempTable. Since the array is 
// a nested array representing a table, the values of the counter can also be used 
// to illustrate the cell values next to each other in the table. Although these are 
// separate arrays representing new rows, the value of the counter will help 
// illustrate the overall sequence of cells in the final table.

// 8. Push the temporary array to the main table. As each iteration builds a new 
// row of array items, this will continue to build the main table in the array. 

// 9. Output into the console with console.table(myTable). This will show you a 
// visual representation of the table structure.

// let myTable = [];
// let rows = 5;
// let columns = 10;
// let counter = 0;

// for (let i = 0; i <= rows; i++) {
//     let tempTable = [];
//     for (j = 0; j <= columns; j++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }

// console.table(myTable);

// !! PRACTICE EXERCISE 5.5 !!

// 1. Create a grid array variable.

// 2. Set a value of 64 for the number of cells.

// 3. Set a counter to 0.

// 4. Create a global variable to be used for the row array.

// 5. Create a loop that will iterate up to the number of cells you want in the array, 
// plus one to include the zero value. In our example, we would use 64+1.

// 6. Add an outer if statement, which uses modulo to check if the main counter 
// is divisible by 8 or whatever number of columns you want.

// 7. Inside the preceding if statement, add another if statement to check if the 
// row is undefined, indicating whether it is the first run or whether the row 
// is complete. If the row has been defined, then add the row to the main grid 
// array.

// 8. To finish off the outer if statement, if the counter is divisible by 8, clear the 
// row array—it has already been added to the grid by the inner if statement.

// 9. At the end of the for loop, increment of the main counter by 1.

// 10. Set up a temporary variable to hold the value of the counter and push it to 
// the row array.

// 11. Within the loop iteration, check if the value of the counter is equal to the total 
// number of columns you want; if it is, then add the current row to the grid.

// 12. Please note that the extra cell will not be added to the grid since there aren't 
// enough cells to make a new row within the condition that adds the rows to 
// the grid. An alternative solution would be to remove the +1 from the loop 
// condition and add grid.push(row) after the loop is completed, both of which 
// will provide the same solution output.

// 13. Output the grid into the console.

// let gridArray = [];
// let cellNum = 64;
// let counter = 0;
// let row;

// for (let x = 0; x < cellNum + 1; x++) {
//     if (counter % 5 == 0) {
//         if (row != undefined) {
//             gridArray.push(row)
//         }
//         row = [];
//     }
//     counter++
//     let temp = counter;
//     row.push(temp);
// }
// console.table(gridArray);

// !! PRACTICE EXERCISE 5.6 !!

// This exercise will construct an array as it loops through the incrementing values of 
// x. Once the array is done, this exercise also will demonstrate several ways to output 
// array contents. 

// 1. Create an empty array

// 2. Run a loop 10 times, adding a new incrementing value to the array

// 3. Log the array into the console

// 4. Use the for loop to iterate through the array (adjust the number of iterations 
// to however many values are in your array) and output into the console

// 5. Use the for of loop to output the value into the console from the array

// let years = [];

// for (let x = 2000; x < 2023; x++) {
//     let temp = x;
//     years.push(temp);
// }
// console.log(years);

// for (let year of years) {
//     console.log("The year is " + year);
// }

// !! PRACTICE EXERCISE 5.7 !!

// In this exercise, we will experiment with looping over objects and internal arrays.

// 1. Create a simple object with three items in it.

// 2. Using the for in loop, get the properties' names and values from the object 
// and output them into the console.

// 3. Create an array containing the same three items. Using either the for loop or 
// the for in loop, output the values from the array into the console

// let me = {
//     fname : "Bianca",
//     lname : "Dreyer",
//     age : 21,
// };

// for (let prop in me) {
//     console.log(me[prop], prop);
// }

// let meArr = ["Bianca", "Dreyer", 21];

// for (let props of meArr) {
//     console.log(props);
// }

// !! PRACTICE EXERCISE 5.8 !! 

// This exercise will demonstrate how to create a string with all the digits as it loops 
// through them. We can also set a value to skip by adding a condition that will use 
// continue, skipping the matching condition. A second option is to do the same 
// exercise and use the break keyword. 

// 1. Set up a string variable to use as output.

// 2. Select a number to skip, and set that number as a variable.

// 3. Create a for loop that counts to 10.

// 4. Add a condition to check if the value of the looped variable is equal to the 
// number that should be skipped.

// 5. If the number is to be skipped in the condition, continue to the next number.

// 6. As you iterate through the values, append the new count value to the end of 
// the main output variable.

// 7. Output the main variable after the loop completes.
// 8. Reuse the code, but change the continue to break and see the difference. It 
// should now stop at the skip value.

// let output = "";
// let skip = 6;

// for (let x = 0; x < 11; x++) {
//     if (x == skip) {
//         continue;
//     }
//     output += " " + String(x);

// }
// console.log(output);


// let outputB = "";
// let skipB = 6;

// for (let x = 0; x < 11; x++) {
//     if (x == skipB) {
//         break;
//     }
//     outputB += " " + String(x);

// }
// console.log(outputB);

// !! CHAPTER PROJECT !!

// MATH MULTIPLUCATION TABLE

// In this project, you will create a math multiplication table using loops. You can do 
// this using your own creativity or by following some of the following suggested steps:

// 1. Set up a blank array to contain the final multiplication table.

// 2. Set a value variable to specify how many values you want to multiply with 
// one another and show the results for.

// 3. Create an outer for loop to iterate through each row and a temp array to store 
// the row values. Each row will be an array of cells that will be nested into the 
// final table.

// 4. Add an inner for loop for the column values, which will push the multiplied 
// row and column values to the temp array.

// 5. Add the temporary row data that contains the calculated solutions to the 
// main array of the final table. The final result will add a row of values for the 
// calculations.

// let multiplicationTable = [];
// let values = 15;


// for (let y = 0; y < values + 1; y++) {
//     let temp = [];
//     for (x = 0; x < values + 1; x++) {
//         temp.push(x*y);
//     }
//     multiplicationTable.push(temp);
// }
// console.table(multiplicationTable);

// !! SELF-CHECK QUIZ !!

// 1. What is the expected output for the following code?

// let step = 3;
// for (let i = 0; i < 1000; i += step) {
//     if (i > 10) {
//         break;
//     }
//     console.log(i);
// }

// 0369
// INCORRECT:
// 0
// 3
// 6
// 9

// 2. What is the final value for myArray, and what is expected in the console?

// const myArray = [1, 5, 7];
// for (el in myArray) {
//     console.log(Number(el));
//     el = Number(el) + 5;
//     console.log(el);
// }
// console.log(myArray);

// 0
// 5
// 1
// 6
// 2
// 7
// CORRECT






