import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState('jobseeker');
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ name: "", email: "", password: "", });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { ...userData, role });
      localStorage.setItem('user-token', res.data.token);
      navigate('/MultiStepForm');
    } catch (err) {
      console.error(err);
    }
  };

  const onHandleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex items-center justify-center py-12 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center w-full p-6 lg:p-12 ">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-6">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900 mb-6">Sign Up</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={onHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-3"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={onHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-3"
                placeholder="email@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={onHandleChange}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full h-12"
              >
                <option className="h-12" value="jobseeker">Job Seeker</option>
                <option className="h-12" value="employer">Employer</option>
              </select>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 border border-gray-300 rounded mr-2"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">I accept the <Link to="#" className="text-blue-500 hover:underline">Terms and Conditions</Link></label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1F8268] hover:bg-[#008964] text-white text-lg font-bold px-5 py-2.5 rounded-lg text-center"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-600 mt-4">
              Already have an account? <Link to="/login" className="font-medium text-blue-500 hover:underline">Login here</Link>
            </p>
          </form>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 hidden lg:block">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpvYiUyMHNlZWtlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Job Seeker"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
