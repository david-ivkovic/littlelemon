// api.js

// Function to simulate fetching available times for a given date
export const fetchAPI = (date) => {
    let result = [];
    const seededRandom = (seed) => {
      const m = 2 ** 35 - 31;
      const a = 185852;
      let s = seed % m;
      return function () {
        return (s = s * a % m) / m;
      };
    };
  
    const random = seededRandom(date.getDate());
  
    // Generate available times between 17:00 and 23:00
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(`${i}:00`);
      }
      if (random() < 0.5) {
        result.push(`${i}:30`);
      }
    }
  
    return result;
  };
  
  // Function to simulate submitting form data to the API
  export const submitAPI = (formData) => {
    // Simulate a successful submission by returning true
    console.log("Form submitted successfully with data:", formData);
    return true; // Indicates success
  };
  