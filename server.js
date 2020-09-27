const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser"); // required to read the cookie and JWT to work

//----------------------------------------- END OF DEPENDENCIES---------------------------------------------------
//`mongodb+srv://herokuUser:${process.env.herokuPass}@cluster0.beusi.mongodb.net/`
mongoose.connect("mongodb://localhost:27017/gradeBot", {useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log("Successfully connected to Database");
});

// Define middleware here
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//----------------------------------------- END OF MIDDLEWARE ---------------------------------------------------

const userRouter = require("./routes/Api.js");

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});