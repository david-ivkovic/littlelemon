// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Main from './components/Main'; // Main component (HomePage)
import BookingPage from './components/BookingPage'; // Booking page
import './App.css'; // Import App.css for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap css
import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <>
      <Navbar /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Main />} /> {/* HomePage component */}
        <Route path="/booking" element={<BookingPage />} /> {/* BookingPage component */}
      </Routes>
    </>
  );
}

export default App;
