import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import { Country, State } from 'country-state-city';
import styles from '../styles/signup.module.css';


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [step, setStep] = useState(1);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    const mapped = allCountries.map(c => ({ label: c.name, value: c.isoCode }));
    setCountries(mapped);
  }, []);

  useEffect(() => {
    if (formData.country) {
      const allStates = State.getStatesOfCountry(formData.country);
      const mapped = allStates.map(s => ({ label: s.name, value: s.isoCode }));
      setStates(mapped);
    } else {
      setStates([]);
    }
  }, [formData.country]);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const fieldsToValidate = stepFields[step];
    const newErrors = {};
   fieldsToValidate.forEach(({ name }) => {
  
  if (name === 'middleName') return;

  const value = formData[name];

  if (!value || value.toString().trim() === '') {
    newErrors[name] = `${name} is required`;
  } else {
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors[name] = 'Enter a valid email';
    }
    if (name === 'password' && value.length < 6) {
      newErrors[name] = 'Password must be at least 6 characters';
    }
  }
});

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allValid = [1, 2, 3].every((s) => {
      setStep(s);
      return validateStep();
    });
    if (!allValid) return;

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setApiResponse(response.data);
      alert('Signup successful! Redirecting...');
      setTimeout(() => navigate('/login'), 4000);
    } catch (err) {
      alert('Signup failed!');
      console.error(err);
    }
  };

 const renderField = (field) => {
  const fieldError = errors[field.name];

  const commonInputWrapper = (element) => (
    <div className={styles.inputGroup} key={field.name}>
      {element}
      {fieldError && <span className={styles.error}>{fieldError}</span>}
    </div>
  );

  switch (field.type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
      return commonInputWrapper(
        <input
          name={field.name}
          placeholder={field.label}
          type={field.type}
          value={formData[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
        />
      );

    case 'phone':
      return commonInputWrapper(
        <PhoneInput
          country={'us'}
          value={formData[field.name] || ''}
          onChange={(value) => handleInputChange(field.name, value)}
          inputStyle={{
            width: '100%',
            borderRadius: '8px',
            padding: '14px',
            border: '1px solid #ccc',
            fontSize: '15px'
          }}
        />
      );

    case 'select':
      return commonInputWrapper(
        <select
          name={field.name}
          value={formData[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
        >
          <option value="">{`Select ${field.label}`}</option>
          {field.options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      );

    case 'country':
      return commonInputWrapper(
        <Select
          options={countries}
          value={countries.find(c => c.value === formData.country)}
          onChange={(selected) => handleInputChange('country', selected?.value || '')}
          placeholder="Select Country"
          isClearable
          styles={{
            control: (base) => ({
              ...base,
              padding: '2px',
              borderRadius: '8px',
              borderColor: '#ccc',
              boxShadow: 'none',
              fontSize: '15px'
            })
          }}
        />
      );

    case 'state':
      return commonInputWrapper(
        <Select
          options={states}
          value={states.find(s => s.value === formData.state)}
          onChange={(selected) => handleInputChange('state', selected?.value || '')}
          placeholder="Select State"
          isClearable
          styles={{
            control: (base) => ({
              ...base,
              padding: '2px',
              borderRadius: '8px',
              borderColor: '#ccc',
              boxShadow: 'none',
              fontSize: '15px'
            })
          }}
        />
      );

    default:
      return null;
  }
};


  const stepFields = {
    1: [
      { name: 'firstName', label: 'First Name', type: 'text' },
      { name: 'middleName', label: 'Middle Name', type: 'text' },
      { name: 'lastName', label: 'Last Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'password', label: 'Password', type: 'password' },
    ],
    2: [
      { name: 'phone', label: 'Phone', type: 'phone' },
      { name: 'dob', label: 'Date of Birth', type: 'date' },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ]
      }
    ],
    3: [
      { name: 'country', label: 'Country', type: 'country' },
      { name: 'state', label: 'State', type: 'state' },
      { name: 'street', label: 'Street', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'zip', label: 'ZIP Code', type: 'text' }
    ]
  };

  return (
  <div className={styles.background}>
   {/* <header className={styles.header}>
  <div className={styles.headerLeft}>
    <h1>My Health Portal</h1>
  </div>
  <div className={styles.headerRight}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    
  </div>
</header> */}


    
   <div className={styles.centerSection}>

      

      <div className={styles['marquee-bar']} style={{ position: 'absolute', top: '-40px', left: 0, right: 0 }}>
        <marquee>Welcome to our Hospital Management System Signup Page!</marquee>
      </div>

     
      <div className={styles.formWrapper}>
        <div className={styles.formBox}>
          <h2>Create Account </h2>
          <form onSubmit={handleSubmit}>
            {stepFields[step].map(field => renderField(field))}
            <div className={styles.buttonGroup}>
              {step > 1 && <button type="button" onClick={() => setStep(step - 1)}>Back</button>}
              {step < 3 && <button type="button" onClick={() => validateStep() && setStep(step + 1)}>Next</button>}
              {step === 3 && <button type="submit">Sign Up</button>}
            </div>
            <p>Already have an account? <Link to="/">Login</Link></p>
          </form>

          {apiResponse && (
            <div className="api-response">
              <h3>Dummy API Response:</h3>
              <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>



    </div>

   {/* <footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.footerSection}>
      <h4>Contact Us</h4>
      <p>123 Health Street, MedCity</p>
      <p>support@hospitalms.com</p>
      <p>+1 (800) 555-HEAL</p>
    </div>

    <div className={styles.footerSection}>
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div className={styles.footerSection}>
      <h4>Working Hours</h4>
      <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
      <p>Sat: 9:00 AM - 5:00 PM</p>
      <p>Sun: Closed</p>
    </div>
  </div>

  <p className={styles.copyRight}>
    &copy; {new Date().getFullYear()} Hospital Management System. All rights reserved.
  </p>
</footer> */}

  </div>
);


};

export default Signup;