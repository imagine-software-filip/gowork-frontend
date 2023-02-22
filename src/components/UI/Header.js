import React from "react";
import styles from './Header.module.css';
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h2>GoWork</h2>
        <img src={logo} alt="GoWork" width="64px" />
      </div>
    </header>
  );
};

export default Header;
