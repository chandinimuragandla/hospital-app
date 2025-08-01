import React from 'react';
import './HealthBenefits.css';

const HealthBenefits = () => {
  return (
    <div className="health-benefits-container">
      <h2>Health Benefits Registration</h2>
      <div className="health-form-card">
        <label>User ID</label>
        <input type="text" placeholder="Enter User ID" />

        <label>Policy Number</label>
        <input type="text" placeholder="Enter Policy Number" />

        <label>Policy Type</label>
        <select>
          <option value="">Select Type</option>
          <option value="health">Health</option>
          <option value="life">Life</option>
          <option value="general">General</option>
        </select>

        <label>Provider</label>
        <input type="text" placeholder="Enter Provider Name" />

        <label>Coverage Details</label>
        <textarea placeholder="Enter details about coverage..." rows="4"></textarea>

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <label>Status</label>
        <select>
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
          <option value="pending">Pending</option>
        </select>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default HealthBenefits;
