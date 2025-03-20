import React, { useState } from 'react';

function AdminSetting() {
  const [settings, setSettings] = useState({
    appName: 'My Admin Panel',
    emailNotifications: true,
    theme: 'light',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
    console.log('Updated Settings:', settings);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        {/* Application Name */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Application Name:
          </label>
          <input
            type="text"
            name="appName"
            value={settings.appName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Email Notifications */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700 text-sm font-bold">
              Enable Email Notifications
            </span>
          </label>
        </div>

        {/* Theme Preference */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Theme:
          </label>
          <div className="mt-2">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={settings.theme === 'light'}
                onChange={handleInputChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Light</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={settings.theme === 'dark'}
                onChange={handleInputChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Dark</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value="system"
                checked={settings.theme === 'system'}
                onChange={handleInputChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">System Default</span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminSetting;