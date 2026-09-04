import { navigate } from "../hooks/useRoute";

// Smooth-scrolls to an in-page section anchor (e.g. "#faq", "#join").
//
// Every anchored section lives on the home page. When the target is in the
// current DOM we scroll to it; when it is not — the user is on a real route
// such as /campaigns or /contact/partnership — we route home with the hash
// kept, and useRoute scrolls to the section once the home page has rendered.
// Real routes ("/campaigns", "/guides/...") are left untouched; useRoute's
// click interceptor handles those.
export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#") || href.length <= 1) return;
  const target = document.getElementById(href.slice(1));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
    return;
  }
  if (window.location.pathname !== "/") {
    e.preventDefault();
    navigate(`/${href}`);
  }
}
