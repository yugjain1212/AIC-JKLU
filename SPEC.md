# AIC-JKLU Incubation Center Landing Page - Specification

## 1. Project Overview

- **Project Name:** AIC-JKLU Landing Page
- **Type:** Marketing Website / Landing Page
- **Core Functionality:** Editorial, high-trust landing page to drive cohort applications and showcase portfolio startups
- **Target Users:** Aspiring entrepreneurs, startup founders, potential mentors, and investors

---

## 2. UI/UX Specification

### Layout Structure

- **Header:** Sticky navigation bar (72px height)
- **Hero:** Centered content with status pill, headline, subtext, and action buttons
- **Metrics Bar:** 4-column horizontal statistics strip
- **Portfolio Grid:** 3-column card grid showcasing featured startups
- **Footer CTA:** Promotional banner with application call-to-action
- **Responsive Breakpoints:**
  - Mobile: < 768px (1 column layouts)
  - Tablet: 768px - 1024px (2 column grids)
  - Desktop: > 1024px (full layouts)

### Visual Design

#### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| canvas | `#FBFBFA` | Page background |
| surface | `#FFFFFF` | Card backgrounds |
| obsidian | `#121212` | Primary text |
| slateMuted | `#52525B` | Secondary text |
| hairline | `#E4E4E0` | Borders |
| brand | `#EB5725` | Primary accent (Jaipur Orange) |
| brandHover | `#C84214` | Accent hover state |
| brandTint | `#FFF2ED` | Accent background tint |

#### Typography
| Element | Font | Size | Weight | Style |
|---------|------|------|--------|-------|
| Hero Headline | Marcellus | 52-56px | 400 | Serif, tracking-tight |
| Section Titles | Marcellus | 32px | 400 | Serif |
| Card Names | Marcellus | 20px | 400 | Serif |
| Metric Numbers | Marcellus | 36px | 400 | Serif |
| Nav Links | Roboto Mono | 13-14px | 400 | Monospace, uppercase |
| Status Badges | Roboto Mono | 11px | 500 | Monospace, uppercase |
| Metric Labels | Roboto Mono | 11px | 500 | Monospace, uppercase |
| Body Text | Inter | 14-18px | 400 | Sans-serif |
| Buttons | Roboto Mono | 14px | 700 | Monospace |

#### Spacing System
- Section vertical padding: 80px
- Card padding: 24px
- Grid gaps: 24px
- Standard margins: 16px, 24px, 32px

#### Visual Effects
- Card hover: border color transitions to `slate-400`
- Button hover: brand color darkens to `#C84214`
- Subtle transitions: 200ms ease-out
- No heavy shadows, no gradients, no decorative blurs

### Components

#### Navbar
- Sticky positioning (`sticky top-0`)
- White background with 1px bottom border
- Logo: "AIC-JKLU" in Marcellus (20px, bold)
- Navigation: Programs, Portfolio, Mentors, Events, About
- CTA Button: "Apply Now →" with brand background

#### Hero Section
- Status pill: `[ APPLICATIONS OPEN FOR COHORT 2026 ]` on brandTint
- Headline: "Backing Visionary Founders Building the Future from Jaipur."
- Subtext: Description about NITI Aayog support and benefits
- Two buttons: Primary (Apply) and Secondary (Explore Startups)

#### Metrics Bar
- 4 columns with statistics
- White background with top/bottom hairline borders
- Metrics: 50+ Startups, ₹25Cr+ Funding, 100+ Mentors, 85% Survival Rate

#### Portfolio Grid
- Section title: "Featured Portfolio"
- 3-column grid (desktop)
- Cards containing:
  - Startup name (Marcellus)
  - Sector badge (e.g., [ AI / DEEPTECH ])
  - Description (Inter)
  - Batch tag and website link

#### Footer CTA
- Peach background (#FFF2ED) with brand border
- Headline: "Turn Your Innovation Into a Scalable Venture"
- Button: "Start Your Application"

---

## 3. Functionality Specification

### Core Features
1. Responsive navigation with mobile-friendly layout
2. Hero section with clear call-to-action
3. Statistics display with key metrics
4. Portfolio directory showcasing 6 sample startups
5. Footer with application CTA

### User Interactions
- Navigation links (placeholder hrefs)
- Primary/Secondary button interactions
- Card hover states
- Smooth scrolling behavior

### Data Handling
- Static content (no dynamic data fetching)
- Sample portfolio startup data embedded in component

---

## 4. Acceptance Criteria

- [ ] Project initializes with Next.js App Router + TypeScript + Tailwind CSS
- [ ] All fonts (Marcellus, Roboto Mono, Inter) load correctly via next/font/google
- [ ] Custom Tailwind colors are properly configured and usable
- [ ] Navbar is sticky, 72px height, with proper styling
- [ ] Hero section displays status pill, headline, subtext, and buttons
- [ ] Metrics Bar shows 4 statistics in horizontal grid
- [ ] Portfolio Grid displays 6 startup cards in 3-column layout
- [ ] Footer CTA displays promotional banner with button
- [ ] All responsive breakpoints work correctly (mobile collapses to 1-column)
- [ ] No console errors or build failures
- [ ] Page loads with correct background (#FBFBFA) and text (#121212)