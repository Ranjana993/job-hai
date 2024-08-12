import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('jobseeker');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', { name, email, password, role });
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container w-full mx-auto p-4 mt-24">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl text-center font-bold mt-2 bodoni-moda-sc-bold py-12" >Register now </h1>
      <div className='flex gap-12 justify-center items-center'>
        <div className='w-[50%]'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 border border-gray-400 rounded-lg outline-none w-full h-12"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border border-gray-400 rounded-lg outline-none w-full h-12"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border border-gray-400 rounded-lg outline-none w-full h-12"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 p-2 border w-full"
              >
                <option value="jobseeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>
            <button className="hidden md:inline text-white bg-[#1F8268] px-6 lg:px-8 py-1 lg:py-3  rounded-md hover:bg-[#09654d] ">
              Register Now
            </button>
          </form>
        </div>
        <div className='w-[40%]'>
          <img className='w-full rounded-xl' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpvYiUyMHNlZWtlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Register;
