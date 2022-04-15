import React from 'react'
import {
container,
name,
items__container,
items__wrapper,
link
} from "../../styles/footerItem.module.scss"
const FooterItem = ({title,links}) => {
  return (
    <div className={container}>
        <h4 className={name} >
        {title}
        </h4>
        <div className={items__container} >
        <ul className={items__wrapper}>
            {
                links.map((item,index)=>(
                    <li className={link} key={index} >
                        {item.title}
                    </li>
                ))
            }
        </ul>
        </div>
    </div>
  )
}

export default FooterItem