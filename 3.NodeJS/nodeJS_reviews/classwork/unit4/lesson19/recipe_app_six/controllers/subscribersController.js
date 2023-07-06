// Require mongoose so that you have access to the tools needed to save the model to the database.
const mongoose = require("mongoose"),
    //Require Subscriber model from subscriber module (so it can be integrated into code logic).
    //Won't have to reference Subscriber model in main.js anymore.
    Subscriber = require("../models/subscriber");

//Create a controller action for when a request is made to view all subscribers.
//Will be accesible to any file that requires the module.
// exports.getAllSubscribers = (req, res, next) => {
//     Subscriber.find({})
//         .then((result) => {
//             req.data = result;
//             res.render("subscribers", { subscribers: req.data });
//             next();
//         })
//         .catch((error) => {
//             next(error);

//         })
// };

// Promise: similar to middleware. Neater way of presenting nested callback functions.
// Uses then(to run a block of code) otherwise if error occurs, it is rejected at each block and caught at
// catch.
exports.getAllSubscribers = (req, res) => {
    Subscriber.find({})
        .exec()
        .then((subscribers) => {
            res.render("subscribers", {
                subscribers: subscribers
            });
        })
        .catch((error) => {
            console.log(error.message);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        });
};

// Renders an EJS page from the views folder.
exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
};
// saveSubscriber collects data from the request body and uses the body-parser package to read it's contents.
exports.saveSubscriber = (req, res) => {
    // new model instance created.
    let newSubscriber = new Subscriber({
        // subscriber fields mapped to request body parameters.
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    // save new subscriber.
    newSubscriber.save()
        .then(result => {
            res.render("thanks");
        })
        .catch(error => {
            res.send(error);
        })
};



