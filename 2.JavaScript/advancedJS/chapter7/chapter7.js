// !! PRACTICE EXERCISE 7.1 !!

// Take the following steps to create a person class, and print instances of friends' 
// names:

// 1. Create a class for Person including the constructor for firstname and 
// lastname.

// 2. Create a variable and assign a value of the new Person object using your 
// friend's first and last names.

// 3. Now add a second variable with another friend's name using their first name 
// and last name.

// 4. Output both friends into the console with a greeting of hello.

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let friend1 = new Person ("Robyn", "Erasmus");
// let friend2 = new Person("Tazlyn", "Fallie");

// console.log("Hello", friend1.firstname, friend1.lastname);
// console.log("Hello", friend2.firstname, friend2.lastname);

// !! PRACTICE EXERCISE 7.2 !!

// Get your friend's full name:

// 1. Using the Person class from Practice exercise 7.1, add a method called 
// fullname, which returns the concatenated value of firstname and lastname
// when invoked.

// 2. Create values for person1 and person2 using two friends' first and last names.

// 3. Using the fullname method within the class, return the full name of one or 
// both people.

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     fullName() {
//         return this.firstname + " " + this.lastname;
//     }
// }

// let friend1 = new Person("Robyn", "Erasmus");
// let friend2 = new Person("Tazlyn", "Fallie");

// console.log(friend1.fullName());
// console.log(friend2.fullName());

// !! PRACTICE EXERCISE 7.3 !!

// Create a class that contains properties for different animal species and the sound that 
// each species makes, and create two (or more) animals:

// 1. Create a method that prints a given animal and its sound. 

// 2. Add a prototype with another action for the animal.

// 3. Output an entire animal object into the console.

// class Animal {
//     constructor(species, sound) {
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log("I am a " + this.species + " so I " + this.sound);
//     }
// }

// let dog = new Animal("dog", "bark");
// let cat = new Animal("cat", "meow");
// let bird = new Animal("bird", "chirp");

// Animal.prototype.rollOver = function () {
//     return "The " + dog.species + " is rolling over.";
// }

// Animal.prototype.sleep = function () {
//     return "The " + cat.species + " is sleeping.";
// }

// Animal.prototype.fly = function () {
//     return "The " + bird.species + " is flying.";
// }

// bird.makeSound();
// console.log(cat.sleep());
// console.log(dog);

// !! CHAPTER PROJECTS !!

// EMPLOYEE TRACKING APP

// Create a class to track the employees of a company:

// 1. Use first names, last names, and the number of years worked as values in the 
// constructor.

// 2. Create two or more people with values for their first names, last names, and 
// the number of years they've worked at the company. Add the people into an 
// array.

// 3. Set up a prototype to return the details of the person's first and last names 
// and how long they've worked at the company.

// 4. Iterate the contents of the array to output the results into the console, adding 
// some text to make the output a full sentence.

// class Employee {
//     constructor(firstName, lastName, yearsWorked) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearsWorked = yearsWorked;
//     }

// }

// let emp1 = new Employee("Sarah", "Smith", "10");
// let emp2 = new Employee("Joe", "Jackson", "3");
// let emp3 = new Employee("Meghan", "Daniels", "12");

// let empArr = [emp1, emp2, emp3];

// Employee.prototype.details = function () {
//     return this.firstName + " " + this.lastName + " has worked at this company for " + 
//     this.yearsWorked + " years.";
// }

// empArr.forEach((employee) => {
//     console.log(employee.details());
// });

// MENU ITEMS PRICE CALCULATOR

// Create a class which will allow you to work out the combined price of a number of 
// items, and interact with it to work out the total cost of different orders.

// 1. Create a class that contains the prices of two menu items as private field 
// declarations.

// 2. Use the constructor in the class to get the argument values (how many of 
// each item are being bought).

// 3. Create a method to calculate and return the total cost depending on how 
// many of each item the user selects.

// 4. Use a getter property to grab the value output by the calculation method.

// 5. Create two or three objects with different combinations of menu selections, 
// and output the total cost in the console.

// class Menu {
//     #hotWings = 60;
//     #cheeseBurger = 40;
//     constructor(quantity1, quantity2) {
//         this.quantity1 = quantity1;
//         this.quantity2 = quantity2;
//     }

//     calc() {
//         return (this.quantity1 * this.#hotWings) + (this.quantity2 * this.#cheeseBurger);
//     }

//     get total() {
//         return this.calc();
//     }
// }

// let quantity1 = new Menu(3, 1);
// let quantity2 = new Menu(1, 2);
// let quantity3 = new Menu(0,1);
// console.log(quantity1.total);
// console.log(quantity2.total);
// console.log(quantity3.total);

// !! SELF-CHECK QUIZ !!

// 1. What is the keyword used to create a class?

// class - CORRECT

// 2. How would you set up a class for a person's first and last names that could 
// include first and last as initial properties?

// class Person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// } - CORRECT

// 3. What is the concept of one thing gaining the properties and behaviors of 
// another thing called?

// inheriting - INCORRECT : inheritance

// 4. Which of the following are true about the constructor method?
// • It gets executed automatically when a new object is created. - True - CORRECT
// • It should only be added afterward. - False - CORRECT
// • It has to include the constructor keyword. - True - CORRECT
// • It is used to initialize object properties. - True - CORRECT
// • It can be used when you have multiple values. - False - CORRECT


// 5. Troubleshoot the following code so that the prototype outputs the first and 
// last name of the Person into the console. Which is the correct syntax for the 
// Person prototype? 

// function Person(first,last) {
//  this.first = first;
//  this.last = last;
// }

// // What should go here: A, B, or C?

// const friend1 = new Person("Laurence", "Svekis");
// console.log(friend1.getName());

// A)
// Person.prototype.getName = (first,last) {
//  return this.first + " " + this.last;
// };

// B)
// Person.prototype.getName = function getName() {
// return this.first + " " + this.last;
// };

// C) 
// Person.prototype = function getName() {
// return this.first + " " + this.last;
// };

// A - INCORRECT: B


