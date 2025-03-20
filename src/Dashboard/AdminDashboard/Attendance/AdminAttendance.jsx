import React, { useState } from 'react';

function AdminAttendance() {
  const [attendance, setAttendance] = useState([
    { id: 1, name: 'John Doe', date: '2023-10-01', status: 'Present' },
    { id: 2, name: 'Jane Smith', date: '2023-10-01', status: 'Absent' },
    { id: 3, name: 'Alice Johnson', date: '2023-10-01', status: 'Present' },
  ]);

  const [filterDate, setFilterDate] = useState('');

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const filteredAttendance = filterDate
    ? attendance.filter((record) => record.date === filterDate)
    : attendance;

  const markAttendance = (id, status) => {
    setAttendance(
      attendance.map((record) =>
        record.id === id ? { ...record, status } : record
      )
    );
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Admin Attendance Management</h1>

      {/* Filter by Date */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Filter by Date:
        </label>
        <input
          type="date"
          value={filterDate}
          onChange={handleFilterChange}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Attendance Table */}
      <h2 className="text-xl font-semibold mb-4">Attendance Records</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {filteredAttendance.map((record) => (
            <tr key={record.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">{record.id}</td>
              <td className="py-3 px-4">{record.name}</td>
              <td className="py-3 px-4">{record.date}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    record.status === 'Present'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {record.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <button
                  onClick={() => markAttendance(record.id, 'Present')}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Present
                </button>
                <button
                  onClick={() => markAttendance(record.id, 'Absent')}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAttendance;