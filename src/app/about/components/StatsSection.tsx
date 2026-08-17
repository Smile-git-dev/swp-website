'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 39, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Customers Worldwide' },
  { value: 1000, suffix: '+', label: 'Projects Completed' },
  { value: 150, suffix: '+', label: 'Skilled Professionals' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1600, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (!el) return;
            el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            setActive(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="text-center border-r border-border last:border-r-0 px-6 py-8">
      <p className="stat-counter">{count}{suffix}</p>
      <p className="text-muted-foreground text-sm font-medium mt-2 uppercase tracking-wide">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-muted border-y border-border" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}