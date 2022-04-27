import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
