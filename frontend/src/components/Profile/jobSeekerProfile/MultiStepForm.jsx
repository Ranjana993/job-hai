// src/components/MultiStepForm.js

import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import ProfileInfo from './ProfileInfo';
import ExperienceInfo from './ExperienceInfo';
// import EducationInfo from './EducationInfo';
import ResumeUpload from './ResumeUpload';
import EducationInfo from './EducationInfo';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    skills: [],
    experience: [],
    education: [],
    resume: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  const handleArrayChange = (input, index, value) => {
    const newArray = [...formData[input]];
    newArray[index] = value;
    setFormData({ ...formData, [input]: newArray });
  };


  switch (step) {
    case 1:
      return (
        <BasicInfo
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <ProfileInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <ExperienceInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleArrayChange={handleArrayChange}
          formData={formData}
        />
      );
    case 4:
      return (
        <EducationInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleArrayChange={handleArrayChange}
          formData={formData}
        />
      );
    case 5:
      return (
        <ResumeUpload
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    default:
      return (
        <BasicInfo
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
  }
};

export default MultiStepForm;
