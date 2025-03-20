import React from 'react';

const Instructor = () => {
  // Sample data for instructors
  const instructors = [
    { id: 1, name: 'Sujan Thadarai', position: 'Coordinator of UI UX', subject: 'UI UX', email: 'rajajakot@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 2, name: 'Bhawana Karki', position: 'Coordinator of Python', subject: 'Python', email: 'bhawana@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 3, name: 'Amisha Neupane', position: 'Coordinator of Python', subject: 'UI UX', email: 'rajajakot@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 4, name: 'Suman Gautam', position: 'Coordinator of Python', subject: 'UI UX', email: 'rajajakot@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 5, name: 'Madan Bista', position: 'Coordinator of Python', subject: 'UI UX', email: 'rajajakot@gmail.com', imgUrl: '/api/placeholder/40/40' },
  ];

  // Gender distribution data
  const genderData = {
    boys: 6,
    girls: 6,
    total: 12
  };

  return (
    <div className="bg-white p-6 max-w-4xl mx-auto">
      {/* Instructors Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Instructor</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Position</th>
                <th className="text-left py-3 px-4">Subject</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor) => (
                <tr key={instructor.id} className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img 
                        src={instructor.imgUrl} 
                        alt={instructor.name} 
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span>{instructor.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{instructor.position}</td>
                  <td className="py-3 px-4">{instructor.subject}</td>
                  <td className="py-3 px-4">{instructor.email}</td>
                  <td className="py-3 px-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Gender Distribution Section */}
      <div>
        <h2 className="text-xl font-bold mb-6">Gender</h2>
        <div className="flex flex-col items-center">
          {/* Donut Chart */}
          <div className="relative w-64 h-64 mb-8">
            {/* Purple segment (Boys) */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  stroke="#B366FF" 
                  strokeWidth="20" 
                  strokeDasharray="125.6 125.6" 
                  strokeDashoffset="0"
                />
              </svg>
            </div>
            
            {/* Blue segment (Girls) */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  stroke="#5050FF" 
                  strokeWidth="20" 
                  strokeDasharray="125.6 125.6" 
                  strokeDashoffset="125.6"
                />
              </svg>
            </div>
            
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-xl font-bold">{genderData.total} Student</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center w-full space-x-16">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 mr-2"></div>
              <span>Boys= {genderData.boys}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 mr-2"></div>
              <span>Girls= {genderData.girls}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;