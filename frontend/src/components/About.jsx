import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const About = () => {
  useEffect(() => {
    const leftDiv = document.getElementById('left-div');
    const rightDiv = document.getElementById('right-div');

    setTimeout(() => {
      leftDiv.classList.add('animate-slide-in-left');
      rightDiv.classList.add('animate-slide-in-right');
    }, 100); // Delay in milliseconds
  }, []);

  return (
    <div className="mb-12 h-screen bg-gray-100 flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div id="right-div" className="w-full md:w-1/2 text-left opacity-0 transform translate-x-full mt-8 md:mt-0">
        <p className="text-blue-600 font-semibold text-lg md:text-xl">Looking for an expert for your company?</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">Get applications from the world best talents.</h1>
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide
          with additional clickthroughs from DevOps.
        </p>
        <button className="mt-8 bg-[#1F8268] text-white px-6 md:px-9 py-3 md:py-4 rounded-md hover:bg-green-700">
          POST A JOB
        </button>
      </div>
      <div id="left-div" className="w-full md:w-1/2 opacity-0 transform -translate-x-full">
        <img src={"https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_1280.jpg"} alt="Applicants" className="rounded-lg w-full" />
      </div>
    </div>
  );
};

export default About;
