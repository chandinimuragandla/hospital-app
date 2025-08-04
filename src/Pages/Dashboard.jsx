import React, { useEffect, useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import { useAppointments } from '../context/AppointmentContext';
import bannerImage from '../assets/das1.jpeg';
import { FaSun, FaMoon } from 'react-icons/fa';

const mockData = [
  {
    issue: 'Dental Problem',
    doctor: 'Dr. Ramesh Babu',
    specialty: 'Dentist',
    experience: '10 years',
    hospital: 'ABC Dental Clinic',
    contact: 'dental@hospital.com',
    phone: '+91-9876543210',
    timing: 'Mon - Fri | 9am - 1pm',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png'
  },
  {
    issue: 'Eye Problem',
    doctor: 'Dr. Priya Sharma',
    specialty: 'Ophthalmologist',
    experience: '8 years',
    hospital: 'Vision Care Center',
    contact: 'eye@hospital.com',
    phone: '+91-9123456780',
    timing: 'Tue - Sat | 10am - 4pm',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922656.png'
  },
  {
    issue: 'Heart Checkup',
    doctor: 'Dr. Rahul Mehta',
    specialty: 'Cardiologist',
    experience: '12 years',
    hospital: 'Heartline Hospital',
    contact: 'heart@hospital.com',
    phone: '+91-9988776655',
    timing: 'Mon - Thu | 2pm - 6pm',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922688.png'
  },
  {
    issue: 'Skin Allergy',
    doctor: 'Dr. Kavya Nair',
    specialty: 'Dermatologist',
    experience: '7 years',
    hospital: 'SkinGlow Clinic',
    contact: 'skin@hospital.com',
    phone: '+91-9090909090',
    timing: 'Wed - Sat | 11am - 3pm',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922676.png'
  },
  {
    issue: 'General Fever',
    doctor: 'Dr. Anil Kumar',
    specialty: 'General Physician',
    experience: '15 years',
    hospital: 'City Health Center',
    contact: 'general@hospital.com',
    phone: '+91-9012345678',
    timing: 'Daily | 8am - 12pm',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922518.png'
  },
  {
    issue: 'Back Pain',
    doctor: 'Dr. Neha Reddy',
    specialty: 'Orthopedic',
    experience: '9 years',
    hospital: 'Spine Care Hospital',
    contact: 'ortho@hospital.com',
    phone: '+91-9871234560',
    timing: 'Mon - Sat | 1pm - 5pm',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922522.png'
  }
];

const Dashboard = () => {
  const { addAppointment } = useAppointments();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({
    appointment_date: '',
    appointment_time: '',
    reason: '',
    notes: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      appointment_id: Date.now(),
      appointment_type: selectedDoctor.issue,
      doctor_name: selectedDoctor.doctor,
      status: 'Confirmed',
      ...formData
    };
    addAppointment(newAppointment);
    setSelectedDoctor(null);
    setFormData({ appointment_date: '', appointment_time: '', reason: '', notes: '' });
  };

  const cycleTheme = () => {
    setTheme(prev =>
      prev === 'light' ? 'dark' :
      prev === 'dark' ? 'navy' : 'light'
    );
  };

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      {showWelcome && (
        <div className={styles.welcomePopup}>
          <p>👋 Welcome to the Dashboard</p>
        </div>
      )}

      <div className={styles.themeToggle}>
        <button onClick={cycleTheme} title="Toggle Theme">
          {theme === 'dark' ? <FaMoon color="#fff" /> : theme === 'navy' ? <FaMoon color="#0ff" /> : <FaSun color="#f90" />}
        </button>
      </div>

      <img src={bannerImage} alt="Health banner" className={styles.bannerImage} />
      <h2 className={styles.title}>Your Health Consultations</h2>

      <div className={styles.cardsGrid}>
        {mockData.map((item, index) => (
          <div key={index} className={`${styles.card} ${styles.fadeIn}`} style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={item.image} alt={item.doctor} className={styles.avatar} />
            <h2>{item.issue}</h2>
            <p><strong>Doctor:</strong> {item.doctor}</p>
            <p><strong>Specialty:</strong> {item.specialty}</p>
            <p><strong>Experience:</strong> {item.experience}</p>
            <p><strong>Hospital:</strong> {item.hospital}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Timing:</strong> {item.timing}</p>
            <button className={styles.bookBtn} onClick={() => setSelectedDoctor(item)}>Book Appointment</button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Book Appointment with {selectedDoctor.doctor}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>Date:
                <input type="date" required value={formData.appointment_date}
                  onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })} />
              </label>
              <label>Time:
                <input type="time" required value={formData.appointment_time}
                  onChange={(e) => setFormData({ ...formData, appointment_time: e.target.value })} />
              </label>
              <label>Reason:
                <input type="text" required value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })} />
              </label>
              <label>Notes:
                <textarea value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
              </label>
              <div className={styles.modalActions}>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setSelectedDoctor(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;