import React from "react";
import {
  container,
  wrapper,
  item,
  carousel__area,
  item__top,
  item__bottom,
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
              <img src="/assets/Folder.png" alt="" />
              <span>Guides</span>
            </div>
            <p>
              Everything you need to know to create your online course or
              membership.
            </p>
            <LearnMore />
          </div>
          <div className={item}>
            <div className={item__top}>
              <img src="/assets/ic_tools.png" alt="" />
              <span>Tools</span>
            </div>
            <p>
              Take the hassle out of creating & selling with our free content
              generators.
            </p>
            <span>
              <LearnMore />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselArea;
