

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


//----------------------------------------- END OF DEPENDENCIES---------------------------------------------------


var db = require('./models');

mongoose.connect('mongodb://localhost/gradeBot', {useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log("Successfully connected to Database");
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//----------------------------------------- END OF MIDDLEWARE ---------------------------------------------------




app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


