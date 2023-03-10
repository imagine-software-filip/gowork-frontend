import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header style={{zIndex: 10}}>
      <div className={styles.headerContainer}>
        <div className={styles.brandCointainer}>
          <img
            style={{ marginLeft: 20 }}
            src={logo}
            alt="GoWork"
            width="64px"
          />
          <h2>GoWork</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
