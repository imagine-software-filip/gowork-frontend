import React from "react";
import styles from "./ProfileScreen.module.css";

const Button = (props) => {
  return <button className={styles.settingButton} onClick={props.onClick}>{props.name}</button>;
}

const ProfileScreen = () => {
  const logOutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

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
      <div className={styles.optionsGrid}>
        <div className={styles.div1}><Button name="Jobs" /></div>
        <div className={styles.div2}><Button name="About" /></div>
        <div className={styles.div3}><Button name="Info" /></div>
        <div className={styles.div4}><Button name="Profile" /></div>
        <div className={styles.div5}><Button name="Freelancing" /></div>
        <div className={styles.div6}><Button name="Log Out" onClick={logOutHandler}/></div>
      </div>
    </div>
  );
};

export default ProfileScreen;
