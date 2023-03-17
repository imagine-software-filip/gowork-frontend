import React from "react";
import styles from "./SearchBarEvents.module.css";
import { SearchOutlined } from "@ant-design/icons";

const dummyCategories = [
  "Industry",
  "Date",
  "Time",
  "Medium",
  "Employer",
];

const CatButton = (props) => {
  return <button className={styles.catButton}>{props.title}</button>;
};

const SearchBarEvents = () => {
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search for an event, Employer"
          className={styles.searchInput}
        />
        <div>
        <button className={styles.searchButton}><SearchOutlined style={{fontSize: 18}}/></button>
        </div>
      </div>
      <div className={styles.filterContainer}>
        {dummyCategories.map((item) => (
          <CatButton title={item} />
        ))}
      </div>
    </>
  );
};

export default SearchBarEvents;
