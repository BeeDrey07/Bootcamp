const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    // require mongoose package (no longer need most of mongoDB code from lesson 13).
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");

// set up connection to database.
mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);
// assign database to variable(can later use in file for database/ database state changes).
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// Instantiate a new subscriber.
// var subscriber1 = new Subscriber({
//     name: "Jon Wexler",
//     email: "jon@jonwexler.com"
// });
// Save a subscriber to the database.
// subscriber1.save()
//     .then(function (models) {
//         console.log(models);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// Create and save a subscriber in one simple step.
// Subscriber.create(
//     {
//         name: "Jon Wexler",
//         email: "jacky@jackywexler.com"
//     })
//     .then((result)=> {
//         console.log("printing error");
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log("printing error");
//         console.log(error)
//     }
// );

Subscriber.findOne({ name: "Jon Wexler" })
    .where("email", /wexler/)
    .then((result) => {
        console.log("result2");
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
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
app.get("/contact", homeController.showSignUp);

app.post("/contact", homeController.postedSignUpForm);

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

