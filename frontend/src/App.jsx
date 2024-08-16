import React, { Profiler } from 'react';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import JobForm from './pages/JobForm';
import Footer from './components/Footer';
import JobSeekerProfile from './components/Profile/jobSeekerProfile/JobSeekerProfile';
import EmployerProfile from './components/Profile/EmployerProfile/EmployerProfile';


const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobform" element={<JobForm />} />
          <Route path="/employer-profile" element={<EmployerProfile />}/>
          <Route path="/jobseeker-profile" element={<JobSeekerProfile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
