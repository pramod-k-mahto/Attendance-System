import React from 'react';
import { Users, FileText, Star } from 'lucide-react';

const AdminIndex = () => {
  // Sample data
  const stats = [
    { id: 1, title: 'Total Users', icon: <Users size={24} className="text-blue-500" />, bgColor: 'bg-blue-100' },
    { id: 2, title: 'Total Products', icon: <FileText size={24} className="text-yellow-500" />, bgColor: 'bg-yellow-100' },
    { id: 3, title: 'Total Orders', icon: <Star size={24} className="text-purple-500" />, bgColor: 'bg-purple-100' },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [35, 40, 30, 45, 35],
        color: 'bg-green-500'
      },
      {
        label: 'Expenses',
        data: [25, 30, 20, 35, 25],
        color: 'bg-red-500'
      }
    ]
  };

  const trackers = [
    { id: 1, name: 'John Doe', goal: '$1,000', subject: '$1,200', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', goal: '$1,500', subject: '$1,400', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', goal: '$2,000', subject: '$1,800', email: 'mike@example.com' },
    { id: 4, name: 'Emily Brown', goal: '$1,800', subject: '$1,600', email: 'emily@example.com' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
            <h1 className="text-lg font-bold">John D - Client Panel</h1>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-1 bg-blue-500 text-white rounded text-sm flex items-center">
              <span className="mr-1">⬇️</span> Export
            </button>
            <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded text-sm flex items-center">
              <span className="mr-1">✏️</span> Edit Panel
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat) => (
            <div key={stat.id} className={`p-6 rounded-lg ${stat.bgColor}`}>
              <div className="flex items-center">
                {stat.icon}
                <h3 className="ml-3 text-lg font-medium">{stat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">Total Awareness vs Needs</h2>
          <div className="flex mb-2">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-green-500 mr-2"></div>
              <span className="text-sm">Revenue</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 mr-2"></div>
              <span className="text-sm">Expenses</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between">
            {chartData.labels.map((label, index) => (
              <div key={index} className="flex flex-col items-center w-1/5">
                <div className="w-full flex justify-center space-x-2">
                  {chartData.datasets.map((dataset, dataIndex) => (
                    <div
                      key={dataIndex}
                      className={`w-6 ${dataset.color}`}
                      style={{ height: `${dataset.data[index] * 3}px` }}
                    ></div>
                  ))}
                </div>
                <span className="text-sm mt-2">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trackers Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Trackers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Goal</th>
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {trackers.map((tracker) => (
                  <tr key={tracker.id} className="border-t">
                    <td className="py-3 flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full mr-3 flex items-center justify-center text-white text-xs">
                        {tracker.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {tracker.name}
                    </td>
                    <td className="py-3">{tracker.goal}</td>
                    <td className="py-3">{tracker.subject}</td>
                    <td className="py-3">{tracker.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;