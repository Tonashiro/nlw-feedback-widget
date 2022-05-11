import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";
import Switch from "react-switch";

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
    <nav className="bg-zinc-300 dark:bg-darkMode-bg h-[72px] w-full fixed z-10 px-6 py-5 flex items-center justify-end shadow-sm shadow-zinc-400 rounded-br-[40px] rounded-bl-[40px]">
      <Switch
        onChange={toggleDarkMode}
        checked={isDarkMode}
        offColor="#27272A"
        onColor="#F4F4F5"
        onHandleColor="#27272A"
        checkedIcon={
          <Sun
            weight="bold"
            className="w-7 h-7 animate-pulse pl-2"
            color="#27272A"
          />
        }
        uncheckedIcon={
          <Moon weight="bold" className="w-7 h-7 animate-pulse pl-1" />
        }
      />
    </nav>
  );
}
