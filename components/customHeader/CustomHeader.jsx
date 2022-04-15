import React from "react";
import {
  container,
  wrapper,
  input__container,
} from "../../styles/customHeader.module.scss";
const CustomHeader = ({
  isInput = false,
  desc,
  bg = "#ffedb6",
  text__color = "#6D560E",
}) => {
  return (
    <div className={container} style={{ background: bg }}>
      <div className={wrapper}>
        <p style={{ color: text__color }}>{desc}</p>
        {isInput && (
          <div className={input__container}>
            <label htmlFor="input">
              <img src="/assets/ic_search.svg" alt="" />
            </label>
            <input type="text" id="input" placeholder="Search articles…" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
