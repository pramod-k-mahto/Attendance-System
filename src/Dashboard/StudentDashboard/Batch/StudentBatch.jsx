import React, { useState } from 'react';

function StudentBatch() {
  const [enrolledBatches, setEnrolledBatches] = useState([
    {
      id: 1,
      name: 'Batch 1 - Web Development',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      progress: 65,
    },
    {
      id: 2,
      name: 'Batch 2 - Data Science',
      startDate: '2024-01-01',
      endDate: '2024-03-31',
      progress: 40,
    },
  ]);

  const [selectedBatch, setSelectedBatch] = useState(null);

  const handleBatchClick = (batch) => {
    setSelectedBatch(batch);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      {/* Enrolled Batches Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Enrolled Batches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledBatches.map((batch) => (
            <div
              key={batch.id}
              className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleBatchClick(batch)}
            >
              <h3 className="text-lg font-bold mb-2">{batch.name}</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Start Date:</span> {batch.startDate}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">End Date:</span> {batch.endDate}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${batch.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Progress: {batch.progress}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Batch Details */}
      {selectedBatch && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Batch Details</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Batch Name:</span> {selectedBatch.name}
            </p>
            <p>
              <span className="font-semibold">Start Date:</span> {selectedBatch.startDate}
            </p>
            <p>
              <span className="font-semibold">End Date:</span> {selectedBatch.endDate}
            </p>
            <p>
              <span className="font-semibold">Progress:</span> {selectedBatch.progress}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentBatch;