import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
// import { FaDashboard, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); // Empty dependency array means this runs once on mount

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Logic to handle logout
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <header className="bg-white shadow-md py-3 lg:py-1 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-8 md:h-10 lg:h-16" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to={"/login"}>
                <button className="hidden md:inline text-[#1F8268] border border-[#1F8268] px-6 lg:px-8 py-1 lg:py-3 rounded-md hover:bg-[#1F8268] hover:text-white">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="hidden md:inline text-white bg-[#1F8268] px-6 lg:px-8 py-1 lg:py-3 rounded-md hover:bg-[#09654d]">
                  Register
                </button>
              </Link>
              <a href="#" className="hidden md:inline text-[#1F8268] font-bold hover:text-purple-500">Employers Login</a>
            </>
          ) : (
            <>
              <Link to={"/jobseeker-profile"}>
                <button className="hidden md:inline text-[#1F8268] border border-[#1F8268] px-6 lg:px-8 py-1 lg:py-3 rounded-md hover:bg-[#1F8268] hover:text-white">
                  Dashboard
                </button>
              </Link>
              <button
                className="hidden md:inline text-[#1F8268] border border-[#1F8268] px-6 lg:px-8 py-1 lg:py-3 rounded-md hover:bg-[#1F8268] hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
          <button className="md:hidden text-[#1F8268] focus:outline-none" onClick={toggleMenu}> ☰ </button>
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
            {!isAuthenticated ? (
              <>
                <button className="text-purple-500 border border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white">
                  <Link to={"/login"}>Login</Link>
                </button>
                <Link to={"/register"}>
                  <button className="text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/dashboard"}>
                  <button className="text-[#1F8268] border border-[#1F8268] px-4 py-2 rounded-md hover:bg-[#1F8268] hover:text-white">
                    Dashboard
                  </button>
                </Link>
                <button
                  className="text-[#1F8268] border border-[#1F8268] px-4 py-2 rounded-md hover:bg-[#1F8268] hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
            <a href="#" className="text-gray-700 hover:text-purple-500">Employers Login</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
