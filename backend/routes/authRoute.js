// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, login } = require('../controller/userController');
// const authController = require('../controllers/authController');

// Register
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('role', 'Role is required').isIn(['employer', 'jobseeker']),
  ],
  register
);

// Login
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  login
);

module.exports = router;
