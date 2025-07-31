// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />             {/* default path */}
      <Route path="/login" element={<Login />} />        {/* explicit login route */}
      <Route path="/signup" element={<Signup />} />      {/* signup route */}
      <Route path="/dashboard" element={<Dashboard />} />{/* dashboard route after login */}
    </Routes>
  );
};

export default App;
