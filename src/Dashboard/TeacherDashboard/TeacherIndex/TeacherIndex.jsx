const TeacherIndex = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">Hello, pramod</h1>
            <p className="text-sm text-gray-600">You have 2 class scheduled for today</p>
            <div className="mt-2 flex space-x-2">
              <button className="bg-blue-700 text-white px-4 py-1 rounded text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                Attendance
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                View Student
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhtIDaMD4yH_crArBVbJ0hR8jqK8z8eizIw&s" alt="Instructor" className="h-12 rounded-full  " />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="p-2 bg-blue-200 rounded-lg mb-2">
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Total Batch</p>
            <p className="text-xl font-bold">115</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="p-2 bg-yellow-200 rounded-lg mb-2">
              <svg className="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Total Student</p>
            <p className="text-xl font-bold">1220</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="p-2 bg-purple-200 rounded-lg mb-2">
              <svg className="w-6 h-6 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Total Course</p>
            <p className="text-xl font-bold">5</p>
          </div>
        </div>

        {/* Today's Sessions */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white mr-2">
              <span className="text-xs">T</span>
            </div>
            <h2 className="font-medium">Today Sessions</h2>
          </div>

          {/* Class 1 */}
          <div className="border border-gray-200 rounded-lg mb-4 p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Advance Web Development</h3>
                <p className="text-sm text-gray-600">Topic: React State Management</p>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Upcoming Class</span>
                </div>
              </div>
              <div>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">2:00 PM - 3:30 PM</div>
                <button className="mt-2 bg-blue-700 text-white px-3 py-1 rounded text-xs flex items-center float-right">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                  Mark Attendance
                </button>
              </div>
            </div>
          </div>

          {/* Class 2 */}
          <div className="border border-gray-200 rounded-lg mb-4 p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Python With Django</h3>
                <p className="text-sm text-gray-600">Topic: User Content</p>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Upcoming Class</span>
                </div>
              </div>
              <div>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">4:00 PM - 5:30 PM</div>
                <button className="mt-2 bg-blue-700 text-white px-3 py-1 rounded text-xs flex items-center float-right">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                  Mark Attendance
                </button>
              </div>
            </div>
          </div>

          {/* Class 3 */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">UI UX</h3>
                <p className="text-sm text-gray-600">Topic: Wireframe</p>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Upcoming Class</span>
                </div>
              </div>
              <div>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">6:00 PM - 7:30 PM</div>
                <button className="mt-2 bg-blue-700 text-white px-3 py-1 rounded text-xs flex items-center float-right">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                  Mark Attendance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherIndex;
