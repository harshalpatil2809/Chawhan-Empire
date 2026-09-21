"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-concrete-dark
        bg-[var(--secondary)]
        text-ink
        transition
        hover:bg-concrete
        dark:border-gray-700
        dark:bg-ink-soft
        dark:text-white
        dark:hover:bg-gray-700
      "
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
