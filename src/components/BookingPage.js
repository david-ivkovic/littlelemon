import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });

  // Available times (can be fetched from an API later)
  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.time < 17) {
      alert('Please select a time for your reservation.');
      return;
    }
    console.log('Booking data:', formData);
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Make a Reservation</h1>
      <BookingForm
        formData={formData}
        availableTimes={availableTimes}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default BookingPage;
