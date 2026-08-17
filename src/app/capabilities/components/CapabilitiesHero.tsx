'use client';

import React, { useEffect, useRef } from 'react';

export default function CapabilitiesHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => {
      if (!el) return;
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }, []);

  return (
    <section className="py-16 bg-white border-b border-border" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-label mb-3">OUR CAPABILITIES</p>
            <h1 id="capabilities-heading" className="text-section-title font-black leading-tight">
              End-to-End Solutions <br />
              <span className="text-foreground">Under </span>
              <span className="text-primary">One Roof</span>
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground text-base leading-relaxed">
              ตั้งแต่การออกแบบแม่พิมพ์ไปจนถึงการผลิตจริง SWP ให้บริการครบวงจรด้วยคุณภาพที่สม่ำเสมอ รวดเร็ว และยืดหยุ่น ด้วยเครื่องจักร Injection Molding ขนาด 80–2,000 ตัน และทีมวิศวกรผู้เชี่ยวชาญ เราพร้อมรองรับทุกความต้องการของลูกค้า ตั้งแต่ Prototype จนถึงการผลิตจำนวนมาก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}