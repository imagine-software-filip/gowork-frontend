import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TempJobsScreen from "./screens/TempJobsScreen";
import EventScreen from "./screens/EventScreen";
import FreeLancingScreen from "./screens/FreeLancingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import styles from "./App.module.css";
import { HomeFilled, FormatPainterFilled, CompassFilled, ScheduleFilled, SettingFilled } from "@ant-design/icons";

const App = () => {
  return (
    <div className="App">
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.tabContainer}>
            <HomeFilled className={styles.tabIcon}/>
            <p className={styles.tabText}>Home</p>
          </div>
          <div className={styles.tabContainer}>
            <FormatPainterFilled className={styles.tabIcon}/>
            <p className={styles.tabText}>Jobs</p>
          </div>
          <div className={styles.tabContainer}>
            <CompassFilled className={styles.tabIcon}/>
            <p className={styles.tabText}>Events</p>
          </div>
          <div className={styles.tabContainer}>
            <ScheduleFilled className={styles.tabIcon}/>
            <p className={styles.tabText}>Freelancing</p>
          </div>
          <div className={styles.tabContainer}>
            <SettingFilled className={styles.tabIcon}/>
            <p className={styles.tabText}>Profile</p>
          </div>
        </div>
      </footer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="tempjobs" element={<TempJobsScreen />} />
          <Route path="events" element={<EventScreen />} />
          <Route path="freelancing" element={<FreeLancingScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
