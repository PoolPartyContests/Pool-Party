import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SurvivorHome from "./views/SurvivorHome";
import PlayoffChallengeHome from "./views/PlayoffChallengeHome";
import SeasonalDailyHome from "./views/SeasonalDailyHome";
import AboutUs from "./views/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
