// index.js
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const UserService = require("./services/userService");

module.exports = {
  connectDB,
  User,
  UserService,
};
