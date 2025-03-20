
import React, { useState } from 'react';

const TeacherAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('UBUX Class');
  const [selectedSection, setSelectedSection] = useState('Ux-03 UX');
  const [currentDate, setCurrentDate] = useState('Mar 3 2023');
  
  // Initial student data
  const initialStudents = [
    { id: 1, name: 'Raj Sapkota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'ABSENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 2 },
    { id: 2, name: 'Sujan Thadarai', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 4 },
    { id: 3, name: 'Pramod Mahatо', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 3 },
    { id: 4, name: 'Suman Gautam', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 5 },
    { id: 5, name: 'Saroj Giri', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 3 },
    { id: 6, name: 'Himal Rawal', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 1 },
    { id: 7, name: 'Madan Bista', status: 'ABSENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 3 },
    { id: 8, name: 'Raj Sapkota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 5 },
    { id: 9, name: 'Amisha Neupane', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 4, hasLeave: true },
    { id: 10, name: 'Shova Kafle', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 2 },
    { id: 11, name: 'Amrit Kaji', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 1 },
    { id: 12, name: 'Gokal Baskota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 2 },
    { id: 13, name: 'Kp Oli', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 4, hasLeave: true },
    { id: 14, name: 'Sher BD Deuba', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 1 },
    { id: 15, name: 'Madan Bista', status: 'ABSENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 3 },
    { id: 16, name: 'Raj Sapkota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 5 },
    { id: 17, name: 'Raj Sapkota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 4, hasLeave: true },
    { id: 18, name: 'Raj Sapkota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 5 },
    { id: 19, name: 'Raj Sapkota', status: 'PRESENT', previousDays: [{ date: '05', status: 'PRESENT' }, { date: '06', status: 'PRESENT' }, { date: '07', status: 'PRESENT' }, { date: '08', status: 'PRESENT' }, { date: '09', status: 'PRESENT' }, { date: '10', status: 'PRESENT' }, { date: '11', status: 'PRESENT' }], total: 4, hasLeave: true },
  ];
  
  const [students, setStudents] = useState(initialStudents);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Status options
  const statusOptions = ['PRESENT', 'ABSENT', 'LEAVE'];
  
  // Function to update student status
  const updateStatus = (studentId, newStatus) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        // Calculate new total based on status change
        let newTotal = student.total;
        if (student.status !== 'PRESENT' && newStatus === 'PRESENT') {
          newTotal += 1;
        } else if (student.status === 'PRESENT' && newStatus !== 'PRESENT') {
          newTotal -= 1;
        }
        
        return { ...student, status: newStatus, total: newTotal };
      }
      return student;
    });
    
    setStudents(updatedStudents);
  };
  
  // Function to update previous day status
  const updatePreviousDayStatus = (studentId, dayIndex, newStatus) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedPreviousDays = [...student.previousDays];
        updatedPreviousDays[dayIndex] = { 
          ...updatedPreviousDays[dayIndex], 
          status: newStatus 
        };
        
        // Recalculate total present days
        const presentCount = updatedPreviousDays.filter(day => day.status === 'PRESENT').length;
        const currentDayPresent = student.status === 'PRESENT' ? 1 : 0;
        const newTotal = presentCount + currentDayPresent;
        
        return { 
          ...student, 
          previousDays: updatedPreviousDays,
          total: newTotal
        };
      }
      return student;
    });
    
    setStudents(updatedStudents);
  };
  
  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentDate(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    setDatePickerOpen(false);
  };
  
  // Function to get status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case 'PRESENT':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'ABSENT':
        return (
          <div className="h-4 w-4 bg-red-500 rounded-full"></div>
        );
      case 'LEAVE':
        return (
          <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
        );
      default:
        return null;
    }
  };
  
  // Simple month picker for demo
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded p-4">
      <div className="text-xl font-bold mb-4">Daily Attendance</div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <div className="relative">
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="block appearance-none w-32 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>UBUX Class</option>
              <option>Web Design</option>
              <option>UI/UX Basics</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <select 
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="block appearance-none w-32 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Ux-03 UX</option>
              <option>Ux-01 UX</option>
              <option>Ux-02 UX</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex items-center relative">
          <button 
            onClick={() => setDatePickerOpen(!datePickerOpen)}
            className="flex items-center border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Today: {currentDate}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {datePickerOpen && (
            <div className="absolute right-0 top-10 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-10">
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <select 
                    value={currentMonth}
                    onChange={(e) => {
                      const newDate = new Date(selectedDate);
                      newDate.setMonth(parseInt(e.target.value));
                      setSelectedDate(newDate);
                    }}
                    className="text-sm border rounded p-1"
                  >
                    {months.map((month, idx) => (
                      <option key={month} value={idx}>{month}</option>
                    ))}
                  </select>
                  <select 
                    value={currentYear}
                    onChange={(e) => {
                      const newDate = new Date(selectedDate);
                      newDate.setFullYear(parseInt(e.target.value));
                      setSelectedDate(newDate);
                    }}
                    className="text-sm border rounded p-1"
                  >
                    {Array.from({ length: 5 }, (_, i) => currentYear - 2 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-700">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: new Date(currentYear, currentMonth, 1).getDay() }, (_, i) => (
                    <div key={`empty-${i}`} className="h-8"></div>
                  ))}
                  {days.map(day => (
                    <button
                      key={day}
                      onClick={() => {
                        const newDate = new Date(currentYear, currentMonth, day);
                        handleDateChange(newDate);
                      }}
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
                        ${selectedDate.getDate() === day ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="w-12 py-2 px-3 text-left text-sm font-semibold">SN.</th>
              <th className="py-2 px-3 text-left text-sm font-semibold">STUDENT NAME</th>
              <th className="py-2 px-3 text-left text-sm font-semibold">STATUS</th>
              <th className="py-2 px-3 text-left text-sm font-semibold">PREVIOUS 7 DAYS STATUS</th>
              <th className="w-16 py-2 px-3 text-left text-sm font-semibold">TOTAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="py-2 px-3 text-sm">{student.id}</td>
                <td className="py-2 px-3 text-sm">{student.name}</td>
                <td className="py-2 px-3">
                  <div className="flex space-x-2">
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(student.id, status)}
                        className={`flex items-center px-2 py-1 rounded text-xs ${
                          student.status === status
                            ? status === 'PRESENT' 
                              ? 'bg-green-100 text-green-800 border border-green-500'
                              : status === 'ABSENT'
                                ? 'bg-red-100 text-red-800 border border-red-500'
                                : 'bg-yellow-100 text-yellow-800 border border-yellow-500'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {status === 'PRESENT' && (
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        )}
                        {status === 'ABSENT' && (
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                        )}
                        {status === 'LEAVE' && (
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                        )}
                        {status}
                      </button>
                    ))}
                  </div>
                </td>
                <td className="py-2 px-3">
                  <div className="flex space-x-4">
                    {student.previousDays.map((day, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-xs text-gray-500">{day.date}</div>
                        <div className="relative group">
                          <button 
                            className="w-5 h-5 flex items-center justify-center text-xs"
                            onClick={() => {
                              const currentStatus = day.status;
                              const statuses = ['PRESENT', 'ABSENT', 'LEAVE'];
                              const currentIndex = statuses.indexOf(currentStatus);
                              const nextIndex = (currentIndex + 1) % statuses.length;
                              updatePreviousDayStatus(student.id, index, statuses[nextIndex]);
                            }}
                          >
                            {getStatusIcon(day.status)}
                          </button>
                          <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                            Click to change status
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-2 px-3 text-sm font-medium">{student.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Save Attendance
        </button>
      </div>
    </div>
  );
};

export default TeacherAttendance;
