import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import BrochureSection from '@/app/brochure/components/BrochureSection';

export const metadata = {
  title: 'Download Brochure | SWP',
  description:
    'Download the SWP company brochure to learn more about our plastic injection molding capabilities, products, and services.',
};

export default function BrochurePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Download Brochure' }]} />
        </div>
        <BrochureSection />
      </main>
      <Footer />
    </>
  );
}
