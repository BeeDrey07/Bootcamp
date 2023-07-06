"use strict";
// A different way to write the code from lesson 4:
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
// converting objects (may have more objects nested within) to a readable string format.
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
};

// fires the code in a callback function when request is triggered.
app.on("request", (req, res) => {
    // creating an array to hold data when data comes through in a request.
    var body = [];
    // pushing the data to the array, as it comes through in chunks.
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });
    // converting data to a string.
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });
    // requesting method,url, and headers from request and then converting to readable string format.
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);
    // prepares response by assigning response code 200 and defining content-type
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>This will show on the screen.</h1>";
    //sends HTML content within brackets and simultaneously closes connection.
    res.end(responseMessage);
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);