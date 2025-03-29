import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import './HomePage.css';

function HomePage() {
  return (
    <div className="main-content">
      {/* Hero section with a call to action */}
      <CallToAction />
    
      {/* Specials section showcasing special dishes */}
      <Specials />

      {/* Customers' testimonials */}
      <CustomersSay />

      {/* About Chicago restaurant */}
      <section id="about">
        <Chicago />
      </section>
    </div>
  );
}

export default HomePage;
