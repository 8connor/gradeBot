
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
    //These are the task requirements
    name: {
        unique: true,
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    students: [{
        _id: false,
        studentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    }]
}, { versionKey: false });


var Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom;