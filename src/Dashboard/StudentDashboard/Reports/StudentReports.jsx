import React from 'react';

function StudentReports() {
  // Mock data for reports
  const academicPerformance = [
    { subject: 'Mathematics', grade: 'A', score: 95 },
    { subject: 'Science', grade: 'B+', score: 88 },
    { subject: 'History', grade: 'A-', score: 90 },
    { subject: 'English', grade: 'B', score: 85 },
  ];

  const attendanceReport = [
    { month: 'September 2023', present: 22, absent: 2 },
    { month: 'October 2023', present: 20, absent: 4 },
    { month: 'November 2023', present: 23, absent: 1 },
  ];

  const downloadableReports = [
    { name: 'Term 1 Report Card', date: '2023-10-01', link: '#' },
    { name: 'Midterm Exam Results', date: '2023-09-15', link: '#' },
    { name: 'Annual Progress Report', date: '2023-12-01', link: '#' },
  ];

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Student Reports</h1>

      {/* Academic Performance Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Academic Performance</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Grade</th>
                <th className="py-3 px-4 text-left">Score</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {academicPerformance.map((report, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-4">{report.subject}</td>
                  <td className="py-3 px-4">{report.grade}</td>
                  <td className="py-3 px-4">{report.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Report Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Attendance Report</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Month</th>
                <th className="py-3 px-4 text-left">Present Days</th>
                <th className="py-3 px-4 text-left">Absent Days</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {attendanceReport.map((report, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-4">{report.month}</td>
                  <td className="py-3 px-4">{report.present}</td>
                  <td className="py-3 px-4">{report.absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Downloadable Reports Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Downloadable Reports</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Report Name</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Download</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {downloadableReports.map((report, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-4">{report.name}</td>
                  <td className="py-3 px-4">{report.date}</td>
                  <td className="py-3 px-4">
                    <a
                      href={report.link}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentReports;