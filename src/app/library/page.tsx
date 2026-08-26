'use client';

import Navbar from '@/components/Navbar';
import LibraryHero from '@/components/library/LibraryHero';
import LibraryMediaGrid from '@/components/library/LibraryMediaGrid';
import LibraryInMotion from '@/components/library/LibraryInMotion';
import LibraryArchiveFooter from '@/components/library/LibraryArchiveFooter';
import { MEDIA_GRID_ITEMS } from '@/data/library';

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-canvas text-obsidian flex flex-col justify-between selection:bg-brand selection:text-white">
      {/* ── Global Sticky Navbar ── */}
      <Navbar />

      {/* ── Page Content Container ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* Hero Section with MEMORIES Watermark & Collage */}
        <LibraryHero />

        {/* Expanded Editorial Photo Gallery Grid */}
        <LibraryMediaGrid items={MEDIA_GRID_ITEMS} />

        {/* AIC / IN MOTION Horizontal Carousel */}
        <LibraryInMotion />

        {/* Final "The archive never stops." Section */}
        <LibraryArchiveFooter />
      </div>
    </main>
  );
}
