'use client';

// =========================================================================
// 1. ACCELERATOR PROGRAM ILLUSTRATION (Bar Chart & Launching Rocket)
// =========================================================================
export function AcceleratorIllustration() {
  return (
    <div className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px] overflow-visible"
      >
        {/* Soft Circular Glow Background */}
        <circle cx="160" cy="110" r="75" fill="#F4EFE6" opacity="0.75" />
        <circle cx="110" cy="80" r="18" fill="#EAE2D4" opacity="0.6" />

        {/* Trajectory Dotted Arc */}
        <path
          d="M 50 160 Q 140 130 220 50"
          stroke="#D6CEBF"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
        />

        {/* Ground Baseline */}
        <line x1="40" y1="165" x2="270" y2="165" stroke="#D6CEBF" strokeWidth="1" />

        {/* 4 Ascending Steps / Bar Charts */}
        {/* Bar 1 */}
        <rect x="90" y="145" width="24" height="20" rx="1" fill="#E6DFD3" stroke="#D1C7B7" strokeWidth="1" />
        {/* Bar 2 */}
        <rect x="118" y="125" width="24" height="40" rx="1" fill="#DDD5C6" stroke="#C8BEAC" strokeWidth="1" />
        {/* Bar 3 */}
        <rect x="146" y="100" width="24" height="65" rx="1" fill="#D2C8B7" stroke="#BEB3A0" strokeWidth="1" />
        {/* Bar 4 (Orange High Bar) */}
        <rect x="174" y="70" width="24" height="95" rx="1" fill="#EB5725" stroke="#C84214" strokeWidth="1" />

        {/* Animated Launching Rocket Group */}
        <g>
          <g transform="translate(210, 34)">
            {/* Rocket Thruster Flame with Flicker */}
            <g transform="translate(-4, 30) rotate(42)">
              <path d="M 0 0 L -6 18 L 6 12 Z" fill="#EB5725">
                <animate
                  attributeName="opacity"
                  values="0.85;1;0.7;0.95;0.85"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 0 0 L -3 12 L 3 8 Z" fill="#FDBA74">
                <animate
                  attributeName="opacity"
                  values="1;0.7;1;0.8;1"
                  dur="0.4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Rocket Fuselage */}
            <g transform="rotate(42)">
              {/* Fins */}
              <path d="M -7 20 L -12 28 L -4 26 Z" fill="#C84214" />
              <path d="M 7 20 L 12 28 L 4 26 Z" fill="#C84214" />
              {/* Main Body */}
              <path
                d="M 0 0 C 8 8 7 24 6 28 L -6 28 C -7 24 -8 8 0 0 Z"
                fill="#EB5725"
              />
              {/* Tip */}
              <path d="M 0 0 C 4 4 4 9 0 11 C -4 9 -4 4 0 0 Z" fill="#FFFFFF" />
              {/* Window */}
              <circle cx="0" cy="14" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Smooth Floating Glide */}
            <animateTransform
              attributeName="transform"
              type="translate"
              values="210 34; 214 28; 210 34"
              dur="3s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Speed Lines */}
        <line x1="202" y1="78" x2="194" y2="90" stroke="#EB5725" strokeWidth="1" opacity="0.6" />
        <line x1="208" y1="84" x2="202" y2="94" stroke="#EB5725" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
}

