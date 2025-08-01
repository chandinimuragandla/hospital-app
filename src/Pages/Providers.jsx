import React from 'react';
import './Providers.css';

const mockProviders = [
  {
    provider_id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiologist',
    facility_name: 'Apollo Hospitals',
    city: 'Hyderabad',
    state: 'Telangana',
    phone_number: '9876543210',
    email: 'priya.sharma@apollo.com',
    rating: 4.7,
    accepting_new_patients: true
  },
  {
    provider_id: 2,
    name: 'Dr. Rahul Mehta',
    specialty: 'Dermatologist',
    facility_name: 'Fortis Healthcare',
    city: 'Delhi',
    state: 'Delhi',
    phone_number: '9871234567',
    email: 'rahul.mehta@fortis.com',
    rating: 4.5,
    accepting_new_patients: false
  }
];

const Providers = () => {
  return (
    <div className="providers-container">
      <h2>Healthcare Providers</h2>
      <div className="provider-grid">
        {mockProviders.map((p) => (
          <div key={p.provider_id} className="provider-card">
            <h3>{p.name}</h3>
            <p><strong>Specialty:</strong> {p.specialty}</p>
            <p><strong>Facility:</strong> {p.facility_name}</p>
            <p><strong>Location:</strong> {p.city}, {p.state}</p>
            <p><strong>Phone:</strong> {p.phone_number}</p>
            <p><strong>Email:</strong> {p.email}</p>
            <p><strong>Rating:</strong> ⭐ {p.rating}</p>
            <p><strong>Accepting Patients:</strong> {p.accepting_new_patients ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;