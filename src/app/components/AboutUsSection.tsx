'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'ประสบการณ์เชื่อถือได้',
    description: 'ดำเนินธุรกิจผลิตพลาสติกคุณภาพมากว่า 37 ปี',
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
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
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
      className="py-16 sm:py-20 bg-white"
      aria-label="เกี่ยวกับเรา"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: heading, copy, feature row */}
          <div
            ref={leftRef}
            style={{
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-2">
              ABOUT  US
            </h2>

            <p className="text-lg sm:text-xl font-bold text-gray-500 mb-6">
              Sahawattana Plastic Co., Ltd.
            </p>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                ผู้ผลิตผลิตภัณฑ์พลาสติกที่มีประสบการณ์ยาวนานในประเทศไทย
                ก่อตั้งขึ้นในปี พ.ศ. 2531 โดย{' '}
                <strong className="text-gray-800">
                  คุณอรรถวุฒิ รัตนสุวรรณ
                </strong>{' '}
                ด้วยวิสัยทัศน์ที่เล็งเห็นว่า พลาสติกจะมีบทบาทสำคัญต่อการ
                ดำเนินชีวิตของมนุษย์ในอนาคต และหากมีการพัฒนาผลิตภัณฑ์อย่างต่อเนื่อง
                จะสามารถสร้างโอกาสทางธุรกิจ ขยายตลาด
                และสนับสนุนการเติบโตของอุตสาหกรรมในประเทศได้
              </p>

              <p>
                ในช่วงเริ่มต้น บริษัทดำเนินธุรกิจในรูปแบบ{' '}
                <strong className="text-gray-800">
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
                <strong className="text-gray-800">
                  บริษัท สหวัฒนาพลาสติก จำกัด
                </strong>{' '}
                เมื่อวันที่{' '}
                <strong className="text-gray-800">
                  1 ธันวาคม พ.ศ. 2560
                </strong>{' '}
                เพื่อรองรับการเติบโตของธุรกิจ
                และยกระดับองค์กรสู่มาตรฐานสากล
              </p>

              <p>
                ปัจจุบัน บริษัทมุ่งเน้นการพัฒนาผลิตภัณฑ์พลาสติกที่มีคุณภาพ
                เพื่อตอบสนองความต้องการของลูกค้าในหลากหลายอุตสาหกรรม
                โดยยึดมั่นในมาตรฐานด้าน{' '}
                <strong className="text-gray-800">
                  คุณภาพ ความปลอดภัย อาชีวอนามัย
                  และการดูแลสิ่งแวดล้อม
                </strong>{' '}
                เพื่อสร้างความเชื่อมั่นและความพึงพอใจสูงสุดแก่ลูกค้า
                พร้อมทั้งเติบโตอย่างมั่นคงและยั่งยืนในระยะยาว
              </p>
            </div>

            {/* Two-item feature row */}
            <div className="grid grid-cols-2 divide-x divide-gray-200 mt-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="pr-6 first:pl-0 pl-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-primary shrink-0"
                    />

                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                      {title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: factory photo */}
          <div
            ref={rightRef}
            className="rounded-2xl overflow-hidden shadow-sm"
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
              className="w-full h-auto object-cover"
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