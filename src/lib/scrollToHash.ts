// Smooth-scrolls to an in-page section anchor (e.g. "#faq") when the target
// exists in the current DOM (real routes like "/campaigns" or "/guides/..."
// are left untouched — they're handled by useRoute's click interceptor instead).
export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#") || href.length <= 1) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
}
