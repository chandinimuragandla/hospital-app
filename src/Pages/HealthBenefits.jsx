import React, { useEffect, useState } from "react";
import healthData from "../data/healthbenefits.json";
import bannerImage from "../assets/health_benefits.jpg";
import summaryImage from "../assets/benefits_Summary.jpg";
import "./HealthBenefits.css";

const MyBenefits = () => {
  const [benefits, setBenefits] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cost, setCost] = useState("");
  const [estimate, setEstimate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setBenefits(healthData); 
    } catch (err) {
      setError("Failed to load benefits");
    }
  }, []);

  const handleEstimate = () => {
    if (!cost || isNaN(cost)) {
      setEstimate("⚠️ Please enter a valid cost");
      return;
    }
    const coinsurance = 0.2; 
    const result = Number(cost) * coinsurance;
    setEstimate(`💰 Your estimated out-of-pocket: ₹${result}`);
  };

  if (error) {
    return (
      <div className="error-box">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!benefits) return <p>Loading...</p>;

  return (
    <div className="my-benefits">

     
      <h1>My Health-Benefits </h1>
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >

      </div>

    
      <div className="summary-section">
        <div className="summary-card">
          <h2>Benefit Summary</h2>
          <p><strong>Plan Type:</strong> {benefits.policy_type}</p>
          <p><strong>Coverage Level:</strong> {benefits.coverage_level}</p>
          <p><strong>Policy Name:</strong> {benefits.policy_name}</p>
          <p><strong>Provider:</strong> {benefits.provider_name}</p>
          <p><strong>Effective:</strong> {benefits.effective_date} to {benefits.expiration_date}</p>
          <p><strong>Deductible:</strong> ₹{benefits.deductible}</p>
          <p><strong>Copay:</strong> ₹{benefits.copay}</p>
        </div>

        <div className="summary-right">
          <img src={summaryImage} alt="Health summary" />
        </div>
      </div>


     
      <div className="coverage-section">
        <h2>Coverage Details</h2>
        <div className="categories">
          {benefits.coverage_details.map((cat, index) => (
            <button key={index} onClick={() => setSelectedCategory(cat)}>
              {cat.category}
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="services">
            <h3>{selectedCategory.category}</h3>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Copay</th>
                  <th>Coinsurance</th>
                  <th>Limitations</th>
                </tr>
              </thead>
              <tbody>
                {selectedCategory.services.map((s, i) => (
                  <tr key={i}>
                    <td>{s.name}</td>
                    <td>₹{s.copay}</td>
                    <td>{s.coinsurance}</td>
                    <td>{s.limitations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

     
      <div className="estimation-sec">

        <h2>Cost Estimation Tool</h2>
        <div className="estimation-section">
          <input
            type="number"
            placeholder="Enter estimated cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <button onClick={handleEstimate}>Estimate</button>
          {estimate && <p className="estimate-result">{estimate}</p>}
        </div>
      </div>
    </div>
  );
};

export default MyBenefits;
