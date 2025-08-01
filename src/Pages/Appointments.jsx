import React from 'react';
import './Appointments.css';
import { useAppointments } from '../context/AppointmentContext';

const Appointments = () => {
  const { appointments } = useAppointments();

  return (
    <div className="appointments-container">
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <div className="appointments-grid">
          {appointments.map((a) => (
            <div key={a.appointment_id} className="appointment-card">
              <h3>{a.appointment_type}</h3>
              <p><strong>Date:</strong> {a.appointment_date}</p>
              <p><strong>Time:</strong> {a.appointment_time}</p>
              <p><strong>Status:</strong> <span className={`status ${a.status.toLowerCase()}`}>{a.status}</span></p>
              <p><strong>Reason:</strong> {a.reason}</p>
              <p><strong>Notes:</strong> {a.notes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;