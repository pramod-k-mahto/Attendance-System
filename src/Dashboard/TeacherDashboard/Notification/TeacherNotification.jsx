// import React from 'react'

// function TeacherNotification() {
//   return (
//     <div>
//         TeacherNotification
      
//     </div>
//   )
// }

// export default TeacherNotification
import React, { useState, useEffect } from 'react';

function TeacherNotification() {
  const [notifications, setNotifications] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  // Sample notification data
  const initialNotifications = [
    { 
      id: 1, 
      type: 'absence', 
      message: 'Sujan Thadarai has been absent for 3 consecutive days', 
      timestamp: '2023-03-03T09:15:00', 
      read: false,
      student: 'Sujan Thadarai',
      action: 'Review'
    },
    { 
      id: 2, 
      type: 'leave', 
      message: 'Pramod Mahato has requested leave for March 5-7', 
      timestamp: '2023-03-02T14:30:00', 
      read: false,
      student: 'Pramod Mahato',
      action: 'Approve'
    },
    { 
      id: 3, 
      type: 'attendance', 
      message: 'Attendance for UX-03 class on March 1 needs verification', 
      timestamp: '2023-03-01T16:45:00', 
      read: true,
      class: 'UX-03',
      action: 'Verify'
    },
    { 
      id: 4, 
      type: 'system', 
      message: 'System will be under maintenance on March 4 from 10 PM to 2 AM', 
      timestamp: '2023-03-01T10:00:00', 
      read: true,
      action: 'Acknowledge'
    },
    { 
      id: 5, 
      type: 'absence', 
      message: 'Madan Bista has been absent for 2 consecutive days', 
      timestamp: '2023-02-28T09:30:00', 
      read: true,
      student: 'Madan Bista',
      action: 'Review'
    }
  ];
  
  // Load notifications on component mount
  useEffect(() => {
    setNotifications(initialNotifications);
    
    // Calculate unread count
    const unread = initialNotifications.filter(notification => !notification.read).length;
    setUnreadCount(unread);
  }, []);
  
  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    
    // Update unread count
    setUnreadCount(prevCount => Math.max(0, prevCount - 1));
  };
  
  // Handle notification action
  const handleAction = (id, action) => {
    console.log(`Performing action: ${action} for notification ${id}`);
    
    // In a real application, this would trigger specific workflows
    // For now, we'll just mark it as read
    markAsRead(id);
  };
  
  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    
    // Update unread count if needed
    const notification = notifications.find(n => n.id === id);
    if (notification && !notification.read) {
      setUnreadCount(prevCount => Math.max(0, prevCount - 1));
    }
  };
  
  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'absence':
        return (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'leave':
        return (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-100 text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case 'attendance':
        return (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        );
      case 'system':
        return (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Teacher Notifications</h2>
        <div className="flex items-center">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
            {unreadCount}
          </span>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 text-sm hover:underline"
          >
            {showAll ? 'Show Unread' : 'Show All'}
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        {notifications
          .filter(notification => showAll || !notification.read)
          .map(notification => (
            <div 
              key={notification.id} 
              className={`flex items-start p-3 border rounded-lg ${!notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'}`}
            >
              {getNotificationIcon(notification.type)}
              
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-start">
                  <p className={`text-sm ${!notification.read ? 'font-semibold' : ''}`}>
                    {notification.message}
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">
                      {formatDate(notification.timestamp)}
                    </span>
                    <button 
                      onClick={() => deleteNotification(notification.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    {notification.student && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                        {notification.student}
                      </span>
                    )}
                    {notification.class && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                        {notification.class}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {!notification.read && (
                      <button 
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-blue-500 hover:text-blue-700"
                      >
                        Mark as read
                      </button>
                    )}
                    <button 
                      onClick={() => handleAction(notification.id, notification.action)}
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      {notification.action}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        {notifications.filter(notification => showAll || !notification.read).length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No notifications to display
          </div>
        )}
      </div>
      
      <div className="mt-4 flex justify-center">
        <button 
          onClick={() => setNotifications(notifications.map(notification => ({ ...notification, read: true })))}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
}

export default TeacherNotification;