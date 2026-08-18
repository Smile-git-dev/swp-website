'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'ประสบการณ์เชื่อถือได้',
    description: 'ดำเนินธุรกิจผลิตพลาสติกคุณภาพมากว่า 39 ปี',
  },
  {
    icon: ShieldCheck,
    title: 'มาตรฐานคุณภาพสากล',
    description: 'ใส่ใจคุณภาพ ความปลอดภัย และสิ่งแวดล้อมในทุกขั้นตอน',
  },
];

export default function AboutUsSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    [leftRef, rightRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(30px)';
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-white py-16 sm:py-20"
      aria-label="เกี่ยวกับเรา"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Left: Content */}
          <div
            ref={leftRef}
            style={{
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Heading */}
            <h2 className="mb-2 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
              ABOUT US
            </h2>

            <p className="mb-6 text-lg font-bold text-gray-500 sm:text-xl">
              Sahawattana Plastic Co., Ltd.
            </p>

            {/* Content */}
            <div className="max-w-[680px] space-y-4 text-sm leading-[1.9] text-gray-600 sm:text-base sm:leading-[2]">
              <p>
                ผู้ผลิตผลิตภัณฑ์พลาสติกที่มีประสบการณ์ยาวนานในประเทศไทย
                ก่อตั้งขึ้นในปี พ.ศ. 2531 โดย{' '}
                <strong className="font-bold text-gray-800">
                  คุณอรรถวุฒิ รัตนสุวรรณ
                </strong>{' '}
                ด้วยวิสัยทัศน์ที่เล็งเห็นว่า พลาสติกจะมีบทบาทสำคัญต่อการ
                ดำเนินชีวิตของมนุษย์ในอนาคต และหากมีการพัฒนาผลิตภัณฑ์อย่างต่อเนื่อง
                จะสามารถสร้างโอกาสทางธุรกิจ ขยายตลาด
                และสนับสนุนการเติบโตของอุตสาหกรรมในประเทศได้
              </p>

              <p>
                ในช่วงเริ่มต้น บริษัทดำเนินธุรกิจในรูปแบบ{' '}
                <strong className="font-bold text-gray-800">
                  ห้างหุ้นส่วนจำกัด สหวัฒนาพลาสติก
                </strong>{' '}
                และสามารถเติบโตได้อย่างมั่นคง
                ด้วยความมุ่งมั่นในการพัฒนาคุณภาพสินค้า
                การลงทุนในเทคโนโลยีการผลิต
                และการพัฒนาศักยภาพของบุคลากร
                เพื่อรองรับความต้องการของลูกค้าที่เพิ่มขึ้นอย่างต่อเนื่อง
              </p>

              <p>
                จากความไว้วางใจของลูกค้าตลอดระยะเวลาหลายปี
                บริษัทจึงได้ขยายขีดความสามารถในการผลิต
                พร้อมทั้งพัฒนาระบบการบริหารจัดการให้มีประสิทธิภาพมากยิ่งขึ้น
                จนกระทั่งได้มีการปรับโครงสร้างองค์กรเป็น{' '}
                <strong className="font-bold text-gray-800">
                  บริษัท สหวัฒนาพลาสติก จำกัด
                </strong>{' '}
                เมื่อวันที่{' '}
                <strong className="font-bold text-gray-800">
                  1 ธันวาคม พ.ศ. 2560
                </strong>{' '}
                เพื่อรองรับการเติบโตของธุรกิจ
                และยกระดับองค์กรสู่มาตรฐานสากล
              </p>

              <p>
                ปัจจุบัน บริษัทมุ่งเน้นการพัฒนาผลิตภัณฑ์พลาสติกที่มีคุณภาพ
                เพื่อตอบสนองความต้องการของลูกค้าในหลากหลายอุตสาหกรรม
                โดยยึดมั่นในมาตรฐานด้าน{' '}
                <strong className="font-bold text-gray-800">
                  คุณภาพ ความปลอดภัย อาชีวอนามัย
                  และการดูแลสิ่งแวดล้อม
                </strong>{' '}
                เพื่อสร้างความเชื่อมั่นและความพึงพอใจสูงสุดแก่ลูกค้า
                พร้อมทั้งเติบโตอย่างมั่นคงและยั่งยืนในระยะยาว
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid max-w-[680px] grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className={`py-5 sm:py-0 ${
                    index === 0 ? 'sm:pr-6' : 'sm:pl-6'
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="shrink-0 text-primary"
                    />

                    <h4 className="text-sm font-bold text-gray-900 sm:text-base">
                      {title}
                    </h4>
                  </div>

                  <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Factory Photo */}
          <div
            ref={rightRef}
            className="overflow-hidden rounded-2xl shadow-sm"
            style={{
              transition:
                'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <Image
              src="/assets/images/banner-swp.png"
              alt="โรงงานผลิตพลาสติก สหวัฒนาพลาสติก — เครื่องจักร Injection Molding ภายในโรงงาน"
              width={700}
              height={560}
              className="h-auto w-full object-cover"
              style={{
                maxHeight: '560px',
                objectFit: 'cover',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}