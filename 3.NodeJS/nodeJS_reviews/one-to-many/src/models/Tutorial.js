const mongoose = require("mongoose");

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    // Case1: Images array for the one-to-few relationship.
    images: [],
    // Case2: Comments array for the one-to-many relationship.
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    // Case3: Category array for the one-to-aLot relationship.(Parent Referencing)
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  })
);

module.exports = Tutorial;
