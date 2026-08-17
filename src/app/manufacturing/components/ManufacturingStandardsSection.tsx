'use client';

import React from 'react';

const pillars = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    number: '01',
    en: 'Quality',
    th: 'คุณภาพสินค้า',
    description: 'มุ่งมั่นในการผลิตสินค้าที่มีคุณภาพสม่ำเสมอ ผ่านกระบวนการควบคุมคุณภาพที่เข้มงวดในทุกขั้นตอนการผลิต เพื่อให้ลูกค้าได้รับสินค้าที่ตรงตามมาตรฐานและความคาดหวัง',
    accent: true,
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    number: '02',
    en: 'Safety',
    th: 'ความปลอดภัยในการทำงาน',
    description: 'ให้ความสำคัญสูงสุดกับความปลอดภัยของพนักงานและสภาพแวดล้อมในการทำงาน ด้วยการปฏิบัติตามมาตรฐานความปลอดภัยสากลและการฝึกอบรมอย่างต่อเนื่อง',
    accent: false,
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    number: '03',
    en: 'Occupational Health',
    th: 'อาชีวอนามัยของพนักงาน',
    description: 'ดูแลสุขภาพและความเป็นอยู่ที่ดีของพนักงานทุกคน ผ่านโปรแกรมอาชีวอนามัยที่ครอบคลุม เพื่อให้พนักงานมีสุขภาพดีและทำงานได้อย่างมีประสิทธิภาพ',
    accent: true,
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: '04',
    en: 'Environmental Responsibility',
    th: 'ความรับผิดชอบต่อสิ่งแวดล้อม',
    description: 'ดำเนินธุรกิจด้วยความรับผิดชอบต่อสิ่งแวดล้อม ลดผลกระทบจากกระบวนการผลิต และส่งเสริมการใช้ทรัพยากรอย่างมีประสิทธิภาพเพื่อความยั่งยืนในระยะยาว',
    accent: false,
  },
];

export default function ManufacturingStandardsSection() {
  return (
    <section className="py-16 bg-white" aria-label="มาตรฐานการผลิตของเรา">
      {/* Header strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-1 h-14 bg-primary shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">Manufacturing Standards</h2>
            <p className="text-lg font-bold text-foreground mt-1">มาตรฐานการผลิตของเรา</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mt-2">
              กระบวนการผลิตของโรงงานดำเนินงานภายใต้ระบบบริหารจัดการที่ให้ความสำคัญกับทุกมิติ
              เพื่อให้มั่นใจว่าสินค้าทุกชิ้นที่ส่งมอบจะมีคุณภาพสม่ำเสมอ และสร้างความเชื่อมั่นให้กับลูกค้าในระยะยาว
            </p>
          </div>
        </div>
      </div>

      {/* Alternating strips */}
      <div className="flex flex-col">
        {pillars?.map((pillar, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={pillar?.en}
              className={`w-full ${isEven ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                  {/* Icon + label side */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-72 shrink-0">
                    <span className="text-5xl font-black text-primary/10 leading-none mb-3 select-none">{pillar?.number}</span>
                    <div className="text-primary mb-4">{pillar?.icon}</div>
                    <div className="w-10 h-0.5 bg-primary mb-3" />
                    <h3 className="font-black text-foreground text-xl leading-snug">{pillar?.en}</h3>
                    <p className="text-primary text-sm font-semibold mt-1">{pillar?.th}</p>
                  </div>

                  {/* Divider */}
                  <div className={`hidden lg:block w-px self-stretch bg-gray-200`} />

                  {/* Description side */}
                  <div className="flex-1">
                    <p className="text-foreground/80 text-base leading-relaxed">{pillar?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
