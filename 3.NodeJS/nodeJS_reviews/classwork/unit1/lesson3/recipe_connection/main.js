"use strict";
// Using require to import the cities package.
const cities = require("cities");
// Using a method called zip_lookup that comes with the cities package to look up a zip code.
var myCity = cities.zip_lookup("10016");
console.log(myCity);