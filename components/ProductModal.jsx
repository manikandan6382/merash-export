'use client';

import { X, Check, ShieldCheck, Phone, MessageCircle, ArrowRight, Award, Package, Box } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-amber-400 hover:text-slate-950 transition-all border border-slate-700 shadow-lg"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Photo Inspection */}
          <div className="lg:col-span-5 relative bg-slate-950 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 min-h-[320px]">
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 self-start z-10 font-mono">
              {product.hsCode}
            </span>

            <div className="relative w-full h-72 my-4 rounded-2xl overflow-hidden border border-slate-800">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1 text-slate-300 text-xs">
              <span className="text-[10px] uppercase font-bold text-amber-400 block">{product.origin}</span>
              <p className="font-extrabold text-white text-sm">{product.title}</p>
            </div>
          </div>

          {/* Right Column: Full 10-12 Detailed Specifications */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 block">
                COMPREHENSIVE EXPORT SPECIFICATIONS
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {product.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{product.subtitle}</p>
            </div>

            {/* Spec Section 1: Material Grade */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-500" /> 1. Material Quality & Grade
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> SS 304 (Food Grade – Preferred for Export)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> SS 202 (Budget Export Option)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> 100% Rust-Proof & Corrosion Resistant</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Non-Toxic & 100% BPA-Free Certified</li>
              </ul>
            </div>

            {/* Spec Section 2: Capacity, Dimensions & Gauge */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Box className="w-4 h-4 text-blue-500" /> 2. Capacity, Size & Gauge Thickness
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Nesting Standard Sizes</span>
                  <span className="font-extrabold text-slate-800 dark:text-white">250 ml | 500 ml | 750 ml | 1 Liter</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Gauge Thickness</span>
                  <span className="font-extrabold text-slate-800 dark:text-white">0.4 mm – 0.8 mm Heavy Base</span>
                </div>
              </div>
            </div>

            {/* Spec Section 3: Finish & Design */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-500" /> 3. Finish & Safety Edges
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Mirror Polish (High Shine Premium Look)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Matt / Satin Finish (Modern Style)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Smooth Safety Edges (No Sharp Cuts)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Traditional + Modern Hybrid Design</li>
              </ul>
            </div>

            {/* Spec Section 4: Primary Uses & Utility */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Package className="w-4 h-4 text-indigo-500" /> 4. Vessel Types & Primary Uses
              </h4>
              
              {product.id === 4 ? (
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold text-sm shrink-0">1️⃣</span>
                    <span><strong>Top-Left (Milk Can / Thooku Chetti):</strong> Transporting liquids (milk, buttermilk, rasam, batters) with tight lid & swinging wire handle to prevent spills.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold text-sm shrink-0">2️⃣</span>
                    <span><strong>Middle-Left (Tiffin / Dabba):</strong> Storing dry ingredients, snacks, spices, or packing lunches with contoured body & snug lid.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-sm shrink-0">3️⃣</span>
                    <span><strong>Right & Bottom-Left (Patila / Tapeli):</strong> Boiling milk, water & cooking rice, sambar, rasam & curries with collared edge for easy gripping.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold text-sm shrink-0">4️⃣</span>
                    <span><strong>Bottom-Right (Handi / Eeya Chombu):</strong> Slow-cooking rasam, dal, payasam & storing curd with wide belly & narrow heat-retaining neck.</span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">🍛</span>
                    <span><strong>Hot Food Thermal Storage:</strong> Keeps rice, curry & gravy warm 4–6 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">🥛</span>
                    <span><strong>Liquid Prep & Transport:</strong> Ideal for boiling milk, water, tea & liquid storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">🚗</span>
                    <span><strong>Multi-Purpose Utility:</strong> Home, Office, School, Hotels, Catering & Long Journeys</span>
                  </li>
                </ul>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => { onClose(); onOpenQuote(); }}
                className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all"
              >
                <span>Request Export Freight Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/918940190380?text=Hi%20Merash%20Exporters,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
