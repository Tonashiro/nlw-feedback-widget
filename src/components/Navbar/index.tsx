import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.theme === "dark"
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;

    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = isDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [isDarkMode]);

  return (
    <nav className="bg-zinc-300 dark:bg-darkMode-bg h-[72px] w-full fixed z-10 pr-40 flex items-center justify-end shadow-sm shadow-zinc-400 rounded-br-[40px] rounded-bl-[40px]">
      <button
        onClick={toggleDarkMode}
        className="h-12 w-12 rounded-full bg-zinc-500 hover:bg-zinc-600 dark:bg-darkMode-component dark:hover:bg-zinc-500 transition-colors flex items-center justify-center"
      >
        {isDarkMode ? (
          <Sun weight="bold" className="w-5 h-5 animate-pulse" />
        ) : (
          <Moon weight="bold" className="w-5 h-5 animate-pulse" />
        )}
      </button>
    </nav>
  );
}
