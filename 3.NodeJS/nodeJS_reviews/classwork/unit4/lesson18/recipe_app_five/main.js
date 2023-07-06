const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    subscribersController = require("./controllers/subscribersController"),
    usersController = require("./controllers/usersController");


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
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
console.log(req.data);
res.send(req.data);
});
// app.get("/users", usersController.index);
app.get("/users", usersController.index, usersController.indexView);
app.get("/contact", subscribersController.getSubscriptionPage);
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

