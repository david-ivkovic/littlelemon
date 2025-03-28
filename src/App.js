// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Main from './components/Main'; // Main component (HomePage)
import BookingPage from './components/BookingPage'; // Booking page
import './App.css'; // Import App.css for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <>
      <Navbar /> {/* Navigation bar */}
      <div className="main-content flex-grow-1"> {/* Add flex-grow-1 class */}
        <Routes>
          <Route path="/" element={<Main />} /> {/* HomePage component */}
          <Route path="/booking" element={<BookingPage />} /> {/* BookingPage component */}
        </Routes>
      </div>

      <Footer /> {/* Footer */}
    </>
  );
}

export default App;
