const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    // MongoClient sets up a connection to local database at its default port
    MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "recipe_db";

// Callback function returns connection to MongoDB server.
MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    // Get the database called recipe_db from your connection to the server.
    let db = client.db(dbName);
    // Ask database to find all records in contacts collection and return them in an array.
    db.collection("contacts")
        // .find()
        // // Resulting data returned in callback function.
        // .toArray((error, data) => {
        //     if (error) throw error;
        //     // Log results to console.
        //     console.log(data);
        // })
        .insert({
            name: "Bianca Dreyer",
            email: "bianca@dreyer.com"
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        });
});

app.set("port", process.env.PORT || 3000);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get(
            "port"
        )}`
    );
});

