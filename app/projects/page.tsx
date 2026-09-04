import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Liste de courses",
    description: "MiamListe — A Next.js (App Router) project to manage a shopping list.",
    link: "https://liste-course-kappa.vercel.app/",
  },
  {
    title: "Portfolio Next.js",
    description: "Site personnel moderne en TypeScript.",
    link: "https://github.com/AsuraMoon/Portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <h1 className="text-3xl font-bold mb-6">Mes projets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
