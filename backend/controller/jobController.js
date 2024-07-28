// controllers/jobController.js
const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description, qualifications, responsibilities, location, salary, company } = req.body;
  try {
    const newJob = new Job({
      title,
      description,
      qualifications,
      responsibilities,
      location,
      salary,
      company,
      postedBy: req.user.id,
    });
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', ['name', 'email']);
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editJob = async (req, res) => {
  const { title, description, qualifications, responsibilities, location, salary, company } = req.body;
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    // Check if user owns the job
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    job = await Job.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, qualifications, responsibilities, location, salary, company } },
      { new: true }
    );

    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteJob = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    // Check if user owns the job
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Job.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Job removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
