import React from 'react';

function ConfirmedBooking() {
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your reservation has been successfully made. We look forward to serving you at Little Lemon.</p>
      <div>
        <h3>Booking Details:</h3>
        <p>Name: {bookingData.name}</p>
        <p>Date: {bookingData.date}</p>
        <p>Time: {bookingData.time}</p>
        <p>Guests: {bookingData.guests}</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
