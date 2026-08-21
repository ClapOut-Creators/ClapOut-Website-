import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { navLinks } from '../../data/nav';

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
              className="h-9 w-9 select-none md:h-10 md:w-10"
              draggable={false}
            />
            <span className="font-poppins text-base font-medium text-brand-dark md:text-lg">Clapout</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 font-poppins text-sm text-brand-dark/80 transition-colors hover:text-brand-dark"
              >
                {link.label}
                <ChevronDown size={14} />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button variant="orange" className="px-4 py-2 text-xs md:px-8 md:py-2.5 md:text-sm">
              Get Started
            </Button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-brand-dark md:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
          </div>
        )}
      </div>
    </header>
  );
}
