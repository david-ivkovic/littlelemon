// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content flex-grow-1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
