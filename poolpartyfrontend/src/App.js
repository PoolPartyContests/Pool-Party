import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SurvivorHome from "./views/SurvivorHome";
import PlayoffChallengeHome from "./views/PlayoffChallengeHome";
import SeasonalDailyHome from "./views/SeasonalDailyHome";
import AboutUs from "./views/AboutUs";
import SignUpPage from "./views/SignUp";
import Login from "./views/Login";
import Profile from "./views/Profile";
import NavBar from "./components/NavBar/NavBar";
import AuthContext from "./AuthContext";
import axiosInstance from "./axiosConfig";

function App() {
  const [loggedInDetails, setLoggedInDetails] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await axiosInstance.get("/api/get-session");
        const data = response.data;
        setLoggedInDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSession();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInDetails, setLoggedInDetails }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/survivor-pools" element={<SurvivorHome />} />
          <Route path="/playoff-challenge" element={<PlayoffChallengeHome />} />
          <Route path="/seasonal-daily" element={<SeasonalDailyHome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
