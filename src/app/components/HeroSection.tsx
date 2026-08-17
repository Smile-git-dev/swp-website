'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef?.current, subRef?.current, ctaRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16" aria-label="Hero">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/swp-cover.jpg"
          alt="Industrial injection molding machinery at Sahawattana Plastic Co., Ltd. factory, precision engineering environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center" />
        
        {/* Gradient scrim — dark on left for white text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-2xl">
          {/* Label */}
         

          {/* Headline */}
          <div ref={headlineRef}>
            <h1 className="text-hero-xl font-black text-white uppercase leading-tight mb-2">
              BEYOND MANUFACTURING.
            </h1>
            <p className="text-hero-xl font-black uppercase leading-tight mb-6">
              <span className="text-white">WE CREATE </span>
              <span className="text-primary">SOLUTIONS.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>);

}