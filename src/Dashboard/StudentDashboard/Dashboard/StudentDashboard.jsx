import { Outlet } from "react-router-dom";
import StudentNavigation from "../Navbar/StudentNavigation";

function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left sidebar navigation */}
      <div className="w-64 bg-gray-800 text-white flex-shrink-0 fixed h-full">
        <div className="p-4 border-b border-gray-700">
          {/* <h1 className="text-xl font-bold">Sipalaya Info Tech</h1> */}
          <img
            className="w-40"
            src="https://sipalaya.com/wp-content/uploads/2024/03/sip-logo-trans.png"
            alt=""
          />
        </div>
        <StudentNavigation />
      </div>

      {/* Main content area */}
      <div className="ml-64 flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;
