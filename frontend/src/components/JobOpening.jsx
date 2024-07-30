// src/JobOpenings.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import JobCard from './JobCard';
import jobData from '../constant/jobOpening.json';

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    setJobs(jobData);
  }, []);

  return (
    <div className="container w-full bg-green-300 px-12 py-8">
      <h1 className='py-12 text-7xl font-mono text-center'>Job Openings in Top companies</h1>
      <Slider {...settings}>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </Slider>
    </div>
  );
};

export default JobOpenings;
