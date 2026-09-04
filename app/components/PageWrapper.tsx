"use client";

import type { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
