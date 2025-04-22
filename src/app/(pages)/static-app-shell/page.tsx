"use client";

import nextDynamic from "next/dynamic";

const App = nextDynamic(() => import("~/frontend/App"), { ssr: false });

export const dynamic = "force-static";

// This is the cursed file that defines the entire client-side app.
// I'm using react router because I want a great client-first experience.
export default function Home() {
  return <App />;
}
