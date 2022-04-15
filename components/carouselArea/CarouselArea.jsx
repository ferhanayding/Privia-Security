import React from "react";
import {
  container,
  wrapper,
  item,
  carousel__area,
  item__top,
} from "../../styles/carouselArea.module.scss";
import LearnMore from "../learnMore/LearnMore";
const CarouselArea = () => {
  return (
    <div className={carousel__area}>
      <div className={container}>
        <div className={wrapper}>
          <div className={item}>
            <div className={item__top}>
              <img src="/assets/File.svg" alt="" />
              <span>Articles</span>
            </div>
            <p>
              Our best tips for launching and growing your creative business
              online.
            </p>
            <LearnMore />
          </div>
          <div className={item}>
            <div className={item__top}>
              <img src="/assets/File.svg" alt="" />
              <span>Articles</span>
            </div>
            <p>
              Our best tips for launching and growing your creative business
              online.
            </p>
            <LearnMore />
          </div>
          <div className={item}>
            <div className={item__top}>
              <img src="/assets/File.svg" alt="" />
              <span>Articles</span>
            </div>
            <p>
              Our best tips for launching and growing your creative business
              online.
            </p>
            <LearnMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselArea;
