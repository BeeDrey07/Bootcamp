// !! PRACTICE EXERCISE 8.1 !!

// Output the decodeURIComponent() for the string How's%20it%20going%3F to the
// console. Also, encode the string How's it going? to be output into the console.
// Create a web URL and encode the URI:

// 1. Add the strings as variables in the JavaScript code

// 2. Using encodeURIComponent() and decodeURIComponent() output the results
// into the console

// 3. Create a web URI with request parameters http://www.basescripts.
// com?=Hello World";

// 4. Encode and output the web URI into the console

// let uri = "How's%20it%20going%3F";

// let decoded_uri = decodeURIComponent(uri);
// console.log("Decoded: ", decoded_uri);
// let encoded_uri = encodeURIComponent(decoded_uri);
// console.log("Encoded: ", encoded_uri);

// let webURI = "http://www.basescripts.com?=Hello World";

// let encoded_webURI = encodeURI(webURI);
// console.log("Encoded: ", encoded_webURI);

// !! PRACTICE EXERCISE 8.2 !!

// Remove duplicates from the array using filter() and indexOf(). The starting array
// is:

// ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
//  "Laurence", "Mike", "Laurence", "Mike"]

// Using the array filter() method, this will create a new array using the elements that
// pass the test condition implemented by the function. The final result will be:

//  [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]
// Take the following steps:

// 1. Create an array of names of people. Make sure you include duplicates. The
// exercise will remove the duplicate names.

// 2. Using the filter() method, assign the results of each item from the array as
// arguments within an anonymous function. Using the value, index, and array
// arguments, return the filtered result. You can set the return value to true
// temporarily as this will build the new array with all the results in the original
// array.

// 3. Add a console.log call within the function that will output the index value
// of the current item in the array. Also add the value so you can see the results
// of the item value that has the current index number and the first matching
// result from the array's index value.

// 4. Using indexOf() the current value returns the index value of the item
// and applies the condition to check to see if it matches the original index
// value. This condition will only be true on the first result so all subsequent
// duplicates will be false and not get added to the new array. false will not
// return the value into the new array. The duplicates will all be false since the
// indexof() only gets the first match in the array.

// 5. Output the new, unique value array onto the console.

// let arr = ["Robyn", "Bianca", "Tazlyn", "Rico", "Tyler", "Bianca", "Tyler", "Robyn", "Tyler",
//     "Bianca", "Robyn"];

// let newArr = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(newArr);

// !! PRACTICE 8.3 !!

// Using the array map() method, update an array's contents. Take the following steps:

// 1. Create an array of numbers.

// 2. Using the array map method and an anonymous function, return an updated
// array, multiplying all the numbers in the array by 2. Output the result into
// the console.

// 3. As an alternative method, use the arrow function format to multiply each
// element of the array by 2 with the array map() method in one line of code.

// 4. Log the result onto the console.

// let arr = [7, 5, 3, 1];

// let newArr = arr.map(function (element) {
//     return element * 2;
// });
// console.log(newArr);

// let newArr2 = arr.map((element) => element * 2);
// console.log(newArr2);

// !! PRACTICE EXERCISE 8.4 !!

// Using string manipulation, create a function that will return a string with the first
// letter of all the words capitalized and the rest of the letters in lowercase. You should
// transform the sentence thIs will be capiTalized for each word into This Will Be
// Capitalized For Each Word:

// 1. Create a string with several words that have letters with different cases, a
// mix of upper and lowercase words.

// 2. Create a function that gets a string as an argument, which will be the value
// that we will manipulate.

// 3. In the function first transform everything to lowercase letters.

// 4. Create an empty array that can hold the values of the words when we
// capitalize them.

// 5. Convert the phrase into words in an array using the split() method.

// 6. Loop through each one of the words that are now in the new array, so you
// can select each one independently. You can use forEach() for this.

// 7. Using slice() isolate the first letter in each word, then transform it to
// uppercase. Again using slice(), get the remaining value of the word
// without including the first letter. Then concatenate the two together to form
// the word that is now capitalized.

// 8. Add the new capitalized word into the blank array that you created. By the
// end of the loop you should have an array with all the words as separate
// items in the new array.

// 9. Take the array of updated words and using the join() method, transform
// them back into a string with spaces between each word.

