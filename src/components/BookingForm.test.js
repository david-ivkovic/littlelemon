// src/__tests__/BookingForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';  // Import your BookingForm component
import { fetchAPI } from './Api';  // Import the fetchAPI function

// Mock the fetchAPI function from Api.js
jest.mock('./Api', () => ({
  fetchAPI: jest.fn(),  // Mock fetchAPI
}));

// Test: Test if available times are fetched and rendered on date change
test('should initialize available times when date is selected', async () => {
  // Prepare mock data for available times
  const mockAvailableTimes = ['17:00', '17:30', '18:00'];

  // Mock the fetchAPI function to return the mock data
  fetchAPI.mockResolvedValueOnce(mockAvailableTimes);  // Return a promise

  // Render the BookingForm component
  //render(<BookingForm updateTimes={() => {}} />);

  // Get the date input field and change the date to 8th August 2025
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-08-08' } }); // Simulate selecting August 8th, 2025

  // Normalize the date to match the expected format (ISO string)
  const selectedDate = '2025-08-08'; // We expect the date in YYYY-MM-DD format

  // Wait for fetchAPI to be called and available times to be rendered
  await waitFor(() => expect(fetchAPI).toHaveBeenCalledWith(selectedDate));

  // Verify that the available times are rendered on the screen
  mockAvailableTimes.forEach(time => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});
