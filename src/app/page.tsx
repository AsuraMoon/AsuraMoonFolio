import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      {/* NAVIGATION ANCRÉE */}
      <nav className={styles.anchorNav}>
        <a href="#presentation">Présentation</a>
        <a href="#parcours">Parcours</a>
        <a href="#skills">Compétences</a>
        <a href="#methodo">Méthodologie</a>
        <a href="#valeurs">Valeurs</a>
        <a href="#experience">Expérience</a>
        <a href="#contact">Contact</a>
        <Link href="#contact" className={styles.navItem}>
          Projets
          <Image
            src="/icons8-new-tab-96.svg"
            width={17}
            height={17}
            alt="Pain chaud sortie du four"
            className={styles.navIcon}
          />
        </Link>
      </nav>

      {/* SECTION 1 — PRÉSENTATION */}
      <section id="presentation" className={styles.section}>
        <Image
          src="/avatar.png"
          alt="Asu avatar"
          width={120}
          height={120}
          className={styles.avatar}
        />
        <h1>Asu — Développeur Fullstack JavaScript</h1>
        <p>
          Je conçois des applications modernes, fiables et élégantes, avec une
          obsession pour l’architecture propre, la sécurité et l’expérience
          utilisateur.
        </p>
      </section>

      {/* SECTION 2 — PARCOURS */}
      <section id="parcours" className={styles.section}>
        <h2>Parcours</h2>
        <div className={styles.timeline}>
          <div>
            <h3>2023 — 2025 · OpenClassrooms</h3>
            <p>
              Bac+3 & Bac+5 Fullstack JavaScript, projets professionnalisants,
              CI/CD, tests, Next.js.
            </p>
          </div>
          <div>
            <h3>2022 · Ministère des Armées</h3>
            <p>
              Rigueur, discipline, Java, Spring, documentation, procédures
              strictes.
            </p>
          </div>
          <div>
            <h3>2020 — 2021 · GRETA</h3>
            <p>Développement web, PHP/Symfony, MySQL, SASS, Bootstrap.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPÉTENCES */}
      <section id="skills" className={styles.section}>
        <h2>Compétences clés</h2>
        <div className={styles.grid}>
          <div>
            <h3>Next.js 14</h3>
            <p>App Router, API Routes, performances.</p>
          </div>
          <div>
            <h3>Node.js</h3>
            <p>APIs robustes, sécurité, auth hashée.</p>
          </div>
          <div>
            <h3>PostgreSQL / Supabase</h3>
            <p>Triggers, schémas propres.</p>
          </div>
          <div>
            <h3>CI/CD</h3>
            <p>GitHub Actions, déploiement continu.</p>
          </div>
          <div>
            <h3>Architecture</h3>
            <p>Modularité, clean code.</p>
          </div>
          <div>
            <h3>Sécurité</h3>
            <p>Auth, hashing, bonnes pratiques.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MÉTHODOLOGIE */}
      <section id="methodo" className={styles.section}>
        <h2>Méthodologie</h2>
        <div className={styles.steps}>
          <div>
            <h3>1. Analyse</h3>
            <p>Comprendre les besoins, cadrer le projet.</p>
          </div>
          <div>
            <h3>2. Architecture</h3>
            <p>Schémas, modèles, organisation du code.</p>
          </div>
          <div>
            <h3>3. Développement</h3>
            <p>Front, back, tests, sécurité.</p>
          </div>
          <div>
            <h3>4. Déploiement</h3>
            <p>CI/CD, monitoring, optimisation.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VALEURS */}
      <section id="valeurs" className={styles.section}>
        <h2>Valeurs</h2>
        <div className={styles.values}>
          <div>
            <h3>Rigueur</h3>
            <p>Héritée du Ministère des Armées.</p>
          </div>
          <div>
            <h3>Autonomie</h3>
            <p>Documentation, IA, workflows modernes.</p>
          </div>
          <div>
            <h3>Fiabilité</h3>
            <p>Code propre, maintenable, sécurisé.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — EXPÉRIENCE */}
      <section id="experience" className={styles.section}>
        <h2>Expérience</h2>
        <p>
          Plus de 20 projets professionnalisants, front/back, API REST, bases de
          données, tests, CI/CD.
        </p>
      </section>

      {/* SECTION 7 — CONTACT */}
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>
          Email : <a href="mailto:jufredenucci@gmx.fr">jufredenucci@gmx.fr</a>
        </p>
        <p>
          <a href="https://github.com/AsuraMoon" target="_blank">
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/julien-fredenucci/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}
