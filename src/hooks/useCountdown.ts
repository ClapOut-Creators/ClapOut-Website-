import { useEffect, useState } from 'react';

// Ticks once a second while `target` is set, so callers can render a live
// HH:MM:SS countdown. Returns null once `target` is missing, unparseable,
// or already in the past, so callers can fall back to normal behavior.
export function useCountdown(target?: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!target) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!target) return null;
  const targetMs = new Date(target).getTime();
  if (Number.isNaN(targetMs)) return null;
  const diffMs = targetMs - now;
  if (diffMs <= 0) return null;

  const totalSeconds = Math.floor(diffMs / 1000);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(Math.floor(totalSeconds / 3600))}:${pad(Math.floor((totalSeconds % 3600) / 60))}:${pad(totalSeconds % 60)}`;
}
