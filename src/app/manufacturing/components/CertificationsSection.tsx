'use client';

import React from 'react';
import Image from 'next/image';

const certifications = [
  {
    name: 'ISO 9001:2015',
    image: '/assets/images/Iso_9001-2015-1786592510475.png',
    alt: 'ISO 9001:2015 Quality Management System certification badge',
  },
  {
    name: 'ISO 14001:2015',
    image: '/assets/images/Iso_14001-2015-1786592510480.png',
    alt: 'ISO 14001:2015 Environmental Management System certification badge',
  },
  {
    name: 'ISO 45001:2018',
    image: '/assets/images/Iso_45001-2018-1786592510383.png',
    alt: 'ISO 45001:2018 Occupational Health and Safety certification badge',
  },
  {
    name: 'Sedex Member',
    image: '/assets/images/Sedex-1786592559463.png',
    alt: 'Sedex membership certification badge',
  },
  {
    name: 'SMETA',
    image: '/assets/images/Smeta-1786592559463.png',
    alt: 'SMETA Sedex Members Ethical Trade Audit certification badge',
  },
  {
    name: 'Green Industry',
    image: '/assets/images/Green_Industry-1786592510291.png',
    alt: 'Green Industry Level 4 certification badge',
  },
  {
    name: 'Walt Disney F.A.M.A.',
    image: '/assets/images/Disney_FAMA-1786592510379.png',
    alt: 'Walt Disney F.A.M.A. certification badge',
  },
];

export default function CertificationsSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="การรับรองมาตรฐาน"
      style={{ minHeight: '420px' }}
    >
      {/* Factory background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/industry-swp-1786591659534.png"
          alt="โรงงาน SWP"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* White fade overlay — strong center, transparent edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(255,255,255,0.97) 30%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.4) 100%)',
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-14">
        {/* SWP Logo */}
        <div className="mb-4">
          <Image
            src="/assets/images/SWP_LOGO-01-1786592833704.png"
            alt="SWP Logo"
            width={120}
            height={80}
            className="object-contain mx-auto"
          />
        </div>

        {/* Thai company name */}
        <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#cc0000' }}>
          บริษัท สหวัฒนาพลาสติก จำกัด
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-3 max-w-2xl leading-relaxed">
          มีศักยภาพในการผลิตสินค้าพลาสติกหลากหลายประเภท ด้วยระบบการจัดการที่ได้มาตรฐาน และเครื่องจักรที่ทันสมัย
        </p>

        {/* Subtitle */}
        <p className="text-gray-800 font-bold text-base sm:text-lg mb-10">
          ระบบมาตรฐานโรงงาน โรงงานดำเนินงานภายใต้มาตรฐานสากล
        </p>

        {/* Certification badges — single horizontal row */}
        <div className="w-full max-w-6xl overflow-x-auto">
          <div className="flex flex-row items-center justify-center gap-4 min-w-max mx-auto px-2">
            {certifications?.map((cert) => (
              <div
                key={cert?.name}
                className="bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                style={{ width: '140px', height: '120px', flexShrink: 0 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cert?.image}
                    alt={cert?.alt}
                    fill
                    className="object-contain"
                    sizes="140px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
