import React, { useState } from 'react';

const JobSeekerProfile = () => {
  const [profile, setProfile] = useState({
    bio: '',
    skills: '',
    experience: [],
    education: [],
    resume: ''
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call logic here
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Job Seeker Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Write a brief bio..."
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
            Skills
          </label>
          <input
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="List your skills separated by commas"
            required
          />
        </div>
        {/* Experience and Education components can be implemented similarly */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="resume">
            Resume
          </label>
          <input
            type="file"
            name="resume"
            onChange={(e) => setProfile({ ...profile, resume: e.target.files[0] })}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default JobSeekerProfile;
