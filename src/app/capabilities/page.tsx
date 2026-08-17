import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CapabilitiesHero from '@/app/capabilities/components/CapabilitiesHero';
import CapabilityCards from '@/app/capabilities/components/CapabilityCards';
import DifferentiatorsStrip from '@/app/capabilities/components/DifferentiatorsStrip';

export const metadata = {
  title: 'Capabilities — Mold Development & Injection Molding | SWP',
  description:
    "Explore SWP's full range of capabilities: mold development, plastic injection molding, quality assurance, and value-added services for global B2B customers.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Capabilities' }]} />
        </div>
        <CapabilitiesHero />
        <CapabilityCards />
        <DifferentiatorsStrip />
      </main>
      <Footer />
    </>
  );
}