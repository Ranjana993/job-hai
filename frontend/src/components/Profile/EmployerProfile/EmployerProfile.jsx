import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployerProfile = () => {
  const [profile, setProfile] = useState({
    companyName: '',
    website: '',
    location: '',
    industry: '',
    description: '',
    founded: '',
    contactInfo: {
      email: '',
      phone: '',
      address: '',
    },
    jobPostings: [
      {
        title: '',
        description: '',
        location: '',
        salary: '',
      },
    ],
  });
  const navigate = useNavigate();
  // Handle input change for simple fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle input change for contact info
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      contactInfo: {
        ...prevProfile.contactInfo,
        [name]: value,
      },
    }));
  };

  // Handle input change for job postings
  const handleJobPostingChange = (index, e) => {
    const { name, value } = e.target;
    const updatedJobPostings = [...profile.jobPostings];
    updatedJobPostings[index][name] = value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      jobPostings: updatedJobPostings,
    }));
  };

  // Handle adding a new job posting
  const addJobPosting = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      jobPostings: [
        ...prevProfile.jobPostings,
        { title: '', description: '', location: '', salary: '' },
      ],
    }));
  };

  // Handle removing a job posting
  const removeJobPosting = (index) => {
    setProfile((prevProfile) => {
      const updatedJobPostings = [...prevProfile.jobPostings];
      updatedJobPostings.splice(index, 1);
      return {
        ...prevProfile,
        jobPostings: updatedJobPostings,
      };
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/employer/profile', profile);
      console.log('Profile data submitted:', response.data);
      navigate("/employer-dashboard")
    } catch (error) {
      console.error('Error submitting profile data:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Employer Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold">Company Details</h2>
          <div className="mb-4">
            <label className="block font-bold">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={profile.companyName}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Website:</label>
            <input
              type="text"
              name="website"
              value={profile.website}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Location:</label>
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Industry:</label>
            <input
              type="text"
              name="industry"
              value={profile.industry}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Description:</label>
            <textarea
              name="description"
              value={profile.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Founded:</label>
            <input
              type="date"
              name="founded"
              value={profile.founded}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="mb-4">
            <label className="block font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={profile.contactInfo.email}
              onChange={handleContactChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={profile.contactInfo.phone}
              onChange={handleContactChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Address:</label>
            <input
              type="text"
              name="address"
              value={profile.contactInfo.address}
              onChange={handleContactChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold">Job Postings</h2>
          {profile.jobPostings.map((posting, index) => (
            <div key={index} className="mb-4 border-b-2 pb-4">
              <h3 className="text-lg font-semibold">Job {index + 1}</h3>
              <div className="mb-2">
                <label className="block font-bold">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={posting.title}
                  onChange={(e) => handleJobPostingChange(index, e)}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label className="block font-bold">Description:</label>
                <textarea
                  name="description"
                  value={posting.description}
                  onChange={(e) => handleJobPostingChange(index, e)}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label className="block font-bold">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={posting.location}
                  onChange={(e) => handleJobPostingChange(index, e)}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label className="block font-bold">Salary:</label>
                <input
                  type="text"
                  name="salary"
                  value={posting.salary}
                  onChange={(e) => handleJobPostingChange(index, e)}
                  className="w-full border rounded p-2"
                />
              </div>
              <button
                type="button"
                onClick={() => removeJobPosting(index)}
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Cancel
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addJobPosting}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Job Posting
          </button>
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default EmployerProfile;
