import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// The platform (app.clapoutcreators.com) is a different origin, so localStorage
// cannot carry the theme across; a cookie on `.clapoutcreators.com` can, and
// both sites read it first and write it on every change.
const THEME_COOKIE = "clapout-theme";

function readThemeCookie(): Theme | null {
  const match = document.cookie.match(
    /(?:^|;\s*)clapout-theme=(dark|light)(?:;|$)/,
  );
  return match ? (match[1] as Theme) : null;
}

function writeThemeCookie(theme: Theme) {
  const host = window.location.hostname;
  const domain =
    host === "clapoutcreators.com" || host.endsWith(".clapoutcreators.com")
      ? "; domain=.clapoutcreators.com"
      : "";
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=31536000; SameSite=Lax${domain}`;
}

function getInitialTheme(): Theme {
  const fromCookie = readThemeCookie();
  if (fromCookie) return fromCookie;
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (readThemeCookie() || localStorage.getItem("theme")) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      writeThemeCookie(next);
      return next;
    });
  };

  return { theme, toggleTheme };
}
