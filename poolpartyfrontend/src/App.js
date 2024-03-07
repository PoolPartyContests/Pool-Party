import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SurvivorHome from "./views/SurvivorHome";
import PlayoffChallengeHome from "./views/PlayoffChallengeHome";
import SeasonalDailyHome from "./views/SeasonalDailyHome";
import AboutUs from "./views/AboutUs";
import SignUpPage from "./views/SignUp";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/survivor-pools" element={<SurvivorHome />} />
        <Route path="/playoff-challenge" element={<PlayoffChallengeHome />} />
        <Route path="/seasonal-daily" element={<SeasonalDailyHome />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add more Routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
