import React from "react";
import {
  container,
  wrapper,
  card,
  user__container,
  img__container,
  user__info,
  link__btn,
} from "../../styles/testimonials.module.scss";
import testimonials from "../../dummyData/testimonials";
const Testimonails = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        {testimonials.map((item) => {
          if (item.isHome) {
            return (
              <div className={card} key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.desc}</p>
                <div className={user__container}>
                  <div className={img__container}>
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className={user__info}>
                    <h4>{item.username} </h4>
                    <span>{item.userJobTitle} </span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className={link__btn}>
        <button>
          <span>See All Testimonial</span>
          <img src="/assets/arrow_right_blue.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Testimonails;
