import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup Data:', formData);
    // Perform signup logic here
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <div className="w-full max-w-sm p-6 mb-20 border border-white rounded-md shadow-md mt-28">
          <h1 className="mb-6 text-2xl font-bold text-center text-white">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* First Name Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-white" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-slate-800 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-700 focus:ring-2 focus:ring-slate-800 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-white">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
