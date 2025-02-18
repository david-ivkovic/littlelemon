import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

// Test 1: Check if the static heading text is rendered
test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} updateTimes={() => {}} />);
  const headingElement = screen.getByText(/Reserve a Table/i); // Match the heading text
  expect(headingElement).toBeInTheDocument(); // Assert that it is rendered in the document
});

// Test 2: Test the handleDateChange function to ensure state is updated when a date is selected
test('updates available times when the date is changed', () => {
  const mockUpdateTimes = jest.fn(); // Create a mock function for updateTimes
  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      updateTimes={mockUpdateTimes}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-05-01' } }); // Simulate selecting a date

  expect(mockUpdateTimes).toHaveBeenCalledWith('2025-05-01'); // Assert that updateTimes is called with the correct date
});

// Test 3: Test if the availableTimes are rendered in the select dropdown correctly
test('renders available times in the select dropdown', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={() => {}}
    />
  );

  const options = screen.getAllByRole('option'); // Get all options in the select dropdown

  expect(options).toHaveLength(3); // Check that there are 3 options
  expect(options[0]).toHaveTextContent('17:00'); // Check that the first option is "17:00"
  expect(options[1]).toHaveTextContent('18:00'); // Check that the second option is "18:00"
  expect(options[2]).toHaveTextContent('19:00'); // Check that the third option is "19:00"
});