// =========================================================================
// 2. INCUBATION PROGRAM ILLUSTRATION (Isometric Transparent & Solid Cube)
// =========================================================================
export function IncubationIllustration() {
  return (
    <div className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px] overflow-visible"
      >
        {/* Soft Background Disc */}
        <circle cx="160" cy="100" r="70" fill="#F4EFE6" opacity="0.75" />

        {/* Orbital Axis Lines & Nodes */}
        <ellipse
          cx="160"
          cy="96"
          rx="95"
          ry="38"
          stroke="#D8CFBF"
          strokeWidth="1"
          strokeDasharray="2 3"
          transform="rotate(-15 160 96)"
        />
        
        {/* Pulsing Accent Nodes */}
        <circle cx="240" cy="68" r="3.5" fill="#EB5725">
          <animate attributeName="r" values="3;4.5;3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="282" cy="120" r="3.5" fill="#EB5725">
          <animate attributeName="r" values="3.5;4.8;3.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="88" r="2.5" fill="#52525B" opacity="0.5" />

        {/* Shadow Beneath Cube */}
        <ellipse cx="160" cy="154" rx="45" ry="12" fill="#D6CEBF" opacity="0.6" />

        {/* Isometric Wireframe Outer Cube */}
        <g transform="translate(160, 102)">
          {/* Back edges */}
          <path d="M 0 -44 L -42 -20 L -42 28 L 0 52 L 42 28 L 42 -20 Z" fill="#FAF6EE" stroke="#121212" strokeWidth="1.2" />
          
          {/* Inner Floating Orange Cube with Smooth Elevation Bob */}
          <g transform="translate(-14, -8)">
            {/* Top face */}
            <path d="M 0 -16 L 16 -7 L 0 2 L -16 -7 Z" fill="#FF7849" />
            {/* Left face */}
            <path d="M -16 -7 L 0 2 L 0 20 L -16 11 Z" fill="#EB5725" />
            {/* Right face */}
            <path d="M 0 2 L 16 -7 L 16 11 L 0 20 Z" fill="#C84214" />

            <animateTransform
              attributeName="transform"
              type="translate"
              values="-14 -8; -14 -14; -14 -8"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </g>

          {/* Transparent Outer Cube Facets & Inner Structure */}
          {/* Top Face */}
          <path d="M 0 -44 L 42 -20 L 0 4 L -42 -20 Z" fill="rgba(255,255,255,0.4)" stroke="#121212" strokeWidth="1.2" />
          {/* Front Center Line */}
          <path d="M 0 4 L 0 52" stroke="#121212" strokeWidth="1.2" />
          {/* Left / Right inner facets */}
          <path d="M -42 -20 L 0 4 L 0 52 L -42 28 Z" fill="rgba(255,255,255,0.2)" stroke="#121212" strokeWidth="1.2" />
          <path d="M 42 -20 L 0 4 L 0 52 L 42 28 Z" fill="rgba(255,255,255,0.3)" stroke="#121212" strokeWidth="1.2" />

          {/* Subtle accent cube inside right */}
          <path d="M 12 -4 L 24 2 L 24 16 L 12 10 Z" fill="#EB5725" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// 3. RISE PROGRAM ILLUSTRATION (Wind Turbines, Solar House & Orange Sun)
// =========================================================================
export function RiseIllustration() {
  return (
    <div className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px] overflow-visible"
      >
        {/* Soft Background Hills */}
        <path
          d="M 20 170 Q 90 140 170 155 Q 240 170 300 135 L 300 170 Z"
          fill="#EFE9DE"
          opacity="0.8"
        />
        <path
          d="M 50 170 Q 140 125 240 145 Q 280 155 310 140 L 310 170 Z"
          fill="#E5DDD0"
        />

        {/* Large Solid Orange Sun */}
        <circle cx="230" cy="65" r="24" fill="#EB5725" />

        {/* Flying Birds in Distance */}
        <path d="M 170 60 Q 174 57 178 60 Q 182 57 186 60" stroke="#52525B" strokeWidth="1" fill="none" />
        <path d="M 188 72 Q 191 70 194 72 Q 197 70 200 72" stroke="#52525B" strokeWidth="0.9" fill="none" />

        {/* Wind Turbine 1 (Tall Left) */}
        <g transform="translate(112, 165)">
          {/* Mast */}
          <line x1="0" y1="0" x2="0" y2="-90" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="0" cy="-90" r="2.5" fill="#121212" />
          
          {/* Blades with native centered SVG rotate */}
          <g>
            <path d="M 0 -90 Q -2 -116 0 -124 Q 2 -116 0 -90" fill="#121212" />
            <path d="M 0 -90 Q 22 -78 29 -74 Q 20 -70 0 -90" fill="#121212" />
            <path d="M 0 -90 Q -22 -78 -29 -74 Q -20 -70 0 -90" fill="#121212" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 -90"
              to="360 0 -90"
              dur="9s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Wind Turbine 2 (Smaller Mid-Left) */}
        <g transform="translate(72, 165)">
          <line x1="0" y1="0" x2="0" y2="-65" stroke="#52525B" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="0" cy="-65" r="2" fill="#52525B" />
          <g>
            <path d="M 0 -65 Q -1.5 -85 0 -92 Q 1.5 -85 0 -65" fill="#52525B" />
            <path d="M 0 -65 Q 16 -56 22 -53 Q 15 -50 0 -65" fill="#52525B" />
            <path d="M 0 -65 Q -16 -56 -22 -53 Q -15 -50 0 -65" fill="#52525B" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 -65"
              to="360 0 -65"
              dur="7.5s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Wind Turbine 3 (Mid-Right) */}
        <g transform="translate(148, 165)">
          <line x1="0" y1="0" x2="0" y2="-55" stroke="#52525B" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="0" cy="-55" r="1.8" fill="#52525B" />
          <g>
            <path d="M 0 -55 Q -1.2 -72 0 -78 Q 1.2 -72 0 -55" fill="#52525B" />
            <path d="M 0 -55 Q 14 -47 18 -45 Q 12 -42 0 -55" fill="#52525B" />
            <path d="M 0 -55 Q -14 -47 -18 -45 Q -12 -42 0 -55" fill="#52525B" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 -55"
              to="360 0 -55"
              dur="6.5s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Rural Solar Home */}
        <g transform="translate(175, 142)">
          {/* Base structure */}
          <rect x="0" y="8" width="36" height="20" fill="#EAE2D4" stroke="#121212" strokeWidth="1" />
          <rect x="14" y="16" width="7" height="12" fill="#D6CEBF" stroke="#121212" strokeWidth="0.8" />
          {/* Solar Roof */}
          <path d="M -4 8 L 18 -6 L 40 8 Z" fill="#52525B" stroke="#121212" strokeWidth="1" />
          {/* Solar grid lines */}
          <line x1="4" y1="4" x2="32" y2="4" stroke="#EB5725" strokeWidth="0.8" opacity="0.9" />
          <line x1="10" y1="0" x2="26" y2="0" stroke="#EB5725" strokeWidth="0.8" opacity="0.9" />
          <line x1="18" y1="-5" x2="18" y2="7" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.6" />
        </g>

        {/* Trees */}
        <circle cx="228" cy="158" r="4.5" fill="#88907A" />
        <line x1="228" y1="158" x2="228" y2="166" stroke="#121212" strokeWidth="1" />
        <circle cx="236" cy="159" r="3.5" fill="#757D68" />
        <line x1="236" y1="159" x2="236" y2="166" stroke="#121212" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

// =========================================================================
// 4. LEAP PROGRAM ILLUSTRATION (Ascending Staircase to Open Portal/Door)
// =========================================================================
export function LeapIllustration() {
  return (
    <div className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[190px] overflow-visible"
      >
        {/* Soft Circular Sun / Aura in Background */}
        <circle cx="240" cy="120" r="16" fill="#EAE2D4" opacity="0.7" />
        <circle cx="118" cy="100" r="3" fill="#D6CEBF" stroke="#52525B" strokeWidth="0.8" />

        {/* Orange Semi-circle Ground Shape */}
        <path
          d="M 76 142 A 28 28 0 0 1 132 142 Z"
          fill="#EB5725"
        />

        {/* Open Doorway / Portal at the top */}
        <g transform="translate(198, 48)">
          {/* Orange Door Frame */}
          <rect
            x="0"
            y="0"
            width="32"
            height="50"
            rx="1"
            fill="#FFFFFF"
            stroke="#EB5725"
            strokeWidth="1.8"
          />
          {/* Inner Light with gentle glow pulsation */}
          <rect
            x="3"
            y="3"
            width="26"
            height="47"
            fill="#FFF5F0"
          >
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          {/* Doorway threshold line */}
          <line x1="-8" y1="50" x2="40" y2="50" stroke="#121212" strokeWidth="1.2" />
        </g>

        {/* Ascending Perspective Staircase */}
        <g>
          {/* Top Step Platform */}
          <path d="M 180 98 L 244 98 L 244 112 L 180 112 Z" fill="#EFE9DE" stroke="#121212" strokeWidth="1.1" />
          
          {/* Step 4 */}
          <path d="M 166 112 L 230 112 L 230 124 L 166 124 Z" fill="#E8E1D4" stroke="#121212" strokeWidth="1.1" />
          
          {/* Step 3 */}
          <path d="M 152 124 L 216 124 L 216 136 L 152 136 Z" fill="#DFD7C8" stroke="#121212" strokeWidth="1.1" />
          
          {/* Step 2 */}
          <path d="M 138 136 L 202 136 L 202 148 L 138 148 Z" fill="#D7CEBD" stroke="#121212" strokeWidth="1.1" />
          
          {/* Step 1 (Bottom) */}
          <path d="M 124 148 L 188 148 L 188 160 L 124 160 Z" fill="#CFC4B1" stroke="#121212" strokeWidth="1.1" />

          {/* Stepped diagonal left contour line */}
          <path
            d="M 124 160 L 124 148 L 138 148 L 138 136 L 152 136 L 152 124 L 166 124 L 166 112 L 180 112 L 180 98"
            stroke="#121212"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* Architectural guidelines in background */}
        <line x1="244" y1="98" x2="260" y2="98" stroke="#D6CEBF" strokeWidth="0.8" strokeDasharray="2 2" />
        <circle cx="236" cy="105" r="1.5" fill="#121212" />
      </svg>
    </div>
  );
}
