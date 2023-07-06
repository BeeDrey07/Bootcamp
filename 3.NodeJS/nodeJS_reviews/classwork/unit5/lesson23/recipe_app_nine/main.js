const mongoose = require("mongoose"),
  express = require("express"),
  app = express(),
  router = express.Router(),
  Subscriber = require("./models/subscriber"),
  subscribersController = require("./controllers/subscribersController"),
  usersController = require("./controllers/usersController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  // express session allows you to store your messages in a few ways on the users browser.
  expressSession = require("express-session"),
  // cookies(one form of session storage), package indicates that you want to use and parse cookie data.
  cookieParser = require("cookie-parser"),
  // connectFlash package to create flash messages.(dependent on sessions and cookies)
  connectFlash = require("connect-flash");

const methodOverride = require("method-override");

mongoose.connect("mongodb://127.0.0.1:27017/recipe_db", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(layouts);
app.use(express.static("public"));

app.get(
  "/subscribers",
  subscribersController.getAllSubscribers,
  (req, res, next) => {
    console.log(req.data);
    res.render("subscribers", { subscribers: req.data });
  }
);

app.use("/", router);

// Method ovveride
router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
router.use(cookieParser("secret_passcode"));
router.use(
  expressSession({
    secret: "secret_passcode",
    cookie: {
      maxAge: 4000000,
    },
    resave: false,
    saveUninitialized: false,
  })
);
router.use(connectFlash());
// Telling express to pass a local object called flash messages to view.
router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

router.get("/users", usersController.index);
router.get("/users/new", usersController.new);

router.get("/users/:id", usersController.show, usersController.showView);
// Add routes to handle editing
router.get("/users/:id/edit", usersController.edit);
// Process data from the edit form and then display the user show page
router.put(
  "/users/:id/update",
  usersController.update,
  usersController.redirectView
);
// Delete route
router.delete(
  "/users/:id/delete",
  usersController.delete,
  usersController.redirectView
);
////////////////////////////
router.post(
  "/users/create",
  usersController.create,
  usersController.redirectView
);
router.get("/contact", subscribersController.getSubscriptionPage);
router.post("/subscribe", subscribersController.saveSubscriber);
app.get("/", homeController.respondWithName);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
