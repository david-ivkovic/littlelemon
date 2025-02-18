import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Reducer function to manage availableTimes state
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload; // Return the updated available times
    default:
      return state;
  }
};

function Main() {
  // Using useReducer to manage available times
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ]);

  // The function that updates availableTimes
  const updateTimes = (selectedDate) => {
    // For now, we just return the same times regardless of the date
    dispatch({
      type: 'UPDATE_TIMES',
      payload: ['17:00', '18:00', '19:00', '20:00', '21:00'],
    });
  };

  return (
    <div>
      <h1>Little Lemon Reservations</h1>
      {/* Pass the availableTimes and updateTimes to BookingForm */}
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default Main;