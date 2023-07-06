const port = 3000,
    express = require("express"),
    app = express();
    homeController = require("./controllers/homeController");
// Defining a middleware function
app.use((req, res, next) => {
    //logging the request's path to the console
    console.log(`request made to: ${req.url}`);
    //calling the next function: necessary to alert express.js that your code has completed.
    next();
});
app.use(
    express.urlencoded({
        extended: false
    })
);
// tell express.js application to parse URL encoded data
app.use(express.json());
// create a new post route for the home page
app.post("/", homeController.logRequestPaths);
app.post("/", (req, res) => {
    //log the request's body
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});
// adding a route to get URL parameters.
// express.js lets you write parameters in the path(a way of sending data through a request).
// route parameters have a colon before the parameter name and can exist anywhere in the path.
// app.get("/items/:vegetable", homeController.sendReqParam);
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

