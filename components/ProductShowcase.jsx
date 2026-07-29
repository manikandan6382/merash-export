'use client';

import { useState } from 'react';
import { Package, Check, ArrowRight, Eye, ChevronRight } from 'lucide-react';

export default function ProductShowcase({ onOpenQuote, onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Commodities' },
    { id: 'spices', label: 'Spices & Agro' },
    { id: 'kitchenware', label: 'Kitchenware' },
    { id: 'textiles', label: 'Textiles & Yarn' },
    { id: 'industrial', label: 'Industrial & Hardware' },
    { id: 'cold', label: 'Cold Storage' },
  ];

  const products = [
    {
      id: 1,
      title: 'Premium Organic Turmeric',
      subtitle: '(Whole & Powder)',
      category: 'spices',
      hsCode: 'HS-0910.30',
      origin: 'Erode / Nizamabad (TN)',
      badge: 'Top Exported',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.46 PM.jpeg',
      specs: ['Curcumin > 5%', 'Pesticide Tested', 'APEDA Compliant'],
    },
    {
      id: 2,
      title: 'Export Grade Combed Cotton Yarn & Fabric',
      subtitle: '100% Combed Cotton',
      category: 'textiles',
      hsCode: 'HS-5208.11',
      origin: 'Coimbatore / Surat Port',
      badge: 'High Demand',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.47 PM.jpeg',
      specs: ['100% Combed Cotton', 'OEKO-TEX Standard 100', 'Lab Tested Count'],
    },
    {
      id: 3,
      title: 'Stainless Steel Storage Container & Can',
      subtitle: 'Model: YB-01 / YB-02 (1L - 5L)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Pipavav Port',
      badge: 'OEM Quality',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.48 PM.jpeg',
      specs: ['100% Food Grade SS', 'Mirror Finish Inside/Outside', 'Rust Resistant'],
    },
    {
      id: 4,
      title: 'Export Quality 1121 Basmati & Non-Basmati Rice',
      subtitle: 'Extra Long Grain',
      category: 'spices',
      hsCode: 'HS-1006.30',
      origin: 'Nhava Sheva / Kandla',
      badge: 'Bulk Shipping',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.48 PM (1).jpeg',
      specs: ['Avg Grain Length 8.35mm+', 'Non-GMO Certified', 'FSSAI Approved'],
    },
    {
      id: 5,
      title: 'Reefer Controlled Horticulture Fresh Export',
      subtitle: 'Controlled Temp (-2°C to +13°C)',
      category: 'cold',
      hsCode: 'HS-0803.90',
      origin: 'Nashik / JNPT Terminal',
      badge: 'Cold Chain',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM.jpeg',
      specs: ['Temp Range +13°C Constant', 'Ethylene Absorber', 'Farm Gate Controlled'],
    },
    {
      id: 6,
      title: 'High Tensile Fasteners & Stainless Hardware',
      subtitle: 'Grade 8.8 / 10.9 Stainless',
      category: 'industrial',
      hsCode: 'HS-7318.15',
      origin: 'Ludhiana / Mundra Port',
      badge: 'Custom Spec',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM (1).jpeg',
      specs: ['Grade 8.8 / 10.9 Compliant', 'Hot-Dip Galvanized', 'Lab Test Report'],
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-12 bg-[#f8fafc] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="shrink-0">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 mb-1 block">
              EXPORT COMMODITIES & STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-title text-slate-900 whitespace-nowrap">
              Our Export Catalog
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 max-w-full">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 font-extrabold'
                    : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Frame with object-cover Image */}
                <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                  
                  {/* Top Badge */}
                  <span className={`absolute top-3 left-3 z-10 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${product.badgeColor}`}>
                    {product.badge}
                  </span>

                  {/* HS Code Badge */}
                  <span className="absolute top-3 right-3 z-10 text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                    {product.hsCode}
                  </span>

                  {/* Image set to object-cover */}
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  />

                  {/* Hover Inspection Button */}
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => onSelectImage(product.imgSrc)}
                      className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-600" /> Inspect Product
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 space-y-2.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                    {product.origin}
                  </span>
                  
                  <h3 className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                    {product.title} <span className="text-slate-500 font-normal">{product.subtitle}</span>
                  </h3>

                  {/* Specs Checklist */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 pt-0">
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-bold text-blue-700 hover:text-amber-600 transition-colors flex items-center gap-1 group/btn"
                >
                  <span>Request Export Freight Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
