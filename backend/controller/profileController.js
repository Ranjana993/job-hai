const employerProfile = require('../models/employerProfile ');
const jobSeekerProfile = require('../models/jobSeekerProfile ');
const User = require('../models/User');

exports.checkProfileCompletion = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user.role === 'jobseeker') {
      const profile = await jobSeekerProfile.findOne({ user: req.user.id });
      if (!profile) {
        return res.status(200).json({ redirect: '/profile-setup' });
      }
    } else if (user.role === 'employer') {
      const profile = await employerProfile.findOne({ user: req.user.id });
      if (!profile) {
        return res.status(200).json({ redirect: '/profile-setup' });
      }
    }

    // If profile is complete, redirect to dashboard
    res.status(200).json({ redirect: '/dashboard' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
