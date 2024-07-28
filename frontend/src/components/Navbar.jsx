import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <img src="your-logo.png" alt="Logo" className="h-8" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-purple-500">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Boost</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Prep</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Learn</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Career Advice</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Certifications</a>
            <span className="text-green-500">New</span>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline text-purple-700 border border-purple-500 px-8 py-3 rounded-md hover:bg-purple-500 hover:text-white">
            Login
          </button>
          <button className="hidden md:inline text-white bg-[#3843D0] px-8 py-3 rounded-md hover:bg-[#060f96] ">
            Register
          </button>
          <a href="#" className="hidden md:inline text-[#3843D0] font-bold hover:text-purple-500">Employers Login</a>
          <button className="md:hidden text-purple-500 focus:outline-none" onClick={toggleMenu} >☰ </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-start space-y-2 p-4">
            <a href="#" className="text-gray-700 hover:text-purple-500">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Boost</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Prep</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Learn</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Career Advice</a>
            <a href="#" className="text-gray-700 hover:text-purple-500">Certifications</a>
            <span className="text-green-500">New</span>
            <button className="text-purple-500 border border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white">
              Login
            </button>
            <button className="text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">
              Register
            </button>
            <a href="#" className="text-gray-700 hover:text-purple-500">Employers Login</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
