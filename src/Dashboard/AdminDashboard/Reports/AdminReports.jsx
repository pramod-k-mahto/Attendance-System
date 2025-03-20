import React from 'react';

const LeaveApplicationReport = () => {
  // Sample data for users
  const users = [
    { id: 1, name: 'Raj Sapkota', subject: 'Leave For Home Visit', email: 'rajsapkota@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 2, name: 'Bhawana Karki', subject: 'Leave Letter', email: 'bhawana@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 3, name: 'Amisha Neupane', subject: 'Leave For Home Visit', email: 'rajsapkota@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 4, name: 'Suman Gautam', subject: 'Leave For Home Visit', email: 'rajsapkota@gmail.com', imgUrl: '/api/placeholder/40/40' },
    { id: 5, name: 'Madan Bista', subject: 'Leave For Home Visit', email: 'rajsapkota@gmail.com', imgUrl: '/api/placeholder/40/40' },
  ];

  // Selected user data
  const selectedUser = {
    name: 'Raj Sapkota',
    subject: 'Leave Application',
    content: `Dear [Manager's Name],

I hope this email finds you well. I am writing to formally request leave from [start date] to [end date] due to [reason – personal reasons, health issues, family matters, etc.].

I will ensure that all my pending tasks are completed before my leave, and I am happy to assist in handing over any responsibilities as needed. Please let me know if you require any further information.

I kindly request your approval for this leave and would appreciate your confirmation at your earliest convenience.
Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Position]
[Company Name]`
  };

  return (
    <div className="bg-white p-6 max-w-4xl mx-auto">
      {/* Report Header */}
      <h2 className="text-xl font-bold mb-4">Report</h2>
      
      {/* Users Table */}
      <div className="mb-8">
        <div className="overflow-x-auto bg-gray-100 rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Subject</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-200">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img 
                        src={user.imgUrl} 
                        alt={user.name} 
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{user.subject}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button className="bg-red-500 text-white px-4 py-1 rounded text-sm">
                      Reject
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Selected User's Leave Application */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-center mb-6">{selectedUser.name}</h2>
        
        <div className="mb-4">
          <h3 className="font-bold">Subject: {selectedUser.subject}</h3>
        </div>
        
        <div className="whitespace-pre-line">
          {selectedUser.content}
        </div>
        
        <div className="mt-6 flex space-x-4 justify-center">
          <button className="bg-red-500 text-white px-6 py-2 rounded">
            Reject
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplicationReport;