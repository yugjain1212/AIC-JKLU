'use client';

// =========================================================================
// 1. ACCELERATOR: Trajectory Curve with Rising Nodes
// =========================================================================
export function AcceleratorGraphic() {
  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[260px] h-[90px] sm:h-[110px]">
      <svg
        viewBox="0 0 280 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Soft Background Disc */}
        <circle cx="160" cy="55" r="42" fill="#F4EFE6" opacity="0.85" />

        {/* Trajectory Growth Curve */}
        <path
          d="M 30 95 Q 130 95 220 20"
          stroke="#121212"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Start Circle Node */}
        <circle cx="30" cy="95" r="3.5" fill="#FBF7F0" stroke="#121212" strokeWidth="1.2" />

        {/* Mid Orange Node */}
        <circle cx="145" cy="62" r="4" fill="#EB5725" />

        {/* Arrowhead at Endpoint */}
        <path
          d="M 212 20 L 220 20 L 217 28"
          stroke="#EB5725"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// =========================================================================
// 2. INCUBATION: Network Constellation & Matrix Grid
// =========================================================================
export function IncubationGraphic() {
  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[260px] h-[90px] sm:h-[110px]">
      <svg
        viewBox="0 0 280 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Soft Background Disc */}
        <circle cx="130" cy="55" r="42" fill="#F4EFE6" opacity="0.85" />

        {/* Matrix Dot Grid on Right */}
        <g opacity="0.35" fill="#52525B">
          <circle cx="195" cy="35" r="1.2" />
          <circle cx="210" cy="35" r="1.2" />
          <circle cx="225" cy="35" r="1.2" />
          <circle cx="240" cy="35" r="1.2" />

          <circle cx="195" cy="50" r="1.2" />
          <circle cx="210" cy="50" r="1.2" />
          <circle cx="225" cy="50" r="1.2" />
          <circle cx="240" cy="50" r="1.2" />

          <circle cx="195" cy="65" r="1.2" />
          <circle cx="210" cy="65" r="1.2" />
          <circle cx="225" cy="65" r="1.2" />
          <circle cx="240" cy="65" r="1.2" />
        </g>

        {/* Constellation Network Lines */}
        <line x1="50" y1="75" x2="85" y2="52" stroke="#121212" strokeWidth="1.1" />
        <line x1="85" y1="52" x2="130" y2="35" stroke="#121212" strokeWidth="1.1" />
        <line x1="85" y1="52" x2="110" y2="78" stroke="#121212" strokeWidth="1.1" />
        <line x1="110" y1="78" x2="160" y2="58" stroke="#121212" strokeWidth="1.1" />
        <line x1="130" y1="35" x2="160" y2="58" stroke="#121212" strokeWidth="1.1" />

        {/* Network Nodes */}
        <circle cx="50" cy="75" r="4.5" fill="#FBF7F0" stroke="#121212" strokeWidth="1.2" />
        <circle cx="50" cy="75" r="2" fill="#EB5725" />
        <circle cx="85" cy="52" r="4.5" fill="#EB5725" />
        <circle cx="130" cy="35" r="5.5" fill="#FBF7F0" stroke="#121212" strokeWidth="1.2" />
        <circle cx="110" cy="78" r="4" fill="#FBF7F0" stroke="#121212" strokeWidth="1.2" />
        <circle cx="160" cy="58" r="4" fill="#EB5725" />
      </svg>
    </div>
  );
}

// =========================================================================
// 3. RISE: Wind Turbines, Rising Sun & Horizon
// =========================================================================
export function RiseGraphic() {
  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[260px] h-[90px] sm:h-[110px]">
      <svg
        viewBox="0 0 280 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Soft Background Disc */}
        <circle cx="160" cy="50" r="42" fill="#F4EFE6" opacity="0.85" />

        {/* Solid Orange Rising Sun */}
        <path d="M 132 82 A 24 24 0 0 1 180 82 Z" fill="#EB5725" />

        {/* Horizon Baseline & Gentle Hills */}
        <line x1="25" y1="82" x2="250" y2="82" stroke="#121212" strokeWidth="1" />
        <path d="M 138 82 Q 185 68 240 80" stroke="#121212" strokeWidth="0.9" fill="none" />

        {/* Wind Turbine 1 */}
        <g transform="translate(60, 82)">
          <line x1="0" y1="0" x2="0" y2="-44" stroke="#121212" strokeWidth="1.2" />
          <path d="M 0 -44 L -8 -58" stroke="#121212" strokeWidth="1" />
          <path d="M 0 -44 L 8 -58" stroke="#121212" strokeWidth="1" />
          <path d="M 0 -44 L 0 -32" stroke="#121212" strokeWidth="1" />
        </g>

        {/* Wind Turbine 2 (Smaller) */}
        <g transform="translate(82, 82)">
          <line x1="0" y1="0" x2="0" y2="-30" stroke="#52525B" strokeWidth="1" />
          <path d="M 0 -30 L -6 -40" stroke="#52525B" strokeWidth="0.8" />
          <path d="M 0 -30 L 6 -40" stroke="#52525B" strokeWidth="0.8" />
        </g>

        {/* Flying Birds */}
        <path d="M 190 32 Q 193 29 196 32 Q 199 29 202 32" stroke="#52525B" strokeWidth="0.8" fill="none" />
        <path d="M 205 42 Q 207 40 209 42 Q 211 40 213 42" stroke="#52525B" strokeWidth="0.7" fill="none" />
      </svg>
    </div>
  );
}

// =========================================================================
// 4. LEAP: Ascending Stairs & Horizon Node
// =========================================================================
export function LeapGraphic() {
  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[260px] h-[90px] sm:h-[110px]">
      <svg
        viewBox="0 0 280 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Soft Background Disc */}
        <circle cx="120" cy="55" r="32" fill="#F4EFE6" opacity="0.85" />

        {/* Ground Baseline */}
        <line x1="80" y1="88" x2="110" y2="88" stroke="#121212" strokeWidth="1.2" />

        {/* Ascending Steps */}
        <path
          d="M 110 88 L 110 74 L 140 74 L 140 60 L 170 60 L 170 46 L 200 46 L 200 32 L 225 32"
          stroke="#121212"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Top Orange Node */}
        <circle cx="225" cy="32" r="4" fill="#EB5725" />
      </svg>
    </div>
  );
}
