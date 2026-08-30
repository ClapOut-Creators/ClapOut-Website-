// Smooth-scrolls to an in-page section anchor (e.g. "#faq") when the target
// exists in the current DOM. On other routes the target isn't mounted, so the
// default anchor navigation runs instead — that fires hashchange, App re-renders
// the home page, and App's effect finishes the scroll.
export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#") || href.startsWith("#/") || href.length <= 1) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
}
