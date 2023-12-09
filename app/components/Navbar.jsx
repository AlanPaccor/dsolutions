import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#1E242B' }} className="p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">Home</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">About</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">Spanish</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1 hover:bg-opacity-80 transition duration-300">Contact</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">Gallery</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">FAQ</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">Services</a>
          <a href="#" className="text-white hover:text-gray-800 hover:bg-gray-300 rounded-md p-1">ToS</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
