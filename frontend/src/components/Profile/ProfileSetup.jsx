import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    experience: [],
    education: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (skills) => {
    setFormData({ ...formData, skills });
  };

  const handleExperienceChange = (experience) => {
    setFormData({ ...formData, experience });
  };

  const handleEducationChange = (education) => {
    setFormData({ ...formData, education });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the data to backend
  };

  return (
    <div className=' px-24'> 
    <form onSubmit={handleSubmit}>
      <PersonalInfo formData={formData} handleChange={handleChange} />
      <Skills skills={formData.skills} handleSkillChange={handleSkillChange} />
      <Experience experience={formData.experience} handleExperienceChange={handleExperienceChange} />
      <Education education={formData.education} handleEducationChange={handleEducationChange} />
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
    </div>
  );
};

export default ProfileSetup;
