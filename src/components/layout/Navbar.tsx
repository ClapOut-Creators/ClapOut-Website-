import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { navLinks } from "../../data/nav";
import { CREATORS_WHATSAPP_URL } from "../../data/links";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-9 md:px-0">
      <div className="relative w-full md:w-[calc(100%-190px)] md:max-w-[1537px]">
        <div className="flex items-center justify-between gap-4 rounded-full border border-black/5 bg-white/95 px-5 py-2.5 shadow-sm backdrop-blur md:px-6 md:py-3">
          <a href="#top" className="flex shrink-0 items-center gap-2">
            <img
              src="/clapout-logo.png"
              alt="Clapout logo"
              className="h-9 w-9 select-none md:h-12 md:w-12"
              draggable={false}
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 font-poppins text-sm text-brand-dark/80 transition-colors hover:text-brand-dark"
              >
                {link.label}
                {link.subLinks && (
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 md:block">
            <Button
              href={CREATORS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
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

        {mobileOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+8px)] rounded-3xl border border-black/5 bg-white p-4 shadow-sm md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between font-poppins text-sm text-brand-dark"
                >
                  {link.label}
                  <ChevronDown size={14} />
                </a>
              ))}
            </nav>
            <Button
              href={CREATORS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="orange"
              className="mt-4 w-full py-2.5 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
