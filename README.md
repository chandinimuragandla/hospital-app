#  Hospital Management System - Login & Signup Module

This project is a responsive **Login and Signup system** built using **React**, tailored for a Hospital Management System. It includes dynamic country/state selection, form validation, and dummy API integration.

![Login Screenshot](./src/assets/healthcare.jpg)
![Signup Screenshot](./src/assets/Hospital-Management-System.jpg)

---

## Features

-  Modern login and signup UI
-  Phone input with country code
-  Country and state dropdowns using `country-state-city`
-  Real-time form validation
-  Dummy API integration (POST request on Signup)
-  Page routing with React Router
-  Password & email validations

---
Install these packages before running the app:


npm install react-router-dom
npm install axios
npm install react-phone-input-2
npm install country-state-city
npm install react-select

--Install dependencies:
npm Install.

--Start the development server:


npm run dev
Visit the app in your browser:


http://localhost:5173/
Replace 5173 with your actual Vite port if different.

Pages and Functionality
 Login Page
Email and password login form

Navigates to /dashboard on login

Link to Signup page

 Signup Page
Collects user personal and address details

Dynamic country/state based on selection

Validates all fields

Sends data to dummy API (https://jsonplaceholder.typicode.com/posts)

Redirects to login after submission



