const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gradeBot')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  //connected
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/admins", (req, res) => {


})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
