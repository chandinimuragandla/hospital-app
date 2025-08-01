import React, { createContext, useState, useContext } from 'react';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);