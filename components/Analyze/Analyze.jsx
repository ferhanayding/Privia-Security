import React from "react";
import {
  container,
  wrapper,
  left,
  img__container,
  right,
  desc__container,
  desc__title,
  desc__parag,
  analyze__section,
  section__left,
  section__right,
  right__title,
} from "../../styles/analyze.module.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
const Analyze = () => {
  return (
    <div className={container} id="Analyze">
      <div className={wrapper}>
        <div className={left}>
          <div className={img__container}>
            <img src="/assets/Analytics Graphic.png" alt="" />
          </div>
        </div>
        <div className={right}>
          <SectionTitle sectionTitle="Analytics" />
          <div className={desc__container}>
            <h3 className={desc__title}>
              Analyze your data <br /> with our analyze tools
            </h3>
            <p className={desc__parag}>
              Self-service data analytics software that lets you <br /> create
              visually appealing data visualizations and <br /> insightful
              dashboards in minutes.
            </p>
          </div>
          <div className={analyze__section}>
            <div className={section__left}>
              <img src="/assets/ic_Layer.png" alt="" />
            </div>
            <div className={section__right}>
              <h3 className={right__title}>Powerful dashboard</h3>
              <p>
                Combine multiple reports into a <br /> single beautiful
                dashboard.
              </p>
            </div>
          </div>
          <div className={analyze__section}>
            <div className={section__left}>
              <img src="/assets/Sync.png" alt="" />
            </div>
            <div className={section__right}>
              <h3 className={right__title}>Always in Sync</h3>
              <p>
                Don’t worry be happy :D the data, <br /> always be synchronized
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
