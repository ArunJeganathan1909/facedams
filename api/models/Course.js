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
    required: true,
  },
  subject : {
    type : String,
    required : true
  },
  lecturerIdNo: {
    type : String,
    required : true    
  }
});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;
