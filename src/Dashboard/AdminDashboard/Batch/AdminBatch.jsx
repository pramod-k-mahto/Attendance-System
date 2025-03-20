import React, { useState } from 'react';

function AdminBatch() {
  const [batches, setBatches] = useState([
    { id: 1, name: 'Batch 1', startDate: '2023-10-01', endDate: '2023-12-31' },
    { id: 2, name: 'Batch 2', startDate: '2024-01-01', endDate: '2024-03-31' },
  ]);

  const [newBatch, setNewBatch] = useState({
    name: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBatch({
      ...newBatch,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const batchToAdd = {
      id: batches.length + 1,
      ...newBatch,
    };
    setBatches([...batches, batchToAdd]);
    setNewBatch({
      name: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Admin Batch Management</h1>

      <h2 className="text-xl font-semibold mb-4">Add New Batch</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Batch Name:</label>
          <input
            type="text"
            name="name"
            value={newBatch.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={newBatch.startDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={newBatch.endDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Batch
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Batch List</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Start Date</th>
            <th className="py-3 px-4 text-left">End Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {batches.map((batch) => (
            <tr key={batch.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">{batch.id}</td>
              <td className="py-3 px-4">{batch.name}</td>
              <td className="py-3 px-4">{batch.startDate}</td>
              <td className="py-3 px-4">{batch.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBatch;