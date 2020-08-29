var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    Email: {
        type: String,
        unique: true
    },
    Password: {
        type: String,
    },
    AccessType: {
        type: String
    }
}, { versionKey: false });

var User = mongoose.model("User", UserSchema);

module.exports = User;