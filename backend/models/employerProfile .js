// models/EmployerProfile.js
const mongoose = require('mongoose');

const EmployerProfileSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  website: { type: String },
  location: { type: String },
  industry: { type: String },
  description: { type: String },
  founded: { type: Date },
  contactInfo: {
    email: { type: String },
    phone: { type: String },
    address: { type: String },
  },
  jobPostings: [
    {
      title: { type: String },
      description: { type: String },
      location: { type: String },
      salary: { type: String },
    },
  ],
});

module.exports = mongoose.model('EmployerProfile', EmployerProfileSchema);
