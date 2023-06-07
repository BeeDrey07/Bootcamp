// !! PRACTICE EXERCIS 9.1 !!

// 1. Go back to the website you were just viewing and execute the command 
// console.dir(window).

// 2. Can you find the document object that is nested within the window object? 
// Under the root of the window object in the console, you can navigate down to 
// the object that is named document.

// 3. Can you find the height and width (in pixels) of your window? You can 
// return the inner and outer window.

// Type the following code in the browser console.

// console.dir(window);

// Type the following code in the browser console, after displaying the window.

// window.innerHeight;
// window.innerWidth;
// window.outerHeight;
// window.outerWidth;

// !! PRACTICE EXERCISE 9.2 !!

// Travel through the window object to get to the location object, then output the values 
// of the protocol and href properties of the current file, into the console.

// Type the following code into the console:

// console.log(location.href);
// console.log(location.protocol);

// !! PRACTICE EXERCISE 9.3 !!

// Select a page element and update the content, change the style, and add attributes. 
// Create an HTML file containing a page element with a class of output using the 
// following code template: 

// <!DOCTYPE html >
// <html>
// <div class="output"></div>
//  <script>
//  </script>
// </html>

// Within the script tags, make the following changes to the output element:

// 1. Select the page element as a JavaScript object.

// 2. Update the textContent property of the selected page element.

// 3. Using the classList.add object method, add a class of red to the element.

// 4. Update the id property of the element to tester.

// 5. Through the style object, add a backgroundColor property of red to the page 
// element.

// 6. Get the document URL via document.URL and update the text of the output 
// element to contain the value of the document URL. You can log it in the 
// console first to ensure you have the correct value.

// !! SELF-CHECK QUIZ !!

// 1. Go to your favorite website and open the browser console. Type document.
// body. What do you see in the console?

// I see a drop down list for document appear. It then shows what the html og the document contains,
// which includes the doctype tag, html tag(along with a data-aid attribute), a drop-down list for the head tag,
// and a drop down list for the body tag.

// 2. As we know, with objects, we can write to the property value and assign a 
// new value with the assignment operator. Update the textContent property 
// of the document.body object on a web page of your choosing to contain the 
// string Hello World.

// document.body.textContent = "Hello World";

// 3. Use what we learned about objects to list out BOM object properties and 
// values. Try it on the document object.

// for (const property in document) {
//  console.log(`${property}: ${document[property]}`);
// }

// 4. Now do the same for the window object.

// for (const property in window) {
//     console.log(`${property}: ${document[window]}`);
//    }

// 5. Create an HTML file with an h1 tag. Use JavaScript and select the page 
// element with the h1 tag and assign the element into a variable. Update the 
// textContent property of the variable to Hello World.

// check html file.