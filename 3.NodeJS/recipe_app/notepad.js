// const mongoose = require("mongoose"),
//  Subscriber = require("./models/subscriber"),
//  Course = require("./models/course");
// var testCourse,
//  testSubscriber;
// mongoose.connect(
//  "mongodb://127.0.0.1:27017/recipe_db",
//  {useNewUrlParser: true}
// );
// mongoose.Promise = global.Promise;
// Subscriber.deleteMany({})
//  .then((items) => console.log(`removed all subscribers records!`))
//  .then(() => {
//  return Course.deleteMany({});
//  })
//  .then((items) => console.log(`removed  records!`))
//  .then(() => {
// return Subscriber.create( {
// name: "Jon",
// email: "jon@jonwexler.com",
// zipCode: "12345"
// });
//  })
//  .then(subscriber => {
//  console.log(`Created Subscriber: ${subscriber.getInfo()}`);
//  })
//  .then(() => {
//  return Subscriber.findOne( {
// name: "Jon"
//  });
//  })
//  .then(subscriber => {
//  testSubscriber = subscriber;
//  console.log(`Found one subscriber: ${subscriber.getInfo()}`);
//  })
// .then(() => {
// return Course.create({
// title: "Tomato Land",
// description: "Locally farmed tomatoes only",
// zipCode: 12345,
// items: ["cherry", "heirloom"]
// });
//  })
//  .then(course => {
//  testCourse = course;
//  console.log(`Created course: ${course.title}`);
//  })
//  .then(() => {
// testSubscriber.courses.push(testCourse);
//  testSubscriber.save();
//  })
//  .then( () => {
// return Subscriber.populate(testSubscriber, "courses");
//  })
//  .then(subscriber => console.log(subscriber))
//  .then(() => {
// return Subscriber.find({ courses: new mongoose.Types.ObjectId( testCourse._id) });
// })
// .then(subscriber => console.log(subscriber));

User = require("./models/user")
var testUser;
User.create({
    name: {
        first: "Jon",
        last: "Wexler"
    },
    email: "jon@jonwexler.com",
    password: "pass123"
})
    .then(user => testUser = user)
    .catch(error => console.log(error.message));
findOne({ email: "jon@jonwexler.com" }).then(u => testUser = u)
    .catch(e => console.log(e.message));

var testUser;
const User = require("./models/user")
User.create({
    name: {
        first: "Jon",
        last: "Wexler "
    },
    email: "jon@jonwexler.com",
    password: "pass123"
})
    .then(user => {
        testUser = user;
        return Subscriber.findOne({
            email: user.email
        });
    })
    .then(subscriber => {
        testUser.subscribedAccount = subscriber;
        testUser.save().then(user => console.log("user updated"));
    })
    .catch(error => console.log(error.message));