import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import IndustriesPanels from '@/app/products/components/IndustriesPanels';
import OEMSection from '@/app/products/components/OEMSection';

export const metadata = {
  title: 'Products | SWP',
  description:
    'ด้วยประสบการณ์ด้านการผลิตพลาสติกแบบ OEM บริษัทสามารถรองรับการผลิตสินค้าให้กับหลากหลายอุตสาหกรรม',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Products' }]} />
        </div>
        <IndustriesPanels />
        <OEMSection />
      </main>
      <Footer />
    </>
  );
}
