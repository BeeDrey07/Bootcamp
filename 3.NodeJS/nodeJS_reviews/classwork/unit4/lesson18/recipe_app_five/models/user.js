const mongoose = require("mongoose"),
  { Schema } = mongoose,
  userSchema = new Schema(
    {
      // Name property broken up into an object.
      name: {
        // trim to prevent extra white space.
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
      // added password property.
      password: {
        type: String,
        required: true,
      },
      courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
      subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" },
    },
    {
      // Records created at and updated at dates at all times.
        timestamps: true,
    }
  );

// Virtual attribute(computed attribute): simalar to schema but not saved to database.
userSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

module.exports = mongoose.model("User", userSchema);
