const httpStatus = require("http-status-codes"),
    htmlContentType = {
        "Content-Type": "text/html"
    },
    // Define a routes object to store routes mapped to POST and GET requests.
    routes = {
        "GET": {
            "/info": (req, res) => {
                res.writeHead(httpStatus.OK, {
                    "Content-Type": "text/plain"
                })
                res.end("Welcome to the Info Page!")
            }
        },
        'POST': {}
    };
    // Create a function called handle to process route callback functions.
exports.handle = (req, res) => {
    // code in try block executed first and if it throws an exception, code in catch block executed.
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex);
    }
};
// build GET and POST functions to register routes from main.js
exports.get = (url, action) => {
    routes["GET"][url] = action;
};
exports.post = (url, action) => {
    routes["POST"][url] = action;
};
// routes object used internally by handle, GET and POST functions (accessible to other project files through module's exports.)