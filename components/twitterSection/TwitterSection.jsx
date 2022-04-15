import React, { useState, useEffect } from "react";
import {
  container,
  wrapper,
  bottom,
  center,
  top,
  card,
  img__container,
} from "../../styles/twitterSection.module.scss";
import twitterData from "../../dummyData/twitterData.json";
const TwitterSection = () => {
  const [cards, setCards] = useState([]);
  // api dan geliyormuş gibi simulasyon...
  useEffect(() => {
    setCards(twitterData);
  }, [twitterData]);

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={top}>
          <span>#ovalover</span>
          <h1>Hear more from people like you</h1>
        </div>
        <div className={center}>
          {cards &&
            cards.map((item) => (
              <div className={card} key={item.id}>
                <div className={img__container}>
                  <img src={item.url} alt="" />
                </div>
              </div>
            ))}
        </div>
        <div className={bottom}>
          <button>See more #ovalover</button>
        </div>
      </div>
    </div>
  );
};

export default TwitterSection;
