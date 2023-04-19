import React from "react";
import Tags from "../Tags/Index";
import styles from "./Galery.module.scss";
import images from "./images.json";
import open from './open.png'
import favorito from './favorito.png'

export default function Galery() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.galeria__cards}>
        {images.map((image) => {
          return (
            <li key={image.id} className={styles.galeria__card}>
              <img
                className={styles.galeria__imagem}
                src={image.imagem}
                alt={image.titulo}
              />
              <p className={styles.galeria__descricao}>{image.titulo}</p>
              <div>
                <p>{image.creditos}</p>
                <span>
                  <img src={favorito} alt="ícone coração de curtir" />
                  <img src={open} alt="ícone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
