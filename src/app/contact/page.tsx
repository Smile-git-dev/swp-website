import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ContactSection from '@/app/contact/components/ContactSection';

export const metadata = {
  title: 'Contact Us — Request a Quote | SWP',
  description:
    'Get in touch with SWP for plastic injection molding inquiries, mold development quotes, and manufacturing partnerships. Contact our team in Thailand today.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Contact' }]} />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}