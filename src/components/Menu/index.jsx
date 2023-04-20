import React from 'react'
import icons from './icons.json'
import Icon from './Icon'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {
                icons.map(icon => (<Icon key={icon.id} icone={icon} style={styles} />))
            }
        </ul>
    </nav>
  )
}
