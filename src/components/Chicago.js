import React from "react";
import "./Chicago.css";

function About() {
  return (
    <section className="about-section">
      <h2>About Little Lemon</h2>
      <div className="about-content">
        <div className="about-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190256.26274111567!2d-87.8966849063218!3d41.833592760816614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20Illinois%2C%20Zdru%C5%BEene%20dr%C5%BEave%20Amerike!5e0!3m2!1ssl!2ssi!4v1743270124227!5m2!1ssl!2ssi"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="about-info">
          <h3>Little Lemon - A Mediterranean Experience From A Loving Family</h3>
          <p>
            Little Lemon 🍋 is a cozy family-owned 👨‍👩‍👦‍👦 restaurant located in the heart of the city, specializing in
            Mediterranean flavors. We bring a unique blend of fresh, seasonal ingredients and traditional recipes
            to offer a memorable dining experience for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
