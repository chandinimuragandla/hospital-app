// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppointmentProvider } from './context/AppointmentContext'; 
import './index.css'; // Optional: your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppointmentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppointmentProvider>
  </React.StrictMode>
);