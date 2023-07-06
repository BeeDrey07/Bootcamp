const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    subscribersController = require("./controllers/subscribersController");

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(express.static("public"));
app.use(layouts);

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/courses", homeController.showCourses);
// app.get("/contact", homeController.showSignUp);
// Looking for get requests made to the subscribers path.
// Pass the requests to the getAllSubscribers function in the in subscribersController.js.
// GET route to subscribers path.
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
// Attach results of query to request object.
console.log(req.data);
// Attach results of query to request object and pass to next middleware function.
//(Custom callback function created to render data in the browser).
res.send(req.data);
});
app.get("/contact", subscribersController.getSubscriptionPage);
// Modify existing POST route.
app.post("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.use(errorController.logErrors);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});

