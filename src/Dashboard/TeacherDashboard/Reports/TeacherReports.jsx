import React from 'react'

function TeacherReports() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Teacher Dashboard</h1>
        <p className="text-lg text-gray-600">Manage your reports, tasks, and notifications from here.</p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report Overview */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Report Overview</h2>
          <div className="space-y-4">
            <p className="text-gray-600"><strong>Performance:</strong> Excellent</p>
            <p className="text-gray-600"><strong>Last Report:</strong> March 2025</p>
            <p className="text-gray-600"><strong>Next Review:</strong> April 2025</p>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            View Full Report
          </button>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
          <ul className="space-y-3">
            <li className="text-gray-600">Grade assignments for Math class</li>
            <li className="text-gray-600">Prepare lesson plan for History</li>
            <li className="text-gray-600">Attend faculty meeting on April 5th</li>
            <li className="text-gray-600">Review student progress in Science</li>
          </ul>
          <button className="mt-6 w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
            See All Tasks
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">New grades are available for review.</p>
              <span className="text-sm text-gray-400">Just now</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Meeting with the principal scheduled for tomorrow.</p>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Your performance review has been posted.</p>
              <span className="text-sm text-gray-400">1 day ago</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors">
            View All Notifications
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">&copy; 2025 Teacher Dashboard. All rights reserved.</p>
      </div>
    </div>
  )
}

export default TeacherReports
