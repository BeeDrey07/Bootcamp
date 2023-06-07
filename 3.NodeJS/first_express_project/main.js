"use strict";

const port = 3000,
    express = require("express"),
    homeController = require("./controllers/homeController"),
app = express();
// app
//     .get("/", (req, res) => {
//         console.log(req.params);
//         console.log(req.body);
//         console.log(req.url);
//         console.log(req.query);
//         res.send("Hello, Universe!");
//     })
// app.use((req, res, next) => {
//     console.log(`request made to: ${req.url}`);
//     next();
// })
// app.use(
//     express.urlencoded({
//         extended: false
//     })
// )
//     .use(express.json())
//     .post("/", (req, res) => {
//         console.log(req.body);
//         console.log(req.query);
//         res.send("POST Successful!");
//     })
//     .get("/items/:vegetable", (req, res) => {
//         res.send(req.params.vegetable);
//     })
app.get("/items/:vegetable", homeController.sendReqParam)
    .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});