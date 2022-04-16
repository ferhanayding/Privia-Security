import Link from "next/link";
import React from "react";
import {
  container,
  active,
  wrapper,
} from "../../styles/menuForResponsive.module.scss";
const MenuForResponsive = ({ menuState, setMenuState }) => {
  console.log(menuState);
  return (
    <div className={[container, menuState && active].join(" ")}>
      <div className={wrapper}>
        <ul>
          <Link href="/">
            <a onClick={() => setMenuState(false)}>
              <li>Home</li>
            </a>
          </Link>
          <Link href="">
            <a onClick={() => setMenuState(false)}>
              <li>About</li>
            </a>
          </Link>
          <Link href="/pricing">
            <a onClick={() => setMenuState(false)}>
              <li>Pricing</li>
            </a>
          </Link>
          <Link href="/resources">
            <a onClick={() => setMenuState(false)}>
              <li>Resources</li>
            </a>
          </Link>
          <Link href="/customers">
            <a onClick={() => setMenuState(false)}>
              <li>Customers</li>
            </a>
          </Link>
          <Link href={""}>
            <a onClick={() => setMenuState(false)}>
              <li>Product</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuForResponsive;
