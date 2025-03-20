import React, { useState } from 'react';

const AttendanceDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('10A/CS-2');
  const [currentDate, setCurrentDate] = useState('03/20/2025');
  
  // Sample data
  const students = [
    { id: 1, name: 'Raj Kumar', status: 'present' },
    // More students would be here in a real implementation
  ];
  
  // Calculate attendance percentages
  const present = 80;
  const absent = 20;
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gray-200 p-4 flex justify-between items-center rounded-lg shadow-sm mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Hello, Raj Sephora</h1>
          <p className="text-sm text-gray-500">Vice The Headmaster</p>
        </div>
        <div className="flex items-center">
          <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full mr-2">NEW</span>
          <div className="w-12 h-12 bg-blue-500 rounded-lg overflow-hidden">
            <img src="/api/placeholder/100/100" alt="Person sitting at laptop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Daily Attendance</h2>
        
        {/* Filters */}
        <div className="flex mb-4 gap-2">
          <div className="flex-1">
            <select 
              value={selectedClass} 
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="10A/CS-2">10A/CS-2</option>
              <option value="10B/CS-2">10B/CS-2</option>
              <option value="11A/CS-2">11A/CS-2</option>
            </select>
          </div>
          <div className="flex-1">
            <input 
              type="text" 
              value={currentDate} 
              onChange={(e) => setCurrentDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Find Date / PDF
          </button>
        </div>
        
        {/* Attendance Table */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">SL</th>
                <th className="p-2 text-left">STUDENT NAME</th>
                <th className="p-2 text-center" colSpan={31}>CURRENT MONTH STATUS</th>
                <th className="p-2 text-right">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="border-t border-gray-100">
                  <td className="p-2">{student.id}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2 text-center" colSpan={31}>
                    {/* This would be filled with daily attendance status */}
                    <div className="flex justify-center">
                      <div className="w-64 h-4 flex">
                        <div className="bg-blue-500 h-full" style={{ width: '80%' }}></div>
                        <div className="bg-yellow-400 h-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-right">100%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Attendance Chart */}
        <div className="flex justify-center mb-6">
          <div className="relative w-64 h-64">
            {/* Blue section (Present) */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100">
                <path 
                  d="M50,50 L50,0 A50,50 0 0,1 97.5,65 L50,50 Z" 
                  fill="#4299e1" 
                />
                <path 
                  d="M50,50 L97.5,65 A50,50 0 0,1 50,100 L50,50 Z" 
                  fill="#4299e1" 
                />
                <path 
                  d="M50,50 L50,100 A50,50 0 0,1 15,85 L50,50 Z" 
                  fill="#4299e1" 
                />
                <path 
                  d="M50,50 L15,85 A50,50 0 0,1 15,15 L50,50 Z" 
                  fill="#4299e1" 
                />
                {/* Yellow section (Absent) */}
                <path 
                  d="M50,50 L15,15 A50,50 0 0,1 50,0 L50,50 Z" 
                  fill="#ecc94b" 
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
            <span className="text-sm">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 mr-2"></div>
            <span className="text-sm">Absent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
