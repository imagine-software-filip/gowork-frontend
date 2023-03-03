import React from "react";
import styles from "./TempJobsScreen.module.css";
import SearchBarJobs from "../components/SearchBarJobs";
import WorkerCard from "../components/WorkerCard";

const dummyWorkers = [
  {
    img: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Michael Scott",
    occupation: "Photography",
    desc: "With 3 years of experience, I offer top-quality work that exceeds expectations. Let me bring your project to life.",
    date: "2022-01-02",
    location: "East Lansing, MI"
  },
  {
    img: "https://images.pexels.com/photos/13452647/pexels-photo-13452647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Jake Peralta",
    occupation: "Software",
    desc: "As a creative problem-solver with expertise in programming, I am ready to tackle any challenge you throw my way.",
    date: "2023-03-01",
    location: "Detroit, MI"
  },
  {
    img: "https://images.pexels.com/photos/1937434/pexels-photo-1937434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Pam Besley",
    occupation: "Graphic Design",
    desc: "Passionate about design, I bring a unique perspective and skill set to every project I work on. Let's collaborate!",
    date: "2022-12-25",
    location: "Chicago, IL"
  },
  {
    img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Jeff Winger",
    occupation: "Finance",
    desc: "With a focus on meeting clients' needs, I am a skilled finance freelancer who takes pride in delivering exceptional results.",
    date: "2022-10-12",
    location: "New York City, NY"
  },
  {
    img: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Vladimir Kavinsky",
    occupation: "Personal Chef",
    desc: "From start to finish, I will go above and beyond to ensure your project is a success. Let me put my proven track record to work for you.",
    date: "2023-01-01",
    location: "Las Vegas, NV"
  },
  {
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Daft Punk",
    occupation: "Mucisian",
    desc: "As a talented freelancer with exceptional attention to detail and communication skills, I am committed to delivering work that exceeds your expectations. Let's get started!",
    date: "2021-01-09",
    location: "San Diego, CA"
  }
]


const TempJobsScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 style={{ marginLeft: 20 }}>
          Temporary Jobs
        </h2>
        <h5 style={{ marginLeft: 20, marginTop: -14, paddingRight: 20 }}>
          Help an individual to earn some extra cash in exchange for temporary job
        </h5>
        <SearchBarJobs />
      </div>
      <div className={styles.workersContainer}>
        {dummyWorkers.map(item => <WorkerCard img={item.img} name={item.name} occupation={item.occupation} desc={item.desc} date={item.date} location={item.location} type="t"/>)}
        {dummyWorkers.map(item => <WorkerCard img={item.img} name={item.name} occupation={item.occupation} desc={item.desc} date={item.date} location={item.location} type="t" />)}
        {dummyWorkers.map(item => <WorkerCard img={item.img} name={item.name} occupation={item.occupation} desc={item.desc} date={item.date} location={item.location} type="t" />)}
      </div>
    </div>
  );
};

export default TempJobsScreen;
