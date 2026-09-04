"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const items = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Projets" },
    { href: "/about", label: "À propos" },
  ];

  return (
    <nav>
      {items.map((item) => (
        <motion.div
          key={item.href}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={item.href}>{item.label}</Link>
        </motion.div>
      ))}
    </nav>
  );
}
