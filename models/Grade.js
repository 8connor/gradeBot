var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const GradeSchema = new Schema({
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

},
{ versionKey: false });

var Grade = mongoose.model("Grade", GradeSchema);

module.exports = Grade;