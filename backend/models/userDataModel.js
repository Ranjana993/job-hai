// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  skills: {
    type: [String],
  },
  experience: [
    {
      company: String,
      role: String,
      duration: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      year: String,
    },
  ],
  resume: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
