"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Vérifier le thème actuel
    const currentTheme = document.documentElement.classList.contains('dark');
    setIsDark(currentTheme);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = !isDark;
    
    if (newTheme) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDark(newTheme);
  };

  if (!mounted) {
    return <Button variant="outline" size="icon" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </Button>
  );
};

export default ThemeToggle;
