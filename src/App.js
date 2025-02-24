import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Main from './components/Main'; // Import Main component
import BookingPage from './components/BookingPage';
import Nav from './components/Nav'; // Import Nav component

function App() {
  return (
    <>
      <Nav /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
