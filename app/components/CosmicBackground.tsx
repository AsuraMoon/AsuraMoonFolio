"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CosmicBackground() {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    // On est côté client → window existe
    setSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  }, []);

  // Tant qu'on n'a pas la taille → on ne génère rien
  if (!size) return null;

  const particles = Array.from({ length: 40 });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0.2,
            x: Math.random() * size.w,
            y: Math.random() * size.h,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.2, 0.4, 0.2],
            x: Math.random() * size.w,
            y: Math.random() * size.h,
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(200, 182, 255, 0.8)",
            boxShadow: "0 0 12px rgba(200, 182, 255, 0.6)",
          }}
        />
      ))}
    </div>
  );
}
