// const User = require("../models/user");
// module.exports = {
//   index: (req, res) => {
//     User.find({})
//       .then((users) => {
//         res.render("users/index", {
//           users: users,
//         });
//       })
//       .catch((error) => {
//         console.log(`Error fetching users: ${error.message}`);
//         res.redirect("/");
//       });
//   },
// };

const User = require("../models/user");

module.exports = {
  index: (req, res, next) => {
    User.find()
      .then((users) => {
        res.locals.users = users;
        next();
      })
      .catch((error) => {
        console.log(`Error fetching users: ${error.message}`);
        next(error);
      });
  },
  indexView: (req, res) => {
    res.render("users/index");
  },
  // new action takes incoming requests to create a new user and renders the form in new.ejs.
  new: (req, res) => {
    res.render("users/new");
  },
  // create action recieves incoming posted data from the form in new.ejs and passes that data to the next
  // middleware function through a response object.
  create: (req, res, next) => {
    // assigning a variable to incoming collected data.
    let userParams = {
      name: {
        first: req.body.first,
        last: req.body.last,
      },
      email: req.body.email,
      password: req.body.password,
      zipCode: req.body.zipCode,
    };
    // passing parameters to User.create.
    User.create(userParams)
      .then((user) => {
        // upon success, redirects to /users.
        res.locals.redirect = "/users";
        res.locals.user = user;
        next();
      })
      // upon failure, redirects to error page.
      .catch((error) => {
        console.log(`Error saving user: ${error.message}`);
        next(error);
      });
  },
  // redirectView determines which view to show according to redirect path it recieved.
  redirectView: (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    else next();
  },
  show: (req, res, next) => {
    // Collect the user id from the request params.
    let userId = req.params.id;
    // Find the user by it's id.
    User.findById(userId)
      .then((user) => {
        // Pass the user through the response object through the next middleware function.
        res.locals.user = user;
        next();
      })
      .catch((error) => {
        // Log and pass errors to next middleware function.
        console.log(`Error fetching user by ID: ${error.message}`);
        next(error);
      });
  },
  showView: (req, res) => {
    // render the show view
    res.render("users/show");
  },
};
