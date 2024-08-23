// routes/users.js

const express = require('express');
const multer = require('multer');
const User = require('../models/User');

const userRouter = express.Router();

// File Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST /api/users - Create a new user
userRouter.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, password, bio, skills, experience, education } = req.body;
    const resume = req.file ? req.file.path : '';

    const newUser = new User({
      name,
      email,
      password,
      bio,
      skills: skills ? skills.split(',') : [],
      experience: JSON.parse(experience),
      education: JSON.parse(education),
      resume,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = userRouter;
