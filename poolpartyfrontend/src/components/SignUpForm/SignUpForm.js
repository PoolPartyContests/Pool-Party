import React, { useState } from "react";
import axiosInstance from "../../axiosConfig";
import "./SignUpForm.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    // Add any other fields you need
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "http://localhost:8000/api/v1/signup",
        formData
      );
      console.log(response.data);
      // Handle successful signup (e.g. redirect to login page)
    } catch (error) {
      console.error(error);
      // Handle error (e.g. display error message)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="signup-input"
        />
        {/* Add any other fields you need */}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
