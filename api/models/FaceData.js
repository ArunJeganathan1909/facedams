const mongoose = require("mongoose");
const { Schema } = mongoose;

const faceDataSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String, // Assuming userType is a string, you can adjust the type as needed
    required: true,
  },
  embeddings: {
    type: [String], // You may adjust the data type based on the type of face embeddings you want to store
    required: true,
  },
});

const FaceDataModel = mongoose.model("FaceData", faceDataSchema);

module.exports = FaceDataModel;
