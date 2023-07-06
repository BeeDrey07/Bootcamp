"use strict";

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    // requiring the fs module into a console
    // the fs module interacts with the file system on your application's behalf.
    fs = require("fs");
const routeMap = {
    //routes to index.html file
    "/": "views/index.html"
};
// http.createServer((req, res) => {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "text/html"
//         });
//         if (routeMap[req.url]) {
//             // read contents of mapped file. Returns any potential errors that may have occured
//             //in two seperate parameters(error and data).
//             fs.readFile(routeMap[req.url], (error, data) => {
//                 //respond with file contents
//                 res.write(data);
//                 res.end();
//             });
//         } else {
//             res.end("<h1>Sorry, not found.</h1>");
//         }
//     })
//     .listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

// Using fs and Routing to dynamically read and serve files in main.js
// create function to interpolate url into file path
// const getViewUrl = (url) => {
//     return `views${url}.html`;
// };
// http.createServer((req, res) => {
    //get the file path string
//     let viewUrl = getViewUrl(req.url);
//     //interpolate request url into fs file search
//     fs.readFile(viewUrl, (error, data) => {
//         if (error) {
//             res.writeHead(httpStatus.NOT_FOUND);
//             res.write("<h1>FILE NOT FOUND</h1>");
//         } else {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });
//             res.write(data);
//         }
//         res.end();
//     });
// })
//     .listen(port);
// console.log(`The server has started and is listening on port number:${port}`);

// created public folder with assets such as images, css and js.(work alongside views on client side).
// moving file-reading logic into it's own function and adding if statements to handle specific file-type requests.

// creating a error-handling function
const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};
http
    .createServer((req, res) => {
        // storing request's url in a variable url
        let url = req.url;
        // checking url to see whether it contains a file extension
        if (url.indexOf(".html") !== -1) {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            //call read file to read file contents.
            customReadFile(`./views${url}`, res);
        } else if (url.indexOf(".js") !== -1) {
            res.writeHead(httpStatus.OK, {
                //customize content's response type.
                "Content-Type": "text/javascript"
            });
            customReadFile(`./public/js${url}`, res);
        } else if (url.indexOf(".css") !== -1) {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/css"
            });
            customReadFile(`./public/css${url}`, res);
        } else if (url.indexOf(".png") !== -1) {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "image/png"
            });
            customReadFile(`./public/images${url}`, res);
        } else {
            sendErrorResponse(res);
        }
    })
    .listen(3000);
console.log(`The server is listening on port number: ${port}`);
const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};