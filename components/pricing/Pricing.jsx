import React, { useState } from "react";
import {
  contianer,
  wrapper,
  top,
  bottom,
  top__bottom,
  button,
  discount__text,
  card,
  card__top,
  top__top,
  card__top_bottom,
  card__bottom,
  card__bottom_top,
  bottom__top_container,
  bottom__bottom,
  money__text,
  button__start,
  hr,
} from "../../styles/pricing.module.scss";
const Pricing = () => {
  const [buttonState, setbuttonState] = useState(false);
  const handleClick = () => {
    setbuttonState(!buttonState);
  };
  return (
    <div className={contianer}>
      <div className={wrapper}>
        <div className={top}>
          <h3>Choose the plan that’s right for your business</h3>
          <p>30-day free trial, cancel any time. No credit card required.</p>
          <div className={top__bottom}>
            <span>Bill {buttonState ? "Yearly" : "Monthly"} </span>
            <img
              onClick={handleClick}
              className={button}
              src="/assets/Switcher.png"
              alt=""
              style={{ transform: `${buttonState ? "rotateY(180deg)" : ""}` }}
            />
            <span>Bill Annually</span>
            <img className={discount__text} src="/assets/Group 26.png" alt="" />
          </div>
        </div>
        <div className={bottom}>
          <div className={card} id="yellowbg">
            <div className={card__top}>
              <div className={top__top}>
                <h1 className={money__text} id="one">
                  {buttonState ? "$100" : "$23"}
                </h1>
                <span>{buttonState ? "/year" : "/month"}</span>
              </div>
              <div className={card__top_bottom}>
                <h1>Standart</h1>
                <p>
                  All the basics for businesses that are just getting started.
                </p>
              </div>
            </div>
            <div className={hr} />
            <div className={card__bottom}>
              <div className={card__bottom_top}>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>Single project use</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>Basic dashboard</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>All components included</p>
                </div>
              </div>
              <div className={bottom__bottom}>
                <button className={button__start}>Start free trial</button>
              </div>
            </div>
          </div>
          <div className={card} id="blueicebg">
            <div className={card__top}>
              <div className={top__top}>
                <h1 className={money__text} id="second">
                  {buttonState ? "$799" : "$99"}
                </h1>
                <span>{buttonState ? "/year" : "/month"}</span>
              </div>
              <div className={card__top_bottom}>
                <h1>Essentials</h1>
                <p>Better for growing businesses that want more customers.</p>
              </div>
            </div>
            <div className={hr} />
            <div className={card__bottom}>
              <div className={card__bottom_top}>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>Unlimited project use</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>Advanced dashboard</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>All components included</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p>Advanced insight</p>
                </div>
              </div>
              <div className={bottom__bottom}>
                <button className={button__start}>Start free trial</button>
              </div>
            </div>
          </div>
          <div className={card} id="bluebg">
            <div className={card__top}>
              <div className={top__top}>
                <h1 className={money__text} id="third">
                  {buttonState ? "$999" : "$139"}
                </h1>
                <span style={{ color: "white", opacity: "0.72" }}>
                  {buttonState ? "/year" : "/month"}
                </span>
              </div>
              <div className={card__top_bottom}>
                <h1 id="white">Premium</h1>
                <p style={{ color: "white", opacity: "0.72" }}>
                  All the basics for businesses that are just getting started.
                </p>
              </div>
            </div>
            <div className={hr} />
            <div className={card__bottom}>
              <div className={card__bottom_top}>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p id="white">Unlimited project use</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p id="white">Advanced dashboard</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p id="white">All components included</p>
                </div>
                <div className={bottom__top_container}>
                  <img src="/assets/success.svg" alt="" />
                  <p id="white">Advanced insight</p>
                </div>
              </div>
              <div className={bottom__bottom}>
                <button className={button__start}>Start free trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
