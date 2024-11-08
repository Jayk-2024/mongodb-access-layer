// config/dbConfig.js
const mongoose = require('mongoose');

let dbConnection = null;

const connectDB = async ({ uri }) => {
  if (!dbConnection) {
    try {
      dbConnection = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
  }
  return dbConnection;
};

module.exports = connectDB;
