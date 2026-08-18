'use client';

import React, { useEffect, useRef } from 'react';
import { FileText, Download } from 'lucide-react';

const policies = [
  {
    number: '01',
    title: 'คุณภาพ',
    desc: 'ผลิตสินค้าที่มีคุณภาพมาตรฐานที่กำหนด เพื่อตอบสนองความพึงพอใจของลูกค้า และพัฒนาองค์กรสู่มาตรฐานสากล',
  },
  {
    number: '02',
    title: 'ความปลอดภัย & อาชีวอนามัย',
    desc: 'ดูแลสุขภาพและความปลอดภัยในการทำงาน ให้ครอบคลุมถึงผู้รับเหมา ผู้เยี่ยมชม ผู้มีส่วนได้ส่วนเสีย และบุคคลที่อยู่ภายใต้การควบคุมของบริษัท',
  },
  {
    number: '03',
    title: 'สิ่งแวดล้อม',
    desc: 'ดูแลสิ่งแวดล้อมในการดำเนินงาน โดยมุ่งเน้นการลดของเสีย การลดมลพิษ และการอนุรักษ์ทรัพยากรธรรมชาติ',
  },
  {
    number: '04',
    title: 'พัฒนาบุคลากร',
    desc: 'ส่งเสริมและพัฒนาศักยภาพของพนักงานทุกคน ให้เติบโตอย่างมั่นคงไปพร้อมกับบริษัท',
  },
];

// ไฟล์จรรยาบรรณบริษัท
// วางไฟล์ไว้ที่:
// public/assets/documents/SD-QMR.pdf
const CODE_OF_CONDUCT_FILE = '/assets/documents/SD-QMR.pdf';

export default function CompanyPolicySection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      {
        threshold: 0.15,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-muted border-y border-border py-0"
      aria-label="นโยบายองค์กร บริษัท สหวัฒนาพลาสติก จำกัด"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="py-10 text-center border-b border-border">

          <p className="text-xs font-black tracking-[0.3em] uppercase text-muted-foreground mb-1">
            COMPANY POLICY
          </p>

          <h2 className="text-sm font-black tracking-[0.15em] text-foreground mb-2">
            นโยบายองค์กร บริษัท สหวัฒนาพลาสติก จำกัด (SWP)
          </h2>

          <div className="w-10 h-0.5 bg-primary mx-auto mb-4" />

          <p
            lang="th"
            className="
              text-sm
              text-muted-foreground
              leading-relaxed
              max-w-3xl
              mx-auto
              [word-break:keep-all]
              break-words
            "
          >
            “ผลิตสินค้าและบริการที่ตอบสนองความพึงพอใจของลูกค้า
            และพัฒนาองค์กรสู่มาตรฐานสากล ในด้านคุณภาพ ความปลอดภัย
            อาชีวอนามัยของผู้มีส่วนได้เสีย และเป็นมิตรต่อสิ่งแวดล้อม
            พร้อมทั้งพัฒนาบุคลากรให้มีคุณภาพ มีศักยภาพ
            และเติบโตไปพร้อมกับองค์กร”
          </p>

        </div>


        {/* ================= POLICY STRIP ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            divide-y
            sm:divide-y-0
            sm:divide-x
            divide-border
            border-b
            border-border
          "
        >

          {policies.map((policy, i) => (
            <div
              key={policy.number}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="
                flex
                items-start
                gap-3
                px-5
                py-6
                scroll-reveal-hidden
              "
              style={{
                transition: `
                  opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms,
                  transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms
                `,
              }}
            >

              {/* Number */}
              <div
                className="
                  shrink-0
                  w-11
                  h-11
                  border
                  border-primary
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-sm font-black text-primary leading-none">
                  {policy.number}
                </span>
              </div>


              {/* Content */}
              <div className="min-w-0 flex-1">

                <h3
                  lang="th"
                  className="
                    text-sm
                    font-black
                    tracking-[0.02em]
                    text-foreground
                    leading-snug
                    mb-2
                    [word-break:keep-all]
                    break-words
                  "
                >
                  {policy.title}
                </h3>

                <p
                  lang="th"
                  className="
                    text-xs
                    text-muted-foreground
                    leading-6
                    [word-break:keep-all]
                    break-words
                  "
                >
                  {policy.desc}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* ================= CODE OF CONDUCT ================= */}
        <div className="py-8">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
              bg-background
              border
              border-border
              px-6
              py-5
            "
          >

            {/* Document Information */}
            <div className="flex items-center gap-4">

              <div
                className="
                  shrink-0
                  w-11
                  h-11
                  border
                  border-primary
                  flex
                  items-center
                  justify-center
                "
              >
                <FileText className="w-5 h-5 text-primary" />
              </div>

              <div>

                <h3
                  className="
                    text-sm
                    font-black
                    tracking-[0.06em]
                    text-foreground
                    mb-1
                  "
                >
                  จรรยาบรรณบริษัท
                </h3>

                <p
                  lang="th"
                  className="
                    text-xs
                    text-muted-foreground
                    leading-relaxed
                    [word-break:keep-all]
                    break-words
                  "
                >
                  ดาวน์โหลดเอกสารจรรยาบรรณและแนวปฏิบัติของบริษัทฉบับเต็ม
                </p>

              </div>

            </div>


            {/* Download Button */}
            <a
              href={CODE_OF_CONDUCT_FILE}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="
                inline-flex
                items-center
                gap-2
                shrink-0
                px-5
                py-3
                bg-primary
                text-primary-foreground
                text-xs
                font-black
                tracking-[0.08em]
                uppercase
                hover:opacity-90
                transition-opacity
              "
            >
              <Download className="w-4 h-4" />
              เปิด / ดาวน์โหลดไฟล์
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}