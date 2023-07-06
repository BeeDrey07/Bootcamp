"use strict";
// require is a global object of Node.js that allows a module to import another module.
// The following code uses require to search for a file called messages and import it, 
// also storing it within a variable. The code from the messages.js file can then be used within this file.
const messageModule = require("./messages");

messageModule.messages.forEach(m => console.log(m));