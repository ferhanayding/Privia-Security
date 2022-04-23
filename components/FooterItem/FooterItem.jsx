import React, { useState } from "react";
import {
  container,
  name,
  items__container,
  items__wrapper,
  link,
  title__container,
  activeWrapper,
  pasive,
} from "../../styles/footerItem.module.scss";
const FooterItem = ({ title, links, index }) => {
  const [selected, setSelected] = useState(null);
  const handleClick = (index) => {
    if (selected == index) {
      return setSelected(null);
    }

    setSelected(index);
  };
  console.log(selected);
  return (
    <div className={container}>
      <div className={title__container} onClick={() => handleClick(index)}>
        <h4 className={name}>{title}</h4>
        <img
          src="/assets/ArrowIcon.svg"
          //   style={{ `${selected == index && animation : "none"}`   }}

          alt=""
        />
      </div>
      <div className={items__container}>
        <ul
          className={`${items__wrapper} ${selected == index && activeWrapper}`}
        >
          {links.map((item, i) => (
            <li className={link} key={i}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterItem;
