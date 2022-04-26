import React from "react";
import {
  container,
  items,
  slider,
  sliders,
} from "../../styles/info.module.scss";
import info from "../../dummyData/info";
import Head from "next/head";
import Slider from "react-slick/lib/slider";

const Info = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1104,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
        <p>More than 1.8 million people across 50,000 companies choose Oval</p>
        <div className={items}>
          <Slider className={sliders} {...settings}>
            {info.map((item, index) => (
              <div className={slider}>
                <img src={item.url} alt="photo" key={index} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Info;
