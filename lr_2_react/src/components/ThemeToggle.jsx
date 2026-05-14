import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed top-5 right-5 z-50 bg-[var(--accent-color)] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform text-xs font-bold uppercase"
    >
      {isDark ? "Світла тема" : "Темна тема"}
    </button>
  );
}

export default ThemeToggle;