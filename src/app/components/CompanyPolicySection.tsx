'use client';

import React, { useEffect, useRef } from 'react';
import { FileText, Download } from 'lucide-react';

const policies = [
  {
    number: '01',
    title: 'คุณภาพ',
    desc: 'ผลิตสินค้าที่มีคุณภาพตามมาตรฐานที่กำหนด เพื่อตอบสนองความพึงพอใจของลูกค้า และพัฒนาองค์กรสู่มาตรฐานสากล',
  },
  {
    number: '02',
    title: 'ความปลอดภัย & อาชีวอนามัย',
    desc: 'ดูแลสุขภาพและความปลอดภัยในการทำงาน ให้ครอบคลุมถึงผู้รับเหมา ผู้เยี่ยมชม ผู้มีส่วนได้ส่วนเสีย และบุคคลที่อยู่ภายใต้การควบคุมของบริษัท',
  },
  {
    number: '03',
    title: 'สิ่งแวดล้อม',
    desc: 'ดูแลสิ่งแวดล้อมในการดำเนินงาน โดยมุ่งเน้นการลดของเสีย ลดมลพิษ ลดการใช้พลังงาน และการอนุรักษ์ทรัพยากรธรรมชาติ',
  },
];

// ไฟล์จรรยาบรรณบริษัท
// วางไฟล์ไว้ที่: public/assets/documents/SD-QMR.pdf
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
      aria-label="นโยบายบริษัท"
    >
      {/* Header strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 text-center border-b border-border">
          <p className="text-xs font-black tracking-[0.3em] uppercase text-muted-foreground mb-1">
            COMPANY POLICY
          </p>

          <h2 className="text-sm font-black tracking-[0.25em] uppercase text-foreground mb-2">
            นโยบายบริษัท
          </h2>

          <div className="w-10 h-0.5 bg-primary mx-auto mb-4" />

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            "ผลิตสินค้าและบริการที่ตอบสนองความพึงพอใจของลูกค้า
            พร้อมพัฒนาองค์กรสู่มาตรฐานสากล ในด้านคุณภาพ ความปลอดภัย
            อาชีวอนามัยของผู้มีส่วนได้ส่วนเสีย และเป็นมิตรต่อสิ่งแวดล้อม"
          </p>
        </div>

        {/* 3-column policy strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {policies.map((policy, i) => (
            <div
              key={policy.number}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex items-start gap-5 p-8 scroll-reveal-hidden"
              style={{
                transition: `
                  opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms,
                  transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms
                `,
              }}
            >
              {/* Number badge */}
              <div className="shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center">
                <span className="text-base font-black text-primary leading-none">
                  {policy.number}
                </span>
              </div>

              {/* Policy content */}
              <div>
                <h3 className="text-sm font-black tracking-[0.08em] uppercase text-foreground mb-2">
                  {policy.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {policy.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* จรรยาบรรณบริษัท */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-background border border-border p-6">
            {/* Document information */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>

              <div>
                <h3 className="text-sm font-black tracking-[0.08em] uppercase text-foreground mb-1">
                  จรรยาบรรณบริษัท
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  ดาวน์โหลดเอกสารจรรยาบรรณและแนวปฏิบัติของบริษัทฉบับเต็ม
                </p>
              </div>
            </div>

            {/* Open / Download button */}
            <a
              href={CODE_OF_CONDUCT_FILE}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 shrink-0 px-5 py-3 bg-primary text-primary-foreground text-xs font-black tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
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