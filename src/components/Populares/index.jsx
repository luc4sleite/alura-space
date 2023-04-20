import React from 'react'
import fotosPopulares from './fotos-populares.json'
import style from './Populares.module.scss'

export default function Populares() {
  return (
    <aside className={style.populares}>
        <h2>Populares</h2>
        <ul className={style.populares__imagens}>
            {fotosPopulares.map((fotoPopular) => {
                return (
                    <li key={fotoPopular.id}>
                        <img src={fotoPopular.path} alt={fotoPopular.alt} />
                    </li>
                )
            })}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
