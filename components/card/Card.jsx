import React from "react";
import {
  container,
  wrapper,
  left,
  right,
  btn__left,
  btn__right,
} from "../../styles/card.module.scss";
const Card = ({ bg = "#ffedb6" }) => {
  return (
    <div
      className={container}
      style={{
        background: `${bg} url("/assets/little_bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className={wrapper}>
        <div className={left}>
          <h1>Your next successful business starts now</h1>
          <p>
            Join with more than 1.8 million people across 50,000 companies.
            30-day free trial, cancel any time. No credit card required.
          </p>
        </div>
        <div className={right}>
          <button className={btn__left}>Start free trial</button>
          <button className={btn__right}>View live demo</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
