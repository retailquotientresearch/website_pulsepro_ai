"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("tooltips");

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
        <i className="ri-contrast-line text-lg text-gray-400 animate-pulse"></i>
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="border border-border hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? (
              <i className="ri-sun-fill text-lg text-yellow-400 font-bold"></i>
            ) : (
              <i className="ri-moon-fill text-lg text-blue-800 font-bold"></i>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t(`themeToggle.${isDark ? "dark" : "light"}`)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
