"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const isInitialized = useRef(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const root = document.documentElement;
    let initialTheme: Theme;

    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme === "dark" || savedTheme === "light") {
      initialTheme = savedTheme;
    } else {
      // Use system preference if no saved theme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      initialTheme = prefersDark ? "dark" : "light";
    }

    // Apply theme immediately
    if (initialTheme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    // Update state and mark as initialized
    setTheme(initialTheme);
    isInitialized.current = true;
  }, []);

  useEffect(() => {
    // Skip DOM update on initial mount (already handled above)
    // Only apply theme changes after initialization
    if (!isInitialized.current) return;

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
