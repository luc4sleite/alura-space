import React from 'react'

export default function Icon({icone, style}) {
  return (
    <li className={style.menu__item}>
      <img src={icone.path} alt={icone.alt} />
      <a href="/">{icone.link}</a>
    </li>
  )
}
