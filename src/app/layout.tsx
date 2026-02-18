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
          © {new Date().getFullYear()} Asu — Fullstack JS
        </footer>
      </body>
    </html>
  );
}
