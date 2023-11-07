const mongoose = require('mongoose');
const facultySchema = mongoose.Schema({
    id: Number,
    name: String,
    salary:Number,
    branch: String,
    
});

module.exports = mongoose.model("faculty", facultySchema);