
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ClassSchema = new Schema({
    //These are the task requirements
    name:{
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    students: [
        studentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
{ versionKey: false });

var Class = mongoose.model("Class", ClassSchema);

module.exports = Class;