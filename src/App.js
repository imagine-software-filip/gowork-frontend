import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TempJobsScreen from "./screens/TempJobsScreen";
import EventScreen from "./screens/EventScreen";
import FreeLancingScreen from "./screens/FreeLancingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import NavBar from "./components/UI/NavBar";
import Header from "./components/UI/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/tempjobs" element={<TempJobsScreen />} />
          <Route path="/events" element={<EventScreen />} />
          <Route path="/freelancing" element={<FreeLancingScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
};

export default App;
