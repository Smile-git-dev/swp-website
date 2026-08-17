import React from 'react';
import AppImage from '@/components/ui/AppImage';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-border overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="h-52 overflow-hidden bg-muted">
        <AppImage
          src={product.image}
          alt={product.imageAlt}
          width={480}
          height={208}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-2 py-1 mb-3">
          {product.category}
        </span>

        <div className="w-6 h-0.5 bg-primary mb-3" />
        <h3 className="text-sm font-black tracking-[0.05em] uppercase text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* Specs */}
        {product.specs.length > 0 && (
          <div className="border-t border-border pt-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              KEY SPECS
            </p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label}>
                  <dt className="text-[10px] text-muted-foreground uppercase tracking-wide">{spec.label}</dt>
                  <dd className="text-xs font-semibold text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
