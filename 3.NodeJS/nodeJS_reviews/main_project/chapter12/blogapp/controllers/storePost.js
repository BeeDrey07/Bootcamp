"use strict";

const blogPost = require("../models/BlogPost.js");
const path = require("path");

// Creating a new post and saving it to the database
// Added functionality to add images
module.exports = (req, res) => {
  let image = req.files.image;
  image
    .mv(path.resolve(__dirname, "../public/img", image.name))
    .then((blog) => {
      blogPost
        .create({
          ...req.body,
          image: "/img/" + image.name,
        })
        .then(() => {
          console.log("Post successful");
          res.redirect("/");
        })
        .catch((error) => {
          const validationErrors = Object.keys(error.errors).map(
            (key) => error.errors[key].message
          );
          console.log("THE INSIDE catch block ***************************");
          console.log(validationErrors);
          console.log("Flashing data:");
          console.log(req.body);
          req.flash("validationErrors", validationErrors);
          req.flash("data", req.body);
          res.redirect("/posts/new");
        });
    })
    .catch((error) => {
      console.log("The main catch block ################");
    });
};

module.exports = (req, res) => {
  let image = req.files.image;
  image
    .mv(path.resolve(__dirname, "../public/img", image.name))
    .then((blog) => {
      blogPost
        .create({
          ...req.body,
          image: "/img/" + image.name,
        })
        .then(() => {
          console.log("Post successful");
          res.redirect("/");
        })
        .catch((error) => {
          const validationErrors = Object.keys(error.errors).map(
            (key) => error.errors[key].message
          );
          console.log("THE INSIDE catch block ***************************");
          console.log(validationErrors);
          req.flash("validationErrors", validationErrors);
          req.flash("data", req.body);
          res.redirect("/posts/new");
        });
    })
    .catch((error) => {
      console.log("The main catch block ################");
    });
};
