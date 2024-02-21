import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Buttonn from "../Button/Button";
export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo></Logo>
      <Searchbar />
      
      <Buttonn text={"Give Feedback"}></Buttonn>
    </nav>
  );
};
