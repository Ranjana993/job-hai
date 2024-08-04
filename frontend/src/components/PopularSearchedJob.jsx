import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

// Array of card data
const jobCards = [
  {
    title: 'Work from Home',
    imgSrc: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50',
    bgColor: '#f6e3e3',
    borderColor: 'red-700',
    hoverBgColor: '#ef4444',
    hoverTextColor: 'red-800',
  },
  {
    title: 'Engineering Jobs',
    imgSrc: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50',
    bgColor: '#e3f6e6',
    borderColor: '#39e19e',
    hoverBgColor: '#39e19e',
    hoverTextColor: '#03975c',
  },
  {
    title: 'Marketing Jobs',
    imgSrc: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50',
    bgColor: '#d3d1f6',
    borderColor: '#4d44ef',
    hoverBgColor: '#4d44ef',
    hoverTextColor: '#2720a3',
  },
  {
    title: 'Sales Jobs',
    imgSrc: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50',
    bgColor: '#f6e3e3',
    borderColor: 'red-700',
    hoverBgColor: '#ef4444',
    hoverTextColor: 'red-800',
  },
  {
    title: 'Data Science Jobs',
    imgSrc: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50',
    bgColor: '#e3f6e6',
    borderColor: '#39e19e',
    hoverBgColor: '#39e19e',
    hoverTextColor: '#03975c',
  },
  {
    title: 'Healthcare Jobs',
    imgSrc: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=1920&q=50',
    bgColor: '#d3d1f6',
    borderColor: '#4d44ef',
    hoverBgColor: '#4d44ef',
    hoverTextColor: '#2720a3',
  },
];

const PopularSearchedJob = () => {
  const directions = ['left', 'right', 'top', 'bottom'];

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
        {jobCards.map((card, index) => (
          <motion.div
            key={index}
            className={`w-full sm:w-[48%] md:w-[30%] flex items-center border border-gray-200 rounded-2xl transition transform hover:scale-105 ease-in-out duration-300 group`}
            style={{ backgroundColor: card.bgColor }}
            custom={directions[index % directions.length]}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="flex w-full py-8 px-4 items-center justify-between">
              <div className="flex flex-col justify-between w-3/5">
                <h3 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl group-hover:text-${card.hoverTextColor}`}>{card.title}</h3>
                <p className={`bg-[#4d44ef] text-white p-2 mt-4 rounded-md cursor-pointer transition duration-300 group-hover:bg-[#2720a3] text-center`}>
                  See more
                </p>
              </div>
              <img
                className="w-2/5 h-24 md:h-32 lg:h-40 rounded-xl object-cover"
                src={card.imgSrc}
                alt={card.title}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearchedJob;
