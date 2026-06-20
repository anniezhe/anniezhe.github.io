"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded bg-gray-200 text-gray-900
        dark:bg-gray-800 dark:text-gray-100
        hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {currentTheme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
