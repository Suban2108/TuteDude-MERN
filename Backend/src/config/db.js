// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error('MONGODB_URI is not set in env');
  }
  await mongoose.connect(uri, {
    // options handled by mongoose default now
  });
  console.log('✅ Connected to MongoDB');
};

module.exports = connectDB;
