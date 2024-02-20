import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "@mui/material/Button";
import Searchbar from "../Searchbar/Searchbar";

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo></Logo>
      <Searchbar />
      <Button
        sx={{
          backgroundColor: "#121212",
          color: "#34C94B",
          borderRadius: "12px",
          width: "170px",
          fontSize: "18px",
          fontWeight: 600,
          textTransform: "none",
        }}
      >
        Give Feedback
      </Button>
    </nav>
  );
};
