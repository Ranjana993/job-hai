import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
    <div className="container w-full p-4 mt-24 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl text-center font-bold mt-2 bodoni-moda-sc-bold py-12" >Login </h1>
      
      <div className='   w-1/2 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
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
          <button className="hidden md:inline text-white bg-[#1F8268] px-6 lg:px-8 py-1 lg:py-3 mt-8 rounded-md hover:bg-[#09654d] ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
