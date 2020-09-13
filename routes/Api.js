
const express = require("express");
const userRouter = express.Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
const passportConfig = require("../passport"); // passport file

var db = require('./models');


const signToken = userID => {
    
    // this will return the token
    // we shouldn't send sensitive information here
    return JWT.sign({
        iss: "NoobCoder", // who sent it
        sub: userID// subject - who is it for
    }, "NoobCoder", {expiresIn : "50000"}); 
    // when you sign you're creating this jwt token, this has to match with the secret key in passport config file
    // 5000 milliseconds
}



// Define API routes here

// =============================================================================

//GET ROUTES BELOW HERE

// =============================================================================
userRouter.get("/api/allUsers", (req, res) => {
    db.User.find({})
      .lean()
      .then(function (users) {
        res.json(users);
      })
      .catch(err => console.log(err));
  });
// =============================================================================
userRouter.get("/api/allUsers", (req, res) => {
    db.User.find({})
      .lean()
      .then(function (users) {
        res.json(users);
      })
      .catch(err => console.log(err));
  });





userRouter.get("/api/allAssignments", (req, res) => {
    db.Assignment.find({})
      .lean()
      .then(function (assignments) {
        res.json(assignments);
      })
      .catch(err => console.log(err));
  });
  
  userRouter.get("/api/checkUser", (req, res) => {
    db.Classroom.find({})
      .lean()
      .then(function (classes) {
        res.json(classes);
      })
      .catch(err => console.log(err));
  });
  
  
  userRouter.get("/api/average", (req, res) => {
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
  
  userRouter.post("/api/adminCreateUser", (req, res) => {
  
    console.log(req.body);
    
    db.User.findOne({email: req.body.email}, async (err, user)=>{
  
      if(err) throw err; 
      if(user) res.send("User alread exists");
      if(!user){
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
    .catch((err)=>{
      console.log(err);
    })
  
  
  });
  
  
  userRouter.post("/api/specificGrade/", (req, res) => {
  
    db.Assignment.find({})
      .lean()
      .then(function (assignments) {
        res.json(assignments);
      })
      .catch(err => console.log(err));
  });
  
  
  
  userRouter.post("/api/changeGrade", (req, res) => {
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
  
  userRouter.post("/api/createAssignment", (req, res) => {
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
  
  userRouter.post("/api/createClass", (req, res) => {
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
      .catch(err => console.log(err));
  });
  
  // Send every other request to the React app
  // Define any API routes before this runs
  userRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  