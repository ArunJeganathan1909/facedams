const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  yearOfStudy: {
    type: String,
    requiredl: true,
  },
});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;
