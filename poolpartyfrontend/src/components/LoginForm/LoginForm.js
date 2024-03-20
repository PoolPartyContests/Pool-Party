import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      axiosInstance.get("/api/get-csrf");
    } catch (error) {
      console.log(error.response.data.detail);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/login", formData, {
        withCredentials: true,
      });
      setErrorMessage("");
      navigate("/");
      // Handle successful login (e.g. redirect to home page)
    } catch (error) {
      setErrorMessage(error.response.data.detail);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signup-form">
        {errorMessage.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {" "}
            {errorMessage}
          </div>
        )}
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
