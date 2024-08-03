import React from 'react';

const PopularSearchedJob = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 bg-custom-gradient">
      <div className="pb-10 pt-8 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
          Popular <span className="text-green-500/90 font-bold">Job</span> Searched
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 py-3">
          Do you know what people search more?
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 sm:px-8 md:px-12">
        {/* Job Card */}
        <div className="bg-[#f6e3e3] w-full sm:w-[48%] md:w-[30%] flex items-center border border-gray-200 rounded-2xl transition transform hover:scale-105 ease-in-out duration-300 hover:border-red-700 hover:bg-[#ef4444]/20 group hover:text-red-800">
          <div className="flex w-full py-4 px-4 items-center justify-between">
            <div className="flex flex-col justify-between w-3/5">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">Work from home</h3>
              <p className="bg-red-400 text-white p-2 mt-4 rounded-md cursor-pointer transition duration-300 group-hover:bg-red-500 text-center">
                See more
              </p>
            </div>
            <img
              className="w-2/5 h-24 md:h-32 lg:h-40 rounded-xl object-cover"
              src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50"
              alt="Work from home"
            />
          </div>
        </div>

        {/* Job Card */}
        <div className="bg-[#e3f6e6] w-full sm:w-[48%] md:w-[30%] flex items-center border border-gray-200 rounded-2xl transition transform hover:scale-105 ease-in-out duration-300 hover:border-[#39e19e] hover:bg-[#39e19e]/20 group hover:text-[#03975c]">
          <div className="flex w-full py-4 px-4 items-center justify-between">
            <div className="flex flex-col justify-between w-3/5">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">Work from home</h3>
              <p className="bg-[#24d58e] text-white p-2 mt-4 rounded-md cursor-pointer transition duration-300 group-hover:bg-[#03975c] text-center">
                See more
              </p>
            </div>
            <img
              className="w-2/5 h-24 md:h-32 lg:h-40 rounded-xl object-cover"
              src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50"
              alt="Work from home"
            />
          </div>
        </div>

        {/* Job Card */}
        <div className="bg-[#d3d1f6] w-full sm:w-[48%] md:w-[30%] flex items-center border border-gray-200 rounded-2xl transition transform hover:scale-105 ease-in-out duration-300 hover:border-[#4d44ef] hover:bg-[#4d44ef]/20 group hover:text-[#4d44ef]">
          <div className="flex w-full py-4 px-4 items-center justify-between">
            <div className="flex flex-col justify-between w-3/5">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">Work from home</h3>
              <p className="bg-[#4d44ef] text-white p-2 mt-4 rounded-md cursor-pointer transition duration-300 group-hover:bg-[#2720a3] text-center">
                See more
              </p>
            </div>
            <img
              className="w-2/5 h-24 md:h-32 lg:h-40 rounded-xl object-cover"
              src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50"
              alt="Work from home"
            />
          </div>
        </div>

        {/* Additional Job Cards can follow the same structure */}
        {/* Add more job cards here */}
      </div>
    </div>
  );
};

export default PopularSearchedJob;
