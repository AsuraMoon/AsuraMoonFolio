import styles from "./projects.module.css";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <h1>Mes Projets</h1>
        <p className={styles.bio}>
          Voici une sélection de projets que j’ai développés ou que je suis en train de construire.
        </p>

        <div className={styles.list}>

          <div className={styles.project}>
            <h3>Projet 1</h3>
            <p>Un projet Next.js fullstack avec API sécurisée.</p>
            <a className={styles.link} href="#" target="_blank">Voir</a>
          </div>

          <div className={styles.project}>
            <h3>Projet 2</h3>
            <p>Application Node.js + PostgreSQL avec authentification.</p>
            <a className={styles.link} href="#" target="_blank">Voir</a>
          </div>

          <div className={styles.project}>
            <h3>Projet 3</h3>
            <p>Mini‑jeu navigateur basé sur Redux Toolkit.</p>
            <a className={styles.link} href="#" target="_blank">Voir</a>
          </div>

        </div>
      </div>
    </main>
  );
}
