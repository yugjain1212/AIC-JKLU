'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  'Companies',
  'Library',
  'Programs',
  'Events',
  'About',
  'Stake Holders',
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = NAV_LINKS.slice(0, 3);
  const rightLinks = NAV_LINKS.slice(3, 5);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-hairline">

      {/* ───────────────── Desktop Navbar ───────────────── */}
      <div className="relative h-[82px] max-w-screen-2xl mx-auto px-6 lg:px-12">

        <div className="flex h-full items-center justify-between">

          {/* ───────────── Left Navigation ───────────── */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {leftLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  group relative
                  font-robotoMono text-[11px] lg:text-xs
                  font-medium uppercase tracking-[0.12em]
                  text-slateMuted
                  hover:text-[#EB5725]
                  transition-colors duration-300 ease-out
                "
              >
                {link}

                <span
                  className="
                    absolute -bottom-2 left-0
                    h-px w-0 bg-obsidian
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>


          {/* ───────────── Center Logo ───────────── */}
          <Link
            href="/"
            aria-label="AIC JKLU Home"
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              flex items-center justify-center
              group
            "
          >
            <img
              src="/logo.svg"
              alt="AIC JKLU"
              className="
                h-12
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.03]
              "
            />
          </Link>


          {/* ───────────── Right Navigation ───────────── */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto">

            <nav
              aria-label="Secondary"
              className="flex items-center gap-8 lg:gap-10"
            >
              {rightLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="
                    group relative
                    font-robotoMono text-[11px] lg:text-xs
                    font-medium uppercase tracking-[0.12em]
                    text-slateMuted hover:text-[#EB5725]
                    transition-colors duration-300 ease-out
                  "
                >
                  {link}

                  <span
                    className="
                      absolute -bottom-2 left-0
                      h-px w-0 bg-obsidian
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* Apply Button */}
            <Link
              href="#apply"
              className="
                group
                flex items-center gap-3
                font-robotoMono
                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]
                bg-brand
                hover:bg-brandHover
                text-white
                px-6
                py-3
                rounded-md
                whitespace-nowrap
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              <span>Apply Now</span>

              <span
                className="
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>


          {/* ───────────── Mobile Controls ───────────── */}
          <div className="ml-auto flex items-center gap-3 md:hidden">

            <Link
              href="#apply"
              className="
                font-robotoMono
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                bg-brand
                hover:bg-brandHover
                text-white
                px-4
                py-2.5
                rounded-md
                whitespace-nowrap
              "
            >
              Apply
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                flex flex-col justify-center
                gap-[5px]
                w-8 h-8
                p-1
              "
            >
              <span
                className={`
                  block h-0.5 w-5
                  bg-obsidian rounded-full
                  origin-center
                  transition-transform duration-200
                  ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}
                `}
              />

              <span
                className={`
                  block h-0.5 w-5
                  bg-obsidian rounded-full
                  transition-opacity duration-200
                  ${menuOpen ? 'opacity-0' : ''}
                `}
              />

              <span
                className={`
                  block h-0.5 w-5
                  bg-obsidian rounded-full
                  origin-center
                  transition-transform duration-200
                  ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}
                `}
              />
            </button>
          </div>

        </div>
      </div>


      {/* ───────────────── Mobile Drawer ───────────────── */}
      <div
        id="mobile-menu"
        role="menu"
        className={`
          md:hidden
          overflow-hidden
          border-t border-hairline
          bg-surface
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">

          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className="
                font-robotoMono
                text-xs
                font-medium
                uppercase
                tracking-[0.12em]
                text-slateMuted
                hover:text-obsidian
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