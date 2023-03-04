import React from "react";

import styles from "./HomeScreen.module.css";
import ScheduleCalendar from "../components/ScheduleCalendar";

const HomeScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h3 style={{ marginLeft: 20 }}>Your Schedule</h3>
      </div>
      <div style={{ width: "90%" }}>
        <ScheduleCalendar />
      </div>
    </div>
  );
};

export default HomeScreen;
