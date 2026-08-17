import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ManufacturingHero from '@/app/manufacturing/components/ManufacturingHero';
import QualitySection from '@/app/manufacturing/components/QualitySection';
import EthicsSection from '@/app/manufacturing/components/EthicsSection';
import CertificationsSection from '@/app/manufacturing/components/CertificationsSection';
// import OurCustomersSection from '@/app/manufacturing/components/OurCustomersSection';
import CustomerLogosSection from '@/app/components/CustomerLogosSection';
import CapabilitySection from '@/app/manufacturing/components/CapabilitySection';
import ManufacturingStandardsSection from '@/app/manufacturing/components/ManufacturingStandardsSection';

export const metadata = {
  title: 'Manufacturing & Standards | SWP',
  description:
    'กระบวนการผลิต มาตรฐานคุณภาพ จรรยาบรรณ การรับรองมาตรฐานสากล และลูกค้าของเรา — บริษัท สหวัฒนาพลาสติก จำกัด',
};

export default function ManufacturingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Manufacturing & Standards' }]} />
        </div>
        <ManufacturingHero />
        <CapabilitySection />
        <ManufacturingStandardsSection />
        <QualitySection />
        <EthicsSection />
        <CertificationsSection />
        <CustomerLogosSection />
        {/* <OurCustomersSection /> */}
      </main>
      <Footer />
    </>
  );
}
