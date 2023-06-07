// const express = require("express"),
//   app = express(),
//   errorController = require("./controllers/errorController"),
//   homeController = require("./controllers/homeController"),
//   layouts = require("express-ejs-layouts"),
//   mongoose = require("mongoose");


// const MongoDB = require("mongodb").MongoClient,
//     dbURL = "mongodb://127.0.0.1:27017",
//     dbName = "recipe_db";
// MongoDB.connect(dbURL, (error, client) => {
//     if (error) throw error;
//     let db = client.db(dbName);
//     db.collection("contacts")
//         .find()
//         .toArray((error, data) => {
//             if (error) throw error;
//             console.log(data);
//         });
//     db.collection("contacts")
//         .insert({
//             name: "Freddie Mercury",
//             email: "fred@queen.com"
//         }, (error, db) => {
//             if (error) throw error;
//             console.log(db);
//         });
// });

//     Subscriber = require("./models/subscriber");
// subscribersController = require("./controllers/subscribersController")
// mongoose.connect(
//     "mongodb://127.0.0.1:27017/recipe_db",
//     { useNewUrlParser: true }
// );
// const db = mongoose.connection;
// db.once("open", () => {
//     console.log("Successfully connected to MongoDB using Mongoose!");
// });

// app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
//         console.log(req.data);
//         res.send(req.data);
//     });


// const subscriberSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     zipCode: Number
// });

// // Subscriber = mongoose.model("Subscriber", subscriberSchema);


// // Subscriber.create(
// //     {
// //         name: "Jon Wexler",
// //         email: "jon@jonwexler.com"
// //     })
// //     .then((result)=> {
// //         console.log("printing error");
// //         console.log(result)
// //     })
// //     .catch((error) => {
// //         console.log("printing error");
// //         console.log(error)
// //     }
// // );

// // first method: using exec to run a saved query
// let query = Subscriber.findOne({ name: "Jon Wexler" })
//     .where("email", /wexler/);
// query.exec()
//     .then((result) => {
//         console.log("result1");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// // second method: running without saved query
// Subscriber.findOne({ name: "Jon2 Wexler" })
//     .where("email", /wexler/)
//     .then((result) => {
//         console.log("result2");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

"use strict";

const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    usersController = require("./controllers/usersController"),
    router = express.Router(),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    methodOverride = require("method-override"),
    expressSession = require("express-session"),
    cookieParser = require("cookie-parser"),
    connectFlash = require("connect-flash"),
    bcrypt = require("bcrypt"),
    expressValidator = require("express-validator"),
    passport = require("passport"),
    User = require("./models/user");

mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// var myQuery = Subscriber.findOne({
//     name: "Jon Wexler"
// }).where("email", /wexler/);

// myQuery.exec((error, data) => {
//     if (data) console.log(data.name);
// });

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

router.use(cookieParser("secret_passcode"));
router.use(expressSession({
    secret: "secret_passcode",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}));
router.use(connectFlash());

router.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

router.use(expressValidator());

router.use(passport.initialize());
router.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.use((req, res, next) => {
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    res.locals.flashMessages = req.flash();
    next();
});



router.get("/users/logout", usersController.logout, usersController.redirectView);
router.get("/users/login", usersController.login);
router.post("/users/login", usersController.authenticate);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);

app.use("/", router);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.validate, usersController.create, usersController.redirectView);
app.get("/users", usersController.index, usersController.indexView);





app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.render("subscribers", { subscribers: req.data });
});
router.get("/users/:id", usersController.show, usersController.showView);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
