// !! PRACTICE EXERCISE 2.1 !!

// What are the types of these variables listed below? Verify this with typeof and 
// output the result to the console:

// let str1 = 'Laurence'; 
// let str2 = "Svekis"; 
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(str1, typeof str1);
// console.log(str2, typeof str2);
// console.log(val1, typeof val1);
// console.log(val2, typeof val2);
// console.log(myNum, typeof myNum);

// !! PRACTICE EXERCISE 2.2 !!

// Create a variable for your name, another one for your age, and another one for 
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are 
// variables: 
// Hello, my name is Maaike, I am 29 years old and I can code JavaScript: 
// true.

// let myName = "Bianca";
// let age = 21;
// let canICode = true;

// console.log("Hello, my name is " +  myName + ", I am " + age + " and I can code JavaScript: \n" + canICode);

// !! PRACTICE EXERCISE 2.3 !!

// Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
// theorem when given the values of the other two sides. The theorem specifies that the 
// relation between the sides of a right-angled triangle is 
// a2  + b2 = c2

// You can use prompt() to get the value for a and b. Write code to get the value from 
// the user for a and b. Then square the values of both a and b before adding them 
// together and finding the square root. Print your answer to the console.

// let side1 = prompt("Give the length of one side of a right-angled triangle.");
// let side2 = prompt("Give the length of another side of a right-angled triangle.");
// let a2 = side1**2;
// let b2 = side2**2;
// let c2 = a2 + b2;
// let c= Math.sqrt(c2).toFixed(2);
// console.log(c);

// !! PRACTICE EXERCISE 2.4 !!

// Create variables for three numbers: a, b, and c. Update these variables with the 
// following actions using the assignment operators:

// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console

// let a = 9;
// let b = 2;
// let c = 5;

// console.log(b+a);
// console.log(a/c);
// console.log(c = c%b);

// !! CHAPTER PROJECT !! 

// MILES-TO-KILOMETERS CONVERTER 

// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format: 
// The distance of 130 kms is equal to 209.2142 miles
// For reference, 1 mile equals 1.60934 kilometers.

// let miles = prompt("Insert a number of miles to be converted to kilometers.");
// let kilometers = miles * 1.60934;

// alert("The distance of " + kilometers + " kms is equal to " + miles + " miles.");

// BMI CALCULATOR

// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console.

// let inches = prompt("Insert height (in).");
// let pounds = prompt("Insert weight (lb).");
// let height = inches * 2.54;
// let weight = pounds / 2.2046;
// let bmi = weight / (height/100)**2;
// alert("The BMI is: " + bmi);

// !! SELF-CHECK QUIZ !!

// 1. What data type is the following variable? 
// const c = "5";

// string 

// 2. What data type is the following variable? 
// const c = 91;

// number

// 3. Which one is generally better, line 1 or line 2?
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2

// line 2 is better.

// 4. What is the console output for the following? 
// let a = "Hello";
// a = "world";
// console.log(a);

// The console output is "world".

// 5. What will be logged to the console?
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);

// "Hello world!" will be logged to the console.

// 6. What is the value of a? 
// let a = "Hello";
// a = prompt("world");
// console.log(a);

// The value of a is undefined.

// 7. What is the value of b output to the console? 
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);

// 70

// 8. What is the value of result?
// let result = 3 + 4 * 2 / 8;

// 4

// 9.What is the value of total and total2?
// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);

// total = 16
// total2 = 536

// 10. What is logged to the console here?

// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0); 
// console.log(a == 5 && b == 4); 
// console.log(true ||false); 
// console.log(a == 3 || b == 10); 
// console.log(a == 3 || b == 7); 

// true
// false
// true
// true
// false















