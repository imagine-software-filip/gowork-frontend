import React from "react";
import styles from "./EventScreen.module.css";

const EventScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h3 style={{marginLeft: 20}}>Events</h3>
      </div>
    </div>
  );
};

export default EventScreen;
