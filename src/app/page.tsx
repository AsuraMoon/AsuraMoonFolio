"use client"
import Image from "next/image";
import Style from "./home.module.css";
import { useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={Style.wrapper}>
      {/* NAVIGATION ANCRÉE */}
      <nav className={Style.nav}>
        <p className={Style.logo}>Portfolio.</p>

        <div className={`${Style.navLinks} ${isOpen ? Style.navOpen : ""}`}>
          <a href="#presentation">Présentation</a>
          <a href="#parcours">Parcours</a>
          <a href="#skills">Compétences</a>
          <a href="#methodo">Méthodologie</a>
          <a href="#valeurs">Valeurs</a>
          <a href="#experience">Expérience</a>
          <a href="#contact">Contact</a>
        </div>

        <div
          className={`${Style.burger} ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* SECTION 1 — PRÉSENTATION */}
      <section id="presentation" className={Style.presentation}>
        <div className={Style.presentationText}>
          <h1 className={Style.title}>
            Julien “Asura” Fredenucci — Développeur Concepteur Logiciel
            Fullstack (RNCP 7)
          </h1>
          <p className={Style.text}>
            Je conçois et développe des applications modernes, performantes et
            sécurisées en JavaScript/TypeScript, avec une expertise en Next.js,
            Node.js et PostgreSQL. Mon approche est guidée par la rigueur, la
            fiabilité et la qualité du code, renforcées par mon expérience au
            sein du Ministère des Armées.
          </p>
        </div>

        <div className={Style.presentationPhoto}>
          <Image
            src="/avatar.png"
            alt="Julien Asura Fredenucci"
            width={260}
            height={260}
            className={Style.avatarFade}
          />
        </div>
      </section>

      {/* SECTION 2 — PARCOURS */}
      <section id="parcours" className={Style.section}>
        <h2 className={Style.subtitle}>Parcours</h2>

        <div className={Style.timeline}>
          <div>
            <h3>
              2023 — 2025 · OpenClassrooms — Développeur Concepteur Logiciel
              (RNCP 7)
            </h3>
            <p>
              Développement fullstack JavaScript/TypeScript, Next.js, Node.js,
              PostgreSQL, CI/CD, tests unitaires et déploiements automatisés.
            </p>
          </div>

          <div>
            <h3>2022 · Ministère des Armées</h3>
            <p>
              Formation intensive en développement logiciel, Java, POO, Spring,
              bonnes pratiques, discipline et rigueur opérationnelle.
            </p>
          </div>

          <div>
            <h3>
              2020 — 2021 · GRETA Provence — Développeur Web / Web Mobile (RNCP
              5)
            </h3>
            <p>
              Développement front/back, PHP/Symfony, MySQL, SASS, Bootstrap,
              déploiement et gestion de projets web.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPÉTENCES */}
      <section id="skills" className={Style.section}>
        <h2 className={Style.subtitle}>Compétences clés</h2>

        <div className={Style.grid}>
          <div>
            <h3>Next.js 14</h3>
            <p>App Router, performances, SSR/ISR.</p>
          </div>
          <div>
            <h3>Node.js</h3>
            <p>APIs robustes, sécurité, auth hashée.</p>
          </div>
          <div>
            <h3>TypeScript</h3>
            <p>Typage strict, architecture fiable.</p>
          </div>
          <div>
            <h3>PostgreSQL / Supabase</h3>
            <p>Schémas propres, triggers.</p>
          </div>
          <div>
            <h3>CI/CD</h3>
            <p>GitHub Actions, déploiements automatisés.</p>
          </div>
          <div>
            <h3>Architecture logicielle</h3>
            <p>Modularité, clean code.</p>
          </div>
          <div>
            <h3>Sécurité</h3>
            <p>Hashing, validation, bonnes pratiques.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MÉTHODOLOGIE */}
      <section id="methodo" className={Style.section}>
        <h2 className={Style.subtitle}>Méthodologie</h2>

        <div className={Style.grid}>
          <div>
            <h3>1. Analyse</h3>
            <p>Compréhension des besoins, cadrage précis.</p>
          </div>
          <div>
            <h3>2. Architecture</h3>
            <p>Modèles, schémas, organisation du code.</p>
          </div>
          <div>
            <h3>3. Développement</h3>
            <p>Front, back, tests, sécurité.</p>
          </div>
          <div>
            <h3>4. Déploiement</h3>
            <p>CI/CD, monitoring, optimisation continue.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VALEURS */}
      <section id="valeurs" className={Style.section}>
        <h2 className={Style.subtitle}>Valeurs</h2>

        <div className={Style.grid}>
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
          <div>
            <h3>Discipline</h3>
            <p>Méthodes structurées, constance.</p>
          </div>
          <div>
            <h3>Esprit d’analyse</h3>
            <p>Architecture et résolution de problèmes.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — EXPÉRIENCE */}
      <section id="experience" className={Style.section}>
        <h2 className={Style.subtitle}>Expérience</h2>
        <p className={Style.text}>
          Plus de 20 projets professionnalisants réalisés : applications
          fullstack, APIs REST, bases de données, tests unitaires, CI/CD,
          déploiements automatisés et optimisation des performances.
        </p>
      </section>

      {/* SECTION 7 — CONTACT */}
      <section id="contact" className={Style.section}>
        <h2 className={Style.subtitle}>Contact</h2>

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
