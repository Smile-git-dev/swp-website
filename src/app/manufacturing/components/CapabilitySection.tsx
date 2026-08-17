'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

const capabilities = [
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7"
        />
      </svg>
    ),
    title: 'บริการผลิตสินค้า OEM',
    description: 'สำหรับแบรนด์สินค้าและองค์กร',
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
    title: 'รองรับงาน Injection Molding',
    description: 'สำหรับผลิตภัณฑ์พลาสติกหลากหลายประเภท',
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: 'การผลิตและ Timeline ที่ยืดหยุ่น',
    description: 'ทั้งปริมาณขนาดกลางและขนาดใหม่',
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'สามารถผลิตสินค้าตามแบบ',
    description:
      'สามารถผลิต สินค้าตามแบบของลูกค้า (Custom Design / Custom Mold)',
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: 'After Sale Service',
    description: 'เป็นที่ปรึกษาตลอดอายุการใช้งาน',
  },
];

export default function CapabilitySection() {
  return (
    <>
      {/* =====================================
          MANUFACTURING & STANDARDS COVER
          Full-width hero
      ===================================== */}

      <section
        className="relative w-full overflow-hidden bg-foreground"
        aria-label="Manufacturing & Standards"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <AppImage
            src="/assets/images/swp-about.png"
            alt="Manufacturing & Standards"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark overlay — same mood as About */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">

              {/* Red accent */}
              <div className="w-12 sm:w-16 h-1 bg-primary mb-6 sm:mb-8" />

              {/* Title */}
              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-7xl
                  font-black
                  leading-[0.95]
                  tracking-tight
                  text-white
                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]
                "
              >
                Manufacturing
                <br />
                <span className="text-primary">&amp; Standards</span>
              </h2>

            </div>
          </div>
        </div>

        {/* Bottom Red Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
      </section>

      {/* =====================================
          CAPABILITY SECTION
          ส่วนเดิมทั้งหมด
      ===================================== */}

      <section
        className="py-16 bg-white"
        aria-label="ความสามารถในการรองรับการผลิต"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-8">
            Capability
          </h2>

          {/* Main grid: left red column + right capability grid */}
          <div className="flex flex-col lg:flex-row gap-0">

            {/* Left red column */}
            <div className="bg-primary text-white flex flex-col justify-end p-8 lg:w-56 shrink-0 min-h-[260px]">
              <p className="text-xs font-bold tracking-widest uppercase text-white/80 mb-4">
                PRODUCTION CAPACITY
              </p>

              <h3 className="text-2xl font-black leading-tight">
                ความสามารถ
                <br />
                ในการรองรับการผลิต
              </h3>
            </div>

            {/* Right: capability grid */}
            <div className="flex-1 border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                {capabilities.map((cap, i) => (
                  <div
                    key={cap.title}
                    className={`
                      p-6
                      border-b
                      border-r
                      border-gray-200
                      flex
                      flex-col
                      gap-3
                      ${
                        i === 2
                          ? 'border-r-0 lg:border-r border-gray-200'
                          : ''
                      }
                      ${
                        i >= 3
                          ? 'border-b-0'
                          : ''
                      }
                    `}
                  >

                    {/* Icon */}
                    <div className="text-primary">
                      {cap.icon}
                    </div>

                    {/* Red line */}
                    <div className="w-8 h-0.5 bg-primary" />

                    {/* Title */}
                    <h4 className="font-black text-foreground text-sm leading-snug">
                      {cap.title}
                    </h4>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {cap.description}
                    </p>

                  </div>
                ))}

                {/* SWP Catalog card */}
                <div className="bg-primary p-6 flex flex-col justify-center items-start gap-4 border-b-0 border-r-0">

                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-white/80 mb-1">
                      SWP CATALOG
                    </p>

                    <h4 className="text-xl font-black text-white">
                      แคตตาล็อกสินค้า
                    </h4>
                  </div>

                  <a
                    href="/brochure"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-white
                      text-primary
                      text-sm
                      font-bold
                      px-4
                      py-2
                      hover:bg-gray-100
                      transition-colors
                      duration-200
                    "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                    </svg>

                    ดูแคตตาล็อก
                  </a>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}