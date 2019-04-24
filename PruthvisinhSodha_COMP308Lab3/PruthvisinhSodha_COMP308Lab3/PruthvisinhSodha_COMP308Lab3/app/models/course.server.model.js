const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({

    // courseCode, courseName, section, semester
    courseCode: {
        type: String,
        required: 'Course Code cannot be blank'
    },
    courseName: {
        type: String,
        required: 'Course Name cannot be blank'
    },
    section: {
        type: Number,
        required: 'Section cannot be blank'
    },
    semester: {
        type: String,
        required: 'Semester cannot be blank'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Course', CourseSchema);
