import React from "react";
import { Calendar, Badge } from "antd";

const dummyEvents = [
  {
    year: 2023,
    month: 2,
    day: 10,
    user: "Filip Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2023,
    month: 2,
    day: 10,
    user: "Filip Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2023,
    month: 2,
    day: 10,
    user: "Filip Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2022,
    month: 11,
    day: 12,
    user: "Nina",
    service: "Web Design",
  },
  {
    year: 2021,
    month: 1,
    day: 22,
    user: "Martin Dimitrievski",
    service: "Web Design",
  },
  {
    year: 2020,
    month: 6,
    day: 31,
    user: "Robert",
    service: "Web Design",
  },
];

const DisplayUserOnCal = (props) => {
  const { user, service } = props;

  return (
    <>
      <Badge color="#f50" /> 
      <span> {user}</span>
      <br/>
      <span>{service}</span>
      <br/>
    </>
  );
};

const ScheduleCalendar = () => {
  return (
    <div style={{ zIndex: -2 }}>
      <Calendar
        dateCellRender={(date) =>
          dummyEvents.map((item) => {
            if (
              item.day === date.$D &&
              item.month === date.$M &&
              item.year === date.$y
            ) {
              console.log(date);
              return <DisplayUserOnCal user={item.user} service={item.service} />;
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
