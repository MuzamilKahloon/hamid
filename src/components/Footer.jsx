import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-white bg-gray-900">
      <div className="w-full pt-2 text-sm text-center text-gray-500 ">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
