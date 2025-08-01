import React from 'react';
import './Notifications.css';

const mockNotifications = [
  {
    id: 1,
    title: 'New Appointment Confirmation',
    message: 'Your appointment with Dr. Sharma is confirmed for Aug 5.',
    date: '2025-07-28'
  },
  {
    id: 2,
    title: 'Policy Update',
    message: 'Your health insurance policy was updated successfully.',
    date: '2025-07-25'
  }
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {mockNotifications.map((n) => (
          <div key={n.id} className="notification-card">
            <h4>{n.title}</h4>
            <p>{n.message}</p>
            <span>{n.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;