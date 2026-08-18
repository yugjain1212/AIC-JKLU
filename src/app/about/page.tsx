'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface SectionItem {
  id: string;
  title: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'journey', title: 'The AIC JKLU Journey' },
  { id: 'mentorship', title: 'Mentorship & Guidance' },
  { id: 'incubation', title: 'Incubation Support' },
  { id: 'community', title: 'Startup Community' },
  { id: 'workshops', title: 'Workshops & Learning' },
  { id: 'industry', title: 'Industry Connections' },
  { id: 'funding', title: 'Funding & Investor Access' },
  { id: 'validation', title: 'Product & Market Validation' },
  { id: 'events', title: 'Events & Networking' },
  { id: 'showcase', title: 'Startup Showcase' },
  { id: 'beyond', title: 'Building Beyond Incubation' },
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
            What Happens at
            <br />
            <span className="non-italic font-normal text-[#EB5725]">AIC JKLU?</span>
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
                  People often ask us what happens when a startup joins AIC JKLU.
                  The answer is simple:{' '}
                  <strong className="font-semibold text-[#121212]">
                    we help founders turn ideas into scalable ventures.
                  </strong>
                </p>

                <p className="text-[#52525B]">
                  AIC JKLU provides startups with the ecosystem, mentorship,
                  resources, and connections they need to move from an
                  early-stage idea to a stronger, market-ready business.
                </p>

                <p className="text-[#52525B]">
                  Whether you are validating an idea, building your first
                  product, finding customers, or preparing to scale, AIC JKLU
                  works alongside you throughout your entrepreneurial journey.
                </p>
              </div>

              {/* 1. The AIC JKLU Journey */}
              <section id="journey" className="scroll-mt-32 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  The AIC JKLU Journey
                </h2>

                <h3 className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] mt-4 mb-4">
                  The Goal
                </h3>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  The goal of AIC JKLU is to help startups{' '}
                  <strong className="font-semibold text-[#121212]">
                    build, validate, grow, and scale
                  </strong>
                  .
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-6">
                  Startups enter the incubation ecosystem at different stages.
                  Some may have only an idea, while others may already have a
                  product, customers, or early traction.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  Wherever you begin, AIC JKLU aims to help you move
                  significantly forward by providing access to:
                </p>

                <ul className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-inter text-[15px] text-[#121212]">
                  {[
                    'Expert mentorship',
                    'Startup-focused guidance',
                    'Infrastructure & incubation support',
                    'Industry & ecosystem connections',
                    'Networking opportunities',
                    'Funding & investor connections',
                    'Market & business development support',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-[#E4E4E0]/80 bg-white/60 p-3.5"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EB5725]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mt-6">
                  The focus is not just on building a product, but on building a{' '}
                  <strong className="font-semibold text-[#121212]">
                    sustainable and scalable venture
                  </strong>
                  .
                </p>
              </section>

              {/* 2. Mentorship & Guidance */}
              <section id="mentorship" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Mentorship &amp; Guidance
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  One of the most valuable parts of the AIC JKLU ecosystem is
                  access to experienced mentors, entrepreneurs, industry
                  professionals, and subject-matter experts.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  Founders can seek guidance on areas such as:
                </p>

                <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-inter text-[14px]">
                  {[
                    'Product development',
                    'Business models',
                    'Market validation',
                    'Technology',
                    'Marketing & branding',
                    'Finance',
                    'Legal & compliance',
                    'Team building',
                    'Fundraising',
                    'Business growth',
                  ].map((area) => (
                    <div
                      key={area}
                      className="rounded-lg border border-[#E4E4E0]/80 bg-white/70 px-3.5 py-2.5 font-medium text-[#121212]"
                    >
                      {area}
                    </div>
                  ))}
                </div>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mt-5">
                  The objective is to help founders make better decisions and
                  avoid common mistakes during the early stages of their journey.
                </p>
              </section>

              {/* 3. Incubation Support */}
              <section id="incubation" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Incubation Support
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU provides an environment designed to help startups focus
                  on building their businesses.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  Depending on the startup&apos;s requirements, founders can get access
                  to incubation infrastructure, workspaces, institutional
                  resources, and other facilities that support their day-to-day
                  operations.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B]">
                  This allows founders to spend more time solving customer
                  problems and building their ventures.
                </p>
              </section>

              {/* 4. Startup Community */}
              <section id="community" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Startup Community
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  Building a startup can be challenging when you are doing it
                  alone.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  At AIC JKLU, founders become part of an entrepreneurial
                  ecosystem where they can interact with other startups,
                  entrepreneurs, mentors, students, faculty, industry
                  professionals, and ecosystem partners.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  This community creates opportunities to:
                </p>

                <ul className="my-6 space-y-2.5 font-inter text-[15px] text-[#121212]">
                  {[
                    'Share experiences',
                    'Exchange ideas',
                    'Find collaborators',
                    'Learn from other founders',
                    'Discover new opportunities',
                    'Build long-term relationships',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EB5725]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5. Workshops & Learning */}
              <section id="workshops" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Workshops &amp; Learning
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  Entrepreneurship requires continuous learning.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU organizes workshops, talks, training sessions,
                  bootcamps, and other learning opportunities to help founders
                  develop the skills required to build and operate a startup.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  Sessions may cover areas such as:
                </p>

                <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-inter text-[14px]">
                  {[
                    'Entrepreneurship',
                    'Product development',
                    'Design thinking',
                    'Marketing',
                    'Finance',
                    'Intellectual property',
                    'Fundraising',
                    'Technology',
                    'Leadership',
                    'Business strategy',
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="rounded-lg border border-[#E4E4E0]/80 bg-white/70 px-3.5 py-2.5 font-medium text-[#121212]"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Industry Connections */}
              <section id="industry" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Industry Connections
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU helps bridge the gap between startups and the larger
                  business ecosystem.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  Through industry interactions, partnerships, events, and
                  networking opportunities, startups can connect with people who
                  can help them understand markets, identify opportunities, and
                  develop meaningful business relationships.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B]">
                  These connections can open doors to potential customers,
                  partners, mentors, investors, and other stakeholders.
                </p>
              </section>

              {/* 7. Funding & Investor Access */}
              <section id="funding" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Funding &amp; Investor Access
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  Building a startup often requires capital at the right stage.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU helps founders understand the fundraising process and
                  provides opportunities to connect with the broader startup and
                  investment ecosystem.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  Startups can receive guidance on:
                </p>

                <ul className="my-6 space-y-2.5 font-inter text-[15px] text-[#121212]">
                  {[
                    'Preparing for fundraising',
                    'Developing an investor-ready pitch',
                    'Understanding funding options',
                    'Building financial projections',
                    'Connecting with potential investors and funding opportunities',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EB5725]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mt-5">
                  The goal is to help founders become better prepared to raise
                  capital and grow sustainably.
                </p>
              </section>

              {/* 8. Product & Market Validation */}
              <section id="validation" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Product &amp; Market Validation
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  A great idea is only valuable when it solves a real problem.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-6">
                  AIC JKLU encourages startups to validate their assumptions,
                  understand their customers, build products, and continuously
                  improve based on real-world feedback.
                </p>

                <p className="font-inter text-[15px] font-semibold uppercase tracking-[0.08em] text-[#52525B] mb-3">
                  Founders are encouraged to focus on:
                </p>

                {/* Formula sequence */}
                <div className="my-6 overflow-x-auto rounded-xl border border-[#EB5725]/20 bg-[#FFF2ED]/60 p-4 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#121212] whitespace-nowrap">
                    {['Problem', 'Customer', 'Solution', 'Product', 'Market', 'Growth'].map((step, idx) => (
                      <div key={step} className="flex items-center gap-2 sm:gap-3">
                        <span className="rounded-md bg-white px-3 py-1.5 shadow-sm border border-[#E4E4E0]">
                          {step}
                        </span>
                        {idx < 5 && <span className="text-[#EB5725] font-bold">→</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mt-5">
                  This approach helps startups move beyond ideas and build
                  solutions that people actually need.
                </p>
              </section>

              {/* 9. Events & Networking */}
              <section id="events" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Events &amp; Networking
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  Throughout the incubation journey, startups get opportunities
                  to participate in entrepreneurial events, networking sessions,
                  startup showcases, competitions, pitch sessions, and ecosystem
                  programs.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-4">
                  These events provide founders with opportunities to meet:
                </p>

                <ul className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-inter text-[15px] text-[#121212]">
                  {[
                    'Entrepreneurs',
                    'Investors',
                    'Industry leaders',
                    'Mentors',
                    'Potential customers',
                    'Fellow founders',
                  ].map((person) => (
                    <li
                      key={person}
                      className="rounded-lg border border-[#E4E4E0]/80 bg-white/70 px-3.5 py-2.5 font-medium"
                    >
                      {person}
                    </li>
                  ))}
                </ul>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mt-5 italic">
                  Every interaction can become the beginning of a new
                  opportunity.
                </p>
              </section>

              {/* 10. Startup Showcase */}
              <section id="showcase" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Startup Showcase
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  As startups grow, opportunities to showcase their work become
                  increasingly important.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU provides platforms and opportunities for startups to
                  present their products, ideas, innovations, and achievements
                  to relevant audiences.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B]">
                  These opportunities can help startups gain visibility, receive
                  feedback, and build connections with potential customers,
                  partners, and investors.
                </p>
              </section>

              {/* 11. Building Beyond Incubation */}
              <section id="beyond" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-16">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  Building Beyond Incubation
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  The relationship with AIC JKLU does not have to end when a
                  startup moves beyond the incubation stage.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  As startups grow, the ecosystem can continue to provide
                  opportunities for mentorship, networking, collaboration, and
                  engagement with the wider entrepreneurial community.
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B]">
                  The objective is to create long-term relationships that
                  continue to support founders as they build and scale their
                  ventures.
                </p>
              </section>

              {/* 12. More Than an Incubator */}
              <section id="more-than-incubator" className="scroll-mt-32 border-t border-[#E4E4E0]/80 pt-12 pb-8">
                <h2 className="font-marcellus text-[30px] sm:text-[34px] tracking-[-0.03em] text-[#121212] mb-6">
                  More Than an Incubator
                </h2>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-5">
                  AIC JKLU is more than a workspace or a program.
                </p>

                <p className="font-inter text-[18px] sm:text-[20px] leading-[1.75] text-[#121212] font-medium mb-5">
                  It is an{' '}
                  <strong className="text-[#EB5725] font-semibold">
                    ecosystem for founders to learn, build, connect, and grow.
                  </strong>
                </p>

                <p className="font-inter text-[17px] leading-[1.75] text-[#52525B] mb-12">
                  From the first idea to product validation, from early
                  customers to fundraising, AIC JKLU aims to provide the
                  support and connections that help entrepreneurs take their next
                  step.
                </p>

                {/* Final Signature Callout */}
                <div className="mt-8 rounded-2xl border border-[#E4E4E0] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-center sm:text-left">
                  <p className="font-marcellus text-[24px] sm:text-[30px] md:text-[34px] leading-tight text-[#121212] mb-4">
                    Your idea is the beginning.
                    <br />
                    <span className="text-[#EB5725] italic font-normal">
                      AIC JKLU helps you build what comes next.
                    </span>
                  </p>

                  <p className="font-inter text-[15px] text-[#52525B] mb-6">
                    Join our incubation ecosystem and turn your vision into a scalable venture.
                  </p>

                  <Link
                    href="/apply"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#EB5725] px-8 py-4 font-robotoMono text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-[#EB5725]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C84214] hover:shadow-lg hover:shadow-[#EB5725]/25"
                  >
                    <span>Apply to AIC-JKLU</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </section>

            </main>
          </div>
        </div>

        {/* =========================================
            FOOTER
        ========================================== */}
        <footer className="bg-surface border-t border-hairline py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-marcellus text-[18px] text-obsidian">
              AIC-JKLU
            </div>
            <div className="font-robotoMono text-[11px] text-slateMuted">
              © 2026 Atal Incubation Centre – JK Lakshmipat University. Supported by NITI Aayog.
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
