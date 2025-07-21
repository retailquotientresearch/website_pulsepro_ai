"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="border border-border hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
      </Button>
    );
  }

  const toggleTheme = () => {
    // Always toggle between light and dark, ignoring system
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isDark = theme === "dark";

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
              className="border border-border hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <i className="ri-sun-line text-lg"></i>
      ) : (
        <i className="ri-moon-line text-lg"></i>
      )}
    </Button>
  );
}
