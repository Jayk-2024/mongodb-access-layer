// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Additional fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
