import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>

        <Image
          src="/avatar.png"
          alt="Asu avatar"
          width={110}
          height={110}
          className={styles.avatar}
        />

        <h1>À propos</h1>

        <p className={styles.text}>
          Je suis Asu, développeur fullstack JavaScript passionné par la création
          d’applications modernes, performantes et élégantes.
        </p>

        <p className={styles.text}>
          J’adore Next.js, Node.js, PostgreSQL, l’architecture propre, la sécurité,
          et tout ce qui touche à l’expérience utilisateur.
        </p>

        <p className={styles.text}>
          Mon objectif est de construire des projets utiles, bien conçus, et agréables
          à utiliser, tout en continuant à apprendre et à repousser mes limites.
        </p>

      </div>
    </main>
  );
}
