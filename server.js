

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


//----------------------------------------- END OF DEPENDENCIES---------------------------------------------------


var db = require('./models');

mongoose.connect('mongodb://localhost/gradeBot');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//----------------------------------------- END OF MIDDLEWARE ---------------------------------------------------


// Define API routes here

// =============================================================================

//GET ROUTES BELOW HERE

// =============================================================================
app.get("/api/allUsers", (req, res) => {
  db.User.find({})
    .lean()
    .then(function (users) {
      res.json(users);
    })
    .catch(err => console.log(err));
});

app.get("/api/allTeachers", (req, res) => {
  db.User.find({ accessType: "Teacher" })
    .lean()
    .then(function (users) {
      res.json(users);
    })
    .catch(err => console.log(err));
});

app.get("/api/allAssignments", (req, res) => {
  db.Assignment.find({})
    .lean()
    .then(function (assignments) {
      res.json(assignments);
    })
    .catch(err => console.log(err));
});

app.get("/api/allClasses", (req, res) => {
  console.log("hit here")
  db.Classroom.find({})
    .lean()
    .then(function (classes) {
      res.json(classes);
    })
    .catch(err => console.log(err));
});


app.get("/api/average", (req, res) => {
  //req coming in
  var studentId = req.body._id

  db.User.find({
    where: {
      _id: studentId
    }
  })
    .lean()
    .then(function (users) {
      // this is where the user object can be manipulated

      // orm.averageCalculation(users);

    })
    .then(Average => res.json(Average))
    .catch(err => console.log(err));
});

// =============================================================================

//POST ROUTES BELOW HERE

// All Routes will be moved to a ROUTES object and managed by Controller

// =============================================================================

app.post("/api/adminCreateUser", (req, res) => {

  console.log(req.body);

  db.User.findOne({ email: req.body.email }, async (err, user) => {

    if (err) throw err;
    if (user) res.send("User alread exists");
    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        accessType: req.body.accessType
      });

      await newUser.save();

      res.send("User Created");

    }
  })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/specificGrade/", (req, res) => {
  console.log("hit here")
  console.log(req.body)
  db.Assignment.find({ grades: { studentID: req.body.studentID } })
    .lean()
    .then(function (assignments) {

      console.log(assignments);

      // db.User.find({ _id: assignments.studentID })

      res.json(assignments);
    })
    .catch(err => console.log(err));
});


app.post("/api/studentQuery/", (req, res) => {
  console.log(req.body)

  db.User.find(req.body)
    .lean()
    .then(function (students) {

      let sortedStudents = students.map((sorted, index) => {
        let rObj = {
          studentID: sorted._id,
          firstName: sorted.firstName,
          lastName: sorted.lastName
        }
        return rObj;
      });

      console.log(sortedStudents);
      res.json(sortedStudents);
    })
    .catch(err => console.log(err));
});

app.post("/api/changeGrade", (req, res) => {
  //req coming in
  var studentId = req.body._id

  db.Assignment.UpdateOne({
    where: {
      studentId: studentId
    }
  })
    .lean()
    .then(function (users) {
      // this is where the user object can be manipulated

      // orm.averageCalculation(users);

    })
    .then(Average => res.json(Average))
    .catch(err => console.log(err));
});

app.post("/api/createAssignment", (req, res) => {
  //req coming in
  var Assignment = req.body

  //This will create the assignment.
  db.Assignment.create(Assignment)
    .then(function (assignment) {
      console.log(assignment);
      //this responds with the assignment that has been added.

    })
    .catch(err => console.log(err));
});

app.post("/api/createClass", (req, res) => {
  //req coming in
  var className = req.body;


  //This will create the class.
  db.Classroom.create(className)
    .then(function (random) {
      //this responds with the assignment that has been added.
      res.json(random);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/addStudentList", (req, res) => {
  // console.log(req.body)

  db.Classroom.updateMany({ name: req.body.className }, { students: req.body.students })
    .lean()
    .then(classRoomAdd => {
   

      res.send("you hit here !");
    });
});

app.post("/api/updateTeacher", (req, res) => {
  console.log(req.body)

  db.Assignment.updateMany({ name: req.body.classRoom }, { teacher: req.body.teacherName })
    .lean()
    .then(newObj => {
      console.log(newObj)

      res.json(newObj)
    })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});