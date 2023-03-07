import React from "react";

import styles from "./HomeScreen.module.css";
import ScheduleCalendar from "../components/ScheduleCalendar";
import StarRating from "../components/StarRating";

const dummyWorkers = [
  {
    img: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Michael Scott",
    occupation: "Photography",
    desc: "With 3 years of experience, I offer top-quality work that exceeds expectations. Let me bring your project to life.",
    date: "2022-01-02",
    location: "East Lansing, MI",
  },
  {
    img: "https://images.pexels.com/photos/13452647/pexels-photo-13452647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Jake Peralta",
    occupation: "Software",
    desc: "As a creative problem-solver with expertise in programming, I am ready to tackle any challenge you throw my way.",
    date: "2023-03-01",
    location: "Detroit, MI",
  },
  {
    img: "https://images.pexels.com/photos/1937434/pexels-photo-1937434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Pam Besley",
    occupation: "Graphic Design",
    desc: "Passionate about design, I bring a unique perspective and skill set to every project I work on. Let's collaborate!",
    date: "2022-12-25",
    location: "Chicago, IL",
  },
  {
    img: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Michael Scott",
    occupation: "Photography",
    desc: "With 3 years of experience, I offer top-quality work that exceeds expectations. Let me bring your project to life.",
    date: "2022-01-02",
    location: "East Lansing, MI",
  },
];

const ScheduleJobCard = (props) => {
  const { img, name, date, time } = props;

  return (
    <>
      <div className={styles.job}>
        <img src={img} alt={name} className={styles.userImg} />
        <div>
          <h3>{name}</h3>
          <h5>
            {date} - {time}
          </h5>
        </div>
      </div>
    </>
  );
};

const RateWorkerCard = (props) => {
  return (
    <div className={styles.list}>
      <img
        src={props.img}
        alt={props.name}
        className={styles.userImg}
      />
      <div>
        <h3 style={{ marginBottom: 0 }}>{props.name}</h3>
        <StarRating />
      </div>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 style={{ marginLeft: 20 }}>Welcome back, Andrew</h2>
      </div>
      <div className={styles.scheduleContainer}>
        <div className={styles.calendar}>
          <ScheduleCalendar />
        </div>
        <div className={styles.sideBar}>
          <div className={styles.summaryContainer}>
            <h2 className={styles.summaryTitle}>Schedule</h2>
            <div className={styles.jobsContainer}>
              {dummyWorkers.map((item) => (
                <ScheduleJobCard
                  img={item.img}
                  name={item.name}
                  date={item.date}
                  time="17:30"
                />
              ))}
            </div>
          </div>
          <div className={styles.jobDoneContainer}>
            <h2 className={styles.jobDoneTitle}>Rate your Provider</h2>
            <div className={styles.jobsdoneList}>
            {dummyWorkers.map((item) => (
                <RateWorkerCard
                  img={item.img}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
