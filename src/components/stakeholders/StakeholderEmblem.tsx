'use client';

import { motion } from 'framer-motion';

export default function StakeholderEmblem() {
  return (
    <div className="relative w-full max-w-[760px] xl:max-w-[840px] aspect-[760/600] select-none">
      <svg
        viewBox="0 0 760 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {/* ============================================================
            1. STEPPED CONNECTOR LINES & ORBIT CIRCULAR ARCS
        ============================================================= */}

        {/* 01 Top-Left Stepped Connector: from below 01 box into top circle arc */}
        <motion.path
          d="M 248 78 L 248 115 L 400 115"
          stroke="#EB5725"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Top-Right Arc: from top (400, 115) curving around to right (585, 300) */}
        <motion.path
          d="M 400 115 A 185 185 0 0 1 585 300"
          stroke="#EB5725"
          strokeWidth="1.3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* 02 Right Stepped Connector: horizontal from center-right to 02, stepping vertically */}
        <motion.path
          d="M 500 320 L 648 320 L 648 245"
          stroke="#EB5725"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom Arc: from right (585, 300) through bottom (400, 485) up around left (215, 300) */}
        <motion.path
          d="M 585 300 A 185 185 0 0 1 215 300"
          stroke="#EB5725"
          strokeWidth="1.3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* 04 Left Horizontal Connector with Left Arrowhead: from circle left arc (215, 300) to (180, 300) */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <path
            d="M 215 300 L 180 300"
            stroke="#EB5725"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          {/* Arrowhead pointing left */}
          <path
            d="M 190 295 L 180 300 L 190 305"
            stroke="#EB5725"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>

        {/* ============================================================
            2. ORANGE ACCENT NODES (DOTS)
        ============================================================= */}

        {/* Node 1: on top-right orbit (~35°) */}
        <motion.circle
          cx="551"
          cy="194"
          r="4.5"
          fill="#EB5725"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Node 2: on right orbit edge */}
        <motion.circle
          cx="585"
          cy="300"
          r="4.5"
          fill="#EB5725"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Node 3: on bottom orbit edge (6 o'clock) */}
        <motion.circle
          cx="400"
          cy="485"
          r="4.5"
          fill="#EB5725"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ============================================================
            3. CENTRAL STACKED TYPOGRAPHY (GUIDE - CONNECT - BUILD - IMPACT)
        ============================================================= */}
        <g className="select-none font-marcellus">
          {/* 1. GUIDE (Dark) */}
          <motion.text
            x="400"
            y="218"
            textAnchor="middle"
            fill="#121212"
            fontSize="56"
            letterSpacing="0.04em"
            className="font-marcellus font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            GUIDE
          </motion.text>

          {/* 2. CONNECT (Orange) */}
          <motion.text
            x="400"
            y="278"
            textAnchor="middle"
            fill="#EB5725"
            fontSize="56"
            letterSpacing="0.04em"
            className="font-marcellus font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            CONNECT
          </motion.text>

          {/* 3. BUILD (Dark) */}
          <motion.text
            x="400"
            y="338"
            textAnchor="middle"
            fill="#121212"
            fontSize="56"
            letterSpacing="0.04em"
            className="font-marcellus font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            BUILD
          </motion.text>

          {/* 4. IMPACT (Orange) */}
          <motion.text
            x="400"
            y="398"
            textAnchor="middle"
            fill="#EB5725"
            fontSize="56"
            letterSpacing="0.04em"
            className="font-marcellus font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            IMPACT
          </motion.text>
        </g>

        {/* ============================================================
            4. FOUR PILLAR CALLOUT BLOCKS (01, 02, 03, 04)
        ============================================================= */}

        {/* ── 01 LEADERSHIP (Top-Left) ── */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-robotoMono"
        >
          {/* Number */}
          <text
            x="210"
            y="65"
            fill="#EB5725"
            fontSize="22"
            fontWeight="500"
            className="font-robotoMono"
          >
            01
          </text>

          {/* Vertical Separator */}
          <line
            x1="248"
            y1="44"
            x2="248"
            y2="80"
            stroke="#E4E4E0"
            strokeWidth="1.3"
          />

          {/* Title */}
          <text
            x="264"
            y="55"
            fill="#121212"
            fontSize="12"
            fontWeight="700"
            letterSpacing="0.14em"
            className="font-robotoMono uppercase"
          >
            LEADERSHIP
          </text>

          {/* Subtitle */}
          <text
            x="264"
            y="71"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            They lead
          </text>
          <text
            x="264"
            y="85"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            with vision.
          </text>
        </motion.g>

        {/* ── 02 MENTORSHIP (Mid-Right) ── */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-robotoMono"
        >
          {/* Number */}
          <text
            x="618"
            y="290"
            fill="#EB5725"
            fontSize="22"
            fontWeight="500"
            className="font-robotoMono"
          >
            02
          </text>

          {/* Vertical Separator */}
          <line
            x1="656"
            y1="268"
            x2="656"
            y2="306"
            stroke="#E4E4E0"
            strokeWidth="1.3"
          />

          {/* Title */}
          <text
            x="672"
            y="280"
            fill="#121212"
            fontSize="12"
            fontWeight="700"
            letterSpacing="0.14em"
            className="font-robotoMono uppercase"
          >
            MENTORSHIP
          </text>

          {/* Subtitle */}
          <text
            x="672"
            y="296"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            They mentor
          </text>
          <text
            x="672"
            y="310"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            with purpose.
          </text>
        </motion.g>

        {/* ── 03 PARTNERSHIP (Bottom-Right) ── */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-robotoMono"
        >
          {/* Number */}
          <text
            x="480"
            y="512"
            fill="#EB5725"
            fontSize="22"
            fontWeight="500"
            className="font-robotoMono"
          >
            03
          </text>

          {/* Vertical Separator */}
          <line
            x1="518"
            y1="490"
            x2="518"
            y2="528"
            stroke="#E4E4E0"
            strokeWidth="1.3"
          />

          {/* Title */}
          <text
            x="534"
            y="502"
            fill="#121212"
            fontSize="12"
            fontWeight="700"
            letterSpacing="0.14em"
            className="font-robotoMono uppercase"
          >
            PARTNERSHIP
          </text>

          {/* Subtitle */}
          <text
            x="534"
            y="518"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            They collaborate
          </text>
          <text
            x="534"
            y="532"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            with trust.
          </text>
        </motion.g>

        {/* ── 04 GROWTH (Bottom-Left) ── */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-robotoMono"
        >
          {/* Number */}
          <text
            x="150"
            y="512"
            fill="#EB5725"
            fontSize="22"
            fontWeight="500"
            className="font-robotoMono"
          >
            04
          </text>

          {/* Vertical Separator */}
          <line
            x1="188"
            y1="490"
            x2="188"
            y2="528"
            stroke="#E4E4E0"
            strokeWidth="1.3"
          />

          {/* Title */}
          <text
            x="204"
            y="502"
            fill="#121212"
            fontSize="12"
            fontWeight="700"
            letterSpacing="0.14em"
            className="font-robotoMono uppercase"
          >
            GROWTH
          </text>

          {/* Subtitle */}
          <text
            x="204"
            y="518"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            They enable
          </text>
          <text
            x="204"
            y="532"
            fill="#52525B"
            fontSize="11"
            fontWeight="400"
            className="font-robotoMono"
          >
            meaningful impact.
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
