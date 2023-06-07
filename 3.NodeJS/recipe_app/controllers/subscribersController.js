const Subscriber = require("../models/subscriber"),
    mongoose = require("mongoose");
exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({})
        .then((result) => {
            req.data = result;
            next();
        })
        .catch((error) => {
            next(error);

        })
};

exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
};
exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
        .then((result) => {
            res.render("thanks")
        })
        .catch((error) => {
            res.send(error);

        })
};
exports.getAllSubscribers = (req, res) => {
    Subscriber.find({})
        .exec()
    find({})
    promise
        .then
        .then
        .then
        .catch
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


