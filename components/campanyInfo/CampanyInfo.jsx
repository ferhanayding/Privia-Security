import React from "react";
import {
  container,
  wrapper,
  top,
  desc,
  bottom,
  card__container,
  card,
  hr,
  desc__container,
} from "../../styles/campanyInfo.module.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import campanyInfo from "../../dummyData/campanyInfo";
const CampanyInfo = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={top}>
          <SectionTitle sectionTitle="Not sure what to choose?" />
          <p className={desc}>
            Let us help you to decide the right plan for you
          </p>
        </div>
        <div className={bottom}>
          <div className={card__container}>
            {campanyInfo.map((item) => (
              <div key={item.id} className={card}>
                <h2>{item.title}</h2>
                <div className={hr} style={{ background: item.lineBg }} />
                <div className={desc__container}>
                  <p>{item.descFirst}</p>
                  <br />
                  <p>{item.descSecond}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampanyInfo;
