import React, { useState, useEffect } from "react";
import "./CareReminders.css";

// Sample JSON data (can be fetched from backend)
const remindersData = [
  {
    id: 1,
    service: "Dental Checkup",
    date: "2025-08-25",
    time: "10:00 AM",
    location: "City Dental Clinic",
    status: "pending",
  },
  {
    id: 2,
    service: "Blood Test",
    date: "2025-08-28",
    time: "09:30 AM",
    location: "Health Lab Center",
    status: "pending",
  },
];

const CareReminders = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const [reminders, setReminders] = useState(remindersData);
  const [history, setHistory] = useState([]);

  // Handle preference toggle
  const handlePreferenceChange = (type) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Snooze reminder (add 1 day)
  const snoozeReminder = (id) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              date: new Date(
                new Date(r.date).getTime() + 24 * 60 * 60 * 1000
              )
                .toISOString()
                .split("T")[0],
            }
          : r
      )
    );
  };

  // Dismiss reminder
  const dismissReminder = (id) => {
    const reminder = reminders.find((r) => r.id === id);
    setHistory((prev) => [...prev, { ...reminder, status: "dismissed" }]);
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  // Restore reminder from history
  const restoreReminder = (id) => {
    const reminder = history.find((r) => r.id === id);
    setReminders((prev) => [...prev, { ...reminder, status: "pending" }]);
    setHistory((prev) => prev.filter((r) => r.id !== id));
  };

  // Mock alert for upcoming reminders (1 day before)
  useEffect(() => {
    const today = new Date();
    reminders.forEach((r) => {
      const reminderDate = new Date(r.date);
      const diffDays = Math.ceil(
        (reminderDate - today) / (1000 * 60 * 60 * 24)
      );
      if (diffDays === 1) {
        if (preferences.email)
          alert(`Email Reminder: ${r.service} tomorrow at ${r.time}`);
        if (preferences.sms)
          alert(`SMS Reminder: ${r.service} tomorrow at ${r.time}`);
        if (preferences.push)
          alert(`Push Reminder: ${r.service} tomorrow at ${r.time}`);
      }
    });
  }, [reminders, preferences]);

  return (
    <div className="care-reminders">
      <h1>Care Reminders</h1>

      {/* Preferences Section */}
      <div className="preferences">
        <h2>Notification Preferences</h2>
        {["email", "sms", "push"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={preferences[type]}
              onChange={() => handlePreferenceChange(type)}
            />
            {type.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Upcoming Reminders */}
      <div className="reminders-list">
        <h2>Upcoming Reminders</h2>
        {reminders.length === 0 && <p>No upcoming reminders!</p>}
        {reminders
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((r) => (
            <div key={r.id} className="reminder-card">
              <p>
                <strong>{r.service}</strong> on {r.date} at {r.time} (
                {r.location})
              </p>
              <div className="actions">
                <button onClick={() => snoozeReminder(r.id)}>Snooze 1 day</button>
                <button onClick={() => dismissReminder(r.id)}>Dismiss</button>
              </div>
            </div>
          ))}
      </div>

      {/* Reminder History */}
      <div className="reminder-history">
        <h2>Reminder History</h2>
        {history.length === 0 && <p>No past reminders yet.</p>}
        {history
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((r) => (
            <div key={r.id} className="history-card">
              <p>
                <strong>{r.service}</strong> on {r.date} at {r.time} (
                {r.location}) - <em>{r.status}</em>
              </p>
              <button onClick={() => restoreReminder(r.id)}>Restore</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CareReminders;
