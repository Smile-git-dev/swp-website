'use client';

import React, { useEffect, useRef } from 'react';

const oemSteps = [
  {
    step: '01',
    title: 'Consultation',
    titleTh: 'ปรึกษาและวิเคราะห์ความต้องการ',
    description: 'ทีมวิศวกรของเราพร้อมรับฟังและวิเคราะห์ความต้องการของลูกค้า เพื่อกำหนดแนวทางการผลิตที่เหมาะสม',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    titleTh: 'ออกแบบและสร้างต้นแบบ',
    description: 'ออกแบบแม่พิมพ์และผลิตชิ้นงานต้นแบบ พร้อมการวิเคราะห์ Mold Flow เพื่อให้ได้ผลลัพธ์ที่ดีที่สุด',
  },
  {
    step: '03',
    title: 'Mass Production',
    titleTh: 'ผลิตจำนวนมาก',
    description: 'ผลิตชิ้นงานตามปริมาณที่ต้องการ ด้วยเครื่องจักร 80–650 ตัน ควบคุมคุณภาพทุกขั้นตอน',
  },
  {
    step: '04',
    title: 'Delivery',
    titleTh: 'ส่งมอบตรงเวลา',
    description: 'จัดส่งสินค้าพร้อมเอกสารรับรองคุณภาพ ตรงตามกำหนดเวลาที่ตกลงกัน',
  },
];

export default function OEMSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-foreground text-white" aria-label="บริการ OEM">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">OEM SERVICE</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              รับผลิตตามแบบ
              <br />
              <span className="text-primary">OEM / ODM</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm leading-relaxed lg:max-w-sm">
            SWP รับผลิตชิ้นส่วนพลาสติกตามแบบของลูกค้า (OEM) และพัฒนาผลิตภัณฑ์ใหม่ร่วมกัน (ODM)
            ด้วยประสบการณ์กว่า 37 ปีในอุตสาหกรรม
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {oemSteps.map((step, i) => (
            <div
              key={step.step}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="bg-foreground p-8 group hover:bg-white/5 transition-colors duration-300"
              style={{
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, background-color 0.3s ease`,
              }}
            >
              <span className="text-5xl font-black text-primary/20 leading-none block mb-4 select-none">{step.step}</span>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">{step.title}</p>
              <h3 className="text-sm font-black text-white mb-3 leading-snug">{step.titleTh}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-white/10">
          <div>
            <h3 className="text-lg font-black text-white mb-1">สนใจบริการ OEM?</h3>
            <p className="text-white/60 text-sm">ส่งแบบหรือ Spec มาให้เราประเมินราคาได้เลย</p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-bold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
          >
            ขอใบเสนอราคา
          </a>
        </div>
      </div>
    </section>
  );
}
