const path = require("path")
const express = require("express");
const userRouter = express.Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
const passportConfig = require("../passport"); // passport file

var db = require("../models")

const signToken = userID => {

  // this will return the token
  // we shouldn't send sensitive information here
  return JWT.sign({
    iss: "NoobCoder", // who sent it
    sub: userID// subject - who is it for
  }, "NoobCoder", { expiresIn: "50000" });
  // when you sign you're creating this jwt token, this has to match with the secret key in passport config file
  // 5000 milliseconds
}



// Define API routes here

// =============================================================================

//GET ROUTES BELOW HERE


// =============================================================================
userRouter.get("/allUsers", (req, res) => {

  console.log("In get all users api")

  db.User.find({})
    .lean()
    .then(function (users) {
      res.json(users);
    })
    .catch(err => console.log(err));
});

userRouter.get("/allClasses", (req, res) => {

  console.log("In get all classes api")

  db.Classroom.find({})
    .lean()
    .then(function (classes) {
      res.json(classes);
    })
    .catch(err => console.log(err));
});

userRouter.get("/allTeachers", (req, res) => {

  console.log("In get all teachers api")

  db.User.find({ accessType: "Teacher" })
    .lean()
    .then(function (users) {
      res.json(users);
    })
    .catch(err => console.log(err));
});



userRouter.get("/allAssignments", (req, res) => {
  db.Assignment.find({})
    .lean()
    .then(function (assignments) {
      res.json(assignments);
    })
    .catch(err => console.log(err));
});

userRouter.get("/checkUser", (req, res) => {
  db.Classroom.find({})
    .lean()
    .then(function (classes) {
      res.json(classes);
    })
    .catch(err => console.log(err));
});


userRouter.get("/average", (req, res) => {
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

userRouter.post("/adminCreateUser", (req, res) => {

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
    })


});

userRouter.post("/specificGrade", (req, res) => {
  console.log("hit")
  db.Assignment.find({ grades: [{ studentID: req.body.studentID }] })
    .lean()
    .then(function (assignments) {
      console.log(assignments)
      res.json(assignments);
    })
    .catch(err => res.json(err));
});

var counter = 0;

userRouter.post("/specificClass", (req, res) => {

  db.Classroom.find({ name: req.body.name })
    .lean()
    .then(function (classroom) {
      console.log(classroom)
      db.Assignment.find({ classroom: classroom[0]._id }).lean().then(newResponse => {
        console.log(newResponse)
        res.json(newResponse)
      })
    })
    .catch(err => res.json(err));
});

userRouter.post("/changeGrade", (req, res) => {
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


userRouter.post("/updateTeacher", (req, res) => {
  //req coming in
  var incObj = req.body

  db.Classroom.updateOne({ name: incObj.classRoom }, { teacherName: incObj.teacherName })
    .lean()
    .then(function (response) {
      console.log(response);


      res.json(response)
    })
    .then(Average => res.json(Average))
    .catch(err => console.log(err));
});

userRouter.post("/createAssignment", (req, res) => {
  //req coming in
  db.Classroom.find({ name: req.body.classroom }).lean()
  .then(newRes => {
    console.log(newRes)
    //This will create the assignment.
    db.Assignment.create({
      task: req.body.task,
      taskName: req.body.taskName,
      requirements: req.body.requirements,
      classroom: newRes[0]._id
    })
      .then(function (assignment) {
        console.log(assignment);
        //this responds with the assignment that has been added.
        res.json(assignment)
      })
      .catch(err => console.log(err));
  }).catch(err => console.log(err));

});

userRouter.post("/createClass", (req, res) => {
  //req coming in
  var className = req.body;

  console.log(className)


  //This will create the class.
  db.Classroom.create(className)
    .then(function (random) {
      console.log(random);
      //this responds with the assignment that has been added.
      res.json(random);
    })
    .catch(err => res.json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
userRouter.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});


module.exports = userRouter;


