const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    refPath: "userType", // Dynamically set the ref based on userType
  },
  requestTitle: {
    type: String,
    required: true,
  },
  request: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["staff", "student"], // Set of allowed user types
  },
});

const RequestModel = mongoose.model("Request", RequestSchema);

module.exports = RequestModel;
