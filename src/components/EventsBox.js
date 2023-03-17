import React from "react";
import styles from "./EventsBox.module.css";
import colors from "../constants/colors";

const EventsBox = (props) => {
    const { img, eventname, industry, desc, date, location, type } = props;

    const color = type === "t" ? colors.accent : colors.primary;

  return (
    <div className={styles.outerContainer} style={{borderTop: `12px solid ${color}`}}>
      <div className={styles.headerHContainer}>
        <img
          src={img}
          alt={eventname}
          className={styles.eventsImg}
        />
        <div className={styles.headerVText}>
          <p style={{fontSize: 18}}>{eventname}</p>
          <p style={{marginTop: -14, fontSize: 12}}>{industry}</p>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <p>
          {desc}
        </p>
      </div>
      <div className={styles.dateContainer}>
        <span>Location: {location}</span>
        <span>Held On: {date}</span>
      </div>
      <div className= {styles.joinButton}>
       <button className={styles.joinButton}>JOIN</button>
      </div>
    </div>
  );
};

export default EventsBox;
