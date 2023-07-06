const mongoose = require("mongoose"),
Subscriber = require("./subscriber"),

  { Schema } = mongoose,
  userSchema = new Schema(
    {
      name: {
        first: {
          type: String,
          trim: true,
        },
        last: {
          type: String,
          trim: true,
        },
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
      },
      zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999,
      },
      password: {
        type: String,
        required: true,
      },
      courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
      subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" },
    },
    {
      timestamps: true,
    }
  );

userSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

// Setting up a pre['save'] hook.
// Use the function keyword in the callback.
userSchema.pre("save", function (next) {
  let user = this;
  // Add a quick conditional check for existing subscriber connections.
  if (user.subscribedAccount === undefined) {
    // Query for a single subscriber.
    Subscriber.findOne({
      email: user.email,
    })
      // Connect the user with a subscriber account.
      .then((subscriber) => {
        user.subscribedAccount = subscriber;
        next();
      })
      // Pass any errors to the next middleware functions.
      .catch((error) => {
        console.log(`Error in connecting subscriber: ${error.message}`);
        next(error);
      });
  // Call next middleware function if user already has an association.     
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
