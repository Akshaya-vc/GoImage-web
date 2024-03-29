import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import HostPage from "./pages/host/host.page";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/host" element={<HostPage />} />
      </Routes>
    </div>
  );
}

export default App;
