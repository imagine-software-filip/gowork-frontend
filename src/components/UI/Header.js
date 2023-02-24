import React, { useState } from "react";
import { CalendarFilled, CloseCircleFilled } from "@ant-design/icons";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import ScheduleProviderCard from "../ScheduleProviderCard";

const Header = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const showScheduleHandler = () => {
    setShowSchedule(!showSchedule);
  };

  return (
    <header>
      <div
        className={styles.headerContainer}
        style={
          showSchedule
            ? { height: "600px", transition: "0.5s" }
            : { transition: "0.5s" }
        }
      >
        {!showSchedule && (
          <div className={styles.brandCointainer}>
            <img
              style={{ marginLeft: 20 }}
              src={logo}
              alt="GoWork"
              width="64px"
            />
            <h2>GoWork</h2>
          </div>
        )}
        {!showSchedule && (
          <div
            className={styles.scheduleContainer}
            onClick={showScheduleHandler}
          >
            <CalendarFilled className={styles.scheduleIcon} />
            <span className={styles.scheduleText}>Schedule</span>
          </div>
        )}

        {showSchedule && (
          <div className={styles.scheduleModalContainer}>
            <h2>Your Schedule</h2>
            <div className={styles.scheduledWork}>
              <ScheduleProviderCard name="Andrew Gladki" job="Business Tutoring" photo="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="Angelina Jolie" job="Acting Tutoring" photo="https://images.pexels.com/photos/15502152/pexels-photo-15502152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="John Smith" job="Mawn Lowing" photo="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="Michael Scott" job="Ice Removal" photo="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="Andrew Gladki" job="Business Tutoring" photo="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="Angelina Jolie" job="Acting Tutoring" photo="https://images.pexels.com/photos/15502152/pexels-photo-15502152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="John Smith" job="Mawn Lowing" photo="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" date="2022-06-25 7:00pm"/>
              <ScheduleProviderCard name="Michael Scott" job="Ice Removal" photo="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" date="2022-06-25 7:00pm"/>
            </div>
            <button
              className={styles.closeModalButton}
              onClick={showScheduleHandler}
            >
              <CloseCircleFilled style={{ marginRight: 7 }} />
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
