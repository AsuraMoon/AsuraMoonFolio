"use client";

import PageTransition from "@/components/PageTransition";

export default function Transition({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
