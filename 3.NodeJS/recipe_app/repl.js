// mongoose = require("mongoose"),
// Subscriber = require("./models/subscriber");
// mongoose.connect(
// "mongodb://127.0.0.1:27017/recipe_db",
// {useNewUrlParser: true}
// );
// mongoose.Promise = global.Promise;

// Subscriber.create({
// name: "Jon Wexler",
// email: "jon@gmail.com",
// zipCode: 10000
// })
// .then((result) => {
// console.log("result");
// console.log(result);
// })
// .catch((err) => {
// console.log("err");
// console.log(err);
// })

// const Course = require("./models/course");
// var testCourse, testSubscriber;
// Course.create( {
//  title: "Tomato Land",
//  description: "Locally farmed tomatoes only",
//  zipCode: 12345,
//  items: ["cherry", "heirloom"]
// }).then(course => testCourse = course);
// Subscriber.findOne({}).then(
//  subscriber => testSubscriber = subscriber
// );
// testSubscriber.courses.push(testCourse._id);
// testSubscriber.save();
// Subscriber.populate(testSubscriber, "courses").then(subscriber =>
//  console.log(subscriber)
// );

const mongoose = require("mongoose"),
Subscriber = require("./models/subscriber");
mongoose.connect(
"mongodb://127.0.0.1:27017/recipe_db",
{useNewUrlParser: true}
);
mongoose.Promise = global.Promise;

// Subscriber.findOne({
// name:"Jon"
// })
// .then(subscr => {
// console.log("*******subscr");
// console.log(subscr);
 
// })
// .catch((error) => {
// console.log("error occured");
// console.log(error);
// })


// Subscriber.findOne({
// name: "Jon"
// })
// .then(result => {
// console.log(subscr.getInfo());
// })
// .catch(error=>{
// console.log("error occurred");
// console.log(error);
// })


// Subscriber.create({
// name: "Joe Goldberg",
// email: "joe@gmail.com",
// zipCode: 10000
// })
// .then((result) => {
// console.log("result");
// console.log(result);
// });

// Subscriber.findOne({
// name: "Jon Wexler"
// })
// .then(result => {
// console.log(result.getInfo());
// })
// .catch(error=>{
// console.log("error occurred");
// console.log(error);
// })
// .catch((err) => {
// console.log("err");
// console.log(err);
// })

// Subscriber.findOne({
// name: "Jon Wexler"
// })
// .then(result => {
// result.findLocalSubscribers()
// .then((result) => {
// console.log("result of local sub")
// console.log(result);
// })
// })
// .catch(error=>{
// subscriber = error
// console.log(subscriber.getInfo());
// console.log(error);
// })

// const Course = require("./models/course");
// var testCourse, testSubscriber;
// Course.create( {
//  title: "Tomato Land",
//  description: "Locally farmed tomatoes only",
//  zipCode: 12345,
//  items: ["cherry", "heirloom"]
// }).then(course => testCourse = course);
// Subscriber.findOne({}).then(
//  subscriber => testSubscriber = subscriber
// );
// testSubscriber.courses.push(testCourse._id);
// testSubscriber.save();
// Subscriber.populate(testSubscriber, "courses").then(subscriber =>
//  console.log(subscriber)
// );

console.log(Subscriber.find({courses: new mongoose.Types.ObjectId("5986b8aad7f31c479a983b42")}))