/* eslint-disable react/prop-types */
// src/components/ResumeUpload.js

import React from 'react';

const ResumeUpload = ({ prevStep, handleChange, formData }) => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Resume</label>
          <input
            type="file"
            onChange={(e) => handleChange('resume', e.target.files[0])}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
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
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeUpload;
