
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import HealthBenefits from './Pages/HealthBenefits';
import Appointments from './Pages/Appointments';
import Providers from './Pages/Providers';
import CareReminders from './Pages/CareReminders';
import Notifications from './Pages/Notifications';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />
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
        path="/appointments"
        element={
          <MainLayout>
            <Appointments />
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
        path="/care-reminders"
        element={
          <MainLayout>
            <CareReminders />
          </MainLayout>
        }
      />
      <Route
        path="/notifications"
        element={
          <MainLayout>
            <Notifications />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
