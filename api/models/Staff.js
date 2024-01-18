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
  userType: {
    // Added userType field
    type: String,
    default: "staff", // Set default to "staff" for staff users
  },
  admin : {
    type : Boolean,
    default: false,
  },
  /*faceData: {
    // New field for face data
    embeddings: {
      type: [String],
    },
    // Add more fields if needed, e.g., timestamps, etc.
  },*/
});

const StaffModel = mongoose.model("Staff", StaffSchema);

module.exports = StaffModel;
