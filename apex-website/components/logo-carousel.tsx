'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

type Logo = { src: string; alt: string } | JSX.Element;

// 3 groups → 3 slides
const logoGroups: Logo[][] = [
  [
    { src: '/images/logos/AA_Hands_On_Museum_Logo.png', alt: 'Ann Arbor Hands-On Museum' },
    { src: '/images/logos/aa_district_libarary_logo.jpg', alt: 'Ann Arbor District Library' },
    { src: '/images/logos/um_student_life_logos.png', alt: "University of Michigan Housing" },
    { src: '/images/logos/Main-Street_Ventures_logo.webp', alt: "Main Street Ventures" },
    { src: '/images/logos/zingermans_logo.png', alt: "Zingerman's Delicatessen" },
  ],

  [
    { src: '/images/logos/GetYourGuide_logo.png', alt: 'GetYourGuide' },
    { src: '/images/logos/LineLeap_logo.png', alt: 'LineLeap' },
    { src: '/images/logos/snackpass_logo.webp', alt: 'Snackpass' },
    { src: '/images/logos/backyard_brains_logo.svg', alt: 'Backyard Brains' },
    { src: '/images/logos/brandXR_logo.png', alt: 'BrandXR' },
    { src: '/images/logos/ohana_logo.avif', alt: 'Ohana Health' },
    { src: '/images/logos/workit_health_logo.png', alt: 'Workit Health' },
    { src: '/images/logos/careevolution_logo.png', alt: 'CareEvolution' },
    { src: '/images/logos/deepgram_logo.png', alt: 'Deepgram' },
    { src: '/images/logos/civica_logo.png', alt: 'Civica' },
    { src: '/images/logos/mighty_buildings_logo.avif', alt: 'Mighty Buildings' },
    { src: '/images/logos/Pixo_logo.svg', alt: 'Pixo' },
    { src: '/images/logos/aptera_logo.png', alt: 'Aptera Motors' },
    { src: '/images/logos/Wayup_logo.png', alt: 'WayUp' },

  ],

  [
    { src: '/images/logos/rivian_logo.webp', alt: 'Rivian' },
    { src: '/images/logos/may_mobility_logo.webp', alt: 'May Mobility' },
    { src: '/images/logos/grubhub_logo.webp', alt: 'Grubhub' },
    { src: '/images/logos/detroit_pistons_logo.svg', alt: 'Detroit Pistons' },
    { src: '/images/logos/soundcloud_logo.png', alt: 'SoundCloud' },
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
