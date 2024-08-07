/* eslint-disable react/prop-types */
import React from 'react';

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Personal Information</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 mb-2 border"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 mb-2 border"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-2 mb-2 border"
      />
    </div>
  );
};

export default PersonalInfo;
