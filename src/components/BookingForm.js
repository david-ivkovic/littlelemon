import React, { useState, useEffect } from 'react';

// Paste the fetchAPI function directly here for testing purposes
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  // Generate available times between 17:00 to 23:00
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  // Fetch available times for the selected date
  useEffect(() => {
    if (selectedDate) {
      const times = fetchAPI(new Date(selectedDate));  // Call fetchAPI with the selected date
      setAvailableTimes(times);  // Set available times state
    }
  }, [selectedDate]);  // Re-run the effect when selectedDate changes

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);  // Update selected date
  };

  return (
    <form style={{ display: 'grid', gap: '20px' }} aria-labelledby="booking-form">
      <h2 id="booking-form">Reserve a Table</h2>

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
      <select id="res-time" name="time" aria-required="true" aria-describedby="res-time-label">
        {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))
        ) : (
          <option>No available times</option>  // Handle case when no times are available
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
