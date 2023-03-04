import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileScreen.module.css";

const ProfileScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div style={{backgroundColor: "#efefef", width: "90%", textAlign: "center", borderRadius: 10, paddingTop: 20}}>
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
      <button className={styles.logoutBut}>Log Out</button>
    </div>
  );
};

export default ProfileScreen;
