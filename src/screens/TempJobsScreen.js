import React from "react";
import styles from "./TempJobsScreen.module.css";
import SearchBarJobs from "../components/SearchBarJobs";


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
        <SearchBarJobs />
      </div>
    </div>
  );
};

export default TempJobsScreen;
