import React, { useState } from "react";
import styles from "./TempJobsScreen.module.css";

const dummyCategories = [
  "Tutoring",
  "Gardeing",
  "Housekeeping",
  "Programming",
  "Accounting",
  "Marketing",
];

const CatButton = (props) => {
  return <button className={styles.catButton}>{props.title}</button>;
};

const TempJobsScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 style={{ marginLeft: 20 }}>
          Temporary Jobs
        </h2>
        <h5 style={{ marginLeft: 20, marginTop: -14, paddingRight: 20 }}>
          Search for individuals that can help you with labor
        </h5>

      </div>
    </div>
  );
};

export default TempJobsScreen;
