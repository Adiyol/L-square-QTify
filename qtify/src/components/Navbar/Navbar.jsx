import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/qtify-logo.png"
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logoDiv}><img  src={Logo} alt="logo" width={67}/></div>
      {/* <Logo /> */}
      <Searchbar />
      
      <Button text={"Give Feedback"}></Button>
    </nav>
  );
};
