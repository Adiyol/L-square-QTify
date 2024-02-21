import React from "react";
import styles from "./Searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Searchbar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search a song of your choice"
      ></input>
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;

