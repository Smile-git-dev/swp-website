'use client';

import React, { useEffect, useRef } from 'react';

const ethicsPrinciples = [
  {
    number: '01',
    title: 'ความซื่อสัตย์และโปร่งใส',
    subtitle: 'Integrity & Transparency',
    description: 'ดำเนินธุรกิจด้วยความซื่อสัตย์ โปร่งใส และตรงไปตรงมากับลูกค้า คู่ค้า และพนักงานทุกคน',
  },
  {
    number: '02',
    title: 'ความรับผิดชอบต่อสังคม',
    subtitle: 'Social Responsibility',
    description: 'ดูแลพนักงาน ชุมชน และสิ่งแวดล้อม ด้วยการปฏิบัติตามมาตรฐาน SMETA และหลักการ ESG',
  },
  {
    number: '03',
    title: 'คุณภาพและความเป็นเลิศ',
    subtitle: 'Quality & Excellence',
    description: 'มุ่งมั่นส่งมอบผลิตภัณฑ์และบริการที่มีคุณภาพสูงสุด ด้วยการพัฒนาอย่างต่อเนื่องในทุกกระบวนการ',
  },
  {
    number: '04',
    title: 'ความปลอดภัยในการทำงาน',
    subtitle: 'Workplace Safety',
    description: 'ให้ความสำคัญสูงสุดกับความปลอดภัยของพนักงานทุกคน ตามมาตรฐาน ISO 45001 และกฎหมายแรงงาน',
  },
  {
    number: '05',
    title: 'การรักษาสิ่งแวดล้อม',
    subtitle: 'Environmental Care',
    description: 'ลดผลกระทบต่อสิ่งแวดล้อมในทุกกระบวนการผลิต ตามมาตรฐาน ISO 14001 และเป้าหมายความยั่งยืน',
  },
  {
    number: '06',
    title: 'การพัฒนาบุคลากร',
    subtitle: 'People Development',
    description: 'ลงทุนในการพัฒนาทักษะและความรู้ของพนักงาน เพื่อสร้างทีมงานที่มีความสามารถและความภาคภูมิใจในงาน',
  },
];

export default function EthicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateX(0)';
          }
        });
      },
      { threshold: 0.08 }
    );
    itemRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-20px)';
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
