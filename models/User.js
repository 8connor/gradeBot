var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    accessType: {
        type: String
    },
    grade: {
        type: String,
        required: false
    }
}, 
{ versionKey: false });

var User = mongoose.model("User", UserSchema);

module.exports = User;