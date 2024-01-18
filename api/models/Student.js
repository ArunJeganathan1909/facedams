const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  regno: {
    type: String,
    require: true,
  },
  yearOfStudy: {
    type: String,
    require: true,
  },
  courses: {
    type: [String],
  },
  mobile: {
    type: String,
  },
  subjects: {
    type: [String],
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    // Added userType field
    type: String,
    default: "student", // Set default to "staff" for staff users
  },
  /*faceData: {
    // New field for face data
    embeddings: {
      type: [String],
    },
    // Add more fields if needed, e.g., timestamps, etc.
  },*/
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
