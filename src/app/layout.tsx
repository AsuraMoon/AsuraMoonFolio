import "./globals.css";

export const metadata = {
  title: "Asu — Portfolio",
  description: "Portfolio Fullstack JavaScript d'Asu",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="layout-body">
        <main className="layout-content">{children}</main>

          <footer className="global-footer">
            <p>
              © {new Date().getFullYear()} Made by Asura — Fullstack JS —{" "}
              <a
                href="https://github.com/AsuraMoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </footer>
      </body>
    </html>
  );
}
