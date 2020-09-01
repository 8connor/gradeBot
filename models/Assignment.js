var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    Task: {
        type: String
    },
    Grade: [{
        studentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        grade: {
            type: String
        }
    }],
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
{ versionKey: false });

var Assignment = mongoose.model("Assignment", AssignmentSchema);

module.exports = Assignment;