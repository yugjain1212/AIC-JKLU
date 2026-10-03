'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface SectionItem {
  id: string;
  title: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'journey', title: 'The Journey' },
  { id: 'what-founders-gain', title: 'What Founders Gain' },
  { id: 'beyond', title: 'Beyond Incubation' },
  { id: 'more-than-incubator', title: 'More Than an Incubator' },
];

export default function AboutPage() {
  const [activeId, setActiveId] = useState<string>('journey');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#121212]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Page Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {/* =========================================
            HERO HEADER
        ========================================== */}
        <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center sm:pt-20 sm:pb-16">
          <p className="mb-4 font-robotoMono text-xs font-semibold uppercase tracking-[0.25em] text-[#52525B]">
            About AIC JKLU
          </p>

          <h1 className="font-marcellus text-[40px] leading-[1.02] tracking-[-0.04em] sm:text-[54px] md:text-[64px] text-[#121212]">
            From Idea
            <br />
            <span className="font-normal text-[#EB5725]">to Impact</span>
          </h1>

          <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-[#EB5725] opacity-80" />
        </section>

        {/* =========================================
            MOBILE HORIZONTAL SUB-NAV
        ========================================== */}
        <div className="sticky top-[82px] z-40 border-y border-[#E4E4E0] bg-[#FBF7F0]/95 backdrop-blur-md py-3 px-4 lg:hidden">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    whitespace-nowrap rounded-full px-4 py-1.5 font-robotoMono text-[10px] uppercase tracking-[0.1em] font-medium transition-all duration-200
                    ${
                      isActive
                        ? 'bg-[#EB5725] text-white shadow-sm'
                        : 'bg-white/80 text-[#52525B] border border-[#E4E4E0] hover:text-[#121212]'
                    }
                  `}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            TWO-COLUMN EDITORIAL LAYOUT
        ========================================== */}
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16 pb-28 pt-8 lg:pt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[290px_1fr] lg:gap-16 xl:gap-24">

            {/* ── LEFT SIDEBAR (Sticky Desktop Navigation) ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 self-start border-l border-[#E4E4E0] pl-5">
                <p className="mb-4 font-robotoMono text-[11px] font-bold uppercase tracking-[0.2em] text-[#52525B]">
                  On This Page
                </p>

                <nav className="space-y-1" aria-label="About section links">
                  {SECTIONS.map((section) => {
                    const isActive = activeId === section.id;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`
                          group relative flex w-full text-left font-robotoMono text-[11px] uppercase tracking-[0.1em] leading-snug py-2 transition-all duration-200 -ml-[21px] pl-5
                          ${
                            isActive
                              ? 'font-semibold text-[#EB5725] border-l-2 border-[#EB5725]'
                              : 'font-normal text-[#52525B] border-l-2 border-transparent hover:text-[#121212]'
                          }
                        `}
                      >
                        {section.title}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* ── RIGHT MAIN CONTENT ── */}
            <main className="min-w-0 max-w-3xl">

              {/* Introduction */}
              <div className="mb-14 space-y-6 text-[18px] sm:text-[19px] leading-[1.8] text-[#121212] font-normal border-b border-[#E4E4E0]/80 pb-12">
                <p>
                  Every startup begins with a problem worth solving. Turning that idea into a viable business, however, requires the right guidance, resources, and environment.
                </p>

                <p className="text-[#52525B]">
                  AIC JKLU supports entrepreneurs at different stages of their journey, helping them transform early ideas into validated products and build businesses prepared for long-term growth.
                </p>

                <p className="text-[#52525B]">
                  Through structured incubation, expert guidance, institutional resources, and access to the startup ecosystem, we help founders navigate the challenges of building a venture.
                </p>
              </div>

              {/* 1. The Journey */}
              <section id="journey" className="scroll-mt-32 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-8">
                  The Journey
                </h2>

                {/* Step 01 */}
                <div className="mb-10">
                  <h3 className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] mb-1">
                    01. Explore &amp; Validate
                  </h3>
                  <p className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.18em] text-[#EB5725] mb-4">
                    Turn an idea into an opportunity.
                  </p>
                  <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-4">
                    The first step is understanding the problem, identifying potential customers, and evaluating whether an idea has real market potential. AIC JKLU encourages founders to challenge assumptions, conduct market research, and identify opportunities before committing significant resources to development.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-robotoMono text-[13px] sm:text-[14px] text-[#121212]">
                    {['Problem identification and research', 'Customer discovery', 'Market analysis', 'Idea validation'].map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-lg border border-[#E4E4E0]/80 bg-white/60 p-3.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EB5725]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 02 */}
                <div className="mb-10">
                  <h3 className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] mb-1">
                    02. Build &amp; Develop
                  </h3>
                  <p className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.18em] text-[#EB5725] mb-4">
                    Transform concepts into tangible solutions.
                  </p>
                  <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-4">
                    Once an opportunity is identified, founders can focus on developing their solutions. AIC JKLU provides an environment that supports experimentation, product development, and early-stage execution.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-robotoMono text-[13px] sm:text-[14px] text-[#121212]">
                    {['Product and prototype development', 'Technical and business guidance', 'Access to relevant infrastructure', 'Iterative testing and improvement'].map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-lg border border-[#E4E4E0]/80 bg-white/60 p-3.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EB5725]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 03 */}
                <div className="mb-10">
                  <h3 className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] mb-1">
                    03. Incubate &amp; Strengthen
                  </h3>
                  <p className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.18em] text-[#EB5725] mb-4">
                    Build the foundations of a sustainable business.
                  </p>
                  <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-4">
                    Developing a product is only one part of building a startup. Founders also need a viable business model, an effective team, and a clear understanding of their market. Through incubation support and access to experienced mentors, startups can work on strengthening their operations and preparing for market entry.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-robotoMono text-[13px] sm:text-[14px] text-[#121212]">
                    {['Business model development', 'Mentorship and strategic guidance', 'Team and operational planning', 'Legal, financial, and IP awareness'].map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-lg border border-[#E4E4E0]/80 bg-white/60 p-3.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EB5725]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 04 */}
                <div className="mb-10">
                  <h3 className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] mb-1">
                    04. Launch &amp; Grow
                  </h3>
                  <p className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.18em] text-[#EB5725] mb-4">
                    Take your solution to the market.
                  </p>
                  <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-4">
                    Moving from development to market requires customer acquisition, effective positioning, and the ability to adapt to real-world feedback. AIC JKLU supports founders as they introduce their products, establish market presence, and identify opportunities for business development.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-robotoMono text-[13px] sm:text-[14px] text-[#121212]">
                    {['Go-to-market planning', 'Branding and market positioning', 'Customer acquisition strategies', 'Partnerships and business development'].map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-lg border border-[#E4E4E0]/80 bg-white/60 p-3.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EB5725]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 05 */}
                <div>
                  <h3 className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] mb-1">
                    05. Scale &amp; Expand
                  </h3>
                  <p className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.18em] text-[#EB5725] mb-4">
                    Prepare your venture for its next stage.
                  </p>
                  <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-4">
                    As startups gain traction, their priorities shift towards sustainable growth, stronger operations, and expanding their reach. AIC JKLU helps founders explore opportunities within the wider entrepreneurial ecosystem, including investor engagement, industry partnerships, and strategic collaborations.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-robotoMono text-[13px] sm:text-[14px] text-[#121212]">
                    {['Fundraising preparedness', 'Investor and industry connections', 'Business expansion strategies', 'Long-term growth planning'].map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-lg border border-[#E4E4E0]/80 bg-white/60 p-3.5">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EB5725]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 2. What Founders Gain */}
              <section id="what-founders-gain" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-8">
                  What Founders Gain
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      title: 'Expert Mentorship',
                      body: 'Access guidance from entrepreneurs, industry professionals, subject-matter experts, and mentors who can help founders navigate business, technical, and operational challenges.',
                    },
                    {
                      title: 'Incubation Infrastructure',
                      body: 'An environment supported by institutional resources, workspaces, and relevant facilities to help startups develop and operate their ventures.',
                    },
                    {
                      title: 'Learning & Development',
                      body: 'Workshops, bootcamps, expert sessions, and practical learning experiences covering entrepreneurship, technology, business strategy, finance, and leadership.',
                    },
                    {
                      title: 'Industry & Ecosystem Access',
                      body: 'Opportunities to engage with businesses, ecosystem partners, potential collaborators, and professionals who can provide industry insights and open new avenues for growth.',
                    },
                    {
                      title: 'Funding Readiness',
                      body: 'Guidance on fundraising strategies, pitch preparation, financial planning, and exploring relevant funding opportunities within the startup ecosystem.',
                    },
                    {
                      title: 'Entrepreneurial Community',
                      body: 'A collaborative environment where founders can exchange ideas, share experiences, find potential collaborators, and learn from the journeys of other entrepreneurs.',
                    },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-5 sm:gap-7">
                      <div className="shrink-0 mt-1">
                        <span className="font-robotoMono text-[11px] font-bold text-[#EB5725] uppercase tracking-[0.18em]">
                          0{i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] mb-2">
                          {item.title}
                        </h3>
                        <p className="font-robotoMono text-[14px] sm:text-[15px] leading-[1.75] text-[#52525B]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Beyond the Incubation Period */}
              <section id="beyond" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Beyond the Incubation Period
                </h2>

                <p className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.18em] text-[#EB5725] mb-5">
                  Building relationships that go further.
                </p>

                <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-5">
                  A startup&apos;s growth journey continues beyond its initial incubation. As ventures mature, AIC JKLU aims to maintain meaningful engagement through continued connections, collaborations, and participation in the broader entrepreneurial ecosystem.
                </p>

                <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B]">
                  The focus is on fostering lasting relationships that create opportunities for founders, alumni ventures, and the startup community.
                </p>
              </section>

              {/* 4. More Than an Incubator */}
              <section id="more-than-incubator" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-8">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  More Than an Incubator
                </h2>

                <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU brings together ideas, people, knowledge, and opportunities to create an environment where entrepreneurship can thrive.
                </p>

                <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] mb-10">
                  Whether founders are exploring a problem, developing their first product, or preparing for expansion, the aim is to provide relevant support at every stage of their journey.
                </p>

                <p className="font-robotoMono text-[16px] sm:text-[18px] leading-[1.75] text-[#121212] font-medium">
                  Your idea is the beginning.{' '}
                  <strong className="text-[#EB5725] font-semibold">
                    What you build with it is the journey.
                  </strong>
                </p>
              </section>

            </main>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
