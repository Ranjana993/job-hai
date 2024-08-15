const mongoose = require('mongoose');

const EmployerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  industry: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  founded: {
    type: Date
  },
  contactInfo: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    address: {
      type: String
    }
  },
  jobPostings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('EmployerProfile', EmployerProfileSchema);
