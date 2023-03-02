import React from "react";
import styles from "./SearchBarJobs.module.css";

const SearchBarJobs = () => {
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search for John Smith, Tutoring"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Search</button>
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
