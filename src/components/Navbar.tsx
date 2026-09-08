'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type NavItem = { label: string; href: string; external?: boolean };
type DropdownItem = { label: string; href: string };

const LEFT_NAV_LINKS: NavItem[] = [
  { label: 'Companies', href: '/companies' }, { label: 'Library', href: '/library' }, { label: 'Programs', href: '/programs' },
];
const RIGHT_NAV_LINKS: NavItem[] = [
  { label: 'Aarohan', href: 'https://aarohan3.vercel.app/', external: true }, { label: 'About', href: '#about' }, { label: 'Stakeholders', href: '/#portfolio' },
];
const PROGRAMS_DROPDOWN_ITEMS: DropdownItem[] = [
  { label: 'Accelerator Program', href: '/programs' }, { label: 'RISE', href: '/programs/rise' }, { label: 'LEAP', href: '/programs/leap' }, { label: 'Incubation Program', href: '/programs/incubation' },
];
const ABOUT_DROPDOWN_ITEMS: DropdownItem[] = [{ label: 'About AIC-JKLU', href: '/about' }, { label: 'Vision & Mission', href: '/about/mission-vision' }];
const STAKEHOLDERS_DROPDOWN_ITEMS: DropdownItem[] = [{ label: 'Team', href: '/#team' }, { label: 'Mentors', href: '/stakeholders' }, { label: 'Partners', href: '/partners' }];

const navLinkClass = 'group relative whitespace-nowrap font-robotoMono text-[11px] lg:text-xs font-medium uppercase tracking-[0.13em] text-slateMuted transition-colors duration-300 ease-out hover:text-[#EB5725] cursor-pointer';
const mobileLinkClass = 'flex w-full items-center justify-between py-2 font-robotoMono text-xs font-medium uppercase tracking-[0.12em] text-slateMuted transition-colors duration-300 hover:text-[#EB5725] cursor-pointer';

