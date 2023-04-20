import React, { useState } from "react";
import Tags from "../Tags/Index";
import styles from "./Galery.module.scss";
import imagens from "./images.json";

import Cards from "./Cards";

export default function Galery() {
  const [itens, setItens] = useState(imagens);
  const tags = [...new Set(imagens.map((valor) => valor.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = imagens.filter((foto) => {
      return foto.tag === tag;
    })

    setItens(novasFotos);
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  );
}
