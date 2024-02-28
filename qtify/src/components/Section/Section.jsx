import React from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import { Tab, Tabs } from "@mui/material";

const Section = ({ tabs = [], cardDetails = [], sectionTitle = "" }) => {
  console.log(cardDetails, "cardDetails api");

  const [expanded, setExpanded] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [tabLabel, setTabLabel] = React.useState("All");

  // console.log(props, "tabs value")
  // console.log( tabs.map((value) => { return(value)}), "tabs labels")

  let tabLabels = ["All"];
  tabLabels = tabLabels.concat(
    tabs.map((value) => {
      return value.label;
    })
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleTabChange = (event, newValue) => {
    console.log(event, newValue, "tab value");

    setTabValue(newValue);
    setTabLabel(tabLabels[newValue]);
  };
  return (
    <div className={"section"}>
      <div className={styles.sectionHead}>
        <div className={"section-head-name"}>{sectionTitle}</div>
        {tabs.length === 0 ? (<div className={styles.sectionHeadCollapse} onClick={handleExpandClick}>
          {expanded ? "Collapse" : "Show All"}
        </div>) : null}
        
      </div>
      {tabs.length !== 0 ? (
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            paddingBottom: "16px",
            "& .MuiTab-root": {
              color: "white",
              fontFamily: "Poppins",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
            },
            "& .Mui-selected": { color: "white !important" },
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
              borderRadius: "2px",
              height: "4px",
            },
          }}
        >
          {/* <Tab label={"All"}></Tab> */}
          {tabLabels.map((value) => {
            console.log(value, "value");
            return <Tab label={value}></Tab>;
          })}
        </Tabs>
      ) : null}
      {expanded ? (
        <div className={styles.sectionGrid}>
          {cardDetails
            .filter((card) => {
              if (tabLabel === "All") {
                return true;
              }
              return card.genre.label === tabLabel;
            })
            .map((card, index) => {
              console.log(card, "card section");
              return (
                <Card
                  title={card.title}
                  follows={card.follows}
                  likes={card.likes}
                  image={card.image}
                  songs={card.songs}
                  key={index}
                ></Card>
              );
            })}
        </div>
      ) : (
        <Carousel cardDetails={cardDetails} filterValue={tabLabel}></Carousel>
      )}
    </div>
  );
};

export default Section;
