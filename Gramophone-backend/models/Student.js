const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentID: { type: String, unique: true, required: true },
    studentName: { type: String },
    email: { type: String },
    contact: [String], // Updated to an array of strings
    instrument: { type: String },
    schedule: [{
        instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
        day: String,
        time: String
    }]
});

module.exports = mongoose.model('Student', studentSchema);
