/* eslint-disable react/prop-types */
// src/components/ProfileInfo.js

import React from 'react';

const ProfileInfo = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Bio</label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            value={formData.skills.join(', ')}
            onChange={(e) => handleChange('skills', e.target.value.split(',').map(skill => skill.trim()))}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="e.g., JavaScript, React, Node.js"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
