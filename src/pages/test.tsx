import React, { useState } from 'react';

const SelectExampleForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    language: 'English', // Initial value for the select
    isSubscriber: false,
    budget:''
  });

  // Single handler function for all input/select changes
  const handleChange = (event:any) => {
    // 1. Destructure the event target properties
    const { name, value, type, checked } = event.target;

    // 2. Determine the value to update based on the input type
    // This logic works for text, email, and select elements,
    // as all of them provide the selected value in event.target.value.
    const newValue = type === 'checkbox' ? checked : value;

    // 3. Update the state dynamically
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: newValue // [name] will be 'language' for the select
    }));
  };

  // Optional: Handle form submission
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select and Input Handler Example</h2>

      {/* Text Input: First Name */}
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      {/* Select Element (Dropdown) */}
      <div>
        <label htmlFor="language">Preferred Language:</label>
        <select
          id="language"
          name="language" // IMPORTANT: Must match state key
          value={formData.language} // Controlled component value
          onChange={handleChange}     // Uses the same handler
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>
          {/* Select Element (Dropdown) */}
      <div>
        <label htmlFor="language">Preferred Budget:</label>
        <select
          id="budget"
          name="budget" // IMPORTANT: Must match state key
          value={formData.budget} // Controlled component value
          onChange={handleChange}     // Uses the same handler
        >
          <option value="0">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </select>
      </div>
      
      {/* Checkbox Input */}
      <div>
        <label htmlFor="isSubscriber">Subscribe?</label>
        <input
          type="checkbox"
          id="isSubscriber"
          name="isSubscriber"
          checked={formData.isSubscriber}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit" style={{ marginTop: '15px' }}>
        Submit
      </button>

      <hr />
      <pre>
        Current State: {JSON.stringify(formData, null, 2)}
      </pre>
    </form>
  );
};

export default SelectExampleForm;