// 10. Return the value of the newly updated string with capitalized words that can
// then be output into the console.

// let string = "hElLo mY NamE iS bIAnCa DrEyeR.";

// function fixSentence(sentence) {
//     sentence = sentence.toLowerCase();
//     let arr = [];
//     let words = sentence.split(" ");

//     words.forEach(word => {
//         let temp = word.slice(0,1).toUpperCase() + word.slice(1);
//         arr.push(temp);
//     });
//     return arr.join(" ");

// }
// console.log(fixSentence(string));

// !! PRACTICE EXECRISE 8.5 !!

// Using the replace() string method, complete this vowel replacer exercise by
// replacing the vowels in a string with numbers. You can start with this string:

// I love JavaScript

// And turn it into something like the following:

// 2 l3v1 j0v0scr2pt

// Take the following steps:

// 1. Create the previously specified string, and convert it to lowercase.

// 2. Create an array containing the vowels: a, e, i, o, u.

// 3. Loop through each letter you have in the array, and output the current letter
// into the console so that you can see which letter will be converted.

// 4. Within the loop, using replaceAll() update each vowel substring with the
// index value of the letter from the vowel array.

// let str = "I love JavaScript";
//     str = str.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];

// vowels.forEach((vowel, i) => {
//     console.log(vowel);
//     str = str.replaceAll(vowel, i);
// });
// console.log(str);

// !! PRACTICE EXERCISE 8.6 !!

// Experiment with the Math object with these steps:

// 1. Output the value of PI into the console using Math.

// 2. Using Math get the ceil() value of 5.7, get the floor() value of 5.7, get the
// round value of 5.7, and output it into the console.

// 3. Output a random value into the console.

// 4. Use Math.floor() and Math.random() to get a number from 0 to 10.

// 5. Use Math.floor() and Math.random() to get a number from 1 to 10.

// 6. Use Math.floor() and Math.random() to get a number from 1 to 100.

// 7. Create a function to generate a random number using the parameters of min
// and max. Run that function 100 times, returning into the console a random
// number from 1 to 100 each time.

// console.log(Math.PI);

// let x = 5.7;
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.round(x));

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 11));

// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.floor(Math.random() * 100) + 1);

// function generateNum(min, max) {
//     return Math.floor(Math.random() * (max - min) + 1);
// }

// for (let x = 0; x < 100; x++) {
//     console.log(generateNum(1, 100));
// }

// !! PRACTICE EXERCISE 8.7 !!

// Output the date with the full month name into the console. When converting to or
// from arrays, remember that they are zero-based:

// 1. Set up a date object, which can be any date in the future or past. Log the date
// out into the console to see how it is typically output as a date object.

// 2. Set up an array with all the named months of the year. Keep them in
// sequential order so that they will match the date month output.

// 3. Get the day from the date object value, using getDate().

// 4. Get the year from the date object value, using getFullYear().

// 5. Get the month of the date object value, using getMonth().

// 6. Set up a variable to hold the date of the date object and output the month
// using the numeric value as the index for the array month name. Due to
// arrays being zero-based and the month returning a value of 1-12, the result
// needs to be subtracted by one.

// 7. Output the result into the console.

// let d = new Date(2023, 6, 25);
// console.log(d);

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let day = d.getDay();
// let year = d.getFullYear();
// let month = d.getMonth();

// let myDate = `${months[month - 1]} ${day} ${year}`;
// console.log(myDate);

// !! CHAPTER PROJECTS !!

// WORD SCRAMBLER

// Create a function that returns a value of a word and scrambles the letter order with
// Math.random():

// 1. Create a string that will hold a word value of your choice.

// 2. Create a function that can intake a parameter of the string word value.

// 3. Just like an array, strings also have a length by default. You can use this
// length to set the loop maximum value. You will need to create a separate
// variable to hold this value as the length of the string will be decreasing as the
// loop continues.

// 4. Create an empty temporary string variable that you can use to hold the new
// scrambled word value.

// 5. Create a for loop that will iterate the number of letters within the string
// parameter starting at 0 and iterating until the original length value of the
// string is reached.

// 6. Create a variable that will randomly select one letter using its index value,
// with Math.floor() and Math.random() multiplied by the current length of the
// string.

