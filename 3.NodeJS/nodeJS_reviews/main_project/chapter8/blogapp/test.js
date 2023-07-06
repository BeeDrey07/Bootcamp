const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongoose.connect("mongodb://127.0.0.1/my_database", { useNewUrlParser: true });

// Create a blogpost.
// BlogPost.create({
//   title: "The Mythbuster Guide to Saving Money on Energy Bills",
//   body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting Fthem everything at this time of year. They go like this:",
// })
//   .then((blogpost) => console.log(blogpost))
//   .catch((error) => console.log(error));

//Find all blogposts.
// BlogPost.find({})
// .then((blogposts) => console.log(blogposts))
// .catch((error) => console.log(error));

// Find a particular blogpost.
// BlogPost.find({
//   title: "The Mythbuster's Guide to Saving Money on Energy Bills",
// })
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Looking for a blogpost with a specific word in the title.
// BlogPost.find({
//     title: /The/
// })
// .then(blogpost => {
//     console.log(blogpost)
// })
// .catch(error => {
//     console.log(error)
// })

// Find single documents using their unique id.

// var id = "64a2d828aa823aa61ac10d5e";

// BlogPost.findById(id)
//   .then((blogpost) => console.log(blogpost))
//   .catch((error) => console.log(error));

// Updating records.

// var id = "64a2d828aa823aa61ac10d5e";

// BlogPost.findByIdAndUpdate(id, {
//   title: "Updated title",
// })
//   .then((blogpost) => console.log(blogpost))
//   .catch((error) => console.log(error));

// var id = "64a2d7f0749cba9938502a7e";

// BlogPost.findByIdAndDelete(id, {
//   title: "Updated title",
// })
//   .then((blogpost) => console.log(blogpost))
//   .catch((error) => console.log(error));
