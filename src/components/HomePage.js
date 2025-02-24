// src/components/HomePage.js
import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function HomePage() {
  return (
    <div>
      {/* Hero section with a call to action */}
      <CallToAction />

      {/* Specials section showcasing special dishes */}
      <Specials />

      {/* Customers' testimonials */}
      <CustomersSay />

      {/* About Chicago restaurant */}
      <Chicago />
    </div>
  );
}

export default HomePage;
