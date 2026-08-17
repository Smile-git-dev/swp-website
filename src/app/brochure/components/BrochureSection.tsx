/**
 * BROCHURE SECTION
 * ================
 * To change the catalog PDF:
 *   1. Place your new PDF in /public/assets/brochures/
 *   2. Update the `href` value below
 *   3. Update `name`, `description`, `edition` if needed
 */

import React from 'react';
import Link from 'next/link';

const CATALOG = {
  name: 'SWP Product Catalog',
  description:
    'แคตตาล็อกผลิตภัณฑ์และบริการของ SWP รวมข้อมูลกำลังการผลิต มาตรฐานคุณภาพ และบริการฉีดขึ้นรูปพลาสติกครบวงจร',
  href: '/assets/brochures/catalog-swp-2027.pdf',
  edition: '2027',
  language: 'ภาษาไทย',
  format: 'PDF',
};

function DownloadIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function BrochureSection() {
  return (
    <section className="py-20 bg-background" aria-label="Download catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-muted-foreground">RESOURCES</span>
          </div>
          <h1 className="text-section-title font-black text-foreground uppercase mb-4">
            Download Our Catalog
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            เอกสารรวมข้อมูลผลิตภัณฑ์ กำลังการผลิต และมาตรฐานคุณภาพของ SWP ฉบับล่าสุด
          </p>
        </div>

        {/* Catalog panel */}
        <div className="border border-border bg-white">
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon */}
            <div className="shrink-0 w-16 h-16 border border-border flex items-center justify-center">
              <DocumentIcon />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                  {CATALOG.format}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                  {CATALOG.language}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                  Edition {CATALOG.edition}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-black tracking-[0.02em] uppercase text-foreground mb-2">
                {CATALOG.name}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                {CATALOG.description}
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0 w-full md:w-auto">
              <Link
                href={CATALOG.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-primary-dark transition-colors w-full md:w-auto"
              >
                <DownloadIcon />
                Download PDF
              </Link>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-muted border border-border p-8 md:p-12 text-center mt-6">
          <p className="section-label text-muted-foreground mb-3">NEED MORE INFORMATION?</p>
          <h3 className="text-xl font-black uppercase text-foreground mb-4">
            Talk to Our Engineering Team
          </h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Our team is ready to discuss your specific requirements, provide technical
            specifications, and prepare a custom quote for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-[0.1em] uppercase hover:bg-primary-dark transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}