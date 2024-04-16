import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useSignup = () => {
  const signup = async ({ firstName, lastName, email }) => {
    // Validate input before sending to the backend
    const success = handleInputErrors({ firstName, lastName, email });
     if(!success) return;
    
  
    try {
      // API request to your backend
      const res = await axios.post('/api/auth/register', {
        firstName,
        lastName,
        email
      }, {
        headers: {
            'Content-Type': 'application/json'
        }});
      // If the response is successful
      console.log("Signup success:", res.data);
      toast.success("Signup successful!");
    } catch (error) {
      // Handle errors in case of a failed API call
      console.log("Signup error:", error);
      toast.error("Signup failed. Please try again.");
    } 
  };

  // Function to validate form inputs
  function handleInputErrors({ firstName, lastName, email }) {
    if (!firstName || !lastName || !email) {
      toast.error('Please fill in all fields');
      return false;
    }
    // Additional validation can be added here (like email format validation)
    return true; // Return true if validation passes
  }

  return { signup };
};

export default useSignup;
