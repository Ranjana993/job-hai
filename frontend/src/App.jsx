import React from 'react';
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
import MultiStepForm from './components/Profile/jobSeekerProfile/MultiStepForm';


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
          <Route path='/MultiStepForm' element={<MultiStepForm />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
