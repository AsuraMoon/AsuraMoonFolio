"use client";

import "./globals.css";
import { ReactNode } from "react";
import PageTransition from "@/components/PageTransition";
import CosmicBackground from "@/components/CosmicBackground";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CosmicBackground />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
