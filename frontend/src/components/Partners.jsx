import React from 'react';
import 'tailwindcss/tailwind.css';
import paytm from "../assets/paytm.png";
import bjaj from "../assets/bjaj.png";
import netflix from "../assets/netflix.png";
import google from "../assets/google.png";
import tesla from "../assets/zomato.png";
import microsoft from "../assets/microsoft.png";

const Partner = () => {
  return (
    <div className="bg-gray-800 py-12">
      <h2 className="text-center text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 py-8">
        Get hired in top companies
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-8 space-y-8 md:space-x-12 lg:space-x-16">
        <img src={paytm} alt="MakeLess" className="h-8 sm:h-10 md:h-12 lg:h-14" />
        <img src={bjaj} alt="coworks" className="h-8 sm:h-10 md:h-12 lg:h-14" />
        <img src={netflix} alt="greener" className="h-8 sm:h-10 md:h-12 lg:h-14" />
        <img src={google} alt="SAAS TODAY" className="h-8 sm:h-10 md:h-12 lg:h-14" />
        <img src={tesla} alt="Dorfus" className="h-8 sm:h-10 md:h-12 lg:h-14" />
        <img src={microsoft} alt="askimat" className="h-8 sm:h-10 md:h-12 lg:h-14" />
      </div>
    </div>
  );
};

export default Partner;
