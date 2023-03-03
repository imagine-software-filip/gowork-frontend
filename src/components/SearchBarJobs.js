import React from "react";
import styles from "./SearchBarJobs.module.css";
import { SearchOutlined } from "@ant-design/icons";

const dummyCategories = [
  "Tutoring",
  "Gardeing",
  "Housekeeping",
  "Programming",
  "Accounting",
  "Marketing",
  "Entrepreneurship",
  "Personal Care",
  "Cosmetics"
];

const CatButton = (props) => {
  return <button className={styles.catButton}>{props.title}</button>;
};

const SearchBarJobs = () => {
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search for John Smith, Tutoring"
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

export default SearchBarJobs;
