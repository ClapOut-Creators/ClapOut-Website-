import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import CommunityModal from "../shared/CommunityModal";
import { useRoute, navigate } from "../../hooks/useRoute";
import { navLinks } from "../../data/nav";
import { scrollToHash } from "../../lib/scrollToHash";
import { platformSignInUrl } from "../../lib/api";

function isLinkActive(path: string, href: string) {
  if (!href || href === "#") return false;
  if (href.startsWith("/")) return path === href || path.startsWith(`${href}/`);
  return path === href;
}

// The logo always goes "home". On the home page itself that's a smooth
// scroll-to-top of the current DOM; on any other route (e.g. /campaigns)
// there's no #top element to scroll to, so fall back to a real route
// change back to "/".
function goHome(e: React.MouseEvent<HTMLAnchorElement>) {
  const top = document.getElementById("top");
  if (top) {
    e.preventDefault();
    top.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", "#top");
    return;
  }
  e.preventDefault();
  navigate("/");
}

export default function Navbar() {
  const path = useRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-9 md:px-0">
      <div className="relative w-full md:w-[calc(100%-190px)] md:max-w-[1537px]">
        <div className="flex items-center justify-between gap-4 rounded-full border border-black/5 bg-white/95 px-5 py-2.5 shadow-sm backdrop-blur transition-colors md:px-6 md:py-3 dark:border-white/10 dark:bg-dark-surface/95">
          <a
            href="#top"
            onClick={goHome}
            className="flex shrink-0 items-center gap-2"
          >
            <img
              src="/clapout-logo.png"
              alt="Clapout logo"
              className="h-9 w-9 select-none md:h-12 md:w-12"
              draggable={false}
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.label} className="group relative">
                  <a
                    href={link.href}
                    onClick={(e) => scrollToHash(e, link.href)}
                    className={`flex items-center gap-1 rounded-lg px-3 py-1.5 -mx-3 -my-1.5 font-poppins text-sm transition-colors group-hover:bg-black/5 group-focus-within:bg-black/5 dark:group-hover:bg-white/10 dark:group-focus-within:bg-white/10 ${
                      isLinkActive(path, link.href)
                        ? "text-brand-orange"
                        : "text-brand-dark/80 group-hover:text-brand-dark group-focus-within:text-brand-dark dark:text-white/80 dark:group-hover:text-white dark:group-focus-within:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </a>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="flex flex-col gap-1 rounded-2xl border border-black/5 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-dark-surface">
                      {link.subLinks.map((subLink) => (
                        <a
                          key={subLink.label}
                          href={subLink.href}
                          onClick={(e) => scrollToHash(e, subLink.href)}
                          target={
                            subLink.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            subLink.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-hairline bg-white text-brand-dark dark:border-dark-border dark:bg-dark-bg dark:text-white">
                            {subLink.icon && <subLink.icon size={18} />}
                          </span>
                          <span>
                            <span className="block font-poppins text-sm font-medium text-black/80 dark:text-white">
                              {subLink.label}
                            </span>
                            <span className="block font-sfpro text-xs text-text-body dark:text-dark-body">
                              {subLink.description}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-1 font-poppins text-sm transition-colors ${
                    isLinkActive(path, link.href)
                      ? "text-brand-orange"
                      : "text-brand-dark/80 hover:text-brand-dark dark:text-white/80 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ),
            )}
            <button
              type="button"
              onClick={() => setShowCommunityModal(true)}
              className="flex items-center gap-1.5 font-poppins text-sm text-brand-dark/80 transition-colors hover:text-brand-dark dark:text-white/80 dark:hover:text-white"
            >
              Join our Community
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button
                href={platformSignInUrl()}
                variant="orange"
                className="px-8 py-2.5 text-sm"
              >
                Get Started
              </Button>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white md:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+8px)] rounded-3xl border border-black/5 bg-white p-4 shadow-sm md:hidden dark:border-white/10 dark:bg-dark-surface">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      aria-expanded={mobileSubOpen === link.label}
                      onClick={() =>
                        setMobileSubOpen((prev) =>
                          prev === link.label ? null : link.label,
                        )
                      }
                      className={`flex w-full items-center justify-between font-poppins text-sm ${
                        isLinkActive(path, link.href)
                          ? "text-brand-orange"
                          : "text-brand-dark dark:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileSubOpen === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        mobileSubOpen === link.label
                          ? "grid-rows-[1fr] pt-3 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="flex min-h-0 flex-col gap-1">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            onClick={(e) => {
                              setMobileOpen(false);
                              setMobileSubOpen(null);
                              scrollToHash(e, subLink.href);
                            }}
                            target={
                              subLink.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              subLink.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border-hairline bg-white text-brand-dark dark:border-dark-border dark:bg-dark-bg dark:text-white">
                              {subLink.icon && <subLink.icon size={16} />}
                            </span>
                            <span>
                              <span className="block font-poppins text-sm font-medium text-black/80 dark:text-white">
                                {subLink.label}
                              </span>
                              <span className="block font-sfpro text-xs text-text-body dark:text-dark-body">
                                {subLink.description}
                              </span>
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between font-poppins text-sm ${
                      isLinkActive(path, link.href)
                        ? "text-brand-orange"
                        : "text-brand-dark dark:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ),
              )}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setShowCommunityModal(true);
                }}
                className="flex items-center gap-2 font-poppins text-sm text-brand-dark dark:text-white"
              >
                <img src="/general/whatsapp.png" alt="" className="h-4 w-4" />
                Join our Community
              </button>
            </nav>
            <Button
              href={platformSignInUrl()}
              variant="orange"
              className="mt-4 w-full py-2.5 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>

      {showCommunityModal && (
        <CommunityModal onClose={() => setShowCommunityModal(false)} />
      )}
    </header>
  );
}
