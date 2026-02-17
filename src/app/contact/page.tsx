import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>

        <h1>Contact</h1>

        <p className={styles.text}>
          Tu peux me contacter via les plateformes suivantes :
        </p>

        <a className={styles.button} href="mailto:asu@example.com">
          Email
        </a>

        <a className={styles.secondary} href="https://github.com/" target="_blank">
          GitHub
        </a>

        <a className={styles.secondary} href="https://linkedin.com/" target="_blank">
          LinkedIn
        </a>

        <Link className={styles.secondary} href="/">
          Retour à l’accueil
        </Link>

      </div>
    </main>
  );
}
