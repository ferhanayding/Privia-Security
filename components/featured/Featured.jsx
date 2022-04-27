import React from "react";
import {
  container,
  wrapper,
  content,
  desc__container,
  left__desc,
  right__desc,
  cards__container,
  card,
  image__container,
  card__right_container,
  card__title,
  card__desc,
  title__container,
} from "../../styles/featured.module.scss";
import featured from "../../dummyData/featured";
import SectionTitle from "../sectionTitle/SectionTitle";
import LearnMore from "../learnMore/LearnMore";
const Featured = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={title__container}>
          <SectionTitle sectionTitle={"Features"} />
        </div>
        <div className={content}>
          <div className={desc__container}>
            <h3 className={left__desc}>Our solution for your bussiness</h3>
            <p className={right__desc}>
              We are self-service data analytics software that lets you create
              visually appealing data visualizations and insightful dashboards
              in minutes.
            </p>
          </div>
          <div className={cards__container}>
            {featured.map((item) => (
              <div className={card} key={item.id}>
                <div
                  className={image__container}
                  style={{ background: item.bg }}
                >
                  <img src={item.img} alt="" />
                </div>
                <div className={card__right_container}>
                  <h4 className={card__title}>{item.title} </h4>
                  <p className={card__desc}>{item.desc}</p>
                  <LearnMore />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
