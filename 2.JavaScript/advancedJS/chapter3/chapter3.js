// !! PRACTICE EXERCISE 3.1 !! 

// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."

// let shoppingList = ["Milk", "Bread", "Apples"];

// 2. Check your list length in the console

// console.log(shoppingList.length);

// 3. Update "Bread" to "Bananas."

// shoppingList[1] = "Bananas";

// 4. Output your entire list to the console

// console.log(shoppingList);

// !! PRACTICE EXERCISE 3.2 !!

// 1. Create an empty array to use as a shopping list.

// let shoppingList = [];
// console.log(shoppingList);

// 2. Add Milk, Bread, and Apples to your list.

// shoppingList.push("Milk", "Bread", "Apples");
// console.log(shoppingList);

// 3. Update "Bread" with Bananas and Eggs.

// shoppingList.splice(1, 1, "Bananas", "Eggs");
// console.log(shoppingList);

// 4. Remove the last item from the array and output it into the console.

// shoppingList.pop();
// console.log(shoppingList);

// 5. Sort the list alphabetically.

// shoppingList.sort();
// console.log(shoppingList);

// 6. Find and output the index value of Milk.

// console.log(shoppingList.find( e => e === "Milk"));

// 7. After Bananas, add Carrots and Lettuce.

// shoppingList.splice(1, 0, "Carrots", "Lettuce");

// 8. Create a new list containing Juice and Pop

// shoppingList2 = ["Juice", "Pop"];

// 9. Combine both lists, adding the new list twice to the end of the first list.

// newList = shoppingList.concat(shoppingList2, shoppingList2);
// console.log(newList);

// 10. Get the last index value of Pop and output it to the console.

// console.log(newList.lastIndexOf("Pop"));

// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]

// console.log(newList);

// !! PRACTICE EXERCISE 3.3 !!

// 1. Create an array containing three values: 1, 2, and 3.

// array = [1, 2, 3];

// 2. Nest the original array into a new array three times.

// arrOfArrays = [array, array, array];

// 3. Output the value 2 from one of the arrays into the console.

// console.log(arrOfArrays[2][1]);

// !! PRACTICE EXERCISE 3.4 !!

// 1. Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.

// let myCar = {
//     make: "Volkswagen",
//     model: "Polo",
//     transmission: "manual",
//     colour : "Red",
//     year: 2005,
//     forSale : true
// };

// 2. Create a variable that can hold the string value color. This variable 
// containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation 
// to assign a new value to the color property in myCar.

// let newProp = "colour";

// myCar[newProp] = "White";
// console.log(myCar.colour);

// 3. Use that same variable and assign a new property string value to it, such as 
// forSale. Use the bracket notation once again to assign a new value to the 
// forSale property to indicate whether the car is available for purchase.

// newProp = "forSale";
// myCar[newProp] = false;
// console.log(myCar.forSale);

// 4. Output make and model into the console.

// console.log(myCar.make, myCar.model);

// 5. Output the value of forSale into the console.

// console.log(myCar.forSale);

// !! PRACTICE EXERCISE 3.5 !!

// 1. Create an object named people that contains an empty array that is called friends.

// let people = {
//     friends : []
// };

// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.

// let friend1 = {
//     firstName : "Robyn",
//     lastName : "Erasmus",
//     idNumber : "0105095582063"
// };

// let friend2 = {
//     firstName : "Tazlyn",
//     lastName : "Fallie",
//     idNumber : "0110072230548"
// };

// let friend3 = {
//     firstName : "Naledi",
//     lastName : "White",
//     idNumber : "0203224756814"
// };

// 3. Add the three friends to the friend array

// people.friends.push(friend1, friend2, friend3);

// 4. Output it to the console

// console.log(people);

// !! CHAPTER PROJECTS !!

// MANIPULATING AN ARRAY

// Take the following array: 

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// Manipulate your array using various methods, such as pop(), push(), shift(), and 
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

// theList.splice(2, 7, "MIDDLE", "hello World");
// theList.shift();
// theList.unshift("FIRST");
// theList.push("LAST");
// console.log(theList);

// COMPANY PRODUCT CATALOGUE

//In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.

// 1. Create an array to hold an inventory of store items

// let inventory = [];

// 2. Create three items, each having the properties of name, model, cost, and quantity.

// let item1 = {
//     name: "iPhone",
//     model: "14 Pro max",
//     cost: "R25 000",
//     quantity: 150
// };

// let item2 = {
//     name: "Samsung",
//     model: "A23",
//     cost: "R3 500",
//     quantity: 500
// };

// let item3 = {
//     name: "Huawei",
//     model: "P50",
//     cost: "R9 000",
//     quantity: 375
// };

// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.

// inventory.push(item1, item2, item3);
// console.log(inventory);

// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure.

// console.log(inventory[2]["quantity"]);

// !! SELF-CHECK QUIZ !!

// 1. Can you use const and update values within an array?

// Yes you can.
// CORRECT. However cannot redeclare array itself.

// 2. Which property in an array gives the number of items contained in the array?

// length
//CORRECT

// 3. What is the output in the console?
// const myArr1 = [1,3,5,6,8,9,15];
// console.log(myArr1.indexOf(0));
// console.log(myArr1.indexOf(3));

// -1
// 1
//CORRECT

// 4. How do you replace the second element in an array myArr = 
// [1,3,5,6,8,9,15] with the value 4?

// myArr.splice(1, 1, 4);
//CORRECT

// 5. What is the output in the console?
// const myArr2 = [];
// myArr2[10] = 'test'
// console.log(myArr2);
// console.log(myArr2[2]);

// 9 undefined values and the 10th value of the value 'test'. - INCORRECT. [ empty x 10 , "test" ]
// undefined - CORRECT

// 6. What is the output in the console?
// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);

//undefined - CORRECT











