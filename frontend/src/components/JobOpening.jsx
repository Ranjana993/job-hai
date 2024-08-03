import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import JobCard from './JobCard';
import jobData from '../constant/jobOpening.json';

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setJobs(jobData);
  }, []);

  return (
    <div className="container w-full bg-purple-200/20 px-4 sm:px-8 md:px-12 lg:px-24 py-6 mt-12">
      <h1 className="py-12 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-center">
        Job Openings in Top Companies
      </h1>
      <Slider {...settings}>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </Slider>
    </div>
  );
};

export default JobOpenings;
