import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img
            src={props.image}
            alt="stock"
          />
        </div>
        <div className={styles.cardFooter}>
          <Chip
            label={`${props.follows} Follows`}
            sx={{
              height: "23px",
              margin: "6px 0px 0px 8px",
              fontSize: "10px",
              padding: "4px 8px 4px 8px",
              backgroundColor: "black",
              color: "white",
              "& .MuiChip-label": { padding: "0px" },
            }}
            variant="outlined"
          />
        </div>
      </div>
      <div className={styles.cardDescription}>{props.title}</div>
    </div>
  );
};

export default Card;
