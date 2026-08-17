'use client';

import React, { useState } from 'react';
import { products, PRODUCT_CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? products
      : products?.filter((p) => p?.category === activeCategory);

  return (
    <section className="py-16 bg-background" aria-label="Products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-muted-foreground">OUR PRODUCTS</span>
          </div>
          <h2 className="text-section-title font-black text-foreground uppercase mb-4">
            Precision-Molded Components
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            From automotive connectors to consumer packaging, SWP manufactures high-quality
            injection-molded parts across a wide range of industries and applications.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by category">
          {PRODUCT_CATEGORIES?.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase border transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white text-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filtered?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-medium">No products found in this category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center border-t border-border pt-12">
          <p className="text-muted-foreground text-sm mb-2 uppercase tracking-widest font-bold">
            Don&apos;t see what you need?
          </p>
          <h3 className="text-xl font-black uppercase text-foreground mb-4">
            We manufacture custom parts to your specifications.
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-[0.1em] uppercase hover:bg-primary-dark transition-colors"
          >
            REQUEST A CUSTOM QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}
