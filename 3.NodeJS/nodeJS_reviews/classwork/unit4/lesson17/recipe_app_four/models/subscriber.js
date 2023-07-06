"use strict"

const mongoose = require("mongoose");

// Adding validators(rules that you apply to your model properties, preventing them from saving
// to the db unless those rules are met).
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: data MUST exist for the model instance in order for it to be saved to the db.
        required: true
    },
    email: {
        type: String,
        required: true,
        // lowercase: all emails are not case sensitive.
        lowercase: true,
        // unique: no two records can have the same email. (schema helper, but behaves like a validator here).
        unique: true
    },
    zipCode: {
        type: Number,
        // If a number is less than 1000 digits then you get the given message.
        min: [10000, "Zip code too short"],
        // If a number is more than 9999 digits then you get a generic error from mongoose and the data won't save.
        max: 99999
    },
    // Associating the course and subscriber model by referencing the the courses model.
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

// Instance method to get fullname of subscriber.
subscriberSchema.methods.getInfo = function () {
    return `Name: ${this.name} Email: ${this.email} Zip Code:${this.zipCode}`;
};
// Instance method to get subscribers with the same zip code.
subscriberSchema.methods.findLocalSubscribers = function () {
    return this.model("Subscriber")
        .find({ zipCode: this.zipCode })
        // Access  model to use find method.
        .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);

