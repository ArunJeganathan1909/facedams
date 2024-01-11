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
  reegno: {
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
  password: {
    type: String,
    required: true,
  },
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
