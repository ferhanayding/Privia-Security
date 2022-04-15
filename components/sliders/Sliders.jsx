import React from "react";
import Slider from "react-slick/lib/slider";
import Head from "next/head";
import {
  container,
  wrapper,
  item__container,
  card,
  user__container,
  img__container,
  user__info,
  arrow__prev,
  arrow__next,
  info__container,
  info__wrapper,
} from "../../styles/sliders.module.scss";
import testimonials from "../../dummyData/testimonials";
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className={arrow__next} onClick={onClick}>
      <img src="/assets/Chevron_-_Right.png" alt="" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className={arrow__prev} onClick={onClick}>
      <img src="/assets/Chevron_-_Right.png" alt="" />
    </button>
  );
}
const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className={container}>
        <div className={wrapper}>
          <Slider className={item__container} {...settings}>
            {testimonials.map((item) => (
              <div className={card}>
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
            ))}
          </Slider>
          <div className={info__container}>
            <div className={info__wrapper}>
              <img
                src="/assets/5e8ebf288aa171570fffbd2c_Slack_Monochrome_Black.png"
                alt=""
              />
              <img
                src="/assets/5dd34dd9740f6157977bb2b2_hubspot-logo-svg-vector 1.png"
                alt=""
              />
              <img src="/assets/Object.png" alt="" />
              <img
                src="/assets/5dd34dd9740f61ad787bb2b3_full-logo-white 1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliders;
