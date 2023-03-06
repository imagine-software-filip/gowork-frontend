import React from "react";
import { Calendar, Badge } from "antd";

import styles from "./ScheduleCalendar.module.css";

const dummyEvents = [
  {
    year: 2023,
    month: 2,
    day: 10,
    time: "17:30",
    user: "Filip Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2023,
    month: 2,
    day: 10,
    time: "17:30",
    user: "Filip Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2023,
    month: 2,
    day: 10,
    time: "17:30",
    user: "Filip Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2022,
    month: 11,
    day: 12,
    time: "17:30",
    user: "Nina",
    service: "Web Design",
  },
  {
    year: 2021,
    month: 1,
    day: 22,
    time: "17:30",
    user: "Martin Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2020,
    month: 6,
    day: 31,
    time: "17:30",
    user: "Robert",
    service: "Web Design",
  },
];

const DisplayUserOnCal = (props) => {
  const { user, time } = props;

  return (
    <>
      <Badge color="#f50" />
      <span> {user}</span>
      <br />
      <span>{time}</span>
      <br />
    </>
  );
};

const ScheduleCalendar = () => {
  return (
    <div className={styles.mainContainer}>
      <Calendar
        className={styles.calendarContainer}
        dateCellRender={(date) =>
          dummyEvents.map((item) => {
            if (
              item.day === date.$D &&
              item.month === date.$M &&
              item.year === date.$y
            ) {
              return <DisplayUserOnCal user={item.user} time={item.time} />;
            } else {
              return " ";
            }
          })
        }
      />
    </div>
  );
};

export default ScheduleCalendar;
