import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wide mb-6">
      <Link href="/" className="breadcrumb-link uppercase">HOME</Link>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="text-muted-foreground">›</span>
          {item.href ? (
            <Link href={item.href} className="breadcrumb-link uppercase">{item.label}</Link>
          ) : (
            <span className="text-foreground uppercase">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}