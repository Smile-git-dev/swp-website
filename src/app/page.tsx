import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import FeatureStrip from '@/app/components/FeatureStrip';
import CompanyPolicySection from '@/app/components/CompanyPolicySection';
import AboutUsSection from '@/app/components/AboutUsSection';

export const metadata = {
  title: 'SWP — Sahawattana Plastic Co., Ltd. | Qualified Plastic Manufacturing Since 1988',
  description:
    'บริษัท สหวัฒนาพลาสติก จำกัด (SWP) ผู้นำด้านการผลิตพลาสติก Injection Molding และพัฒนาแม่พิมพ์ ประสบการณ์กว่า 39 ปี รับรองมาตรฐาน ISO 9001, ISO 14001, ISO 45001 และ SMETA',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureStrip />
        <AboutUsSection />
        <CompanyPolicySection />        
      </main>
      <Footer />
    </>
  );
}