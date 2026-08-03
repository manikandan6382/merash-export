'use client';

import { useState } from 'react';
import { Package, Check, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import ProductModal from './ProductModal';

export default function ProductShowcase({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [inspectingProduct, setInspectingProduct] = useState(null);

  const categories = [
    { id: 'all', label: 'All Commodities (13)' },
    { id: 'kitchenware', label: 'Kitchenware & Utensils (11)' },
    { id: 'spices', label: 'Spices & Agro' },
    { id: 'industrial', label: 'Industrial & Hardware' },
  ];

  const products = [
    {
      id: 1,
      title: 'Stainless Steel Liquid Measuring Jug',
      subtitle: '(With Pouring Spout & Handle)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Pipavav Port (GJ)',
      badge: 'Top Exported',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-measuring-jug.png',
      specs: [
        'Precision Measuring: Calibrated for milk, water, oil & juices',
        'Spill-Free Pouring Spout: Ergonomic heavy-duty side handle',
        'Food-Grade SS 304 / SS 202: 100% Rust-proof & Hygienic'
      ],
    },
    {
      id: 2,
      title: 'Insulated Stainless Steel Travel Tumbler',
      subtitle: '(Fitted Lid & Metal Straw)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Mundra Port (GJ)',
      badge: 'High Demand',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-tumbler-straw.png',
      specs: [
        'Cold & Hot Insulation: Keeps smoothies, lassi & coffee chilled',
        'Spill-Resistant Lid: Fits car cup holders, office & travel use',
        'BPA-Free Eco Alternative: Reusable, durable & easy to sanitize'
      ],
    },
    {
      id: 3,
      title: 'Stainless Steel Lassi & Smoothie Glass',
      subtitle: '(Wide Straw & Thermal Retention)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Ahmedabad (GJ)',
      badge: 'Trending',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-lassi-glass.png',
      specs: [
        'Thermal Retention: Keeps lassi, chaas & milkshakes chilled longer',
        'Wide Stainless Straw: Ideal for thick smoothies & falooda',
        'On-The-Go Protection: Dust-proof fitted lid prevents spills'
      ],
    },
    {
      id: 4,
      title: 'Stainless Steel Classic Cookware & Carrier Set',
      subtitle: '(Thooku Chetti, Dabba, Patila & Handi)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / JNPT Terminal (GJ)',
      badge: 'OEM Quality',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-cookware-grid.jpg',
      specs: [
        '1. Top-Left: Thooku Chetti Milk Carrier (Tight lid & swinging handle for liquids)',
        '2. Middle-Left: Tiffin / Dabba Storage (Contoured body for spices & lunches)',
        '3. Right & Bottom-Left: Patila / Tapeli Vessels (Collared edge for boiling & curries)',
        '4. Bottom-Right: Handi / Eeya Chombu Pot (Wide belly for slow-cooking dal & rasam)'
      ],
    },
    {
      id: 5,
      title: 'Stainless Steel Milk & Water Mugs',
      subtitle: '(Stove Boiling & Liquid Prep)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Pipavav Port (GJ)',
      badge: 'Top Utility',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-mugs-handles.png',
      specs: [
        'Stove-Top Cooking: Safe for boiling milk, water & making tea/coffee',
        'Culinary Utility: Ideal for melting butter, soups & baby food prep',
        'Flared Pouring Rim: Wide lip for spill-free liquid transfer'
      ],
    },
    {
      id: 6,
      title: 'Stainless Steel Pouring Jugs & Mugs',
      subtitle: '(Nesting Set of 4 Capacities)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Mundra Port (GJ)',
      badge: 'Indian STEEL',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-pouring-jugs.png',
      specs: [
        'Curved Bulbous Body: Wide flared rim prevents liquid spillage',
        'Sturdy Side Handle: Ergonomic grip for milk, oil & buttermilk',
        'Nesting Set: 250ml, 500ml, 750ml & 1 Liter volume capacities'
      ],
    },
    {
      id: 7,
      title: 'Stainless Steel Rasam Sombu & Chembu',
      subtitle: '(Thermal Retaining Vessel)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Chennai Port (TN)',
      badge: 'Traditional',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-rasam-sombu.png',
      specs: [
        'Thermal Retention: Wide base & tapered neck retain heat & steam',
        'Traditional Culinary Use: Ideal for Rasam, Chaaru & milk storage',
        'Food-Grade Steel: Hygienic, rust-resistant modern alternative'
      ],
    },
    {
      id: 8,
      title: 'Thooku Chetti Milk Carrier & Storage Pots',
      subtitle: '(Wire Swinging Handle & Tight Lids)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / JNPT Terminal (GJ)',
      badge: 'Carrier Set',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-thooku-chetti.png',
      specs: [
        'Swinging Wire Handle: Safe transport for milk, buttermilk & soups',
        'Snug Airtight Lids: Keeps liquids, batters & food spill-free',
        'Set of 5 Capacities: Heavy-duty stainless steel travel dabbas'
      ],
    },
    {
      id: 9,
      title: 'Traditional Stainless Ghee Pots & Handi',
      subtitle: '(Wire Loop & Knob Top Lids)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Mundra Port (GJ)',
      badge: 'Ghee Jars',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/utensil-ghee-handi.png',
      specs: [
        'Aakar Handi Shape: Polished Indian STEEL branded storage jars',
        'Wire Loop Top Lids: Easy lifting for ghee, oil & spice storage',
        'High Shine Mirror Polish: Durable, rust-free & non-reactive'
      ],
    },
    {
      id: 10,
      title: 'Stainless Steel Thermal Hot Pot & Casserole Set',
      subtitle: '(Double Wall Insulated)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Ahmedabad (GJ)',
      badge: 'Hot Pot',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.46 PM.jpeg',
      specs: [
        'Maintains Heat 4–6 Hours: Keeps rice, curry & gravy warm',
        'Stores Cold Items: Keeps juice, fruits & salads fresh',
        'Multi-Purpose Utility: Home, Office, School, Hotels & Travel'
      ],
    },
    {
      id: 11,
      title: 'Stainless Steel Deep Handi, Lota & Kalash',
      subtitle: '(Traditional & Modern Hybrid Design)',
      category: 'kitchenware',
      hsCode: 'HS-7323.93',
      origin: 'Rajkot / Mundra Port (GJ)',
      badge: 'Handi Set',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM.jpeg',
      specs: [
        'Food-Grade Stainless Steel: SS 304 / SS 202 Options',
        'Deep Body Capacity: Plain & locking clip lids available',
        'Mirror & Satin Finish: Smooth rounded safety edges'
      ],
    },
    {
      id: 13,
      title: 'Export Quality 1121 Basmati Rice & Spices',
      subtitle: '(Extra Long Grain & Turmeric)',
      category: 'spices',
      hsCode: 'HS-1006.30',
      origin: 'Nhava Sheva / Kandla Port',
      badge: 'Bulk Agro',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.48 PM (1).jpeg',
      specs: [
        'Avg Grain Length 8.35mm+ & Organic Erode Turmeric',
        'APEDA & FSSAI Certified Export Quality',
        'Non-GMO Tested & Fumigated Moisture Packaging'
      ],
    },
    {
      id: 14,
      title: 'High Tensile Fasteners & Stainless Hardware',
      subtitle: 'Grade 8.8 / 10.9 Stainless',
      category: 'industrial',
      hsCode: 'HS-7318.15',
      origin: 'Ludhiana / Mundra Port',
      badge: 'Custom Spec',
      badgeColor: 'bg-slate-900 text-white',
      imgSrc: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM (1).jpeg',
      specs: [
        'Grade 8.8 / 10.9 Stainless Steel Bolts & Nuts',
        'Hot-Dip Galvanized & Corrosion Resistant',
        'ISO & DIN Standard Lab Test Reports'
      ],
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  // Reverse display order per user request
  const displayProducts = [...filteredProducts].reverse();

  return (
    <section id="catalog" className="py-12 bg-[#f8fafc] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header with clean flex layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-200/80 pb-6">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 mb-1 block">
              EXPORT COMMODITIES & STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-title text-slate-900">
              Our Export Catalog <span className="text-amber-600 text-lg sm:text-2xl font-sans font-bold">({products.length})</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none max-w-full">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
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

        {/* Product Cards Grid (Reversed Display Order) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map(product => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Frame with object-cover Image */}
                <div 
                  className="relative w-full h-56 bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setInspectingProduct(product)}
                >
                  
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
                      onClick={(e) => { e.stopPropagation(); setInspectingProduct(product); }}
                      className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-600" /> Inspect Full Specs
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 space-y-2.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                    {product.origin}
                  </span>
                  
                  <h3 
                    onClick={() => setInspectingProduct(product)}
                    className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors cursor-pointer"
                  >
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
              <div className="p-5 pt-0 flex items-center justify-between">
                <button
                  onClick={() => setInspectingProduct(product)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>10+ Full Specs</span>
                </button>

                <button
                  onClick={onOpenQuote}
                  className="text-xs font-bold text-blue-700 hover:text-amber-600 transition-colors flex items-center gap-1 group/btn"
                >
                  <span>Freight Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full 10-12 Detailed Specifications Modal */}
      {inspectingProduct && (
        <ProductModal
          product={inspectingProduct}
          onClose={() => setInspectingProduct(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
}
