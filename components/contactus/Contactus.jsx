import React from "react";
import {
  container,
  wrapper,
  content,
  button,
} from "../../styles/contactus.module.scss";
const Contactus = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={content}>
          <p>Have any questions? Want some help getting started?</p>
          <h1>Don’t be stranger, we always love to hear from you</h1>
          <button className={button}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
