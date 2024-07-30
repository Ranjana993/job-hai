import React from 'react';
import job_bg from "../assets/job_bg.png"

const Banner = () => {
  return (
    <div className="bg-gray-100 text-center  py-2 h-screen">
      <div className="w-full mx-auto flex flex-col items-center md:flex-row ">
        <div className="flex w-[60%] flex-col items-center md:items-start text-center md:text-left pl-6 p-4">
          <h2 className="text-green-600 font-semibold text-lg">INDIA&apos;S #1 JOB PLATFORM</h2>
          <h1 className="text-8xl font-bold mt-2 bodoni-moda-sc-bold">Your Job Search Ends Here</h1>
          <p className="text-xl text-gray-600 mt-4">Discover 50 lakh+ career opportunities</p>
          <div className="flex mt-12 w-[90%]">
            <input
              type="text"
              placeholder="Search jobs by 'skill'"
              className="p-4 rounded-l-md border w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Search for an area or city"
              className="p-4 border-t border-b border-r border rounded-r-md w-full md:w-1/2"
            />
            <button className="bg-[#3843D0] text-white p-2 text-lg  px-12 rounded-md ml-2">Search</button>
          </div>
        </div>
        <div className="mt-6 w-[40%] md:mt-12">
          <img src={job_bg} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