function Chevron({ open, mobile = false }: { open: boolean; mobile?: boolean }) {
  return <svg aria-hidden="true" className={`${mobile ? 'h-3.5 w-3.5' : 'h-3 w-3'} transition-transform duration-200 ${open ? 'rotate-180 text-[#EB5725]' : 'text-slateMuted'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>;
}

/** Desktop dropdown preserves the existing motion while following the ARIA menu keyboard pattern. */
function DesktopDropdown({ label, items, open, setOpen, width = 'w-56' }: { label: string; items: DropdownItem[]; open: boolean; setOpen: (open: boolean) => void; width?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [open, setOpen]);
  const focusItem = (index: number) => window.setTimeout(() => itemRefs.current[index]?.focus(), 0);
  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); const next = !open; setOpen(next); if (next) focusItem(0); }
    if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true); focusItem(0); }
    if (event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); focusItem(items.length - 1); }
  };
  const onMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = itemRefs.current.findIndex((element) => element === document.activeElement);
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); rootRef.current?.querySelector('button')?.focus(); }
    if (event.key === 'ArrowDown') { event.preventDefault(); itemRefs.current[(current + 1 + items.length) % items.length]?.focus(); }
    if (event.key === 'ArrowUp') { event.preventDefault(); itemRefs.current[(current - 1 + items.length) % items.length]?.focus(); }
    if (event.key === 'Home') { event.preventDefault(); itemRefs.current[0]?.focus(); }
    if (event.key === 'End') { event.preventDefault(); itemRefs.current[items.length - 1]?.focus(); }
  };
  return <div ref={rootRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <button type="button" onClick={() => setOpen(!open)} onKeyDown={onTriggerKeyDown} aria-expanded={open} aria-haspopup="menu" aria-controls={`${label.toLowerCase()}-dropdown-menu`} className={`${navLinkClass} flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand`}><span className={open ? 'text-[#EB5725]' : ''}>{label}</span><Chevron open={open} /><span className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-[#EB5725] transition-all duration-300 ease-out ${open ? 'w-full' : 'w-0 group-hover:w-full'}`} /></button>
    <AnimatePresence>{open && <motion.div id={`${label.toLowerCase()}-dropdown-menu`} role="menu" aria-orientation="vertical" onKeyDown={onMenuKeyDown} initial={{ opacity: 0, y: 6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 4, scale: 0.98 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className={`absolute left-1/2 top-full z-50 mt-3.5 ${width} -translate-x-1/2 rounded-[10px] border border-[#E4E4E0] bg-[#FFFFFF] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]`}>
      {items.map((item, index) => <Link key={item.label} href={item.href} role="menuitem" ref={(element) => { itemRefs.current[index] = element; }} onClick={() => setOpen(false)} className="block rounded-md px-3.5 py-2.5 font-robotoMono text-[12px] font-medium text-[#121212] transition-colors duration-150 hover:bg-[#FFF2ED] hover:text-[#EB5725] focus-visible:bg-[#FFF2ED] focus-visible:text-[#EB5725] focus-visible:outline-none cursor-pointer">{item.label}</Link>)}
    </motion.div>}</AnimatePresence>
  </div>;
}

/** Mobile navigation is isolated so header layout and disclosure state remain independent. */
function MobileMenu({ open, close }: { open: boolean; close: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const groups = [{ label: 'Programs', items: PROGRAMS_DROPDOWN_ITEMS }, { label: 'About', items: ABOUT_DROPDOWN_ITEMS }, { label: 'Stakeholders', items: STAKEHOLDERS_DROPDOWN_ITEMS }];
  return <div id="mobile-menu" role="menu" className={`overflow-hidden border-t border-hairline bg-surface transition-all duration-300 ease-in-out md:hidden ${open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}><nav className="flex flex-col px-6 py-5">
    {LEFT_NAV_LINKS.concat(RIGHT_NAV_LINKS).map((item) => {
      const group = groups.find((candidate) => candidate.label === item.label);
      if (group) return <div key={item.label} className="border-b border-hairline py-2"><button type="button" onClick={() => setExpanded(expanded === item.label ? null : item.label)} aria-expanded={expanded === item.label} className={mobileLinkClass}><span className={expanded === item.label ? 'text-[#EB5725]' : ''}>{item.label}</span><Chevron open={expanded === item.label} mobile /></button><AnimatePresence>{expanded === item.label && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden space-y-1 pl-3 pt-1">{group.items.map((dropdownItem) => <Link key={dropdownItem.label} href={dropdownItem.href} onClick={() => { setExpanded(null); close(); }} className="block rounded-md px-3 py-2 font-robotoMono text-[11px] font-medium text-[#52525B] transition-colors duration-150 hover:bg-[#FFF2ED] hover:text-[#EB5725] focus-visible:bg-[#FFF2ED] focus-visible:text-[#EB5725] focus-visible:outline-none cursor-pointer">{dropdownItem.label}</Link>)}</motion.div>}</AnimatePresence></div>;
      if (item.external) return <div key={item.label} className="border-b border-hairline py-2"><a href={item.href} target="_blank" rel="noopener noreferrer" onClick={close} className={mobileLinkClass}><span>{item.label}</span><span className="text-xs text-[#EB5725]">↗</span></a></div>;
      return <div key={item.label} className="border-b border-hairline py-2"><Link href={item.href} onClick={close} className={`${mobileLinkClass} justify-start`}>{item.label}</Link></div>;
    })}
  </nav></div>;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  useEffect(() => { const closeOnEscape = (event: globalThis.KeyboardEvent) => { if (event.key === 'Escape') setOpenDropdown(null); }; document.addEventListener('keydown', closeOnEscape); return () => document.removeEventListener('keydown', closeOnEscape); }, []);
  const dropdown = (label: string, items: DropdownItem[], width?: string) => <DesktopDropdown label={label} items={items} open={openDropdown === label} setOpen={(open) => setOpenDropdown(open ? label : null)} width={width} />;
  const plainLink = (item: NavItem) => item.external ? <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={navLinkClass}>{item.label}<span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#EB5725] transition-all duration-300 ease-out group-hover:w-full" /></a> : <Link key={item.label} href={item.href} className={`${navLinkClass} ${pathname === item.href ? 'text-[#EB5725]' : ''}`}>{item.label}<span className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-[#EB5725] transition-all duration-300 ease-out ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} /></Link>;
  return <header className="sticky top-0 z-50 w-full border-b border-hairline bg-surface"><div className="relative mx-auto h-[82px] w-full max-w-[1600px] px-6 lg:px-12"><div className="hidden md:grid h-full grid-cols-[1fr_auto_1fr] items-center">
    <nav aria-label="Primary navigation" className="hidden items-center justify-end gap-7 pr-6 md:flex lg:gap-10 lg:pr-10">{plainLink(LEFT_NAV_LINKS[0])}{plainLink(LEFT_NAV_LINKS[1])}{dropdown('Programs', PROGRAMS_DROPDOWN_ITEMS)}</nav>
    <Link href="/" aria-label="AIC JKLU Home" className="group relative z-10 flex items-center justify-center px-8 lg:px-10 cursor-pointer"><Image src="/logo.svg" alt="AIC JKLU" width={100} height={48} sizes="100px" priority className="h-12 w-auto max-w-[100px] object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]" /></Link>
    <nav aria-label="Secondary navigation" className="hidden items-center justify-start gap-7 pl-6 md:flex lg:gap-10 lg:pl-10">{plainLink(RIGHT_NAV_LINKS[0])}{dropdown('About', ABOUT_DROPDOWN_ITEMS)}{dropdown('Stakeholders', STAKEHOLDERS_DROPDOWN_ITEMS, 'w-48')}</nav>
  </div><Link href="/apply" className="group absolute right-6 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-[#EB5725] px-8 py-4 font-robotoMono text-[12px] font-bold uppercase tracking-[0.12em] text-white whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-[calc(50%+1px)] hover:bg-[#C84214] md:flex lg:right-10 lg:px-9 lg:py-4"><span>Apply</span><span className="text-base leading-none transition-transform duration-300 ease-out group-hover:translate-x-1">→</span></Link>
    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:hidden"><Link href="/" aria-label="AIC JKLU Home" className="flex items-center cursor-pointer"><Image src="/logo.svg" alt="AIC JKLU" width={85} height={40} sizes="85px" priority className="h-10 w-auto max-w-[85px] object-contain" /></Link><div className="flex items-center gap-3"><Link href="/apply" className="rounded-md bg-[#EB5725] px-4 py-2.5 font-robotoMono text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#C84214] cursor-pointer">Apply</Link><button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} className="flex min-h-[44px] min-w-[44px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"><span className={`block h-[2px] w-5 rounded-full bg-obsidian origin-center transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} /><span className={`block h-[2px] w-5 rounded-full bg-obsidian transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} /><span className={`block h-[2px] w-5 rounded-full bg-obsidian origin-center transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} /></button></div></div>
  </div><MobileMenu open={menuOpen} close={() => setMenuOpen(false)} /></header>;
}
