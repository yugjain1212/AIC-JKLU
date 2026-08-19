'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LEFT_NAV_LINKS = [
  'Companies',
  'Library',
  'Programs',
] as const;

const RIGHT_NAV_LINKS = [
  'Events',
  'About',
  'Stake Holders',
] as const;

const ALL_NAV_LINKS = [
  ...LEFT_NAV_LINKS,
  ...RIGHT_NAV_LINKS,
] as const;

const ABOUT_DROPDOWN_ITEMS = [
  { label: 'About AIC-JKLU', href: '/about' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Vision & Mission', href: '/about/mission-vision' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setAboutOpen(false);
      }
    }

    if (aboutOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [aboutOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-surface">

      {/* =========================================================
          DESKTOP NAVBAR
      ========================================================== */}
      <div className="relative mx-auto h-[82px] w-full max-w-[1600px] px-6 lg:px-12">

        {/* -------------------------------------------------------
            Main 3-column layout

            LEFT        CENTER        RIGHT
            1fr         auto          1fr
        -------------------------------------------------------- */}
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center">

          {/* =====================================================
              LEFT NAVIGATION
          ====================================================== */}
          <nav
            aria-label="Primary navigation"
            className="
              hidden
              md:flex
              items-center
              justify-end
              gap-7
              lg:gap-10
              pr-6
              lg:pr-10
            "
          >
            {LEFT_NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="
                  group
                  relative
                  whitespace-nowrap
                  font-robotoMono
                  text-[11px]
                  lg:text-xs
                  font-medium
                  uppercase
                  tracking-[0.13em]
                  text-slateMuted
                  transition-colors
                  duration-300
                  ease-out
                  hover:text-[#EB5725]
                "
              >
                {link}

                {/* Orange hover underline */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-[#EB5725]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>


          {/* =====================================================
              CENTER LOGO
          ====================================================== */}
          <Link
            href="/"
            aria-label="AIC JKLU Home"
            className="
              group
              relative
              z-10
              flex
              items-center
              justify-center
              px-8
              lg:px-10
            "
          >
            <img
              src="/logo.svg"
              alt="AIC JKLU"
              className="
                h-12
                w-auto
                max-w-[100px]
                object-contain
                transition-transform
                duration-300
                ease-out
                group-hover:scale-[1.04]
              "
            />
          </Link>


          {/* =====================================================
              RIGHT NAVIGATION
          ====================================================== */}
          <nav
            aria-label="Secondary navigation"
            className="
              hidden
              md:flex
              items-center
              justify-start
              gap-7
              lg:gap-10
              pl-6
              lg:pl-10
            "
          >
            {RIGHT_NAV_LINKS.map((link) => {
              if (link === 'About') {
                return (
                  <div key="About" ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setAboutOpen((prev) => !prev)}
                      aria-expanded={aboutOpen}
                      aria-haspopup="menu"
                      aria-controls="about-dropdown-menu"
                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-1.5
                        whitespace-nowrap
                        font-robotoMono
                        text-[11px]
                        lg:text-xs
                        font-medium
                        uppercase
                        tracking-[0.13em]
                        text-slateMuted
                        transition-colors
                        duration-300
                        ease-out
                        hover:text-[#EB5725]
                        focus:outline-none
                      "
                    >
                      <span className={aboutOpen ? 'text-[#EB5725]' : ''}>About</span>
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ease-out ${
                          aboutOpen ? 'rotate-180 text-[#EB5725]' : 'text-slateMuted group-hover:text-[#EB5725]'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>

                      {/* Orange hover underline */}
                      <span
                        className={`
                          absolute
                          -bottom-2
                          left-1/2
                          h-px
                          -translate-x-1/2
                          bg-[#EB5725]
                          transition-all
                          duration-300
                          ease-out
                          ${aboutOpen ? 'w-full' : 'w-0 group-hover:w-full'}
                        `}
                      />
                    </button>

                    {/* Minimalist Floating Dropdown */}
                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          id="about-dropdown-menu"
                          role="menu"
                          aria-orientation="vertical"
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="
                            absolute
                            left-1/2
                            top-full
                            z-50
                            mt-3.5
                            w-52
                            -translate-x-1/2
                            rounded-[10px]
                            border
                            border-[#E4E4E0]
                            bg-[#FFFFFF]
                            p-1.5
                            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                          "
                        >
                          {ABOUT_DROPDOWN_ITEMS.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              role="menuitem"
                              onClick={() => setAboutOpen(false)}
                              className="
                                block
                                rounded-md
                                px-3.0
                                py-2.5
                                font-robotoMono
                                text-[12px]
                                font-medium
                                text-[#121212]
                                transition-colors
                                duration-150
                                hover:bg-[#FFF2ED]
                                hover:text-[#EB5725]
                              "
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="
                    group
                    relative
                    whitespace-nowrap
                    font-robotoMono
                    text-[11px]
                    lg:text-xs
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    text-slateMuted
                    transition-colors
                    duration-300
                    ease-out
                    hover:text-[#EB5725]
                  "
                >
                  {link}

                  {/* Orange hover underline */}
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-[#EB5725]
                      transition-all
                      duration-300
                      ease-out
                      group-hover:w-full
                    "
                  />
                </Link>
              );
            })}
          </nav>

        </div>


        {/* =======================================================
            APPLY BUTTON

            Positioned independently so it doesn't disturb
            the symmetry of the navigation around the logo.
        ======================================================== */}
        <Link
          href="/apply"
          className="
            group
            absolute
            right-6
            top-1/2
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#EB5725]
            px-8
            py-4
            font-robotoMono
            text-[12px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            whitespace-nowrap
            transition-all
            duration-300
            ease-out
            hover:-translate-y-[calc(50%+1px)]
            hover:bg-[#C84214]
            lg:right-10
            lg:px-9
            lg:py-4
            md:flex
          "
        >
          <span>
            Apply
          </span>

          <span
            className="
              text-base
              leading-none
              transition-transform
              duration-300
              ease-out
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </Link>


        {/* =======================================================
            MOBILE HEADER
        ======================================================== */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:hidden">

          {/* Mobile Logo */}
          <Link
            href="/"
            aria-label="AIC JKLU Home"
            className="flex items-center"
          >
            <img
              src="/logo.svg"
              alt="AIC JKLU"
              className="h-10 w-auto max-w-[85px] object-contain"
            />
          </Link>


          {/* Mobile Controls */}
          <div className="flex items-center gap-3">

            {/* Apply */}
            <Link
              href="/apply"
              className="
                rounded-md
                bg-[#EB5725]
                px-4
                py-2.5
                font-robotoMono
                text-[10px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
                transition-colors
                duration-300
                hover:bg-[#C84214]
              "
            >
              Apply
            </Link>


            {/* Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                flex
                h-9
                w-9
                flex-col
                items-center
                justify-center
                gap-[5px]
                rounded-md
                p-1
              "
            >
              {/* Top */}
              <span
                className={`
                  block
                  h-[2px]
                  w-5
                  rounded-full
                  bg-obsidian
                  origin-center
                  transition-transform
                  duration-300
                  ${menuOpen
                    ? 'translate-y-[7px] rotate-45'
                    : ''
                  }
                `}
              />

              {/* Middle */}
              <span
                className={`
                  block
                  h-[2px]
                  w-5
                  rounded-full
                  bg-obsidian
                  transition-opacity
                  duration-200
                  ${menuOpen
                    ? 'opacity-0'
                    : 'opacity-100'
                  }
                `}
              />

              {/* Bottom */}
              <span
                className={`
                  block
                  h-[2px]
                  w-5
                  rounded-full
                  bg-obsidian
                  origin-center
                  transition-transform
                  duration-300
                  ${menuOpen
                    ? '-translate-y-[7px] -rotate-45'
                    : ''
                  }
                `}
              />
            </button>

          </div>
        </div>

      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <div
        id="mobile-menu"
        role="menu"
        className={`
          overflow-hidden
          border-t
          border-hairline
          bg-surface
          transition-all
          duration-300
          ease-in-out
          md:hidden
          ${menuOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0'
          }
        `}
      >
        <nav className="flex flex-col px-6 py-5">

          {ALL_NAV_LINKS.map((link) => {
            if (link === 'About') {
              return (
                <div key="About" className="border-b border-hairline py-2">
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen((prev) => !prev)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      py-2
                      font-robotoMono
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-slateMuted
                      transition-colors
                      duration-300
                      hover:text-[#EB5725]
                    "
                  >
                    <span className={mobileAboutOpen ? 'text-[#EB5725]' : ''}>About</span>
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        mobileAboutOpen ? 'rotate-180 text-[#EB5725]' : 'text-slateMuted'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 pt-1 space-y-1"
                      >
                        {ABOUT_DROPDOWN_ITEMS.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              setMobileAboutOpen(false);
                              setMenuOpen(false);
                            }}
                            className="
                              block
                              rounded-md
                              px-3
                              py-2
                              font-robotoMono
                              text-[11px]
                              font-medium
                              text-[##52525a]
                              transition-colors
                              duration-150
                              hover:bg-[#FFF2ED]
                              hover:text-[#EB5725]
                            "
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="
                  border-b
                  border-hairline
                  py-4
                  font-robotoMono
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-slateMuted
                  transition-colors
                  duration-300
                  hover:text-[#EB5725]
                "
              >
                {link}
              </Link>
            );
          })}

        </nav>
      </div>

    </header>
  );
}