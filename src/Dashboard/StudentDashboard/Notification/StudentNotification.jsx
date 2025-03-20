import { useState } from "react";

function StudentNotification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Assignment Posted',
      message: 'A new assignment has been posted for Batch 1 - Web Development.',
      date: '2023-10-05',
      isRead: false,
    },
    {
      id: 2,
      title: 'Batch Schedule Updated',
      message: 'The schedule for Batch 2 - Data Science has been updated.',
      date: '2023-10-04',
      isRead: true,
    },
    {
      id: 3,
      title: 'Reminder: Upcoming Deadline',
      message: 'The deadline for Assignment 3 is approaching. Submit your work soon!',
      date: '2023-10-03',
      isRead: false,
    },
  ]);

  const [filter, setFilter] = useState('all'); // 'all', 'unread'

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const filteredNotifications =
    filter === 'unread'
      ? notifications.filter((notification) => !notification.isRead)
      : notifications;

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>

      {/* Filter Buttons */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${
            filter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 rounded ${
            filter === 'unread'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Unread
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 bg-white shadow-md rounded-lg ${
              !notification.isRead ? 'border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
              </div>
              {!notification.isRead && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Mark as Read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentNotification;