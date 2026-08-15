'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = ['Programs', 'Portfolio', 'Mentors', 'Events', 'About'] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-hairline">
      {/* ── Main bar ── */}
      <div className="h-[72px] px-6 lg:px-16 flex items-center justify-between max-w-screen-2xl mx-auto">

        {/* Desktop centre links */}
        <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                font-robotoMono text-xs font-medium uppercase tracking-wider
                text-slateMuted hover:text-obsidian
                transition-colors duration-200
              "
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="flex items-center gap-3">
          {/* CTA — always visible */}
          <button
            type="button"
            className="
              font-robotoMono text-xs font-bold uppercase tracking-wider
              bg-brand hover:bg-brandHover text-white
              px-4 py-2.5 rounded-md
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            Apply Now →
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1 -mr-1"
          >
            <span
              className={`block h-0.5 w-5 bg-obsidian rounded-full origin-center transition-transform duration-200 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-obsidian rounded-full transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-obsidian rounded-full origin-center transition-transform duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        role="menu"
        className={`
          md:hidden overflow-hidden border-t border-hairline bg-surface
          transition-all duration-200 ease-in-out
          ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className="
                font-robotoMono text-xs font-medium uppercase tracking-wider
                text-slateMuted hover:text-obsidian
                transition-colors duration-200
              "
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
