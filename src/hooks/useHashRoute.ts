import { useEffect, useState } from 'react';

export function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash;
      setHash(next);
      if (next.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}
