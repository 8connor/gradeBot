
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    accessType: {
        type: String,
        enum: ["student", "teacher", "admin"], // pre-determined roles
        required: true
    }
});


// hash the password before saving into the database
// This is a similar to middleware
// Below typing function instead of arrow function allows to access "this" below.
// When we run the "SAVE" method, this gets executed and the password gets hashed
UserSchema.pre("save", function(next){
    
    // only want to hash if password is plain text
    if(!this.isModified("password"))
        return next() // checking to see if password field has been modified already, which means no need to hash the password. 
    
    // 10 - How strong you want your encryption to be        
    bcrypt.hash(this.password, 10, (err, passwordHash)=>{
        if(err)
            return next(err); // return error

        this.password = passwordHash;
        next(); // symbolize if we are done
    }) 
});


// cb - call back
UserSchema.methods.comparePassword = function(password,cb){

    console.log("In compare password");
    
    // Compare the plain text version vs the hash version stored in our db
    bcrypt.compare(password, this.password,(err, isMatch) =>{
        if(err) return cb(err);
        else{
            if(!isMatch) return cb(null, isMatch);

            return cb(null, this); // attach the user object to the callback
        }

    });
}


module.exports = mongoose.model('User',UserSchema);









