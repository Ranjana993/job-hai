import React from 'react';
import job_bg from "../assets/job_bg.png";

const Banner = () => {
  return (
    <div className="bg-gray-100 text-center py-6 md:py-12 h-auto md:h-screen">
      <div className="w-full mx-auto flex flex-col items-center md:flex-row px-4 lg:px-8">
        <div className="flex w-full md:w-[60%] flex-col items-center md:items-start text-center md:text-left md:pl-6 p-4">
          <h2 className="text-green-600 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            INDIA&apos;S #1 JOB PLATFORM
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mt-2 bodoni-moda-sc-bold">
            Your Job Search Ends Here
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4">
            Discover 50 lakh+ career opportunities
          </p>
          <div className="flex flex-col md:flex-row md:items-center mt-8 md:mt-12 w-full md:w-[90%]">
            <input
              type="text"
              placeholder="Search jobs by 'skill'"
              className="p-4 rounded-t-md md:rounded-l-md md:rounded-tr-none border w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Search for an area or city"
              className="p-4 border-t border-b md:border-t-0 md:border-l-0 border-r md:border rounded-b-md md:rounded-r-md w-full md:w-1/2"
            />
            <button className="bg-[#1F8268] hover:bg-[#008964] text-white p-2 text-lg mt-4 md:mt-0 md:px-12 rounded-md md:ml-2 py-4">
              Search
            </button>
          </div>
        </div>
        <div className="mt-6 w-full md:w-[40%] md:mt-12">
          <img src={job_bg} className="w-full bounce" alt="Job Background" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
