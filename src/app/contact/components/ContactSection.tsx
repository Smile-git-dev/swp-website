'use client';

import React, { useRef, useEffect } from 'react';

interface ContactDetail {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const contactDetails: ContactDetail[] = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: 'HEAD OFFICE & FACTORY',
    value: '32/20 ม.6 ต.บางใหญ่ อ.บางใหญ่ จ.นนทบุรี 11140',
  },

  {
    icon: (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: 'PHONE',
    value: (
      <div className="space-y-1">
        <span className="block">+66 98 259 2623</span>
        <span className="block">+66 2 927 3898</span>
        <span className="block">+66 83 293 8222</span>
      </div>
    ),
  },

  {
    icon: (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'EMAIL',
    value: (
      <div className="space-y-1">
        <span className="block">saleoffice@swppart.com</span>
        <span className="block">admin@swppart.com</span>
      </div>
    ),
  },

  {
    icon: (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0 3-4.03 3-9s-1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    label: 'WEBSITE',
    value: 'www.swp.co.th',
  },

  {
    icon: (
      <svg
        className="w-5 h-5 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: 'WORKING HOURS',
    value: 'Mon – Sat: 8:00 AM – 5:00 PM',
  },
];

export default function ContactSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const element = entry.target as HTMLElement;

              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, i * 100);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    [leftRef.current, rightRef.current].forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition =
          'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';

        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* =====================================
              LEFT: CONTACT INFORMATION
          ===================================== */}

          <div ref={leftRef}>
            <h1
              id="contact-heading"
              className="text-section-title font-black uppercase leading-tight mb-6"
            >
              LET&apos;S BUILD
              <br />
              SOMETHING GREAT
              <br />
              <span className="text-primary">TOGETHER.</span>
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              We are ready to support your projects with expertise, quality,
              and commitment. Reach out to discuss your manufacturing needs.
            </p>

            <div className="space-y-8">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                    {detail.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      {detail.label}
                    </p>

                    <div className="text-foreground text-sm leading-relaxed">
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================
              RIGHT: GOOGLE MAP
          ===================================== */}

          <div ref={rightRef}>
            <div className="h-80 bg-muted border border-border flex items-center justify-center overflow-hidden relative">

              <div className="absolute inset-0">
                <iframe
                  title="Sahawattana Plastic Co., Ltd. — Bang Yai, Nonthaburi"
                  src="https://www.google.com/maps?q=13.830354597813512,100.32419711349344&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="relative z-10 bg-white/90 px-4 py-2 text-xs font-bold tracking-wide text-foreground">
                Sahawattana Plastic Co., Ltd. — Bang Yai, Nonthaburi
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}