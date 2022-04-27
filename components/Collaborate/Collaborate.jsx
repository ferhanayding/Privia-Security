import React from "react";
import {
  container,
  wrapper,
  left,
  right,
  top,
  bottom,
  item,
} from "../../styles/collaborate.module.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
const Collaborate = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={left}>
          <img src="/assets/Collaborate.png" alt="" />
        </div>
        <div className={right}>
          <div className={top}>
            <SectionTitle sectionTitle={"Collaborate"} />
            <h1>
              Collaborate with <br /> your team anytime, <br /> anywhere
            </h1>
            <p>
              Self-service data analytics software that lets you <br /> create
              visually appealing data visualizations and <br /> insightful
              dashboards in minutes.
            </p>
          </div>
          <div className={bottom}>
            <div className={item}>
              <img src="/assets/success.svg" alt="" />
              <span>Organize your data</span>
            </div>
            <div className={item}>
              <img src="/assets/success.svg" alt="" />
              <span>Always in sync</span>
            </div>
            <div className={item}>
              <img src="/assets/success.svg" alt="" />
              <span>Work with any team</span>
            </div>
            <div className={item}>
              <img src="/assets/success.svg" alt="" />
              <span>Embedded analytics</span>
            </div>
            <div className={item}>
              <img src="/assets/success.svg" alt="" />
              <span>Business analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
