import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/System/RequireAuth";
import HomeScreen from "./screens/HomeScreen";
import TempJobsScreen from "./screens/TempJobsScreen";
import EventScreen from "./screens/EventScreen";
import FreeLancingScreen from "./screens/FreeLancingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import NavBar from "./components/UI/NavBar";
import Header from "./components/UI/Header";
import LoginScreen from "./screens/LoginScreen";
import DetailPage from "./screens/DetailPage";

const App = () => {
  const user = localStorage.getItem("authToken");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <HomeScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/tempjobs"
            element={
              <RequireAuth user={user}>
                <TempJobsScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/events"
            element={
              <RequireAuth user={user}>
                <EventScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/freelancing"
            element={
              <RequireAuth user={user}>
                <FreeLancingScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth user={user}>
                <ProfileScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/userdetail"
            element={
              <RequireAuth user={user}>
                <DetailPage />
              </RequireAuth>
            }
          />
        </Routes>
        {user && <NavBar />}
      </BrowserRouter>
    </div>
  );
};

export default App;
