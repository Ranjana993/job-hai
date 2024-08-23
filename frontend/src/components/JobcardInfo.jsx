/* eslint-disable react/prop-types */
// JobCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ id, companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${id}`, {
      state: {
        job: {
          id,
          companyName,
          jobTitle,
          companyLogo,
          minPrice,
          maxPrice,
          salaryType,
          jobLocation,
          postingDate,
          experienceLevel,
          employmentType,
          description,
        },
      },
    });
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <img src={companyLogo} alt={companyName} className="w-16 h-16" />
      <h3>{jobTitle}</h3>
      <p>{companyName}</p>
      <p>{jobLocation}</p>
      <p>Salary: ${minPrice} - ${maxPrice} {salaryType}</p>
      <p>{employmentType}</p>
      <p>{experienceLevel}</p>
    </div>
  );
};

export default JobCard;
