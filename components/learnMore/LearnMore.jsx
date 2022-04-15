import React from "react";
import { card__btn } from "../../styles/learnMore.module.scss";
const LearnMore = ({ text = "Learn More" }) => {
  return (
    <span className={card__btn}>
      <span>{text}</span>
      <img src="/assets/arrow_right_blue.svg" alt="" />
    </span>
  );
};

export default LearnMore;
