import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';
import { FaShieldAlt, FaUsers, FaUserMd, FaHeartbeat } from 'react-icons/fa';


import floatingImage1 from '../assets/logo.png';
import floatingImage2 from '../assets/float2.webp';


import img1 from '../assets/img1.webp';
import unitedIndia from '../assets/img2.jpeg';
import oriental from '../assets/img3.jpeg';
import royalSundaram from '../assets/img4.jpeg';
import iffcoTokio from '../assets/img5.jpeg';
import lic from '../assets/img6.jpeg';
import adityaBirla from '../assets/img7.jpeg';
import hdfcErgo from '../assets/img8.jpeg';
import nationalInsurance from '../assets/img3.jpeg';

import doc1 from '../assets/doctors11.jpeg';
import doc2 from '../assets/doctor2.jpeg';
import doc3 from '../assets/doctors0.jpeg';
import doc4 from '../assets/docors2.jpeg';

const upcomingAppointments = [];
const careReminders = [];
const userInsurancePlan = "";
const notifications = [];

export default function Dashboard() {
  const [specialty, setSpecialty] = useState('');
  const [insurance, setInsurance] = useState('');
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  function handleSearch(e) {
    e?.preventDefault();
    const q = specialty.trim().toLowerCase();
    const filtered = mockProviders.filter(p =>
      p.inNetwork &&
      (!insurance || p.insurance === insurance) &&
      (!q || p.type.toLowerCase().includes(q) || p.name.toLowerCase().includes(q))
    );
    setResults(filtered);
  }

  const isNewUser = (
    !upcomingAppointments.length &&
    !careReminders.length &&
    !userInsurancePlan &&
    !notifications.length
  );

  const topRowImages = [
    { img: img1, name: "HEALTH PROTECT PLUS" },
    { img: unitedIndia, name: "UNITED INDIA" },
    { img: oriental, name: "ORIENTAL INSURANCE" },
    { img: royalSundaram, name: "ROYAL SUNDARAM" },
    { img: iffcoTokio, name: "IFFCO TOKIO" },
    { img: lic, name: "LIC" },
    { img: adityaBirla, name: "ADITYA BIRLA" },
    { img: hdfcErgo, name: "HDFC ERGO" },
  ];

  const bottomRowImages = [
    { img: hdfcErgo, name: "HDFC ERGO" },
    { img: adityaBirla, name: "ADITYA BIRLA" },
    { img: lic, name: "LIC" },
    { img: iffcoTokio, name: "IFFCO TOKIO" },
    { img: royalSundaram, name: "ROYAL SUNDARAM" },
    { img: oriental, name: "ORIENTAL INSURANCE" },
    { img: unitedIndia, name: "UNITED INDIA" },
    { img: nationalInsurance, name: "NATIONAL INSURANCE" },
  ];


  const doctors = [
    { name: "Dr. John Smith", specialty: "Cardiologist", exp: "10 years", img: doc1 },
    { name: "Dr. Sarah Lee", specialty: "Dermatologist", exp: "8 years", img: doc2 },
    { name: "Dr. Michael Brown", specialty: "Pediatrician", exp: "12 years", img: doc3 },
    { name: "Dr. Emily Davis", specialty: "Neurologist", exp: "9 years", img: doc4 }
  ];

  return (
    <main className={styles.dashboardWrapper}>

      
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Health Insurance </h1>
          {/* <p><em>"Formerly known Safeway Insurance TPA Pvt. Ltd."</em></p> */}
          <p>We Believe there is nothing more precious than your Health.</p>
        </div>

        
        <div className={styles.floatingImageCenter}>
          <img src={floatingImage1} alt="Floating center image" />
        </div>

        <div className={styles.floatingImageRight}>
          <img src={floatingImage2} alt="Floating right image" />
        </div>

        
        <div className={styles.dot} style={{ top: '20px', left: '50px', backgroundColor: '#FF6B6B' }}></div>
        <div className={styles.dot} style={{ top: '100px', right: '80px', backgroundColor: '#FFD93D' }}></div>
        <div className={styles.dot} style={{ bottom: '40px', left: '150px', backgroundColor: '#6BCB77' }}></div>

        
        <div className={styles.bottomWave}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,160 C800,0 1200,400 1440,200 L1440,320 L0,320 Z" />
          </svg>
        </div>
      </section>

     
      <section className={styles.cardGrid}>
        {isNewUser ? (
          <>
            <div className={styles.card} onClick={() => navigate('/health-benefits')}>
              <h3>🩺 Add Health Benefits</h3>
              <p>Start by adding your health insurance plan.</p>
              <button className={styles.ctaPurple}>Add Insurance</button>
            </div>

            <div className={styles.card} onClick={() => navigate('/appointments')}>
              <h3>📅 Book Appointment</h3>
              <p>Schedule your first doctor visit now.</p>
              <button className={styles.ctaPurple}>Book Now</button>
            </div>

            <div className={styles.card} onClick={() => navigate('/care-reminders')}>
              <h3>⏰ Set a Reminder</h3>
              <p>Create medication or check-up reminders.</p>
              <button className={styles.ctaPurple}>Create Reminder</button>
            </div>

            <div className={styles.card} onClick={() => navigate('/appointments')}>
              <h3>🧑‍⚕️ Find Providers</h3>
              <p>Search for doctors and hospitals in your network.</p>
              <button className={styles.ctaPurple}>Search Now</button>
            </div>
          </>
        ) : null}
      </section>

      
      <section className={styles.policySection}>
        <h2>Available Health Insurance Policies</h2>
        <div className={styles.policyGrid}>
          {[
            { id: 1, name: "Health Protect Plus", coverage: "₹5,00,000", premium: "₹5,000", icon: <FaShieldAlt /> },
            { id: 2, name: "Family Care", coverage: "₹3,00,000", premium: "₹3,000", icon: <FaUsers /> },
            { id: 3, name: "Senior Secure", coverage: "₹4,00,000", premium: "₹4,500", icon: <FaUserMd /> },
            { id: 4, name: "Wellness Shield", coverage: "₹6,00,000", premium: "₹6,000", icon: <FaHeartbeat /> }
          ].map((policy) => (
            <div 
              key={policy.id} 
              className={styles.policyCard} 
              onClick={() => navigate('/health-benefits', { state: { policy } })}
            >
              <div className={styles.policyIcon}>{policy.icon}</div>
              <h3>{policy.name}</h3>
              <p>Coverage: {policy.coverage}</p>
              <p>Premium: {policy.premium}</p>
              <button className={styles.ctaPurple} onClick={()=> navigate('/health-benefits')}>Select Policy</button>
            </div>
          ))}
        </div>
      </section>


      <section className={styles.doctorCards}>
        <h2>Book an Appointment</h2>
        <div className={styles.doctorGrid}>
          {doctors.map((doc, i) => (
            <div key={i} className={styles.doctorCard}>
              <img src={doc.img} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
              <p>Experience: {doc.exp}</p>
              <button className={styles.ctaPurple} onClick={() => navigate('/appointments')}>
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </section>

      
      <section className={styles.insuranceSection}>
        <h2>Our Insurance Partners</h2>

  
        <div className={styles.insuranceRow}>
          <div className={styles.insuranceTrack}>
            {topRowImages.map((item, i) => (
              <div key={i} className={styles.insuranceCard}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

     
        <div className={`${styles.insuranceRow} ${styles.reverse}`}>
          <div className={styles.insuranceTrack}>
            {bottomRowImages.map((item, i) => (
              <div key={i} className={styles.insuranceCard}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>CarePlus</div>
          <div className={styles.social}></div>
        </div>

        <div className={styles.footerCols}>
          <div>
            <h4>Contact us</h4>
          </div>
          <div>
            <h4>Helpful links</h4>
            <ul>
              <li><a href="/providers">Find a doctor</a></li>
              <li><a href="/health-benefits">Health</a></li>
              <li><a href="/home">Get the app</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal & policy info</h4>
          </div>
        </div>

        <div className={styles.footerBar}>
          © 2025 CarePlus Inc.
        </div>
      </footer>
    </main>
  );
}
