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
    <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6">
      <Swiper
        ref={swiperRef}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        initialSlide={initialIndex}
        slidesPerView={1.25}
        spaceBetween={14}
        speed={850}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 110,
          modifier: 1.25,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 18,
            coverflowEffect: { rotate: 0, stretch: 0, depth: 115, modifier: 1.25, slideShadows: false },
          },
          1024: {
            slidesPerView: 1.85,
            spaceBetween: 24,
            coverflowEffect: { rotate: 0, stretch: 0, depth: 120, modifier: 1.3, slideShadows: false },
          },
          1280: {
            slidesPerView: 1.95,
            spaceBetween: 28,
            coverflowEffect: { rotate: 0, stretch: 0, depth: 125, modifier: 1.35, slideShadows: false },
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
      <div className="flex items-center justify-center gap-3 mt-2 lg:mt-2.5">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          aria-label="Previous company"
          className="
            group
            w-9 h-9 min-h-[36px] min-w-[36px] rounded-full
            border border-black/15
            flex items-center justify-center
            text-slateMuted
            hover:bg-obsidian hover:border-obsidian hover:text-white
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
            cursor-pointer
          "
        >
          <ChevronLeft size={15} aria-hidden="true" />
        </button>

        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          aria-label="Next company"
          className="
            group
            w-9 h-9 min-h-[36px] min-w-[36px] rounded-full
            border border-black/15
            flex items-center justify-center
            text-slateMuted
            hover:bg-obsidian hover:border-obsidian hover:text-white
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
            cursor-pointer
          "
        >
          <ChevronRight size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
