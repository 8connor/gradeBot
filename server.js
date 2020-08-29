const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');

var db = require('./models');

mongoose.connect('mongodb://localhost/gradeBot');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.post("/api/createUser", (req, res) => {
  var adminAcc = {
    Email: "connorh16@gmail.com",
    Password: "123",
    AccessType: "Admin"
  }

  db.Admin.create(adminAcc).then(created => {
    res.json(created);
  })
  .catch(err => console.log(err))
})

app.get("/api/allUsers", (req, res) => {
  db.User.find({})
    .lean()
    .then(function(users) {
      res.json(users);
    })
    .catch(err => console.log(err));
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
