

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// We are going to be authenticating against the User model
const User = require("./models/User");


const cookieExtractor = req => {
    // extracting the jwt token from the request
    let token = null;

    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}


// Middleware are below 

// used for authorization used to protect a resource (Admin pages or Todos)
// first we pass the jwt options
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor, // custom function we are providing to extract the jwt token from the request
    secretOrKey : "NoobCoder" // used to verify the token is legitimate
},(payload, done) =>{

    console.log("In JWT strategy")

    // payload is the data we set with our JWT token
    User.findById({_id : payload.sub}, (err, user) => {
        if(err) return done(err, false);

        // we already know the user exists and don't need to validate the password.
        // Thats the only way to have a jwt token
        if(user) return done(null, user);
        else return done(null, false);
    })
}))


// authenticated local strategy using username and password
// done is a function that will get executed when done
// this below gets called when rendering the following passport.authenticate("local")
// in C# the done function below is used similarly as a "REF"
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},(email, password, done) =>{

    // After authenticated we are going to set up the jwt cookie
    // check if the user exists
    User.findOne({email}, (err, user) => {

        // something went wrong
        if(err) return done(err);

        // signin to an account that doesnt exist
        if(!user) return done(null, false);


        // successfully found the user
        // this is function created in our User model
        // The done function will be the same as the callback function in the model 
        user.comparePassword(password,done);
    })
}));






