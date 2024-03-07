import React, { useState } from "react";
import axiosInstance from "../../axiosConfig";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "http://localhost:8000/api/v1/login",
        formData,
        { withCredentials: true } // This is important for session authentication
      );
      console.log(response.data);
      // Handle successful login (e.g. redirect to home page)
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
        <button type="submit" className="signup-button">
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginForm;
