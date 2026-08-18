'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

/* =====================================
   รูปสำหรับ SLIDER ด้านบน
===================================== */

interface Slide {
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: '/assets/images/Banner2026-02.jpg',
    alt: 'Slide 1',
  },
  {
    image: '/assets/images/Banner2026-01.jpg',
    alt: 'Slide 2',
  },
  {
    image: '/assets/images/Banner2026-04.jpg',
    alt: 'Slide 3',
  },
  {
    image: '/assets/images/Banner2026-05.jpg',
    alt: 'Slide 4',
  },
];

/* =====================================
   ข้อมูลการ์ดด้านล่าง
===================================== */

interface Industry {
  name: string;
  description: string;
  image: string;
  alt: string;
}

const industries: Industry[] = [
  {
    name: 'Industrial & Manufacturing',
    description:
      'ชิ้นส่วนพลาสติกสำหรับเครื่องจักรและอุตสาหกรรมการผลิต',
    image: '/assets/images/industry-swp-1786591659534.png',
    alt: 'Industrial manufacturing facility with large machinery and factory equipment',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'อุปกรณ์พลาสติกสำหรับงานด้าน Wellness และ สุขภาพ',
    image: '/assets/images/industry-swp-1-1786591659520.png',
    alt: 'Healthcare professional holding medical device with digital health visualization',
  },
  {
    name: 'Food & Packaging',
    description:
      'บรรจุภัณฑ์พลาสติกสำหรับอาหารและสินค้าอุปโภคบริโภค',
    image: '/assets/images/industry-swp-2-1786591693275.png',
    alt: 'Colorful food products in plastic containers on supermarket shelves',
  },
  {
    name: 'Automotive Parts',
    description:
      'ชิ้นส่วนอุปกรณ์พลาสติกสำหรับอุตสาหกรรมยานยนต์',
    image: '/assets/images/industry-swp-3-1786591702212.png',
    alt: 'Automotive industry plastic parts and components for vehicles',
  },
  {
    name: 'Hospitality & Consumer Products',
    description:
      'สินค้าพลาสติกสำหรับโรงแรม ร้านอาหาร และสินค้าอุปโภคทั่วไป',
    image: '/assets/images/industry-swp-4-1786591706578.png',
    alt: 'Chef in white uniform preparing food with plastic containers in a professional kitchen',
  },
];

export default function IndustriesPanels() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  /* =====================================
     AUTO SLIDE
  ===================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  /* =====================================
     CARD SCROLL ANIMATION
  ===================================== */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full overflow-hidden bg-white"
      aria-label="อุตสาหกรรมที่เราให้บริการ"
    >
      {/* =====================================
          IMAGE SLIDER ด้านบน
      ===================================== */}

      <div
        className="relative w-full aspect-[16/10] overflow-hidden bg-white sm:aspect-[16/9] lg:aspect-[1920/900]"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;

          const touchEndX = e.changedTouches[0].clientX;
          const difference = touchStartX.current - touchEndX;

          if (difference > 50) {
            nextSlide();
          }

          if (difference < -50) {
            previousSlide();
          }

          touchStartX.current = null;
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              activeSlide === index
                ? 'translate-x-0 opacity-100'
                : index < activeSlide
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
            }`}
          >
            <AppImage
              src={slide.image}
              alt={slide.alt}
              width={1920}
              height={900}
              className="h-full w-full object-contain"
            />
          </div>
        ))}

        {/* ปุ่มซ้าย */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-lg text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:left-4 sm:h-12 sm:w-12 lg:flex"
        >
          ←
        </button>

        {/* ปุ่มขวา */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-lg text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:right-4 sm:h-12 sm:w-12 lg:flex"
        >
          →
        </button>

        {/* DOT NAVIGATION */}
        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-6 sm:gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'h-1.5 w-6 bg-primary sm:h-2 sm:w-7'
                    : 'h-1.5 w-1.5 bg-black/40 hover:bg-black/60 sm:h-2 sm:w-2'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* =====================================
          OUR PRODUCTS
      ===================================== */}

      <div className="w-full bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        {/* หัวข้อ */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />

            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              OUR PRODUCTS
            </p>

            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            อุตสาหกรรมที่เราให้บริการ
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            ด้วยประสบการณ์ด้านการผลิตพลาสติกแบบ OEM
            บริษัทสามารถรองรับการผลิตสินค้าให้กับหลากหลายอุตสาหกรรม
            ด้วยคุณภาพ ความแม่นยำ และความยืดหยุ่นในการผลิต
          </p>
        </div>

        {/* =====================================
            PRODUCT CARDS
        ===================================== */}

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group relative flex flex-col overflow-hidden rounded-tl-[28px] rounded-br-[28px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${
                  i * 100
                }ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${
                  i * 100
                }ms`,
              }}
            >
              {/* IMAGE */}

              <div className="relative h-44 overflow-hidden">
                <AppImage
                  src={industry.image}
                  alt={industry.alt}
                  width={400}
                  height={288}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#102b5c]/70 via-[#102b5c]/10 to-transparent" />
              </div>

              {/* ICON FLOAT */}

              <div className="absolute left-5 top-[150px] z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg">
                {i === 0 && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 21h18M5 21V10l4-3v14M9 21V5l4-2v18M13 21V8l6 2v11"
                    />
                  </svg>
                )}

                {i === 1 && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-6-4.35-6-10a6 6 0 0112 0c0 5.65-6 10-6 10z"
                    />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                )}

                {i === 2 && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h18v4H3zM5 7v14h14V7M9 11h6"
                    />
                  </svg>
                )}

                {i === 3 && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 16l1-5h12l1 5"
                    />
                    <circle cx="8" cy="17" r="2" />
                    <circle cx="16" cy="17" r="2" />
                  </svg>
                )}

                {i === 4 && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 11l9-7 9 7v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 21v-6h6v6"
                    />
                  </svg>
                )}
              </div>

              {/* CONTENT */}

              <div className="flex flex-1 flex-col px-5 pb-5 pt-9">
                <h3 className="min-h-[42px] text-sm font-black leading-snug text-foreground">
                  {industry.name}
                </h3>

                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>

              {/* RED BOTTOM LINE */}

              <div className="h-[3px] w-full bg-primary transition-all duration-500 group-hover:h-[5px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}