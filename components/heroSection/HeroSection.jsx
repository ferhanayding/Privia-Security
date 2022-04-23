import Image from "next/image";
import React from "react";
import {
  container,
  wrapper,
  content,
  heroSection__title,
  herosection__desc,
  heroSection__btns,
  btn__left,
  text_container,
  btn__right,
  heroSection__img_container,
} from "../../styles/heroSection.module.scss";
const HeroSection = () => {
  return (
    <div className={container}>
      {/* <div className={container__img}>
        <img src="/assets/pattern.png" alt="" />
      </div> */}
      <div className={wrapper}>
        <div className={content}>
          <div className={text_container}>
            <h1 className={heroSection__title}>
              Powerfull analytics tools <br /> for your business
            </h1>
            <p className={herosection__desc}>
              An awesome tools for your business, increase business revenue with
              enterprise-grade <br /> links built to acquire and engage
              customers
            </p>
          </div>
          <div className={heroSection__btns}>
            <button className={btn__left}>Start free trial</button>
            <button className={btn__right}>View live demo</button>
          </div>
          <div className={heroSection__img_container}>
            <img src="/assets/Dashboard.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
