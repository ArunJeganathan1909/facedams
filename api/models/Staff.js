const mongoose = require("mongoose");
const { Schema } = mongoose;

const StaffSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  idno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: {
    type: [String],
  },
  mobile: {
    type: String,
  },
});

const StaffModel = mongoose.model("Staff", StaffSchema);

module.exports = StaffModel;
