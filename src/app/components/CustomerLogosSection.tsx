'use client';

import React from 'react';
import Image from 'next/image';
import { customerLogos } from '@/data/customerLogos';

export default function CustomerLogosSection() {
  // Duplicate logos for seamless infinite scroll
  const doubled = [...customerLogos, ...customerLogos];

  return (
    <section className="py-14 bg-[#CC0000] overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-xs font-semibold tracking-widest text-white/80 uppercase mb-2">
          OUR CUSTOMERS
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          บริษัทที่ร่วมงานกับเรา
        </h2>
      </div>
      {/* Marquee Track */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #CC0000, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #CC0000, transparent)' }} />

        <div className="flex gap-6 marquee-track">
          {doubled?.map((logo, index) => (
            <div
              key={`${logo?.id}-${index}`}
              className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src={logo?.src}
                  alt={logo?.alt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
