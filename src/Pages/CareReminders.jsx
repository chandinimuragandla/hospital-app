import React from 'react';
import './CareReminders.css';

const mockReminders = [
  {
    reminder_id: 1,
    type: 'Medication',
    message: 'Take blood pressure medicine',
    scheduled_date: '2025-08-01',
    frequency: 'Daily',
    status: 'Active',
    priority: 'High'
  },
  {
    reminder_id: 2,
    type: 'Vaccination',
    message: 'Get flu vaccine',
    scheduled_date: '2025-08-15',
    frequency: 'Once',
    status: 'Upcoming',
    priority: 'Medium'
  }
];

const CareReminders = () => {
  return (
    <div className="reminders-container">
      <h2>Care Reminders</h2>
      <div className="reminders-grid">
        {mockReminders.map((reminder) => (
          <div key={reminder.reminder_id} className="reminder-card">
            <h3>{reminder.type}</h3>
            <p><strong>Message:</strong> {reminder.message}</p>
            <p><strong>Date:</strong> {reminder.scheduled_date}</p>
            <p><strong>Frequency:</strong> {reminder.frequency}</p>
            <p><strong>Status:</strong> {reminder.status}</p>
            <p><strong>Priority:</strong> <span className={`priority ${reminder.priority.toLowerCase()}`}>{reminder.priority}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareReminders;