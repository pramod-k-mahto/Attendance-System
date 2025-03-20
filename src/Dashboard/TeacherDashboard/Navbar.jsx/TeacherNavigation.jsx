import React from "react";
import { NavLink } from "react-router-dom";

function TeacherNavigation() {
  return (
    <nav className="flex flex-col py-4">
      <NavLink
        to="/teacher"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
        end
      >
        <span className="mr-3">📊</span>
        Teacher Dashboard
      </NavLink>
      {/* <NavLink
        to="/teacher/teacherIndex"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
        end
      >
        <span className="mr-3">📊</span>
         Dashboard
      </NavLink> */}

      <NavLink
        to="/teacher/batch"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
      >
        <span className="mr-3">👥</span>
        My Batch
      </NavLink>

      <NavLink
        to="/teacher/attendance"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
      >
        <span className="mr-3">✓</span>
        Attendance
      </NavLink>

      <NavLink
        to="/teacher/notification"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
      >
        <span className="mr-3">🔔</span>
        Notification
      </NavLink>

      <NavLink
        to="/teacher/reports"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
      >
        <span className="mr-3">📝</span>
        Reports
      </NavLink>

      <NavLink
        to="/teacher/setting"
        className={({ isActive }) =>
          `px-4 py-3 flex items-center text-sm font-medium transition-colors ${
            isActive
              ? "bg-gray-900 text-white border-l-4 border-blue-500"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`
        }
      >
        <span className="mr-3">⚙️</span>
        Settings
      </NavLink>

      <div className="mt-auto">
        <NavLink
          to="/teacher/logout"
          className="px-4 py-3 flex items-center text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors mt-auto"
        >
          <span className="mr-3">🚪</span>
          Logout
        </NavLink>
      </div>
    </nav>
  );
}

export default TeacherNavigation;
