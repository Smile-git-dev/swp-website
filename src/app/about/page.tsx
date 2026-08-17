import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import AboutHero from '@/app/about/components/AboutHero';
import StatsSection from '@/app/about/components/StatsSection';
import HistorySection from '@/app/about/components/HistorySection';

export const metadata = {
  title: 'About Us — Sahawattana Plastic Co., Ltd. (SWP)',
  description:
    'เรียนรู้เกี่ยวกับ บริษัท สหวัฒนาพลาสติก จำกัด (SWP) — ประวัติบริษัท วิสัยทัศน์ พันธกิจ และความมุ่งมั่นด้านคุณภาพการผลิตพลาสติกกว่า 39 ปี',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
        </div>
        <AboutHero />
        <StatsSection />
        <HistorySection />
      </main>
      <Footer />
    </>
  );
}