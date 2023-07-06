"use strict";
// Create a port variable and assign it 3000. 3000 has no signficance, generally used for web servers in development.
const port = 3000,
     // require http module
    http = require("http"),
     // require http-status-codes module
    httpStatus = require("http-status-codes"),
    // creating app variable that contains a method to create the server.
    // the method takes in request (from clients) and response (an object of Node.js that passes info about current client
    // transaction from function to function) as parameters for the function.
    app = http.createServer((request, response) => {
        console.log("Received an incoming request!");
        // writehead is a method to define basic properties of the response's HTTP header.
        // HTTP headers contain info that describes content being transferred in request or response.
        // OK: represents 200 response code. Shows that request was recieved succesfully, and will return content in HTML form.
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        let responseMessage = "<h1>Hello, Universe!</h1>";
         // using response to add data, and the write method to write a line of html (responseMessage).
        response.write(responseMessage);
        // using end to tell server that you're done writing content, so that client can recieve response.
        response.end(); 
         // logging a response to see that response was sent from server itself.
        console.log(`Sent a response : ${responseMessage}`);
    });
 // telling the application to listen at the created port(which is 3000).
app.listen(port);
// logging the port to show that the server is listening at port 3000.
console.log(`The server has started and is listening on port number: ${port}`); 