"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  link: string;
  index: number;
};

export default function ProjectCard({ title, description, link, index }: Props) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank">
        Voir le projet
      </a>
    </motion.div>
  );
}
