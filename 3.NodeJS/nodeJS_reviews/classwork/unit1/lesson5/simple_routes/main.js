"use strict";
// starting same code from lesson4/simple_server
// adding routes
const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1> <a href=\"examplecompany@getmail.com\"> Email us! </a>",
    "/error": "<h1><b>ERROR 404<b></h1><p>Sorry the page you are looking for is not here.<p>"
};
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        console.log("Received an incoming request!");
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
            // setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
        } else {
            res.end("<h1>Welcome!</h1>");
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`); 