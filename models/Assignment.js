var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    Task: {
        type: String
    },
    currentGrade: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grade'
    }],
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

},
{ versionKey: false });

var Assignment = mongoose.model("Assigment", AssignmentSchema);

module.exports = Assignment;