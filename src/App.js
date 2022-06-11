import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CreatorsPage from "./pages/CreatorsPage";
import NavBar from "./components/NavBar.js";

import "./App.css";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f7f7f7" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/create" element={<CreatorsPage />} exact />
        <Route path="/profile" element={<ProfilePage />} exact />
      </Routes>
    </div>
  );
}

export default App;
