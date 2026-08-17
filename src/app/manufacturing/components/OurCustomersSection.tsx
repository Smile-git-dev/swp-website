// 'use client';

// import React, { useEffect, useRef } from 'react';

// const industries = [
//   { name: 'Industrial & Manufacturing', nameTh: 'อุตสาหกรรมการผลิต', count: '50+', icon: '🏭' },
//   { name: 'Healthcare & Wellness', nameTh: 'สุขภาพและ Wellness', count: '30+', icon: '🏥' },
//   { name: 'Food & Packaging', nameTh: 'อาหารและบรรจุภัณฑ์', count: '40+', icon: '📦' },
//   { name: 'Automotive Parts', nameTh: 'ยานยนต์', count: '20+', icon: '🚗' },
//   { name: 'Hospitality & Consumer', nameTh: 'โรงแรมและสินค้าอุปโภค', count: '35+', icon: '🏨' },
// ];

// const testimonials = [
//   {
//     quote: 'SWP มีความสามารถในการผลิตชิ้นส่วนที่มีความแม่นยำสูง ตรงตามสเปคที่กำหนด และส่งมอบตรงเวลาทุกครั้ง',
//     company: 'บริษัท [ลูกค้า A] จำกัด',
//     industry: 'Industrial & Manufacturing',
//   },
//   {
//     quote: 'ประทับใจในระบบ QC ที่เข้มงวดและทีมงานที่ให้ความร่วมมือในการแก้ปัญหาได้อย่างรวดเร็ว',
//     company: 'บริษัท [ลูกค้า B] จำกัด',
//     industry: 'Healthcare & Wellness',
//   },
//   {
//     quote: 'SWP เป็นพาร์ทเนอร์ที่เชื่อถือได้มากกว่า 10 ปี คุณภาพสม่ำเสมอและราคาที่แข่งขันได้',
//     company: 'บริษัท [ลูกค้า C] จำกัด',
//     industry: 'Food & Packaging',
//   },
// ];

// export default function OurCustomersSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             (entry.target as HTMLElement).style.opacity = '1';
//             (entry.target as HTMLElement).style.transform = 'translateY(0)';
//           }
//         });
//       },
//       { threshold: 0.08 }
//     );
//     cardRefs.current.forEach((el) => {
//       if (el) {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(30px)';
//         observer.observe(el);
//       }
//     });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="py-20 bg-muted" aria-label="ลูกค้าของเรา">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-14">
//           <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">OUR CUSTOMERS</p>
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//             <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
//               บริษัทที่ร่วมงานกับเรา
//               <br />
//               <span className="text-primary">ในหลากหลายอุตสาหกรรม</span>
//             </h2>
//             <p className="text-muted-foreground text-sm leading-relaxed lg:max-w-sm">
//               SWP ให้บริการลูกค้าชั้นนำในหลากหลายอุตสาหกรรม ทั้งในประเทศและต่างประเทศ
//               ด้วยความไว้วางใจที่สะสมมากกว่า 37 ปี
//             </p>
//           </div>
//         </div>

//         {/* Industry Stats */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border mb-12">
//           {industries.map((ind, i) => (
//             <div
//               key={ind.name}
//               ref={(el) => { cardRefs.current[i] = el; }}
//               className="bg-white p-6 text-center group hover:bg-primary transition-colors duration-300"
//               style={{
//                 transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, background-color 0.3s ease`,
//               }}
//             >
//               <div className="text-3xl mb-3">{ind.icon}</div>
//               <p className="text-2xl font-black text-primary group-hover:text-white transition-colors">{ind.count}</p>
//               <p className="text-[10px] font-bold tracking-wider uppercase text-foreground group-hover:text-white/80 transition-colors mt-1 leading-tight">
//                 {ind.nameTh}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Testimonials */}
//         <div>
//           <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
//             WHAT OUR CUSTOMERS SAY
//           </p>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {testimonials.map((t, i) => (
//               <div
//                 key={i}
//                 ref={(el) => { cardRefs.current[industries.length + i] = el; }}
//                 className="bg-white border border-border p-8"
//                 style={{
//                   transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${(industries.length + i) * 80}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${(industries.length + i) * 80}ms`,
//                 }}
//               >
//                 <div className="text-primary text-4xl font-black leading-none mb-4 select-none">"</div>
//                 <p className="text-foreground text-sm leading-relaxed mb-6 italic">{t.quote}</p>
//                 <div className="border-t border-border pt-4">
//                   <p className="text-foreground font-black text-sm">{t.company}</p>
//                   <p className="text-primary text-[10px] font-bold tracking-wider uppercase mt-1">{t.industry}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-12 bg-white border border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div>
//             <h3 className="text-lg font-black text-foreground mb-1">พร้อมเป็นพาร์ทเนอร์กับ SWP?</h3>
//             <p className="text-muted-foreground text-sm">ติดต่อเราเพื่อหารือเกี่ยวกับความต้องการของคุณ</p>
//           </div>
//           <a
//             href="/contact"
//             className="shrink-0 inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-bold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
//           >
//             ติดต่อเรา
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
