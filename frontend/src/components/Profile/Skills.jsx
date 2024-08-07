/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Skills = ({ skills, handleSkillChange }) => {
  const [skill, setSkill] = useState('');

  const addSkill = () => {
    if (skill) {
      handleSkillChange([...skills, skill]);
      setSkill('');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Add a skill"
        className="w-full p-2 mb-2 border"
      />
      <button type="button" onClick={addSkill} className="bg-green-500 text-white py-2 px-4 rounded">
        Add Skill
      </button>
      <ul className="mt-2">
        {skills.map((s, index) => (
          <li key={index} className="border-b py-1">{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
