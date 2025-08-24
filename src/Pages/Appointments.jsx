import React, { useEffect, useState } from "react";
import "./Appointments.css";
import axios from "axios";

// Assets
// import bookapp from "../assets/appointment.jpg";   
import scroll1 from "../assets/scrol1.jpg";   
import scroll2 from "../assets/scrol2.jpg";   

const availableSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM"];
const appointmentTypes = ["Consultation", "Follow-up", "Emergency"];

const AppointmentsPage = () => {
  const [providers, setProviders] = useState([]);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [reason, setReason] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/Providers.json")
      .then((res) => {
        setProviders(res.data);
        setResults(res.data);
      })
      .catch((err) => console.error("Error loading providers:", err));
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    const filtered = providers.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.specialty.toLowerCase().includes(value.toLowerCase()) ||
        p.facility_name.toLowerCase().includes(value.toLowerCase()) ||
        p.city.toLowerCase().includes(value.toLowerCase()) ||
        p.state.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleBook = (provider) => {
    setSelectedProvider(provider);
    setSelectedDate("");
    setSelectedTime("");
    setAppointmentType("");
    setReason("");
    setError("");
  };

  const handleConfirm = () => {
    const conflict = appointments.find(
      (a) =>
        a.date === selectedDate &&
        a.time === selectedTime &&
        a.provider.id === selectedProvider.id
    );

    if (conflict) {
      setError("⚠️ You already have an appointment with this provider at this time.");
      return;
    }

    const newAppt = {
      id: Date.now(),
      provider: selectedProvider,
      date: selectedDate,
      time: selectedTime,
      type: appointmentType,
      reason: reason,
      status: "Confirmed",
    };

    setAppointments([...appointments, newAppt]);
    setError("");

    setSelectedProvider(null);
    setSelectedDate("");
    setSelectedTime("");
    setAppointmentType("");
    setReason("");
  };

  const handleCancel = (id) => {
    setAppointments(
      appointments.map((a) =>
        a.id === id ? { ...a, status: "Cancelled" } : a
      )
    );
  };

  return (
    <div
      className="appointments-container"
      // style={{
      //   backgroundImage: `url(${bookapp})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   minHeight: "100vh",
      //   position: "relative",
      //   overflow: "hidden",
      // }}
    >
      
      <img src={scroll1} alt="scroll1" className="scroll-img scroll-left" />

      {/* Right Scroll (Bottom to Top) */}
      <img src={scroll2} alt="scroll2" className="scroll-img scroll-right" />

      <h2>Appointments Page</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Name, Specialty, Facility, City, State"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <h3>Provider Results</h3>
      {results.length === 0 && <p>No providers found.</p>}

      <div className="provider-grid">
        {results.map((p) => (
          <div key={p.id} className="provider-card">
            <div className="provider-header">
              <h4>{p.name}</h4>
              <span className="specialty">{p.specialty}</span>
            </div>

            <div className="provider-body">
              <p><strong>🏥</strong> {p.facility_name}, {p.city}, {p.state}</p>
              <p><strong>🕒</strong> {p.availability || "Not specified"}</p>
              <p>
                <strong>👥</strong>{" "}
                {p.accepting_new_patients ? "Accepting New Patients ✅" : "Not Accepting ❌"}
              </p>
              <p><strong>⭐</strong> {p.rating}/5</p>
              <p><strong>📞</strong> {p.phone_number}</p>
              <p><strong>✉️</strong> {p.email}</p>
            </div>

            <div className="provider-footer">
              <button className="book-btn" onClick={() => handleBook(p)}>
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Popup */}
      {selectedProvider && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Book with {selectedProvider.name}</h3>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            <div className="slots">
              {availableSlots.map((slot, i) => (
                <button
                  key={i}
                  className={`slot-btn ${selectedTime === slot ? "selected" : ""}`}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div>
              <label>Type: </label>
              <select
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
              >
                <option value="">-- Select Type --</option>
                {appointmentTypes.map((t, i) => (
                  <option key={i} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Reason: </label>
              <input
                type="text"
                placeholder="e.g. Chest Pain, Skin Rash"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <div className="popup-actions">
              <button
                className="confirm-btn"
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime || !appointmentType || !reason}
              >
                Confirm Appointment
              </button>
              <button className="cancel-btn" onClick={() => setSelectedProvider(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {error && <p className="error-msg">{error}</p>}

    <h3>My Appointments</h3>
      {appointments.length === 0 && <p className="my-app">No appointments booked yet.</p>} 
      {appointments.map((a) => (
        <div key={a.id} className="appointment-item">
          <p><b>{a.provider.name}</b> ({a.provider.specialty})</p>
          <p>Date: {a.date}, Time: {a.time}</p>
          <p>Type: {a.type}</p>
          <p>Reason: {a.reason}</p>
          <p>Status: {a.status}</p>
          <button
            className="cancel-btn"
            onClick={() => handleCancel(a.id)}
            disabled={a.status === "Cancelled"}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsPage;
