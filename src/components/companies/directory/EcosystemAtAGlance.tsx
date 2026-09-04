'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companies } from '@/data/companies';

interface EcosystemNode {
  id: string;
  name: string;
  angle: number; // degrees around circle
  distance: number; // radius from center
  color: string;
}

const NODES: EcosystemNode[] = [
  { id: 'ai', name: 'AI', angle: 270, distance: 130, color: '#7C3AED' },
  { id: 'fintech', name: 'FinTech', angle: 330, distance: 135, color: '#EA580C' },
  { id: 'edtech', name: 'EdTech', angle: 30, distance: 135, color: '#D97706' },
  { id: 'sustainability', name: 'Sustainability', angle: 90, distance: 130, color: '#059669' },
  { id: 'healthtech', name: 'HealthTech', angle: 150, distance: 135, color: '#DC2626' },
  { id: 'agritech', name: 'AgriTech', angle: 210, distance: 135, color: '#16A34A' },
];

export default function EcosystemAtAGlance() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Center coordinate for SVG
  const cx = 180;
  const cy = 180;

  const handleSelectCategory = (categoryName: string) => {
    // Scroll to directory and set category
    const dirElement = document.getElementById('directory');
    if (dirElement) {
      dirElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-full p-7 sm:p-9 rounded-2xl border border-[#E4E4E0] bg-white flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div>
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#EB5725]" />
          <span className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">
            ECOSYSTEM AT A GLANCE
          </span>
        </div>

        {/* Heading */}
        <h3 className="font-marcellus text-[26px] sm:text-[30px] leading-[1.1] text-[#121212] mb-3 font-bold">
          Different ideas.
          <br />
          <span className="text-[#EB5725]">A stronger ecosystem.</span>
        </h3>

        {/* Description */}
        <p className="font-robotoMono text-[12px] leading-[1.7] text-[#52525B] mb-6">
          Explore companies by industry and see how diverse innovation thrives at AIC-JKLU.
        </p>
      </div>

      {/* ── Interactive Radial Node Network Diagram ── */}
      <div className="relative w-full max-w-[360px] mx-auto aspect-square flex items-center justify-center my-4 select-none">
        <svg
          viewBox="0 0 360 360"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Guide Concentric Rings */}
          <circle cx={cx} cy={cy} r="135" stroke="#E4E4E0" strokeWidth="1" strokeDasharray="3 5" opacity="0.7" />
          <circle cx={cx} cy={cy} r="85" stroke="#E4E4E0" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5" />

          {/* Dotted Radial Connector Lines to Each Sector Node */}
          {NODES.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + node.distance * Math.cos(rad);
            const ny = cy + node.distance * Math.sin(rad);
            const isHovered = hoveredNode === node.id;

            return (
              <g key={node.id}>
                {/* Connector Line */}
                <line
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke={isHovered ? '#EB5725' : '#E4E4E0'}
                  strokeWidth={isHovered ? '1.5' : '1'}
                  strokeDasharray={isHovered ? 'none' : '3 3'}
                  className="transition-colors duration-200"
                />

                {/* Outer Target Circle */}
                <circle
                  cx={nx}
                  cy={ny}
                  r="20"
                  fill="#FAF7F2"
                  stroke={isHovered ? '#EB5725' : '#E4E4E0'}
                  strokeWidth={isHovered ? '1.5' : '1'}
                  className="cursor-pointer transition-all duration-200 hover:scale-110"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => handleSelectCategory(node.name)}
                />

                {/* Node Label */}
                <text
                  x={nx}
                  y={ny + 3}
                  textAnchor="middle"
                  fill={isHovered ? '#EB5725' : '#121212'}
                  fontSize="9.5"
                  fontWeight="700"
                  className="font-robotoMono cursor-pointer transition-colors duration-200 pointer-events-none"
                >
                  {node.name.length > 7 ? node.name.slice(0, 6) + '…' : node.name}
                </text>
              </g>
            );
          })}

          {/* ── Central AIC-JKLU Core Hub Node ── */}
          <circle cx={cx} cy={cy} r="36" fill="#EB5725" />
          <circle cx={cx} cy={cy} r="42" fill="none" stroke="#EB5725" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.12em"
            className="font-robotoMono"
          >
            AIC-JKLU
          </text>
        </svg>
      </div>

      {/* Action Link */}
      <button
        type="button"
        onClick={() => handleSelectCategory('All')}
        className="
          inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl
          border border-[#E4E4E0] bg-[#FAF7F2] hover:border-[#EB5725] hover:bg-white
          font-robotoMono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#121212]
          hover:text-[#EB5725] transition-all duration-200 cursor-pointer mt-2
        "
      >
        <span>Explore by Industry</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
