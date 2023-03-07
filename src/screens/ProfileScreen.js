import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileScreen.module.css";

const ProfileScreen = () => {
  const logOutHandler = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <img
          src="https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Michael Scott"
          className={styles.userImg}
        />
        <h2 className={styles.userName}>Linda Decer</h2>
      </div>
      <div className={styles.settingsContainer}>
        <Link to="/" className={styles.setting}>
           Preferences
        </Link>
        <div style={{ height: 1, backgroundColor: "#c8c8c8" }}></div>
        <Link to="/" className={styles.setting}>
           Services
        </Link>
        <div style={{ height: 1, backgroundColor: "#c8c8c8" }}></div>
        <Link to="/" className={styles.setting}>
           Profile
        </Link>
        <div style={{ height: 1, backgroundColor: "#c8c8c8" }}></div>
        <Link to="/" className={styles.setting}>
          About
        </Link>
      </div>
      <button className={styles.logoutBut} onClick={logOutHandler}>Log Out</button>
    </div>
  );
};

export default ProfileScreen;
