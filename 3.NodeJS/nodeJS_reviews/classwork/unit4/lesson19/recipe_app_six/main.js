const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  errorController = require("./controllers/errorController"),
  mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber"),
  subscribersController = require("./controllers/subscribersController"),
  usersController = require("./controllers/usersController"),
  // Create a router object that offers its own middleware and routing alongside express.js app object.
  router = express.Router();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/recipe_db", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(layouts);

// replaced app with router (for routes). (Tells app to use router object as system for routing and middleware).
app.use("/", router);
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/courses", homeController.showCourses);
router.get(
  "/subscribers",
  subscribersController.getAllSubscribers,
  (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
  }
);
router.get("/users", usersController.index, usersController.indexView);
// Takes incoming GET requests to /users/new and renders new.ejs
router.get("/users/new", usersController.new);
router.get("/users/:id", usersController.show, usersController.showView);
// Accepts POST requests to /users/create and passes that incoming req body to create action.
// Then to the redirectView action.
router.post(
  "/users/create",
  usersController.create,
  usersController.redirectView
);
router.get("/contact", subscribersController.getSubscriptionPage);
router.post("/contact", subscribersController.getSubscriptionPage);
router.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.logErrors);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
