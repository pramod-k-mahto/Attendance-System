import React, { useState } from 'react'

function StudentSetting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    notifications: true,
    theme: 'light',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (save settings or send to API)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Settings Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Settings</h1>
        <p className="text-lg text-gray-600">Update your preferences and account settings below.</p>
      </div>

      {/* Settings Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>

          {/* Profile Settings */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password Settings */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Password Settings</h2>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a new password"
            />
          </div>

          {/* Notification Preferences */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Notification Preferences</h2>
          
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="notifications" className="ml-3 text-gray-700">Enable email notifications</label>
          </div>

          {/* Theme Preferences */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Theme Preferences</h2>
          
          <div className="mb-4">
            <label htmlFor="theme" className="block text-gray-700">Choose Theme</label>
            <select
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentSetting
