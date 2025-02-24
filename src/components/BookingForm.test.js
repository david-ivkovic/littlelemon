import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';  // Import your BookingForm component
import { fetchAPI } from './Api';  // Import the fetchAPI function

// Mock the fetchAPI function from Api.js
jest.mock('./Api', () => ({
  fetchAPI: jest.fn(),  // Mock fetchAPI
}));

// Test 1: Test if available times are fetched and rendered on date change
test('should initialize available times when date is selected', () => {
  // Prepare mock data for available times
  const mockAvailableTimes = ['17:00', '17:30', '18:00'];

  // Mock the fetchAPI function to return the mock data
  fetchAPI.mockReturnValue(mockAvailableTimes);

  // Render the BookingForm component
  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={() => {}} />);

  // Get the date input field and change the date
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-02-25' } }); // Simulate a date selection

  // Verify that fetchAPI was called with the correct date
  expect(fetchAPI).toHaveBeenCalledWith(new Date('2025-02-25'));

  // Verify that the available times are rendered on the screen
  mockAvailableTimes.forEach(time => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});
