import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Card from "../Card/Card";
import { Navigation } from "swiper/modules";

import { ReactComponent as leftNavigationIcon } from "../../assets/left-navigation.svg";
import { ReactComponent as rightNavigationIcon } from "../../assets/right-navigation.svg";
import { IconButton, SvgIcon } from "@mui/material";
const Carousel = (props) => {
  const swiperRef = useRef();
  return (
    <>
      <div>
        <IconButton
          onClick={() => swiperRef.current.slidePrev()}
          sx={{
            position: "absolute",
            zIndex: 2,
            marginTop: "8.5%",
            marginLeft: "-1.5%",
          }}
        >
          <SvgIcon component={leftNavigationIcon} inheritViewBox />
        </IconButton>
        <IconButton
          onClick={() => swiperRef.current.slideNext()}
          sx={{
            position: "absolute",
            zIndex: 2,
            marginTop: "8.5%",
            marginRight: "-1.5%",
          }}
        >
          <SvgIcon component={rightNavigationIcon} inheritViewBox />
        </IconButton>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {props.cardDetails.map((card, index) => {
            return (
              <>
                <SwiperSlide style={{ width: "159px" }} key={index}>
                  <Card
                    title={card.title}
                    follows={card.follows}
                    image={card.image}
                    key={index}
                  ></Card>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
