import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
