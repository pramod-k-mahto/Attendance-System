
const TeacherBatch = () => {
  const batches = [
    {
      id: 1,
      title: "Advance Web Development",
      topic: "React State Management",
      time: "2:00 PM - 3:30 PM",
      status: "Upcoming Class"
    },
    {
      id: 2,
      title: "Python With Django",
      topic: "Loop Concept",
      time: "4:00 PM - 5:30 PM",
      status: "Upcoming Class"
    },
    {
      id: 3,
      title: "UI UX",
      topic: "Wireframe",
      time: "4:00 PM - 5:30 PM",
      status: "Upcoming Class"
    },
    {
      id: 4,
      title: "UI UX",
      topic: "Wireframe",
      time: "4:00 PM - 5:30 PM",
      status: "Upcoming Class"
    },
    {
      id: 5,
      title: "Python With Django",
      topic: "Loop Concept",
      time: "4:00 PM - 5:30 PM",
      status: "Upcoming Class"
    }
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">My Batches</h1>
      
      <div className="space-y-3">
        {batches.map(batch => (
          <div key={batch.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{batch.title}</h3>
                <p className="text-sm text-gray-600">Topic: {batch.topic}</p>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">{batch.status}</span>
                </div>
              </div>
              <div>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                  {batch.time}
                </div>
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
        ))}
      </div>
    </div>
  );
};

export default TeacherBatch;