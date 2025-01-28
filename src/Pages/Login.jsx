import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle input changes for two-way binding
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Perform login logic here
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Navbar />
      <div
        className="w-full max-w-sm p-6 rounded-md shadow-md"
        style={{ backgroundColor: '#e68947' }}
      >
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} // Two-way binding
              onChange={handleInputChange} // Update state on change
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password} // Two-way binding
              onChange={handleInputChange} // Update state on change
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
              placeholder="Enter your password"
            />
            {/* Eye Icon for Show/Hide Password */}
            <button
              type="button"
              className="absolute transform -translate-y-1/2 right-3 top-11 ring-slate-800 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forget Password */}
          <div className="mb-4 text-right">
            <a href="/forgot-password" className="text-sm text-slate-800 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-700 focus:ring-2 focus:ring-slate-800 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
