import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Asu — Portfolio",
  description: "Portfolio Fullstack JavaScript d'Asu",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="layout-body">
        <header className="header">
          <nav className="nav">
            <Link href="/" className="nav-link">Accueil</Link>
            <Link href="/projects" className="nav-link">Projets</Link>
            <Link href="/about" className="nav-link">À propos</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
        </header>

        <main className="layout-content">{children}</main>

        <footer className="global-footer">
          © {new Date().getFullYear()} Asu — Fullstack JS
        </footer>
      </body>
    </html>
  );
}
