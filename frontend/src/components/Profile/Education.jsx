/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Education = ({ education, handleEducationChange }) => {
  const [edu, setEdu] = useState({
    institution: '',
    degree: '',
    duration: ''
  });

  const addEducation = () => {
    handleEducationChange([...education, edu]);
    setEdu({ institution: '', degree: '', duration: '' });
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Education</h2>
      <input
        type="text"
        name="institution"
        value={edu.institution}
        onChange={(e) => setEdu({ ...edu, institution: e.target.value })}
        placeholder="Institution"
        className="w-full p-2 mb-2 border"
      />
      <input
        type="text"
        name="degree"
        value={edu.degree}
        onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
        placeholder="Degree"
        className="w-full p-2 mb-2 border"
      />
      <input
        type="text"
        name="duration"
        value={edu.duration}
        onChange={(e) => setEdu({ ...edu, duration: e.target.value })}
        placeholder="Duration"
        className="w-full p-2 mb-2 border"
      />
      <button type="button" onClick={addEducation} className="bg-green-500 text-white py-2 px-4 rounded">
        Add Education
      </button>
      <ul className="mt-2">
        {education.map((edu, index) => (
          <li key={index} className="border-b py-1">
            {edu.degree} from {edu.institution} ({edu.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
