// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createJob, getJobs, editJob, deleteJob } = require('../controller/jobController');
// const jobController = require('../controllers/jobController');

// Create job
router.post('/', auth, createJob);

// Get jobs
router.get('/', getJobs);

// Edit job
router.put('/:id', auth, editJob);

// Delete job
router.delete('/:id', auth, deleteJob);

module.exports = router;
