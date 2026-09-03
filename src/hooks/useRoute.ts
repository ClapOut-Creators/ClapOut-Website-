import { useEffect, useState } from 'react';

function currentPath() {
  return window.location.pathname;
}

// Programmatic navigation to a real path — pushes history state and
// notifies every mounted useRoute() consumer via a synthetic popstate
// (pushState itself doesn't fire popstate).
export function navigate(path: string) {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

let linkInterceptorInstalled = false;

// Installed once, regardless of how many components call useRoute():
// intercepts clicks on same-page links whose href is a real path (starts
// with "/") and routes them through the History API instead of a full
// page reload. Fragment links (e.g. "#how-it-works", used for in-page
// scrolling) and external/mailto/tel links are left alone.
function installLinkInterceptor() {
  if (linkInterceptorInstalled) return;
  linkInterceptorInstalled = true;
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const anchor = (e.target as HTMLElement)?.closest('a');
    if (!anchor) return;
    if (anchor.target && anchor.target !== '_self') return;
    const href = anchor.getAttribute('href');
    if (!href || !href.startsWith('/')) return;
    e.preventDefault();
    navigate(href);
  });
}

export function useRoute() {
  const [path, setPath] = useState(currentPath());

  useEffect(() => {
    installLinkInterceptor();
    const onPopState = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return path;
}
