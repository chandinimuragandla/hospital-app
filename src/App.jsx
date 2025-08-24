import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import About from './Components/About';
import MainLayout from './layouts/MainLayout';
import HealthBenefits from './Pages/HealthBenefits';
import Providers from './Pages/Providers';
import Appointments from './Pages/Appointments';
import CareReminders from './Pages/CareReminders';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

       <Route
        path="/health-benefits"
        element={
          <MainLayout>
            <HealthBenefits />
          </MainLayout>
        }
      />

       <Route
        path="/providers"
        element={
          <MainLayout>
            <Providers />
          </MainLayout>
        }
      />

      <Route
        path="/appointments"
        element={
          <MainLayout>
            <Appointments />
          </MainLayout>
        }
      />

      <Route
        path="/care-reminders"
        element={
          <MainLayout>
            <CareReminders />
          </MainLayout>
        }
      />
    </Routes>
  );
}
