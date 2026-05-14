import { useEffect, useState } from 'react';

const BROWSER_LABELS = {
  userAgent: "User Agent",
  platform: "Platform",
  language: "Language",
  cookieEnabled: "Cookie",
  hardwareConcurrency: "CPU Cores",
};

function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled ? "Yes" : "No",
      hardwareConcurrency: navigator.hardwareConcurrency,
    };
    setInfo(data);
    localStorage.setItem("browserInfo", JSON.stringify(data));
  }, []);

  return (
    <footer className="w-full max-w-[900px] mt-6 p-6 bg-[var(--bg-color)] shadow-xl border-t border-[var(--line-color)]">
      <h3 className="text-[var(--text-main)] text-sm font-bold uppercase mb-4 opacity-70">
        Системна інформація
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[var(--text-secondary)] text-[11px] font-mono">
        {Object.entries(info).map(([key, value]) => (
          <p key={key} className="truncate">
            <span className="text-[var(--accent-color)]">{BROWSER_LABELS[key] || key}:</span> {value}
          </p>
        ))}
        <p className="md:col-span-2 border-t border-[var(--line-color)] pt-2 mt-2 opacity-50">
          LocalStorage Theme: {localStorage.getItem("theme") || "not set"}
        </p>
      </div>
    </footer>
  );
}

export default Footer;