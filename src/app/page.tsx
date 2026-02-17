import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
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

        <h1>Asu</h1>
        <h2>Développeur Fullstack JavaScript</h2>

        <p className={styles.bio}>
          Je conçois des applications modernes en Next.js, Node.js et PostgreSQL.
          Passionné par l’architecture, la sécurité et les expériences web élégantes.
        </p>

        <a className={styles.button} href="https://github.com/" target="_blank">
          GitHub
        </a>

        <a className={styles.secondary} href="https://linkedin.com/" target="_blank">
          LinkedIn
        </a>

        <Link className={styles.secondary} href="/projects">
          Voir mes projets
        </Link>

      </div>
    </main>
  );
}
