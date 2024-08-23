/* eslint-disable react/prop-types */
// src/components/ExperienceInfo.js

import React from 'react';

const ExperienceInfo = ({ nextStep, prevStep, handleArrayChange, formData }) => {
  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = formData.experience.map((exp, idx) =>
      idx === index ? { ...exp, [field]: value } : exp
    );
    handleArrayChange('experience', index, updatedExperience);
  };

  const addExperience = () => {
    handleArrayChange('experience', formData.experience.length, { title: '', company: '', from: '', to: '', description: '' });
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Experience Information</h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={exp.title}
            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          {/* Additional fields like from, to, and description */}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
      >
        Add Experience
      </button>
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
    </div>
  );
};

export default ExperienceInfo;
