import React from "react";
import {
  container,
  wrapper,
  top,
  desc,
  card,
  bottom,
  card__img_container,
} from "../../styles/more.module.scss";
import Oval from "../oval/Oval";
import SectionTitle from "../sectionTitle/SectionTitle";
const More = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={top}>
          <SectionTitle sectionTitle="More Feature" />
          <p className={desc}>
            We're more than an analytic <br /> tool. Explore our features, and
            <br /> satisfy your customers
          </p>
        </div>
        <div className={bottom}>
          <div className={card}>
            <Oval
              backgroundImg={"/assets/Shape.svg"}
              icon="/assets/Magic Wand.png"
            />
            <h3>Easy customization</h3>
            <p>
              No matter what kind of home you <br /> have to share, you can
              increase <br /> your earnings.
            </p>
          </div>
          <div className={card}>
            <Oval
              backgroundImg={"/assets/Shape.svg"}
              icon="/assets/Shape (2).png"
            />
            <h3>Secure and fast</h3>
            <p>
              No matter what kind of home you <br /> have to share, you can
              increase <br /> your earnings.
            </p>
          </div>
          <div className={card}>
            <Oval
              backgroundImg={"/assets/Shape.svg"}
              icon="/assets/Dashboard (1).png"
            />
            <h3>Powerful dashboard</h3>
            <p>
              No matter what kind of home you <br /> have to share, you can
              increase <br /> your earnings.
            </p>
          </div>
          <div className={card}>
            <Oval
              backgroundImg={"/assets/Shape_2.png"}
              icon="/assets/ic_Cloud upload.png"
            />
            <h3>Cloud upload</h3>
            <p>
              No matter what kind of home you <br /> have to share, you can
              increase <br /> your earnings.
            </p>
          </div>
          <div className={card}>
            <Oval
              backgroundImg={"/assets/Shape_2.png"}
              icon="/assets/ic_Technology.png"
            />
            <h3>Proven Technology</h3>
            <p>
              No matter what kind of home you <br /> have to share, you can
              increase <br /> your earnings.
            </p>
          </div>
          <div className={card}>
            <Oval
              backgroundImg={"/assets/Shape_2.png"}
              icon="/assets/more_6.svg"
            />
            <h3>98.99% satisfaction</h3>
            <p>
              No matter what kind of home you <br /> have to share, you can
              increase <br /> your earnings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
