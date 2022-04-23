import React from "react";
import {
  container,
  wrapper,
  left,
  right,
  right__wrapper,
  left__top,
  ieft__bottom,
} from "../../styles/footer.module.scss";
import footerData from "../../dummyData/footerData";
import FooterItem from "../FooterItem/FooterItem";
const Footer = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={left}>
          <div className={left__top}>
            <img src="/assets/Twitter.svg" alt="" />
            <img src="/assets/Facebook.svg" alt="" />
            <img src="/assets/Linkedin.svg" alt="" />
          </div>
          <div className={ieft__bottom}>
            <span>© 2019 Oval</span>
          </div>
        </div>
        <div className={right}>
          <div className={right__wrapper}>
            {footerData.map((item, index) => (
              <FooterItem {...item} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
