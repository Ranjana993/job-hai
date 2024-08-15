import React, { useState } from 'react';

const EmployerProfile = () => {
  const [profile, setProfile] = useState({
    companyName: '',
    website: '',
    location: '',
    industry: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
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
      <h1 className="text-3xl font-semibold mb-6">Employer Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            name="companyName"
            value={profile.companyName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your company name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="website">
            Website
          </label>
          <input
            name="website"
            value={profile.website}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your website URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            name="location"
            value={profile.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your company location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="industry">
            Industry
          </label>
          <input
            name="industry"
            value={profile.industry}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your industry"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={profile.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Write a brief company description..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contactEmail">
            Contact Email
          </label>
          <input
            type="email"
            name="contactEmail"
            value={profile.contactEmail}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your contact email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contactPhone">
            Contact Phone
          </label>
          <input
            name="contactPhone"
            value={profile.contactPhone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your contact phone number"
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

export default EmployerProfile;
