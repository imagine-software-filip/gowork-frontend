import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TempJobsScreen from "./screens/TempJobsScreen";
import EventScreen from "./screens/EventScreen";
import FreeLancingScreen from "./screens/FreeLancingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import styles from "./App.module.css";
import {
  HomeFilled,
  FormatPainterFilled,
  CompassFilled,
  ScheduleFilled,
  SettingFilled,
} from "@ant-design/icons";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className={styles.headerContainer}>
          <h2>GoWork</h2>
          <img src={logo} alt="GoWork" width="64px" />
        </div>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/tempjobs" element={<TempJobsScreen />} />
          <Route path="/events" element={<EventScreen />} />
          <Route path="/freelancing" element={<FreeLancingScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>

        <footer>
          <div className={styles.footerContainer}>
            <div className={styles.tabContainer}>
              <Link to="/" className={styles.linkContainer}>
                <HomeFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Home</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/tempjobs" className={styles.linkContainer}>
                <FormatPainterFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Jobs</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/events" className={styles.linkContainer}>
                <CompassFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Events</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/freelancing" className={styles.linkContainer}>
                <ScheduleFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Freelancing</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/profile" className={styles.linkContainer}>
                <SettingFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Profile</p>
              </Link>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
