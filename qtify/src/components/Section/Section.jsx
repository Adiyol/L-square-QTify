import React from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = (props) => {
  console.log(props.cardDetails, "cardDetails api");

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={"section"}>
      <div className={styles.sectionHead}>
        <div className={"section-head-name"}>{props.sectionTitle}</div>
        <div className={styles.sectionHeadCollapse} onClick={handleExpandClick}>
          {expanded ? "Collapse" : "Show All"}
        </div>
      </div>
      {expanded ? 
        <div className={styles.sectionGrid}>
          {props.cardDetails.map((card, index) => {
            return (
              <Card
              title={card.title}
              follows={card.follows}
              image={card.image}
              key={index}
              ></Card>
              );
            })}
        </div>
          : <Carousel cardDetails={props.cardDetails}></Carousel>}
    </div>
  );
};

export default Section;
