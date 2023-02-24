import React from 'react'
import styles from "./ScheduleProviderCard.module.css";

const ScheduleProviderCard = (props) => {
  const { name, job, photo, date } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.photoContainer}>
        <img className={styles.imgContainer} src={photo} alt={name} width="70px"/>
      </div>
      <div className={styles.infoContainer}>
        <span style={{fontSize: 18}}>{name}</span>
        <span>{job}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default ScheduleProviderCard;
