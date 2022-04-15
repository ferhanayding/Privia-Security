import React from "react";
import { container, items } from "../../styles/info.module.scss";

import info from "../../dummyData/info";
const Info = () => {
  return (
    <div className={container}>
      <p>More than 1.8 million people across 50,000 companies choose Oval</p>
      <div className={items}>
        {info.map((item, index) => (
          <img src={item.url} alt="photo" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Info;
