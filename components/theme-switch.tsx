"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react"; // 👈 Use the native framework component

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      isIconOnly
      variant="flat"
      color="default"
      onPress={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="text-lg"
    >
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </Button>
  );
}
