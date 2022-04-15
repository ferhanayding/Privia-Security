import React from "react";
import {
  container,
  wrapper,
  title,
  card,
  left,
  right,
  bottom,
} from "../../styles/artic.module.scss";
import articles from "../../dummyData/articles";
import LearnMore from "../learnMore/LearnMore";
const Articles = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={title}>
          <p>Most insighful articles for start off</p>
        </div>
        {articles.map((item) => (
          <div className={card} key={item.id}>
            <div className={left}>
              <img src={item.url} alt="" />
            </div>
            <div className={right}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
        <div className={bottom}>
          <LearnMore text="See more articles" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
