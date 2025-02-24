import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './Api'; // Import functions from Api.js

function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });

  // Fetch available times for the selected date
  useEffect(() => {
    if (selectedDate) {
      const times = fetchAPI(new Date(selectedDate)); // Call fetchAPI from Api.js
      setAvailableTimes(times); // Update availableTimes state
    }
  }, [selectedDate]); // Re-run the effect when selectedDate changes

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // Update selected date
    setFormData({
      ...formData,
      date: event.target.value, // Update formData with the selected date
    });
  };

  // Handle time change
  const handleTimeChange = (event) => {
    setFormData({
      ...formData,
      time: event.target.value, // Update formData with the selected time
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const isSuccess = submitAPI(formData); // Call submitAPI from Api.js with the form data
    if (isSuccess) {
      alert("Reservation successful!");
    } else {
      alert("There was an error with your reservation.");
    }
  };

  return (
    <form style={{ display: 'grid', gap: '20px' }} aria-labelledby="booking-form" onSubmit={handleSubmit}>
      {/* Date field */}
      <label htmlFor="res-date" id="res-date-label">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        onChange={handleDateChange} // Trigger handleDateChange on date change
        value={selectedDate ? selectedDate : ''}
        aria-required="true"
        aria-describedby="res-date-label"
      />

      {/* Time field */}
      <label htmlFor="res-time" id="res-time-label">Choose time</label>
      <select id="res-time" name="time" aria-required="true" aria-describedby="res-time-label" onChange={handleTimeChange}>
        {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))
        ) : (
          <option>No available times</option>
        )}
      </select>

      {/* Submit Button */}
      <button type="submit" aria-label="Submit Reservation">
        Reserve
      </button>
    </form>
  );
}

export default BookingForm;
