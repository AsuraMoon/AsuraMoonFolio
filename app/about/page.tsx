import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <h1>À propos de moi</h1>

        <p style={{ marginTop: 16, lineHeight: 1.7 }}>
          Développeur Full Stack basé en France, je suis spécialisé dans l’écosystème JavaScript : React, Next.js, Node.js, Supabase, PostgreSQL. J’aime construire des applications sécurisées, scalables et élégantes.
        </p>

        <p style={{ marginTop: 16, lineHeight: 1.7 }}>
          Je suis également passionné par la création d’environnements de développement robustes, la sécurité (RLS, policies, service_role), et l’optimisation de workflows.
        </p>

        <p style={{ marginTop: 16, lineHeight: 1.7 }}>
          Quand je ne code pas, je joue à Satisfactory, j’expérimente des architectures de méga-usines avec la plannification complexe que ça inclus, ou je cuisine.
        </p>
      </PageWrapper>
    </>
  );
}