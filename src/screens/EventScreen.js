import React from "react";
import styles from "./EventScreen.module.css";
import SearchBarEvents from "../components/SearchBarEvents";
import EventsBox from "../components/EventsBox";

const dummyEvents = [
  {
    img: "https://t3.ftcdn.net/jpg/03/82/25/90/360_F_382259080_rJJ6elKCfhJpaVTwIhXsaiy6JhhsmpDT.jpg",
    eventname: "Meet 'N' Greet with Barbers",
    industry: "Hairdressers",
    desc: "Get to know your favorite barbers and learn how to wield the scissors like a pro. Found out avenues for growth in the hairdressers business. All ages are welcome to join. ",
    date: "2022-01-02",
    location: "East Lansing, MI"
  },
  {
    img: "https://img.freepik.com/premium-vector/pizza-logo-design-template_15146-192.jpg?w=2000",
    eventname: "Pizza Party",
    industry: "Fast Food Workers",
    desc: "Join the XYZ Pizza Chain for a casual team pizza party! It's a great chance to build team dynamics, catch up with your colleagues, and enjoy some great food. Open to all workers in XYZ Pizza Corp.",
    date: "2023-03-01",
    location: "Detroit, MI"
  },
  {
    img: "https://images-platform.99static.com//dSQhzTpWXDcpuu9Y2xEpXV84QMg=/129x129:992x992/fit-in/500x500/99designs-contests-attachments/118/118295/attachment_118295052",
    eventname: "Code and Chat",
    industry: "Programmers",
    desc: "Passionate about coding, and looking for a place to code anc chat with fellow programmers? Look no further. Code Flix Inc. is organizing a social event for its interns, new recruits, and all other programmers in the locality.",
    date: "2022-12-25",
    location: "Chicago, IL"
  },
]

const EventScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 style={{ marginLeft: 20 }}>
          Events
        </h2>
        <h5 style={{ marginLeft: 20, marginTop: -14, paddingRight: 20 }}>
          Network with employers at events 
        </h5>
        <SearchBarEvents />
      </div>
      <div className={styles.eventsContainer}>
        {dummyEvents.map(item => <EventsBox img={item.img} eventname={item.eventname} industry={item.industry} desc={item.desc} date={item.date} location={item.location} />)}
        {dummyEvents.map(item => <EventsBox img={item.img} eventname={item.eventname} industry={item.industry} desc={item.desc} date={item.date} location={item.location} />)}
        {dummyEvents.map(item => <EventsBox img={item.img} eventname={item.eventname} industry={item.industry} desc={item.desc} date={item.date} location={item.location} />)}
      </div>
    </div>
  );
};


export default EventScreen;
