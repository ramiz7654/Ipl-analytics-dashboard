import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamsPage from "./pages/TeamsPage";
import PlayersPage from "./pages/PlayersPage";
import ChartsPage from "./pages/ChartsPage";
import RecordsPage from "./pages/RecordsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="/records" element={<RecordsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;