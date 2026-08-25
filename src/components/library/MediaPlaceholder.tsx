'use client';

import Image from 'next/image';
import { Camera } from 'lucide-react';

interface MediaPlaceholderProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  theme?: 'dark' | 'light' | 'editorial';
  className?: string;
  priority?: boolean;
}

export default function MediaPlaceholder({
  src,
  alt = 'Archive media',
  aspectRatio,
  theme = 'dark',
  className = '',
  priority = false,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`
        relative w-full h-full overflow-hidden select-none group/media
        ${aspectRatio ? aspectRatio : ''}
        ${
          theme === 'dark'
            ? 'bg-[#1C1C1E]'
            : theme === 'light'
            ? 'bg-[#EDE8DE]'
            : 'bg-[#2A2A2D]'
        }
        ${className}
      `}
    >
      {src ? (
        /* Actual Image when provided by user */
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/media:scale-105"
        />
      ) : (
        /* Editorial Placeholder with Clean Minimalist Grid Texture */
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Subtle Halftone / Grid Pattern Texture */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Grayscale Film Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Center Graphic Icon */}
          <div className="relative z-10 opacity-20 group-hover/media:opacity-35 transition-opacity duration-300">
            <Camera size={28} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
