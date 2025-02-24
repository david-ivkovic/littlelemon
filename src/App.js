// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Main from './components/Main'; // Main component (HomePage)
import BookingPage from './components/BookingPage'; // Booking page
import Nav from './components/Nav'; // Navigation component

function App() {
  return (
    <>
      <Nav /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Main />} /> {/* HomePage component */}
        <Route path="/booking" element={<BookingPage />} /> {/* BookingPage component */}
      </Routes>
    </>
  );
}

export default App;
