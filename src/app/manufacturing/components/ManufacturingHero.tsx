'use client';

import React, { useEffect, useRef } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Material Preparation',
    titleTh: 'การเตรียมวัตถุดิบ',
    description: 'คัดสรรและตรวจสอบเม็ดพลาสติกคุณภาพสูงจากซัพพลายเออร์ที่ผ่านการรับรอง เพื่อให้ได้ผลิตภัณฑ์ที่มีคุณสมบัติตรงตามมาตรฐาน',
  },
  {
    number: '02',
    title: 'Mold Development',
    titleTh: 'การพัฒนาแม่พิมพ์',
    description: 'ออกแบบและผลิตแม่พิมพ์ด้วยเทคโนโลยี CAD/CAM และเครื่อง CNC ความแม่นยำสูง พร้อมการวิเคราะห์ Mold Flow ก่อนการผลิตจริง',
  },
  {
    number: '03',
    title: 'Injection Molding',
    titleTh: 'การฉีดพลาสติก',
    description: 'กระบวนการฉีดพลาสติกด้วยเครื่องจักร 80–650 ตัน ควบคุมอุณหภูมิและแรงดันอย่างแม่นยำ รองรับทั้ง Single-shot และ Multi-shot Molding',
  },
  {
    number: '04',
    title: 'Quality Inspection',
    titleTh: 'การตรวจสอบคุณภาพ',
    description: 'ตรวจสอบทุกชิ้นงานด้วยเครื่องมือวัดความแม่นยำสูง ทั้ง CMM, Optical Comparator และการทดสอบเชิงกล เพื่อให้มั่นใจในคุณภาพ 100%',
  },
  {
    number: '05',
    title: 'Assembly & Packaging',
    titleTh: 'การประกอบและบรรจุภัณฑ์',
    description: 'ประกอบชิ้นส่วน ตกแต่งผิว และบรรจุภัณฑ์ตามมาตรฐานลูกค้า พร้อมระบบ Traceability ครบวงจร',
  },
  {
    number: '06',
    title: 'Delivery & Logistics',
    titleTh: 'การจัดส่งและโลจิสติกส์',
    description: 'จัดส่งสินค้าตรงเวลาด้วยระบบ Just-In-Time พร้อมเอกสารรับรองคุณภาพครบถ้วนทุกล็อตการผลิต',
  },
];

export default function ManufacturingHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.08 }
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
    null
  );
}
