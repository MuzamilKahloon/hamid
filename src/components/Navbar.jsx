import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/img/logo.jpg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full py-3 border-b backdrop-blur-lg border-neutral-700/80">
      <div className="container relative px-4 mx-auto text-sm">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img className="w-10 h-10 mr-2 rounded-full" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-white">sarcasm</span>
          </div>

          {/* Login/Sign Up Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-3 py-2 border border-white rounded-md text-white hover:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:from-orange-400 hover:to-orange-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden">
            <div className="flex flex-col mt-6 space-y-4">
              <Link
                to="/login"
                className="px-3 py-2 border border-white rounded-md text-white hover:bg-gray-700"
                onClick={toggleNavbar}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:from-orange-400 hover:to-orange-700"
                onClick={toggleNavbar}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
