import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">Code Vise</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Profile
          </Link>
          <Link
            to="/store"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Store
          </Link>
          <Link
            to="/store/main"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Store View
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Cart
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-4 space-y-4">
          <button
            onClick={toggleMenu}
            className="self-end text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Profile
          </Link>
          <Link
            to="/store"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Store
          </Link>
          <Link
            to="/store/main"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Store View
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-gray-900 transition duration-300 w-full text-left"
            onClick={toggleMenu}
          >
            Cart
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