// 7. Add the new letter to the new string and remove it from the original string.

// 8. Using console.log() output the newly constructed string from the random
// letters and output to the console both the original string and the new one as
// the loop continues.

// 9. Update the original string by selecting the substring from the index value
// and adding it to the remaining string value from the index plus one onward.
// Output the new original string value with the removed characters.

// 10. As you loop through the content you will see a countdown of the remaining
// letters, the new scrambled version of the word as it is built, and the
// decreasing letters in the original word.

// 11. Return the final result and invoke the function with the original string word
// as an argument. Output this to the console.

// let word = "happiness";

// function scramble(str) {
//     let max = str.length;
//     let temp = " ";
//     for (let i = 0; i < max; i++) {
//         console.log(str.length);
//         let randNum = Math.floor(Math.random() * str.length);
//         temp += str[randNum];
//         console.log(temp);
//         str = str.substr(0, randNum) + str.substr(randNum + 1);
//         console.log(str);
//     }
//     return temp;
// }
// console.log(scramble(word));

// COUNTDOWN TIMER

// Create code for a countdown timer that can be executed in the console window, and
// will show the total milliseconds, days, hours, minutes, and seconds remaining until a
// target date is reached:

// 1. Create an end date that you want to count down to. Format it in a date type
// format within a string.

// 2. Create a countdown function that will parse the endDate() and subtract the
// current date from that end date. This will show the total in milliseconds.
// Using Date.parse() you can convert a string representation of a date to a
// numeric value as a number of milliseconds since January 1, 1970, 00:00:00
// UTC.

// 3. Once you have the total milliseconds, to get the days, hours, minutes, and
// seconds you can take the following steps:

// • To get days you can divide the number of milliseconds in a date,
// removing the remainder with Math.floor().

// • To get hours you can use modulus to capture just the remainder once
// the total days are removed.

// • To get minutes you can use the value of milliseconds in a minute and
// using the modulus capture the remainder.

// • Do the same for seconds by dividing the number by seconds in
// milliseconds and getting the remainder. If you use Math.floor() you
// can round down removing any remaining decimal places that will be
// shown in the lower values.

// 4. Return all the values within an object with property names indicating what
// the unit of time the values refer to.

// 5. Create a function to use a setTimeout() to run the update() function every
// second (1,000 milliseconds). The update() function will create a variable that
// can temporarily hold the object return values of countdown(), and create an
// empty variable that will be used to create the output values.

// 6. Within the same function, using the for loop get all the properties and values
// of the temp object variable. As you iterate through the object update the
// output string to contain the property name and property value.

// 7. Using console.log(), print the output result string into the console.

let endDate = "July 25, 2030";

function countdown() {
  const total = Date.parse(endDate) - new Date();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((total / 1000 / 60) % 60);
  const secs = Math.floor((total / 1000) % 60);
  return {
    days,
    hrs,
    mins,
    secs,
  };
}

function update() {
  let temp = countdown();
  let output = " ";
  for (const property in temp) {
    output += `${property}:${temp[property]}`;
  }
  console.log(output);
  setTimeout(update, 1000);
}

update();

// !! SELF-CHECK QUIZ !!

// 1. Which method will decode the following?
// var c = "http://www.google.com?id=1000&n=500";
// var e = encodeURIComponent(c);
// a. decodeURIComponent(e)
// b. e.decodeUriComponent()
// c. decoderURIComponent(c)
// d. decoderURIComponent(e)

// a - CORRECT

// 2. What will be output into the console from the following syntax?
// const arr = ["hi","world","hello","hii","hi","hi World","Hi"];
// console.log(arr.lastIndexOf("hi"));

// 4 - CORRECT

// 3. What is the result of the below code in the console?
// const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
// arr.copyWithin(0, 3, 5);
// console.log(arr);

// ["Hii", "hi", "hello", "Hii","hi","hi World","Hi"]; - CORRECT

// 4. What is the result of the below code in the console?
// const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
// const arr2 = arr.filter((element,index)=>{
//  const ele2 = element.substring(0, 2);
//  return (ele2 == "hi");
// });
// console.log(arr2);

// ["hi", "hi World"]; - CORRECT
