import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import {
    HomeFilled,
    FormatPainterFilled,
    CompassFilled,
    ScheduleFilled,
    SettingFilled,
  } from "@ant-design/icons";

import styles from './NavBar.module.css'
import colors from '../../constants/colors';


const NavBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(()=>{
        setActiveTab(location.pathname);
    }, [location.pathname])

  return (
    <footer style={{zIndex: 9999}}>
          <div className={styles.footerContainer}>
            <div className={styles.tabContainer}>
              <Link to="/" className={styles.linkContainer} style={activeTab === "/" ? {color: colors.primary} : {color: "#fff"} }>
                <HomeFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Home</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/tempjobs" className={styles.linkContainer} style={activeTab === "/tempjobs" ? {color: colors.primary} : {color: "#fff"} }>
                <FormatPainterFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Jobs</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/events" className={styles.linkContainer} style={activeTab === "/events" ? {color: colors.primary} : {color: "#fff"} }>
                <CompassFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Events</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/freelancing" className={styles.linkContainer} style={activeTab === "/freelancing" ? {color: colors.primary} : {color: "#fff"} }>
                <ScheduleFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Freelancing</p>
              </Link>
            </div>
            <div className={styles.tabContainer}>
              <Link to="/profile" className={styles.linkContainer} style={activeTab === "/profile" ? {color: colors.primary} : {color: "#fff"} }>
                <SettingFilled className={styles.tabIcon} />
                <p className={styles.tabText}>Profile</p>
              </Link>
            </div>
          </div>
        </footer>
  )
}

export default NavBar