/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Experience = ({ experience, handleExperienceChange }) => {
  const [exp, setExp] = useState({
    role: '',
    company: '',
    duration: ''
  });

  const addExperience = () => {
    handleExperienceChange([...experience, exp]);
    setExp({ role: '', company: '', duration: '' });
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Experience</h2>
      <input
        type="text"
        name="role"
        value={exp.role}
        onChange={(e) => setExp({ ...exp, role: e.target.value })}
        placeholder="Role"
        className="w-full p-2 mb-2 border"
      />
      <input
        type="text"
        name="company"
        value={exp.company}
        onChange={(e) => setExp({ ...exp, company: e.target.value })}
        placeholder="Company"
        className="w-full p-2 mb-2 border"
      />
      <input
        type="text"
        name="duration"
        value={exp.duration}
        onChange={(e) => setExp({ ...exp, duration: e.target.value })}
        placeholder="Duration"
        className="w-full p-2 mb-2 border"
      />
      <button type="button" onClick={addExperience} className="bg-green-500 text-white py-2 px-4 rounded">
        Add Experience
      </button>
      <ul className="mt-2">
        {experience.map((exp, index) => (
          <li key={index} className="border-b py-1">
            {exp.role} at {exp.company} ({exp.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
