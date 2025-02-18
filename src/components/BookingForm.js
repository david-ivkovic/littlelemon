import React from 'react';

function BookingForm({ availableTimes, updateTimes }) {
  // Log to check if updateTimes is a function
  console.log(updateTimes);  // This should log 'updateTimes' as a function

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    console.log(selectedDate);  // Log the selected date to check it's correct
    updateTimes(selectedDate);  // Call updateTimes when the date is changed
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
        aria-required="true"
        aria-describedby="res-date-label"
      />

      {/* Time field */}
      <label htmlFor="res-time" id="res-time-label">Choose time</label>
      <select
        id="res-time"
        name="time"
        aria-required="true"
        aria-describedby="res-time-label"
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* Submit Button */}
      <button type="submit" aria-label="Submit Reservation">
        Reserve
      </button>
    </form>
  );
}

export default BookingForm;
