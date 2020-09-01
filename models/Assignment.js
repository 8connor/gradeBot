var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    //These are the task requirements
    requirements:{
        type: String,
    },
    //This is the name of the task
    taskName:{
        type: String
    },
    // This will determine whether it is a quiz, test, or homework etc.
    task: {
        type: String
    },
    grade: [{
        studentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        grade: {
            type: String
        }
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
{ versionKey: false });

var Assignment = mongoose.model("Assignment", AssignmentSchema);

module.exports = Assignment;