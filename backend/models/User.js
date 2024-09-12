const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  institute: {
    type: String,
  },
  gender: {
    type: String,
  }
});

// Export the model
module.exports = mongoose.model('User', UserSchema);
