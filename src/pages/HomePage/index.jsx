import Banner from "components/Banner";
import Footer from "components/Footer";
import Galery from "components/Galery";
import Header from "components/Header";
import Menu from "components/Menu";
import Populares from "components/Populares";

import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galery />
          <Populares />
        </div>
      </main>

      <Footer />
    </>
  );
}
