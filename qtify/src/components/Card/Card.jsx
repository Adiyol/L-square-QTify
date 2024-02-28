import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";

const Card = (props) => {
  let label;
  if (props.follows !== undefined) {
    label = `${props.follows} Follows`;
  }
  if (props.likes !== undefined) {
    label = `${props.likes} Likes`;
  }

  let cardJSX = (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img src={props.image} alt="stock" />
        </div>
        <div className={styles.cardFooter}>
          <Chip
            label={label}
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
  return (
    <>
      {props.songs !== undefined ? (
        <Tooltip title={`${props.songs.length} songs`} placement="top">{cardJSX}</Tooltip>
      ) : cardJSX}
      {/* <Tooltip title={"32"}>{cardJSX}</Tooltip> */}
    </>
  );
};

export default Card;
