"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Set theme to system theme on first mount if not set
    if ((!theme || theme === "system") && systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme, theme, setTheme]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <Toggle
      pressed={currentTheme === "dark"}
      onPressedChange={toggleTheme}
      size="sm"
      className="hover:bg-white/10"
    >
      {currentTheme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
