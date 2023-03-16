import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WorkerCard.module.css";
import colors from "../constants/colors";

const WorkerCard = (props) => {
    const { img, name, occupation, desc, date, location, type } = props;
    const navigate = useNavigate();

    const color = type === "t" ? colors.accent : colors.primary;

    const test = () => {
      navigate("../userdetail", { replace: true });
    }

  return (
    <div className={styles.mainVContainer} style={{borderTop: `12px solid ${color}`}} onClick={test}>
      <div className={styles.headerHContainer}>
        <img
          src={img}
          alt={name}
          className={styles.workerCardImg}
        />
        <div className={styles.headerVText}>
          <p style={{fontSize: 18}}>{name}</p>
          <p style={{marginTop: -14, fontSize: 12}}>{occupation}</p>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <p>
          {desc}
        </p>
      </div>
      <div className={styles.dateContainer}>
        <span>{location}</span>
        <span>Posted on {date}</span>
      </div>
    </div>
  );
};

export default WorkerCard;
