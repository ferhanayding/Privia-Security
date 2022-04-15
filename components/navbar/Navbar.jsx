import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  container,
  wrapper,
  left,
  center,
  right,
  imgContainer,
  right__wrapper,
  right_login,
  right_start,
  open,
  closed,
  dropdown__menu,
  drowdown__menu_items,
  drowdown__menu_item,
  center__items,
  hr,
  scroll,
  center__item,
  active__item,
} from "../../styles/navbar.module.scss";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const arrowStatus = () => {
    if (dropdown) {
      return open;
    } else {
      return closed;
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
  }, [isScrolled]);
  return (
    <div className={[container, isScrolled ? scroll : ""].join(" ")}>
      <div className={wrapper}>
        <div className={left}>
          <div className={imgContainer}>
            <Link href="/">
              <a>
                <img src="/assets/Privia_logo.png"></img>
              </a>
            </Link>
          </div>
        </div>
        <div className={center}>
          <ul className={center__items}>
            <li className={center__item}>About</li>
            <li
              className={[center__item, dropdown && active__item].join(" ")}
              onClick={() => setDropdown(!dropdown)}
              onMouseLeave={() => setDropdown(false)}
            >
              <span>Products</span>
              <img
                src="/assets/ArrowIcon.svg"
                className={arrowStatus()}
                alt="arrow"
              />
              {dropdown && (
                <div className={dropdown__menu}>
                  <ul className={drowdown__menu_items}>
                    <li className={drowdown__menu_item}>
                      <a href="#Analyze">Analyze</a>
                    </li>
                    <div className={hr} />
                    <li className={drowdown__menu_item}>Defense</li>
                    <div className={hr} />
                    <li className={drowdown__menu_item}>Protect</li>
                  </ul>
                </div>
              )}
            </li>
            <Link href="/pricing">
              <a>
                <li className={center__item}>Pricing</li>
              </a>
            </Link>
            <Link href="/resources">
              <a>
                <li className={center__item}>Resources</li>
              </a>
            </Link>
            <Link href="/customers">
              <a>
                <li className={center__item}>Customers</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={right}>
          <div className={right__wrapper}>
            <button className={right_login}>Login</button>
            <button className={right_start}>Start free trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
