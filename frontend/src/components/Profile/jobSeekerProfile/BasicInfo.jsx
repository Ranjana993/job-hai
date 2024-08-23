/* eslint-disable react/prop-types */
// src/components/BasicInfo.js

import React from 'react';

const BasicInfo = ({ nextStep, handleChange, formData }) => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
