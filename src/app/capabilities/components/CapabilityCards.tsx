'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const capabilities = [
{
  title: 'MOLD DEVELOPMENT',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f52c6f0-1779044868607.png",
  imageAlt: 'Precision mold development tooling on CNC machine, metallic steel mold components, bright workshop lighting',
  points: [
  '3D Design & Engineering',
  'Mold Flow Analysis',
  'In-house Mold Making',
  'Prototype & Trial Runs']

},
{
  title: 'INJECTION MOLDING',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c156ee73-1772068519069.png",
  imageAlt: 'Industrial injection molding machines in factory floor, rows of large machines with orange safety guards, bright production environment',
  points: [
  '80–650 Ton Machines',
  'Multi-shot & Insert Molding',
  'High Precision & Consistency',
  'Clean Room Production']

},
{
  title: 'QUALITY ASSURANCE',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1098d586a-1778593412110.png",
  imageAlt: 'Quality control inspection station with precision measuring instruments and calipers on white table, bright clinical lighting',
  points: [
  'Advanced Measuring Equipment',
  'Strict Quality Control',
  'Continuous Improvement',
  'ISO 9001 Certified']

},
{
  title: 'VALUE ADDED SERVICES',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1715f7cdd-1768822494793.png",
  imageAlt: 'Product assembly and packaging line with workers in clean suits, bright well-lit modern production facility',
  points: [
  'Assembly & Packaging',
  'Printing & Decoration',
  'Custom Solutions',
  'Logistics Support']

}];


export default function CapabilityCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-muted" aria-label="Capability details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) =>
          <div
            key={cap.title}
            ref={(el) => {cardRefs.current[i] = el;}}
            className="capability-card bg-white border border-border overflow-hidden"
            style={{ transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms` }}>
            
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <AppImage
                src={cap.image}
                alt={cap.imageAlt}
                width={400}
                height={192}
                className="capability-img w-full h-full object-cover" />
              
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-8 h-0.5 bg-primary mb-3" />
                <h2 className="text-sm font-black tracking-[0.1em] uppercase text-foreground mb-4">{cap.title}</h2>
                <ul className="space-y-2">
                  {cap.points.map((pt) =>
                <li key={pt} className="flex items-start gap-2">
                      <span className="text-primary font-bold text-sm mt-0.5">•</span>
                      <span className="text-muted-foreground text-sm leading-relaxed">{pt}</span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}