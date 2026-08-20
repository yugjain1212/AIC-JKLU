'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
} from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CompanySlide from './CompanySlide';
import type { Company } from '@/data/companies';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';

interface CompaniesCarouselProps {
  companies: Company[];
  activeIndex: number;
  initialIndex: number;
  onSlideChange: (swiper: SwiperType) => void;
}

export default function CompaniesCarousel({
  companies,
  activeIndex,
  initialIndex,
  onSlideChange,
}: CompaniesCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        initialSlide={initialIndex}
        slidesPerView={1.25}
        spaceBetween={16}
        speed={900}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 140,
          modifier: 1.6,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.6,
            spaceBetween: 20,
            coverflowEffect: { rotate: 0, stretch: 0, depth: 140, modifier: 1.7, slideShadows: false },
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 28,
            coverflowEffect: { rotate: 0, stretch: 0, depth: 160, modifier: 1.8, slideShadows: false },
          },
          1280: {
            slidesPerView: 2.6,
            spaceBetween: 32,
            coverflowEffect: { rotate: 0, stretch: 0, depth: 170, modifier: 1.85, slideShadows: false },
          },
        }}
        onSlideChange={onSlideChange}
        className="w-full"
      >
        {companies.map((company) => (
          <SwiperSlide key={company.id}>
            {({ isActive }) => (
              <CompanySlide company={company} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Navigation Buttons ── */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          aria-label="Previous company"
          className="
            group
            w-10 h-10 rounded-full
            border border-black/15
            flex items-center justify-center
            text-slateMuted
            hover:bg-obsidian hover:border-obsidian hover:text-white
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
          "
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          aria-label="Next company"
          className="
            group
            w-10 h-10 rounded-full
            border border-black/15
            flex items-center justify-center
            text-slateMuted
            hover:bg-obsidian hover:border-obsidian hover:text-white
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
          "
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
