import React from 'react';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SWP — Sahawattana Plastic Co., Ltd. | Qualified Plastic Manufacturing Since 1988',
    template: '%s | SWP',
  },
  description:
    'บริษัท สหวัฒนาพลาสติก จำกัด (Sahawattana Plastic Co., Ltd.) ผู้นำด้านการผลิตพลาสติก Injection Molding และพัฒนาแม่พิมพ์ ประสบการณ์กว่า 39 ปี รับรองมาตรฐาน ISO 9001, ISO 14001, ISO 45001 และ SMETA',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
</head>
      <body className={manrope.className}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}