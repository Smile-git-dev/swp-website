'use client';

import React, { useEffect, useRef } from 'react';

const milestones = [
  {
    year: '1988',
    title: 'ก่อตั้งบริษัท',
    subtitle: 'Foundation',
    description:
      'คุณอรรถวุฒิ รัตนสุวรรณ ก่อตั้ง ห้างหุ้นส่วนจำกัด สหวัฒนาพลาสติก ด้วยวิสัยทัศน์ที่เชื่อมั่นว่าพลาสติกจะมีบทบาทสำคัญในชีวิตมนุษย์',
  },
  {
    year: '1995',
    title: 'ขยายกำลังการผลิต',
    subtitle: 'Expansion',
    description:
      'ลงทุนในเครื่องจักร Injection Molding เพิ่มเติม และขยายโรงงานเพื่อรองรับความต้องการของลูกค้าที่เพิ่มขึ้น',
  },
  {
    year: '2005',
    title: 'ได้รับการรับรอง ISO 9001',
    subtitle: 'ISO Certification',
    description:
      'ได้รับการรับรองมาตรฐาน ISO 9001 ครั้งแรก ยืนยันระบบบริหารคุณภาพที่ได้มาตรฐานสากล',
  },
  {
    year: '2015',
    title: 'พัฒนาระบบ OEM ครบวงจร',
    subtitle: 'OEM Development',
    description:
      'พัฒนาศักยภาพการผลิตแบบ OEM ครบวงจร ตั้งแต่การออกแบบแม่พิมพ์ถึงการส่งมอบ รองรับลูกค้าต่างประเทศ',
  },
  {
    year: '2017',
    title: 'จดทะเบียนเป็นบริษัทจำกัด',
    subtitle: 'Company Registration',
    description:
      'จดทะเบียนเป็น บริษัท สหวัฒนาพลาสติก จำกัด (Sahawattana Plastic Co., Ltd.) เมื่อวันที่ 1 ธันวาคม พ.ศ. 2560',
  },
  {
    year: '2022',
    title: 'รับรอง ISO 14001 & ISO 45001',
    subtitle: 'Multi-Standard Certified',
    description:
      'ได้รับการรับรองมาตรฐาน ISO 14001 ด้านสิ่งแวดล้อม และ ISO 45001 ด้านความปลอดภัยในการทำงาน',
  },
  {
    year: '2023',
    title: 'รับรอง SMETA',
    subtitle: 'SMETA Certified',
    description:
      'ได้รับการรับรอง SMETA (Sedex Members Ethical Trade Audit) ยืนยันมาตรฐานด้านจริยธรรมทางธุรกิจระดับสากล',
  },
  {
    year: '2025',
    title: 'ก้าวสู่ปีที่ 37',
    subtitle: '37+ Years of Excellence',
    description:
      'ก้าวสู่ปีที่ 37 ด้วยความมุ่งมั่นในการพัฒนาคุณภาพ นวัตกรรม และการให้บริการลูกค้าอย่างต่อเนื่อง',
  },
];

export default function HistorySection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    itemRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
