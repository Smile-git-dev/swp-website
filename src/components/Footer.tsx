import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================
            MAIN FOOTER GRID
        ===================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* =====================================
              BRAND COLUMN
          ===================================== */}

          <div className="lg:col-span-1">

            {/* Logo สีแดงของ SWP */}
            <div className="mb-4">
              <AppLogo size={40} />
            </div>

            <p className="text-white/60 text-sm font-light leading-relaxed">
              บริษัท สหวัฒนาพลาสติก จำกัด (SWP) ผู้นำด้านการผลิตพลาสติก
              Injection Molding และพัฒนาแม่พิมพ์ ด้วยประสบการณ์กว่า 37 ปี
              เรามุ่งมั่นส่งมอบผลิตภัณฑ์คุณภาพสูง นวัตกรรม
              และคุณค่าระยะยาวแก่ลูกค้า
            </p>

          </div>


          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-5">
              QUICK LINKS
            </h4>

            <ul className="space-y-3">

              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                {
                  label: 'Manufacturing & Standards',
                  href: '/manufacturing',
                },
                {
                  label: 'Download Brochure',
                  href: '/brochure',
                },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>


          {/* =====================================
              CONTACT INFO
          ===================================== */}

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-5">
              CONTACT US
            </h4>

            <ul className="space-y-4">

              {/* Phone */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <div>
                  <p className="text-white/70 text-sm">
                    +66 2927 7386-8
                  </p>

                  <p className="text-white/70 text-sm">
                    +66 8 259 2623
                  </p>

                  <p className="text-white/70 text-sm">
                    +66 8 3293 8222
                  </p>
                </div>
              </li>


              {/* Email */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <div>
                  <p className="text-white/70 text-sm">
                    saleoffice@swppart.com
                  </p>

                  <p className="text-white/70 text-sm">
                    admin@swppart.com
                  </p>
                </div>
              </li>


              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 +0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="text-white/70 text-sm">
                  32/20 ม.6 ต.บางใหญ่ อ.บางใหญ่
                  <br />
                  จ.นนทบุรี 11140
                </span>
              </li>

            </ul>
          </div>

        </div>


        {/* =====================================
            BOTTOM BAR
        ===================================== */}

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-white/40 text-xs tracking-wide">
            © 2025 Sahawattana Plastic Co., Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="#"
              className="text-white/40 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-white/40 text-xs hover:text-white transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================
          DECORATIVE FOOTER TEXT
      ===================================== */}

      <div className="mt-8 overflow-hidden">
        <p className="footer-big-text text-center tracking-widest select-none">
          SWP
        </p>
      </div>

    </footer>
  );
}