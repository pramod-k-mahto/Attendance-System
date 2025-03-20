import React from 'react';

const StudentIndex = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header Card */}
      <div className="bg-gray-200 rounded-lg p-4 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">Hello, Raj Sapkota</h1>
          <p className="text-sm text-gray-600">View Your Attendance</p>
        </div>
        <div className="relative">
          <div className="bg-yellow-400 h-10 w-10 rounded-full absolute top-0 right-0"></div>
          <div className="bg-red-400 h-12 w-12 rounded-full overflow-hidden border-2 border-white">
            {/* Student avatar */}
            <div className="bg-red-500 w-full h-6"></div>
            <div className="bg-white w-full h-6 flex justify-center items-center">
              <div className="bg-teal-500 h-4 w-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Join Date Card */}
        <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
          <div className="bg-blue-200 p-2 rounded-full mb-2">
            <div className="h-8 w-8 bg-blue-800 rounded-full flex justify-center items-center">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
              </svg>
            </div>
          </div>
          <p className="font-bold">Join Date</p>
          <p>March 3</p>
        </div>

        {/* Enroll Course Card */}
        <div className="bg-yellow-100 p-4 rounded-lg flex flex-col items-center">
          <div className="bg-yellow-200 p-2 rounded-full mb-2">
            <div className="h-8 w-8 bg-yellow-500 rounded-full flex justify-center items-center">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <p className="font-bold">Enroll Course</p>
          <p>UI UX</p>
        </div>

        {/* End Date Card */}
        <div className="bg-purple-200 p-4 rounded-lg flex flex-col items-center">
          <div className="bg-purple-300 p-2 rounded-full mb-2">
            <div className="h-8 w-8 bg-purple-800 rounded-full flex justify-center items-center">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p className="font-bold">End Date</p>
          <p>May 3</p>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex mb-6 max-w-xs mx-auto">
        <div className="w-1/2 bg-blue-500 text-white text-center py-2 rounded-l-md">Present</div>
        <div className="w-1/2 bg-yellow-500 text-black text-center py-2 rounded-r-md">Absent</div>
      </div>

      {/* Attendance Chart */}
      <div className="flex justify-center">
        <div className="w-64 h-64 relative">
          {/* Blue section (85%) */}
          <div className="w-full h-full rounded-full bg-blue-500 flex justify-center items-center">
            <div className="text-white font-bold text-xl">85%</div>
          </div>
          
          {/* Yellow section (15%) */}
          <div 
            className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-yellow-500"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              transform: 'scale(2) translate(25%, 25%)',
            }}
          ></div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-blue-500 mr-2"></div>
          <span>Present</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
          <span>Absent</span>
        </div>
      </div>
    </div>
  );
};

export default StudentIndex;