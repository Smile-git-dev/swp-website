'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    heroRef.current.style.opacity = '0';
    heroRef.current.style.transform = 'translateY(30px)';

    const timer = setTimeout(() => {
      if (!heroRef.current) return;

      heroRef.current.style.transition =
        'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      heroRef.current.style.opacity = '1';
      heroRef.current.style.transform = 'translateY(0)';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="bg-white"
      aria-labelledby="about-heading"
    >
      {/* =====================================================
          ABOUT US COVER
      ====================================================== */}
      <div className="relative overflow-hidden bg-gray-950">
        {/* Background Image */}
        <div className="absolute inset-0">
          <AppImage
            src="/assets/images/banner-swp.png"
            alt="Sahawattana Plastic Co., Ltd. manufacturing facility"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Red gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        </div>

        {/* Cover Content */}
        <div
          ref={heroRef}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="min-h-[560px] lg:min-h-[620px] flex items-center">
            <div className="max-w-4xl py-24">

              {/* Small label */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-[3px] bg-primary" />

                {/* <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.35em] uppercase">
                  Sahawattana Plastic Co., Ltd.
                </p> */}
              </div>

              {/* Main Title */}
              <h1
                id="about-heading"
                className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white mb-8"
              >
                ABOUT
                <br />
                <span className="text-primary">SWP</span>
              </h1>

              {/* Intro */}
          
              {/* Bottom information */}
              <div className="mt-12 flex flex-wrap items-center gap-8">

                {/* Years */}
                <div className="flex items-center gap-4">
                  <p className="text-primary text-4xl sm:text-5xl font-black leading-none">
                    39+
                  </p>

                  <div className="h-10 w-px bg-white/30" />

                  <p className="text-white/80 text-xs sm:text-sm uppercase tracking-widest leading-relaxed">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>

                {/* Established */}
                <div className="hidden sm:block h-10 w-px bg-white/20" />

                <div>
                  <p className="text-white font-bold text-sm">
                    ESTABLISHED
                  </p>

                  <p className="text-white/60 text-sm mt-1">
                    พ.ศ. 2531
                  </p>
                </div>

                {/* Location */}
                <div className="hidden sm:block h-10 w-px bg-white/20" />

                <div>
                  <p className="text-white font-bold text-sm">
                    THAILAND
                  </p>

                  <p className="text-white/60 text-sm mt-1">
                    Plastic Manufacturing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-44 sm:h-44 bg-primary/90 flex items-center justify-center">
            <div className="text-center">
              
             </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ABOUT CONTENT 
      ====================================================== */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <p className="text-primary text-xs font-black tracking-[0.3em] uppercase mb-4">
                OUR STORY
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-8">
                เกี่ยวกับเรา
                
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                บริษัท สหวัฒนาพลาสติก จำกัด Sahawattana Plastic Co., Ltd.
                ผู้ผลิตผลิตภัณฑ์พลาสติกที่มีประสบการณ์ยาวนานในประเทศไทย
                ก่อตั้งขึ้นในปี พ.ศ. 2531 โดย คุณอรรถวุฒิ รัตนสุวรรณ
                ด้วยวิสัยทัศน์ที่เล็งเห็นว่า พลาสติกจะมีบทบาทสำคัญต่อการดำเนินชีวิต
                ของมนุษย์ในอนาคต และหากมีการพัฒนาผลิตภัณฑ์อย่างต่อเนื่อง
                จะสามารถสร้างโอกาสทางธุรกิจ ขยายตลาด
                และสนับสนุนการเติบโตของอุตสาหกรรมในประเทศได้
              </p>

              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                ในช่วงเริ่มต้น บริษัทดำเนินธุรกิจในรูปแบบ
                ห้างหุ้นส่วนจำกัด สหวัฒนาพลาสติก และสามารถเติบโตได้อย่างมั่นคง
                ด้วยความมุ่งมั่นในการพัฒนาคุณภาพสินค้า
                การลงทุนในเทคโนโลยีการผลิต
                และการพัฒนาศักยภาพของบุคลากร
                เพื่อรองรับความต้องการของลูกค้าที่เพิ่มขึ้นอย่างต่อเนื่อง
                จากความไว้วางใจของลูกค้าตลอดระยะเวลาหลายปี
                บริษัทจึงได้ขยายขีดความสามารถในการผลิต
                พร้อมทั้งพัฒนาระบบการบริหารจัดการให้มีประสิทธิภาพมากยิ่งขึ้น
                จนกระทั่งได้มีการปรับโครงสร้างองค์กรเป็น
                บริษัท สหวัฒนาพลาสติก จำกัด เมื่อวันที่ 1 ธันวาคม พ.ศ. 2560
                เพื่อรองรับการเติบโตของธุรกิจและยกระดับองค์กรสู่มาตรฐานสากล
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                ปัจจุบัน บริษัทมุ่งเน้นการผลิตผลิตภัณฑ์พลาสติกที่มีคุณภาพ
                เพื่อตอบสนองความต้องการของลูกค้าในหลากหลายอุตสาหกรรม
                โดยยึดมั่นในมาตรฐานด้าน คุณภาพ ความปลอดภัย อาชีวอนามัย
                และการดูแลสิ่งแวดล้อม เพื่อสร้างความเชื่อมั่น
                และความพึงพอใจสูงสุดแก่ลูกค้า
                พร้อมทั้งเติบโตอย่างมั่นคงและยั่งยืนในระยะยาว
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-80 lg:h-[480px] overflow-hidden rounded-2xl">
                <AppImage
                  src="/assets/images/banner-swp.png"
                  alt="Modern SWP manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-primary flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <p className="text-white font-black text-2xl leading-none">
                    39+
                  </p>

                  <p className="text-white/80 text-[9px] font-bold tracking-widest uppercase mt-2">
                    YEARS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              COMPANY HISTORY — คงเดิม
          ====================================================== */}
          <div
            id="company-history"
            className="mt-20 pt-12 border-t border-border scroll-mt-24"
          >
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-foreground mb-8">
              COMPANY HISTORY
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

              {/* 1988 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="text-white font-black text-xs">
                      1988
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-black text-sm uppercase tracking-wide text-foreground mb-1">
                    ก่อตั้งบริษัท
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    คุณอรรถวุฒิ รัตนสุวรรณ ก่อตั้ง ห้างหุ้นส่วนจำกัด
                    <br />
                    สหวัฒนาพลาสติก ด้วยวิสัยทัศน์ด้านการผลิตพลาสติกคุณภาพสูง
                  </p>
                </div>
              </div>

              {/* 37+ */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="text-white font-black text-xs">
                      39+
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-black text-sm uppercase tracking-wide text-foreground mb-1">
                    การเติบโต
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    เติบโตต่อเนื่องกว่า 39 ปี
                    ผ่านการพัฒนาคุณภาพ เทคโนโลยี
                    และทรัพยากรบุคคล
                  </p>
                </div>
              </div>

              {/* 2017 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="text-white font-black text-xs">
                      2017
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-black text-sm uppercase tracking-wide text-foreground mb-1">
                    จดทะเบียนบริษัท
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    จดทะเบียนเป็น บริษัท สหวัฒนาพลาสติก จำกัด
                    เมื่อวันที่ 1 ธันวาคม พ.ศ. 2560
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}