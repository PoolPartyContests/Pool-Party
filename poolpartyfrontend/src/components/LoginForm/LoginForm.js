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

  const [sessionState, setSessionState] = useState({
    csrf: "",
    isAuthenticated: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const getCsrfToken = async function () {
    try {
      const response = await axiosInstance.get("/api/get-csrf");
      const csrfToken = response.headers.get("X-CSRFToken");
      console.log("token:");
      console.log(csrfToken);
      return csrfToken;
    } catch (error) {
      console.log(error);
    }
    return "";
  };

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await axiosInstance.get("/api/get-session");
        const data = response.data;
        if (data.isAuthenticated) {
          setSessionState({ ...sessionState, isAuthenticated: true });
        } else {
          setSessionState({
            ...sessionState,
            isAuthenticated: false,
            csrf: getCsrfToken(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSession();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": sessionState.csrf,
        },
        credentials: "include",
      });
      setErrorMessage("");
      sessionStorage.setItem("username", response.data.data.username);
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
