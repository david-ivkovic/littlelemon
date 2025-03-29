import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './Api'; // Import functions from Api.js
import './BookingForm.css'; 

function BookingForm() {
  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayDate = getTodayDate();

  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayDate); // Initialize with today's date
  const [formData, setFormData] = useState({
    date: todayDate, // Initialize with today's date
    time: '',
  });

  useEffect(() => {
    const fetchTimes = async () => {
      const times = await fetchAPI(new Date(selectedDate)); 
      setAvailableTimes(times); // Update availableTimes state
    };

    fetchTimes();
  }, [selectedDate]); // Re-run the effect when selectedDate changes

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // Update selected date
    setFormData({
      ...formData,
      date: event.target.value, // Update formData with the selected date
      time: '', // Reset time when date changes
    });
  };

  const handleTimeChange = (event) => {
    setFormData({
      ...formData,
      time: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isSuccess = submitAPI(formData); // Call submitAPI from Api.js with the form data
    if (isSuccess) {
      alert(`Reservation successful! \nSelected Date: ${formData.date}, \nSelected Time: ${formData.time}`);
    } else {
      alert("There was an error with your reservation.");
    }
  };

  return (
    <form style={{ display: 'grid', gap: '20px'}} aria-labelledby="booking-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend id="booking-form">Booking Form</legend>

        {/* Date field */}
        <label htmlFor="res-date" id="res-date-label" style={{ paddingRight: '10px' }}>Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          onChange={handleDateChange} 
          value={selectedDate} 
          min={todayDate} 
          aria-required="true"
          aria-describedby="res-date-label"
        />

        {/* Time field */}
        <br />
        <label htmlFor="res-time" id="res-time-label" style={{ paddingRight: '10px' }}>Choose time: </label>
        <select
          id="res-time"
          name="time"
          aria-required="true"
          aria-describedby="res-time-label"
          onChange={handleTimeChange}
          value={formData.time}
        >
          <option value="" disabled>
            {availableTimes.length > 0 ? 'Select a time' : 'Unavailable'}
          </option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <br />
        {/* Submit Button */}
        <button type="submit" aria-label="On Click" disabled={!formData.time}>
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;