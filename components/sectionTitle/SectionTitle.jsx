import React from "react";
import {
  subtitle__container,
  subtitle__line,
  subtitle__title,
} from "../../styles/sectionTitle.module.scss";
const SectionTitle = ({ sectionTitle }) => {
  return (
    <div className={subtitle__container}>
      <span className={subtitle__line}></span>
      <span className={subtitle__title}>{sectionTitle}</span>
    </div>
  );
};

export default SectionTitle;
