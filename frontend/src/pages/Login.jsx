import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // Handling input changes
  const onHandleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value
    }));
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the login request to the backend
      const response = await axios.post("http://localhost:5000/api/auth/login", userData);

      // Assuming the token is returned in response.data.token
      const token = response.data.token;

      // Storing the token in localStorage
      localStorage.setItem('user-token', token);

      // Redirecting to profile setup or dashboard based on user role or next steps
      navigate("/MultiStepForm");
    } catch (err) {
      console.error(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="py-12">
      <section className="">
        <div className="flex items-center py-4">
          <div className="w-full flex justify-between gap-4 rounded-lg">
            <div className="p-4 w-full lg:w-[50%] ml-2 lg:ml-12 px-4 lg:px-12 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-5xl font-bold leading-tight tracking-tight font-mono">Sign in </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-mono text-gray-900 font-bold">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={onHandleChange}
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-3"
                    placeholder="email@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-mono font-bold text-gray-900">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={onHandleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-3"
                    required
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-[98%] lg:w-[90%] h-5 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the <Link className="font-medium text-primary-600 hover:underline" to="#">Terms and Conditions</Link>
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-[98%] lg:w-[90%] text-white bg-[#1F8268] hover:bg-[#008964] text-md px-5 py-3 rounded-lg text-center">
                  Sign In
                </button>
                <p className="text-sm font-light">
                  Don&apos;t have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline hover:text-orange-500">Sign Up here</Link>
                </p>
              </form>
            </div>
            <div className="w-[50%] px-12 hidden lg:block mt-12">
              <img className="w-full rounded-xl bg-contain" src={"https://www.livecareer.com/lcapp/uploads/2020/09/jobseeker-glossary.jpg?w=866"} alt="Job Seeker" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
