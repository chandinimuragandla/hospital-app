import React from 'react';
import './HealthBenefits.css';

const HealthBenefits = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const handleClear = () => {
    const inputs = document.querySelectorAll('.benefits-form input, .benefits-form textarea');
    inputs.forEach(input => input.value = '');
  };

  return (
    <div className="health-benefits-container">
      <h2 className="form-title">Health Benefits Form</h2>
      <form className="benefits-form" onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" placeholder="Enter Employee ID" />
          </div>
          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" placeholder="Enter Employee Name" />
          </div>
          <div className="form-group">
            <label>Insurance Provider</label>
            <input type="text" placeholder="Enter Insurance Provider" />
          </div>
          <div className="form-group">
            <label>Policy Number</label>
            <input type="text" placeholder="Enter Policy Number" />
          </div>
          <div className="form-group">
            <label>Coverage Amount</label>
            <input type="text" placeholder="Enter Coverage Amount" />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>End Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Dependent Coverage</label>
            <input type="text" placeholder="Yes / No" />
          </div>
          <div className="form-group">
            <label>Premium Amount</label>
            <input type="text" placeholder="Enter Premium Amount" />
          </div>
          <div className="form-group">
            <label>Company Contribution</label>
            <input type="text" placeholder="Enter Company Contribution" />
          </div>
          <div className="form-group">
            <label>Claim Status</label>
            <input type="text" placeholder="Approved / Rejected" />
          </div>
          <div className="form-group">
            <label>Additional Notes</label>
            <textarea placeholder="Enter any notes here..." />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default HealthBenefits;
