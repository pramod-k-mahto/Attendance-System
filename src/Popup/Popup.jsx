import React from "react";
import { NavLink } from "react-router-dom";

function Popup({ pop }) {
  const { popup, setPopup } = pop;

  if (!popup) return null; // Prevent rendering if popup is false

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        {/* Close Button */}
        <button
          onClick={() => setPopup(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-lg"
        >
          &times;
        </button>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <NavLink to="/loginPage" className="text-blue-600 hover:underline">
            Login Page
          </NavLink>
          <NavLink to="/signUpPage" className="text-blue-600 hover:underline">
            Sign Up Page
          </NavLink>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Choose Dashboard
        </h2>

        <div className="space-y-4">
          <NavLink
            onClick={() => setPopup(false)}
            to="/"
            className="block w-full text-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Admin Dashboard
          </NavLink>
          <NavLink
            onClick={() => setPopup(false)}
            to="/student"
            className="block w-full text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Student Dashboard
          </NavLink>
          <NavLink
            onClick={() => setPopup(false)}
            to="/teacher"
            className="block w-full text-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105"
          >
            Teacher Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Popup;
