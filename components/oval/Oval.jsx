import React from 'react'
import {
    card__img_container
} from "../../styles/oval.module.scss"
const Oval = ({icon,backgroundImg}) => {
  return (
     <div className={card__img_container} style={{background:`url(${backgroundImg})`}} >
    <img src={icon} alt="" />
    </div>

  )
}

export default Oval;