'use client';

import { motion } from 'framer-motion';

// =========================================================================
// VECTOR ART 1: Rotating Wind Turbines & Shimmering Solar Panels
// =========================================================================
function RenewableEnergyIllustration() {
  return (
    <div className="relative w-full h-[155px] sm:h-[175px] flex items-end justify-center select-none">
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain object-bottom overflow-visible"
      >
        <defs>
          {/* Solar Panel Shimmer Gradient */}
          <linearGradient id="solarGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#EB5725" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ground Terrain Lines */}
        <path d="M 10 145 Q 160 140 310 145" stroke="#121212" strokeWidth="0.8" opacity="0.4" />
        <path d="M 30 152 Q 170 148 290 152" stroke="#121212" strokeWidth="0.6" opacity="0.25" />

        {/* ── WIND TURBINE 1 (Left Tall Primary) ── */}
        <g stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {/* Tapered Mast */}
          <polygon points="59,145 61,42 63,42 65,145" fill="#FAF7F0" stroke="#121212" strokeWidth="1.1" />
          <line x1="60" y1="90" x2="64" y2="90" strokeWidth="0.8" />
          
          {/* Nacelle Generator Housing */}
          <rect x="58" y="38" width="10" height="7" rx="2" fill="#121212" />
          
          {/* 3 Rotating Blades Group */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '62px 41px' }}
          >
            {/* Center Hub */}
            <circle cx="62" cy="41" r="3" fill="#EB5725" stroke="#121212" strokeWidth="1" />
            {/* Blade 1 */}
            <path d="M 62 41 C 60 25 58 10 62 4 C 66 10 64 25 62 41 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="1.1" />
            {/* Blade 2 */}
            <path d="M 62 41 C 48 50 35 60 30 57 C 35 52 48 46 62 41 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="1.1" />
            {/* Blade 3 */}
            <path d="M 62 41 C 76 50 89 60 94 57 C 89 52 76 46 62 41 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="1.1" />
          </motion.g>
        </g>

        {/* ── WIND TURBINE 2 (Mid-Left Medium) ── */}
        <g stroke="#121212" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          {/* Mast */}
          <polygon points="110,145 111.5,60 113.5,60 115,145" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
          <rect x="109" y="57" width="8" height="6" rx="1.5" fill="#121212" />

          {/* 3 Rotating Blades Group */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '112.5px 60px' }}
          >
            <circle cx="112.5" cy="60" r="2.5" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />
            <path d="M 112.5 60 C 110.5 45 109 32 112.5 28 C 116 32 114.5 45 112.5 60 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
            <path d="M 112.5 60 C 100 68 89 77 85 74 C 89 70 100 64 112.5 60 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
            <path d="M 112.5 60 C 125 68 136 77 140 74 C 136 70 125 64 112.5 60 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
          </motion.g>
        </g>

        {/* ── WIND TURBINE 3 (Distant Right Subtle) ── */}
        <g stroke="#121212" strokeWidth="0.75" strokeLinecap="round" opacity="0.6">
          <line x1="281" y1="145" x2="281" y2="76" strokeWidth="0.9" />
          <rect x="279" y="74" width="5" height="4" rx="1" fill="#121212" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '281px 76px' }}
          >
            <circle cx="281" cy="76" r="1.8" fill="#EB5725" />
            <line x1="281" y1="76" x2="281" y2="52" strokeWidth="0.9" stroke="#121212" />
            <line x1="281" y1="76" x2="260" y2="88" strokeWidth="0.9" stroke="#121212" />
            <line x1="281" y1="76" x2="302" y2="88" strokeWidth="0.9" stroke="#121212" />
          </motion.g>
        </g>

        {/* ── GROUND SOLAR PHOTOVOLTAIC PANELS (Tilted Angled Array) ── */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinejoin="round" fill="#FAF7F0">
          {/* Main Solar Array Bank */}
          <polygon points="70,140 145,115 220,115 155,142" fill="#FAF7F0" />
          
          {/* Solar Panel Cells Grid */}
          <line x1="105" y1="128" x2="188" y2="128" strokeWidth="0.8" stroke="#52525B" />
          <line x1="90" y1="134" x2="170" y2="134" strokeWidth="0.8" stroke="#52525B" />
          <line x1="118" y1="123" x2="100" y2="141" strokeWidth="0.8" stroke="#52525B" />
          <line x1="148" y1="118" x2="125" y2="142" strokeWidth="0.8" stroke="#52525B" />
          <line x1="178" y1="116" x2="152" y2="142" strokeWidth="0.8" stroke="#52525B" />

          {/* Metal Mounting Legs */}
          <line x1="85" y1="138" x2="85" y2="146" strokeWidth="1.2" />
          <line x1="150" y1="141" x2="150" y2="147" strokeWidth="1.2" />
          <line x1="210" y1="116" x2="210" y2="144" strokeWidth="1" strokeDasharray="1 2" opacity="0.6" />

          {/* Secondary Foreground Array */}
          <polygon points="120,146 160,132 205,132 170,147" fill="#FAF7F0" />
          <line x1="140" y1="139" x2="187" y2="139" strokeWidth="0.7" stroke="#52525B" />
          <line x1="146" y1="136" x2="137" y2="147" strokeWidth="0.7" stroke="#52525B" />
          <line x1="175" y1="133" x2="162" y2="147" strokeWidth="0.7" stroke="#52525B" />

          {/* Animated Solar Energy Shimmer Pulse */}
          <motion.polygon
            points="70,140 145,115 220,115 155,142"
            fill="url(#solarGlint)"
            stroke="none"
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* ── Rural Village Hut & Transmission Wire ── */}
        <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FAF7F0">
          <polygon points="230,128 250,114 270,128" />
          <rect x="234" y="128" width="32" height="17" />
          <rect x="246" y="133" width="8" height="12" fill="#121212" />
        </g>

        {/* Power Line connecting Solar to Hut with Energy Pulse */}
        <path d="M 190 135 Q 210 138 234 135" stroke="#EB5725" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.8" />
        <motion.circle
          cx="190"
          cy="135"
          r="2"
          fill="#EB5725"
          animate={{ cx: [190, 210, 234], cy: [135, 138, 135], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle Foliage Sketch */}
        <g stroke="#71717A" strokeWidth="0.7" opacity="0.6">
          <circle cx="225" cy="140" r="4" fill="#FAF7F0" />
          <circle cx="275" cy="142" r="3.5" fill="#FAF7F0" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR ART 2: Dynamically Moving Agricultural Tractor & Wind-Blown Trees
// =========================================================================
function SustainableGrowthIllustration() {
  return (
    <div className="relative w-full h-[155px] sm:h-[175px] flex items-end justify-center select-none overflow-hidden">
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain object-bottom overflow-visible"
      >
        {/* Furrow Field Lines (Agricultural Contour Perspective with moving ground pulses) */}
        <g stroke="#121212" strokeWidth="0.8" opacity="0.4">
          <line x1="20" y1="148" x2="300" y2="148" />
          <line x1="10" y1="152" x2="130" y2="152" strokeDasharray="4 4" />
          <line x1="180" y1="152" x2="310" y2="152" strokeDasharray="4 4" />
          <line x1="40" y1="144" x2="110" y2="144" strokeDasharray="2 3" />
          <line x1="200" y1="144" x2="280" y2="144" strokeDasharray="2 3" />
        </g>

        {/* ── Rural Trees with Wind Sway (Right Side) ── */}
        <motion.g
          animate={{ rotate: [-1.2, 1.2, -1.2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '260px 148px' }}
          stroke="#121212"
          strokeWidth="0.9"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          {/* Main Tree Trunk */}
          <path d="M 260 148 L 260 115" strokeWidth="1.3" />
          <path d="M 260 128 L 250 120" strokeWidth="1" />
          <path d="M 260 124 L 268 118" strokeWidth="1" />
          {/* Foliage Clusters */}
          <circle cx="260" cy="100" r="16" />
          <circle cx="248" cy="105" r="13" />
          <circle cx="272" cy="105" r="13" />
          <circle cx="260" cy="88" r="12" />
          {/* Internal Sketch Texture */}
          <path d="M 252 98 Q 260 92 268 98" stroke="#71717A" strokeWidth="0.7" fill="none" />
          <path d="M 245 108 Q 255 104 265 108" stroke="#71717A" strokeWidth="0.7" fill="none" />
        </motion.g>

        {/* Smaller Background Tree */}
        <motion.g
          animate={{ rotate: [1, -1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '225px 148px' }}
          stroke="#121212"
          strokeWidth="0.8"
          fill="#FAF7F0"
          opacity="0.75"
        >
          <path d="M 225 148 L 225 125" strokeWidth="1" />
          <circle cx="225" cy="115" r="12" />
          <circle cx="218" cy="118" r="9" />
        </motion.g>


        {/* ── DYNAMICALLY MOVING TRACTOR GROUP ── */}
        <motion.g
          animate={{
            x: [-18, 22, -18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Subtle Engine Chassis Rumble Vibration */}
          <motion.g
            animate={{
              y: [0, -1, 0, -0.6, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            stroke="#121212"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#FAF7F0"
          >
            {/* ── Exhaust Smoke Puffs ── */}
            <motion.circle
              cx="160"
              cy="104"
              r="2.5"
              fill="#D8D2C6"
              stroke="#71717A"
              strokeWidth="0.6"
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, -14, -22],
                x: [0, -6, -14],
                scale: [0.5, 1.2, 1.8],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.circle
              cx="160"
              cy="104"
              r="2"
              fill="#D8D2C6"
              stroke="#71717A"
              strokeWidth="0.6"
              animate={{
                opacity: [0, 0.7, 0],
                y: [0, -12, -18],
                x: [0, -4, -10],
                scale: [0.4, 1.0, 1.5],
              }}
              transition={{
                duration: 1.6,
                delay: 0.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Tractor Engine Hood & Body */}
            <path d="M 136 136 L 168 136 L 168 120 L 144 120 Z" fill="#FAF7F0" />
            {/* Engine Grille Lines */}
            <line x1="168" y1="122" x2="168" y2="134" strokeWidth="1.6" stroke="#EB5725" />
            <line x1="158" y1="126" x2="164" y2="126" strokeWidth="0.8" stroke="#71717A" />
            <line x1="158" y1="130" x2="164" y2="130" strokeWidth="0.8" stroke="#71717A" />

            {/* Exhaust Chimney Pipe */}
            <line x1="160" y1="120" x2="160" y2="106" strokeWidth="1.5" stroke="#121212" />
            <path d="M 160 106 Q 163 103 166 105" strokeWidth="1.3" fill="none" />

            {/* Driver Roll Cage Frame */}
            <path d="M 122 135 L 118 106 L 142 106 L 144 120" fill="none" strokeWidth="1.3" />
            <line x1="116" y1="106" x2="144" y2="106" strokeWidth="1.6" />
            {/* Steering Wheel & Column */}
            <line x1="140" y1="118" x2="135" y2="112" strokeWidth="1.4" />
            <line x1="133" y1="110" x2="137" y2="114" strokeWidth="1.6" stroke="#121212" />
            {/* Driver Seat */}
            <path d="M 124 126 L 132 126 L 132 120" strokeWidth="1.6" fill="none" />
          </motion.g>

          {/* ── ROTATING REAR WHEEL ── */}
          <g stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="#FAF7F0">
            {/* Static Outer Tire Rim */}
            <circle cx="128" cy="138" r="15" fill="#FAF7F0" />
            
            {/* Rotating Tire Spoke Hub */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '128px 138px' }}
            >
              <circle cx="128" cy="138" r="9" strokeWidth="0.9" stroke="#71717A" fill="#FAF7F0" />
              {/* Wheel Spokes */}
              <line x1="128" y1="123" x2="128" y2="153" strokeWidth="1" />
              <line x1="113" y1="138" x2="143" y2="138" strokeWidth="1" />
              <line x1="117" y1="127" x2="139" y2="149" strokeWidth="1" />
              <line x1="117" y1="149" x2="139" y2="127" strokeWidth="1" />
              {/* Center Axle Cap */}
              <circle cx="128" cy="138" r="3.5" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />
            </motion.g>
          </g>

          {/* ── ROTATING FRONT WHEEL ── */}
          <g stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="#FAF7F0">
            <circle cx="166" cy="142" r="9" fill="#FAF7F0" />
            
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '166px 142px' }}
            >
              <circle cx="166" cy="142" r="5" strokeWidth="0.8" stroke="#71717A" fill="#FAF7F0" />
              <line x1="166" y1="133" x2="166" y2="151" strokeWidth="0.9" />
              <line x1="157" y1="142" x2="175" y2="142" strokeWidth="0.9" />
              <line x1="160" y1="136" x2="172" y2="148" strokeWidth="0.9" />
              <line x1="160" y1="148" x2="172" y2="136" strokeWidth="0.9" />
              <circle cx="166" cy="142" r="2.5" fill="#EB5725" stroke="#121212" strokeWidth="0.7" />
            </motion.g>
          </g>
        </motion.g>

      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR ART 3: Broadcast Pulse Waves & Solar Comm Tower with Village
// =========================================================================
function SocialInclusionIllustration() {
  return (
    <div className="relative w-full h-[155px] sm:h-[175px] flex items-end justify-center select-none">
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain object-bottom overflow-visible"
      >
        {/* Ground Line */}
        <line x1="10" y1="148" x2="310" y2="148" stroke="#121212" strokeWidth="0.8" opacity="0.4" />

        {/* ── TALL SOLAR-POWERED WATER / COMM TOWER (Right) ── */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="#FAF7F0">
          {/* Tower 4 Legs */}
          <line x1="228" y1="148" x2="236" y2="80" strokeWidth="1.3" />
          <line x1="256" y1="148" x2="248" y2="80" strokeWidth="1.3" />
          
          {/* Lattice X Bracing */}
          <line x1="230" y1="135" x2="254" y2="115" strokeWidth="0.8" />
          <line x1="254" y1="135" x2="230" y2="115" strokeWidth="0.8" />
          <line x1="234" y1="115" x2="250" y2="95" strokeWidth="0.8" />
          <line x1="250" y1="115" x2="234" y2="95" strokeWidth="0.8" />
          <line x1="232" y1="115" x2="252" y2="115" strokeWidth="1.2" />
          <line x1="235" y1="95" x2="249" y2="95" strokeWidth="1.2" />

          {/* Water Storage Tank / Equipment Housing */}
          <rect x="232" y="65" width="20" height="15" rx="2" fill="#FAF7F0" />
          <line x1="232" y1="72" x2="252" y2="72" strokeWidth="0.8" stroke="#52525B" />

          {/* Antenna Mast on Top */}
          <line x1="242" y1="42" x2="242" y2="30" strokeWidth="1.4" stroke="#121212" />
          <circle cx="242" cy="30" r="2.5" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />

          {/* Solar Panel Canopy on Top of Tower */}
          <polygon points="218,52 266,42 272,48 224,58" fill="#FAF7F0" />
          {/* Panel Cell Grids */}
          <line x1="228" y1="50" x2="234" y2="56" strokeWidth="0.7" stroke="#52525B" />
          <line x1="240" y1="47" x2="246" y2="53" strokeWidth="0.7" stroke="#52525B" />
          <line x1="252" y1="44" x2="258" y2="50" strokeWidth="0.7" stroke="#52525B" />
          <line x1="221" y1="55" x2="269" y2="45" strokeWidth="0.7" stroke="#52525B" />
        </g>

        {/* ── ANIMATED BROADCAST WAVES / CONNECTIVITY PULSES FROM ANTENNA ── */}
        <motion.path
          d="M 234 26 Q 242 20 250 26"
          stroke="#EB5725"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.4, 2],
            y: [0, -4, -8],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '242px 26px' }}
        />
        <motion.path
          d="M 230 22 Q 242 14 254 22"
          stroke="#EB5725"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.9, 1.6, 2.4],
            y: [0, -6, -12],
          }}
          transition={{
            duration: 2.2,
            delay: 0.6,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: '242px 22px' }}
        />

        {/* ── RURAL VILLAGE HOMES (Left & Center) ── */}
        <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FAF7F0">
          {/* House 1 (Left Traditional Hut) */}
          <polygon points="90,132 108,118 126,132" />
          <rect x="94" y="132" width="28" height="16" />
          <rect x="104" y="136" width="7" height="12" fill="#121212" />

          {/* House 2 (Center Brick/Clay Home with Rooftop Solar Panel) */}
          <polygon points="126,130 148,114 170,130" />
          <rect x="130" y="130" width="36" height="18" />
          <rect x="144" y="135" width="8" height="13" fill="#121212" />
          <rect x="133" y="134" width="6" height="6" fill="#121212" opacity="0.4" />
          <rect x="156" y="134" width="6" height="6" fill="#121212" opacity="0.4" />
          
          {/* Rooftop Mini Solar Module */}
          <polygon points="135,124 155,118 162,122 142,128" fill="#FAF7F0" stroke="#EB5725" strokeWidth="0.8" />

          {/* House 3 (Attached Outbuilding) */}
          <polygon points="170,133 186,120 202,133" />
          <rect x="172" y="133" width="28" height="15" />
          <rect x="182" y="137" width="7" height="11" fill="#121212" />

          {/* Small Hut Near Tower */}
          <polygon points="202,136 216,126 230,136" />
          <rect x="204" y="136" width="22" height="12" />
        </g>

        {/* ── Connected Power / Telecom Wire with Animated Flow ── */}
        <path d="M 148 114 Q 190 100 236 80" stroke="#121212" strokeWidth="0.8" strokeDasharray="2 3" fill="none" opacity="0.6" />
        <motion.circle
          cx="236"
          cy="80"
          r="1.8"
          fill="#EB5725"
          animate={{ cx: [236, 190, 148], cy: [80, 100, 114], opacity: [0, 1, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Trees & Rural Foliage with Gentle Wind Sway ── */}
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '70px 148px' }}
          stroke="#71717A"
          strokeWidth="0.8"
          fill="#FAF7F0"
          opacity="0.8"
        >
          <circle cx="70" cy="130" r="10" />
          <circle cx="80" cy="132" r="8" />
          <circle cx="62" cy="135" r="7" />
          <line x1="70" y1="140" x2="70" y2="148" stroke="#121212" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
}

export default function RisePillars() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        {/* ── Eyebrow Tag ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <span className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
            OUR PILLARS
          </span>
          <div className="w-10 h-[1.5px] bg-[#EB5725]" />
        </motion.div>

        {/* ── 3-Column Editorial Grid with Vertical Dividers ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">
          
          {/* ── COLUMN 01: Renewable Energy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between md:pr-8 lg:pr-12 md:border-r md:border-[#E4E4E0]"
          >
            <div>
              <span className="font-marcellus text-[58px] sm:text-[68px] lg:text-[76px] leading-none text-[#121212] tracking-[-0.03em] block mb-3">
                01
              </span>
              <h3 className="font-robotoMono text-[13px] sm:text-[13.5px] font-bold text-[#121212] tracking-[0.14em] uppercase mb-3 leading-snug">
                RENEWABLE
                <br />
                ENERGY
              </h3>
              <p className="font-robotoMono text-[12px] sm:text-[12.5px] text-[#71717A] leading-[1.8] max-w-[280px] mb-8">
                Catalyzing ventures that develop durable solar, wind, and bio-energy technologies specifically tailored to power rural landscapes.
              </p>
            </div>

            {/* Dynamic Rotating Wind Turbine & Shimmering Solar Illustration */}
            <div className="pt-4">
              <RenewableEnergyIllustration />
            </div>
          </motion.div>

          {/* ── COLUMN 02: Sustainable Growth ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between md:px-8 lg:px-12 md:border-r md:border-[#E4E4E0]"
          >
            <div>
              <span className="font-marcellus text-[58px] sm:text-[68px] lg:text-[76px] leading-none text-[#121212] tracking-[-0.03em] block mb-3">
                02
              </span>
              <h3 className="font-robotoMono text-[13px] sm:text-[13.5px] font-bold text-[#121212] tracking-[0.14em] uppercase mb-3 leading-snug">
                SUSTAINABLE
                <br />
                GROWTH
              </h3>
              <p className="font-robotoMono text-[12px] sm:text-[12.5px] text-[#71717A] leading-[1.8] max-w-[280px] mb-8">
                Supporting green technologies that empower agriculture practices and reduce the carbon footprint in rural territories.
              </p>
            </div>

            {/* Dynamic Moving Tractor & Swaying Trees Illustration */}
            <div className="pt-4">
              <SustainableGrowthIllustration />
            </div>
          </motion.div>

          {/* ── COLUMN 03: Social Inclusion ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between md:pl-8 lg:pl-12"
          >
            <div>
              <span className="font-marcellus text-[58px] sm:text-[68px] lg:text-[76px] leading-none text-[#121212] tracking-[-0.03em] block mb-3">
                03
              </span>
              <h3 className="font-robotoMono text-[13px] sm:text-[13.5px] font-bold text-[#121212] tracking-[0.14em] uppercase mb-3 leading-snug">
                SOCIAL
                <br />
                INCLUSION
              </h3>
              <p className="font-robotoMono text-[12px] sm:text-[12.5px] text-[#71717A] leading-[1.8] max-w-[280px] mb-8">
                Scaling micro-enterprises and creating livelihoods through the rollout of decentralized energy systems in off-grid regions.
              </p>
            </div>

            {/* Dynamic Broadcast Waves, Solar Comm Tower & Village Illustration */}
            <div className="pt-4">
              <SocialInclusionIllustration />
            </div>
          </motion.div>

        </div>

        {/* Bottom Left Crosshair */}
        <div className="mt-8 select-none font-mono text-[#EB5725] text-xs font-bold">
          +
        </div>

      </div>
    </section>
  );
}
