import React from 'react'
import styles from './Tags.module.scss'
import imagens from '../Galery/images.json'

export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Busque por tags:</p>
        <ul className={styles.tags__lista}>
            {tags.map((tag) => {
              return (
                <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
              )
            })}
            <li onClick={() => setItens(imagens)}>Todas</li>
        </ul>
    </div>
  )
}
