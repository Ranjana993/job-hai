import React, { Profiler } from 'react';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import JobForm from './pages/JobForm';
import Footer from './components/Footer';
import ProfileSetup from './components/Profile/ProfileSetup';

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
          <Route path="/profile-setup" element={<ProfileSetup />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
