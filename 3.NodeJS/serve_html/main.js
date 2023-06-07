// "use strict";

// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     app = http.createServer();
// app.on("request", (req, res) => {
//     const getJSONString = obj => {
//         return JSON.stringify(obj, null, 2);
//     };
//     var body = [];
//     req.on("data", (bodyData) => {
//         body.push(bodyData);
//     });
//     req.on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(`Request Body Contents: ${body}`);
//     });

//     console.log
//         (`Method: ${getJSONString(req.method)}`);
//     console.log
//         (`URL: ${getJSONString(req.url)}`);
//     console.log
//         (`Headers: ${getJSONString(req.headers)}`);
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
//     let responseMessage = "<h1>This will show on the screen.</h1>";
//     res.end(responseMessage);
// });
// app.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

"use strict"
// const routeResponseMap = {
//     "/info": "<h1>Info Page</h1>",
//     "/contact": "<h1>Contact Us</h1>",
//     "/about": "<h1>Learn More About Us.</h1>",
//     "/hello": "<h1>Say hello by emailing us here</h1>",
//     "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
// };
// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     app = http
//         .createServer((req, res) => {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });
//             if (routeResponseMap[req.url]) {
//                 setTimeout(() => res.end(routeResponseMap[req.url]), 10000);
//                 res.end(routeResponseMap[req.url]);
//             } else {
//                 res.end("<h1>Welcome!</h1>");
//             }
//         });
// app.listen(port);
// console.log(`The server has started and is listening on port number:${port}`);

// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     fs = require("fs");
// const routeMap = {
//     "/": "views/index.html"
// };
// http
//     .createServer((req, res) => {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "text/html"
//         });
//         if (routeMap[req.url]) {
//             fs.readFile(routeMap[req.url], (error, data) => {
//                 res.write(data);
//                 res.end();
//             });
//         } else {
//             res.end("<h1>Sorry, not found.</h1>");
//         }
//     })
//     .listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     fs = require("fs");
// const getViewUrl = (url) => {
//     return `views${url}.html`;
// };
// http.createServer((req, res) => {
//     let viewUrl = getViewUrl(req.url);
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


// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     fs = require("fs");
// const sendErrorResponse = res => {
//     res.writeHead(httpStatus.NOT_FOUND, {
//         "Content-Type": "text/html"
//     });
//     res.write("<h1>File Not Found!</h1>");
//     res.end();
// };
// http
//     .createServer((req, res) => {
//         let url = req.url;
//         if (url.indexOf(".html") !== -1) {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });
//             customReadFile(`./views${url}`, res);
//         } else if (url.indexOf(".js") !== -1) {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/javascript"
//             });
//             customReadFile(`./public/js${url}`, res);
//         } else if (url.indexOf(".css") !== -1) {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/css"
//             });
//             customReadFile(`./public/css${url}`, res);
//         } else if (url.indexOf(".png") !== -1) {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "image/png"
//             });
//             customReadFile(`./public/images${url}`, res);
//         } else {
//             sendErrorResponse(res);
//         }
//     })
//     .listen(3000);
// console.log(`The server is listening on port number: ${port}`);
// const customReadFile = (file_path, res) => {
//     if (fs.existsSync(file_path)) {
//         fs.readFile(file_path, (error, data) => {
//             if (error) {
//                 console.log(error);
//                 sendErrorResponse(res);
//                 return;
//             }
//             res.write(data);
//             res.end();
//         });
//     } else {
//         sendErrorResponse(res);
//     }
// };

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");
const routeMap = {
    "/": "views/index.html"
};
http
    .createServer((req, res) => {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        if (routeMap[req.url]) {
            fs.readFile(routeMap[req.url], (error, data) => {
                res.write(data);
                res.end();
            });
        } else {
            res.end("<h1>Sorry, not found.</h1>");
        }
    })
    .listen(port);
console.log(`The server has started and is listening
   ➥ on port number: ${port}`);