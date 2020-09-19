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
    }, "NoobCoder", {expiresIn : "1h"}); 
    // when you sign you're creating this jwt token, this has to match with the secret key in passport config file
    // 5000 milliseconds

}



// Define API routes here


// =============================================================================

// Register, Login, Logout API

// =============================================================================

userRouter.post("/register", (req, res) => {
    
  // I can update the accessType property to "role"
  const {firstName, lastName, email, password, accessType} = req.body;


  // check if email exists
  db.User.findOne({email}, (err, user) => {
      if(err) {
          return res.status(500).json({message: {msgBody: "Error has occurred", msgError: true}});
      }

      // email exists
      if(user){
          return res.status(400).json({message: {msgBody: "email is already taken", msgError: true}});
      }
      else {
          const newUser = new db.User( {firstName, lastName, email, password, accessType} );
          newUser.save(err => {
              if(err) res.status(500).json({message: {msgBody: "Error has occurred", msgError: true}});
              else res.status(201).json({message: {msgBody: "Account successfully created", msgError: false}});
          })
      }
  })
})


// using our passport middleware
// server will not be saving the session so we have to set it to false
// local will render the following passport.use(new LocalStrategy
userRouter.post("/login", passport.authenticate('local', {session: false}), (req, res) => {
  
  console.log("In login route");
  
  // isAuthenticated a passport default function
  if(req.isAuthenticated()){
      
      // passport provides req.user
      // this comes back from user.comparePassword within the done function
      // the done function gets the callback from the user comparePassword function when returning "this"
      const {_id, email, accessType} = req.user;

      // create a jwt token
      // Below we are using the same MongoDb Object_Id of the User collection
      const token = signToken(_id);


      
      // http only on the client you cannot touch this cookie using javascript preventing cross site scripting attacks
      // same site will prevent cross site request forgery attacks
      res.cookie("access_token", token, {httpOnly : true, sameSite : true});

      // When the user signs in, they will get a JSON body below
      // true as isAuthenticated and the user information
      // The email and role will come back from the User.js file
      res.status(200).json({isAuthenticated : true, user : {email, accessType}});

  }
});


userRouter.get("/logout", passport.authenticate("jwt", {session : false}), (req, res) => {   

  // passport jwt will provide the clear cookie method
  res.clearCookie("access_token");

  // Below we are removing the email and role by loading an empty string to both properties
  res.json({user : {email : "", accessType : ""}, success : true});
});


// Make sure the front end and back end are in sync
// If the browser is closed and re-opened we will make sure to show the user was authenticated
userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    
  // Here jwt strategy will return the role
  const {email, accessType} = req.user;
  res.status(200).json({isAuthenticated : true, user : {email, accessType}});
});



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
      console.log("classes");
      console.log(classes);
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
  db.Assignment.findOne({ _id: req.body.assignmentID })
    .populate(
      {
        path: 'grades.studentID',
        model: 'User'
      }
    )
    .lean()
    .then(function (assignments) {
      // THIS RIGHT HERE IS WHERE I WILL HAVE TO NEST A FIND TO FIX THE SPECIFIC ASSIGNMENT RENDER INSIDE OF TABLE ON THE ASSIGNMENTS PAGE

      let assignArr = assignments.grades.map((student, i) => {
        rObj = {
          _id: student.studentID._id,
          assignmentID: assignments._id,
          firstName: student.studentID.firstName,
          lastName: student.studentID.lastName,
          grade: student.grade
        }
        
        return rObj
      })

      console.log(assignArr)

      res.json(assignArr)
    })
    .catch(err => res.json(err));
});

userRouter.post("/specificClass", (req, res) => {
  db.Classroom.findOne({ name: req.body.name })
    .lean()
    .then(function (classroom) {
      console.log(classroom)
      db.Assignment.find({ classroom: classroom._id }).lean().then(newResponse => {
        console.log(newResponse)
        res.json(newResponse)
      })
    })
    .catch(err => res.json(err));
});

userRouter.post("/changeGrade", (req, res) => {
  //req coming in
  var studentId = req.body.studentID
  console.log(req.body)

  db.Assignment
    .updateMany(
      { _id: req.body.assignmentID },
      { $set: { 'grades.$[i].grade': req.body.newGrade } },
      { arrayFilters: [{ 'i.studentID': req.body.studentID }] }
    )
    .lean()
    .then(function (assignmentEdit) {
      console.log("made it to then")
      console.log(assignmentEdit)
      res.json(assignmentEdit)
    })
    .then(Average => res.json(Average))
    .catch(err => console.log(err));
});

userRouter.post("/studentQuery", (req, res) => {

  db.User.find({
    firstName: req.body.firstName
  })
    .lean()
    .then(e => {

      let studentsArr = e.map((student, i) => {
        rObj = { _id: student._id, firstName: student.firstName };
        return rObj
      })


      res.json(studentsArr)
    })
    .catch(err => console.log(err));
});

userRouter.post("/addStudentList", (req, res) => {

  let studentsArr = req.body.students.map((student, i) => {
    rObj = {};
    return { studentID: student._id }
  })

  db.Classroom.updateMany({ name: req.body.className },
    { students: studentsArr })
    .lean()
    .then(e => res.json(e))
    .catch(err => console.log(err));
});

userRouter.post("/updateTeacher", (req, res) => {
  //req coming in
  var incObj = req.body

  db.Classroom.updateOne(
    { name: incObj.classRoom },
    { teacherName: incObj.teacherName })
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
  db.Classroom.findOne({ name: req.body.classroom }).lean()
    .then(newRes => {

      let studentsArr = newRes.students.map((student, i) => {
        rObj = { studentID: student.studentID, grade: "A" };
        return rObj
      })

      console.log(studentsArr)
      //This will create the assignment.
      db.Assignment.create({
        task: req.body.task,
        taskName: req.body.taskName,
        requirements: req.body.requirements,
        grades: studentsArr,
        classroom: newRes._id
      })
        .then(function (assignment) {

          console.log(assignment);

          console.log(assignment.grades)
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


