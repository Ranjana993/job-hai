/* eslint-disable react/prop-types */
// src/components/EducationInfo.js

import React from 'react';
import axios from 'axios';

const EducationInfo = ({ nextStep, prevStep, handleArrayChange, formData }) => {
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = formData.education.map((edu, idx) =>
      idx === index ? { ...edu, [field]: value } : edu
    );
    handleArrayChange('education', index, updatedEducation);
  };

  const addEducation = () => {
    handleArrayChange('education', formData.education.length, { school: '', degree: '', fieldOfStudy: '', from: '', to: '', description: '' });
  };

  const handleSubmit = async () => {
    try {
      // Prepare the data to send to the backend
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (Array.isArray(formData[key])) {
          data.append(key, JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key]);
        }
      });

      await axios.post('http://localhost:5000/api/users', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted successfully');
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Education Information</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700">School</label>
          <input
            type="text"
            value={edu.school}
            onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Degree</label>
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Field of Study</label>
          <input
            type="text"
            value={edu.fieldOfStudy}
            onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label className="block text-gray-700">From</label>
          <input
            type="text"
            value={edu.from}
            onChange={(e) => handleEducationChange(index, 'from', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label className="block text-gray-700">To</label>
          <input
            type="text"
            value={edu.to}
            onChange={(e) => handleEducationChange(index, 'to', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <label className="block text-gray-700">Description</label>
          <textarea
            value={edu.description}
            onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
      >
        Add Education
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
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
