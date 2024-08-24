// routes/employerProfile.js
const express = require('express');
const employerProfile = require('../models/employerProfile ');
const router = express.Router();
// const EmployerProfile = require('../models/EmployerProfile');

router.post('/', async (req, res) => {
  const { companyName, website, location, industry, description, founded, contactInfo, jobPostings, } = req.body;

  try {
    let profile = await employerProfile.findOne({ companyName });
    if (profile) {
      profile = await employerProfile.findOneAndUpdate(
        { companyName },
        {
          $set: {
            companyName,
            website,
            location,
            industry,
            description,
            founded,
            contactInfo,
            jobPostings,
          },
        },
        { new: true }
      );

      return res.json(profile);
    }

    // Create a new profile
    profile = new employerProfile({
      companyName,
      website,
      location,
      industry,
      description,
      founded,
      contactInfo,
      jobPostings,
    });

    await profile.save();
    console.log("req", req);

    res.json({ "messsge": "Sucessfully addedd job post", profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
