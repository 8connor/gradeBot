
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    //These are the task requirements
    requirements:{
        type: String,
        required: true
    },
    //This is the name of the task
    taskName:{
        type: String,
        required: true
    },
    // This will determine whether it is a quiz, test, or homework etc.
    task: {
        type: String,
        required: true
    },
    grades: [{
        studentID: {
            // _id
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        grade: {
            type: String
        }
    }],

    classroom: {
        // _id
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Class"
    }
},
{ versionKey: false });

var Assignment = mongoose.model("Assignment", AssignmentSchema);

module.exports = Assignment;