'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

type Logo = { src: string; alt: string };

// 3 groups → 3 slides
const logoGroups: Logo[][] = [
  [
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
  ],
  [
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
  ],
  [
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
    { src: '/images/apex-logo.png', alt: 'APEX' },
  ],
];

// Optional: custom labels per group
const labels = ['Local Businesses', 'Innovative Startups', 'Industry Leaders'];

export default function LogoCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    // slideToLoop keeps the correct index when loop is enabled
    if (swiperRef.current) {
      // @ts-ignore slideToLoop exists at runtime
      swiperRef.current.slideToLoop
        ? (swiperRef.current as any).slideToLoop(index)
        : swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Text navigation (no dots) */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {labels.map((label, i) => {
          const isActive = i === active;
          return (
            <button
              key={label}
              type="button"
              onClick={() => goTo(i)}
              className={[
                'px-3 py-1 text-sm transition-colors',
                isActive
                  ? 'text-red-600 font-semibold border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700',
              ].join(' ')}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
        onBeforeInit={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => setActive(sw.realIndex)} // keep text nav in sync
        className="pb-2" // small bottom padding; no pagination element to overlap
      >
        {logoGroups.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                {group.map((logo) => (
                  <div
                    key={logo.alt}
                    className="h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={240}
                      height={96}
                      className="max-h-12 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
