// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4o">
      <div className="container">
        <div className="row">
          {/* Column 1 - Working Hours */}
          <div className="col-md-3 col-12 mb-4">
                <h5>Working Hours</h5>
                <div className="row">
                  <div className="col-12"><strong><u>Mon-Thu:</u></strong> <i>11:00 AM - 9:00 PM</i></div>
                  <div className="col-12"><strong><u>Fri:</u></strong> <i>11:00 AM - 1:00 AM</i></div>
                  <div className="col-12"><strong><u>Sat-Sun:</u></strong> <i>1:00 PM - 9:00 PM</i></div>
                </div>
          </div>

          {/* Column 2 - Business Info */}
          <div className="col-md-3 col-12 mb-4">
            <h5>Business Info</h5>
            <div className="row">
              <div className="col-12">Little Lemon Restaurant</div>
              <div className="col-12">123 Lemon St, Chicago, IL</div>
              <div className="col-12"><a href='tel:123' className="text-white text-decoration-none">Phone: (123) 456-7890</a></div>
              <div className="col-12">E-mail: info@littlelemon.project</div>
            </div>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="col-md-3 col-12 mb-4">
            <h5>Useful Links</h5>
            <div className="row">
              <div className="col-12"><a href="/home" className="text-white text-decoration-none">Home</a></div>
              <div className="col-12"><a href="/menu" className="text-white text-decoration-none">Menu</a></div>
              <div className="col-12"><a href="/about" className="text-white text-decoration-none">About</a></div>
              <div className="col-12"><a href="/booking" className="text-white text-decoration-none">Booking</a></div>
            </div>
          </div>

          {/* Column 4 - Logo */}
          <div className="col-md-3 col-12 mb-4">
            <div className="row">
              <div className="col-12">
                <img src={require("../Assets/Logo.png")} alt="Little Lemon Logo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Legal Text */}
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
            <p>Created by D.I.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
