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

// The section arrives with the home page's render, which happens after the
// popstate that requested it, so poll a few frames for it to appear.
function scrollToSectionWhenRendered(id: string, attempts = 30) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (attempts > 0) {
    requestAnimationFrame(() => scrollToSectionWhenRendered(id, attempts - 1));
  }
}

export function useRoute() {
  const [path, setPath] = useState(currentPath());

  useEffect(() => {
    installLinkInterceptor();
    const onPopState = () => {
      setPath(currentPath());
      // A hash on the new path names a home-page section (e.g. "/#join" from
      // "Get Started" on another route): scroll to it once it has rendered.
      // Otherwise start the new page at the top.
      const hash = window.location.hash;
      if (hash.length > 1) {
        scrollToSectionWhenRendered(hash.slice(1));
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return path;
}
