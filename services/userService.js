// services/userService.js
const User = require('../models/User');

class UserService {
  static async createUser(data) {
    return await User.create(data);
  }

  static async getUserById(id) {
    return await User.findById(id);
  }

  static async updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = UserService;
