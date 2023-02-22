import React from 'react'
import { Link } from "react-router-dom";
import {
    HomeFilled,
    FormatPainterFilled,
    CompassFilled,
    ScheduleFilled,
    SettingFilled,
  } from "@ant-design/icons";

import styles from './NavBar.module.css'


const NavBar = () => {
  return (
    <footer>
          <div className={styles.footerContainer}>
            <div className={styles.tabContainer}>
              <Link to="/" className={styles.linkContainer}>
                <HomeFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Home</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/tempjobs" className={styles.linkContainer}>
                <FormatPainterFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Jobs</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/events" className={styles.linkContainer}>
                <CompassFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Events</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/freelancing" className={styles.linkContainer}>
                <ScheduleFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Freelancing</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/profile" className={styles.linkContainer}>
                <SettingFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Profile</p>
              </Link>
            </div>
          </div>
        </footer>
  )
}

export default NavBar