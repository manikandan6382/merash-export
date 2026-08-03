'use client';

import { useState } from 'react';
import { Image as ImageIcon, Eye, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShipmentGallery({ onSelectImage }) {
  const images = [
    {
      id: 1,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.46 PM.jpeg',
      title: 'Turmeric Stuffing - 20ft FCL',
      category: 'Agro Export',
      location: 'Nhava Sheva Terminal',
    },
    {
      id: 2,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.47 PM.jpeg',
      title: 'CNC Parts Stuffing - 40ft HC',
      category: 'Packaging',
      location: 'Pipavav Port',
    },
    {
      id: 3,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.48 PM (1).jpeg',
      title: 'Combed Cotton Yarn - 20ft',
      category: 'Packaging',
      location: 'Surat Port',
    },
    {
      id: 4,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.48 PM.jpeg',
      title: 'Hardware Export - 20ft FCL',
      category: 'Port Dispatch',
      location: 'Mundra Port',
    },
    {
      id: 5,
      title: 'Basmati Rice Export - 40ft HC',
      category: 'Agro Export',
      location: 'Kandla Port',
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM (1).jpeg',
    },
    {
      id: 6,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM (2).jpeg',
      title: 'Fresh Produce Reefer - 40ft',
      category: 'Cold Chain',
      location: 'JNPT Reefer Terminal',
    },
    {
      id: 7,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.49 PM.jpeg',
      title: 'ISPM-15 Wooden Pallet',
      category: 'Packaging',
      location: 'Heat Treated & Certified',
    },
    {
      id: 8,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.50 PM (1).jpeg',
      title: 'Trucked & Strapped',
      category: 'Port Dispatch',
      location: 'Ready for Vessel Loading',
    },
    {
      id: 9,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.50 PM.jpeg',
      title: 'Export Documentation',
      category: 'Custom Clearance',
      location: 'Cleared & Approved',
    },
    {
      id: 10,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.51 PM (1).jpeg',
      title: 'Container Onboard',
      category: 'Port Dispatch',
      location: 'Vessel Stowage Confirmed',
    },
    {
      id: 11,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.51 PM (2).jpeg',
      title: 'Seal Verification',
      category: 'Custom Clearance',
      location: 'Port Authority Verified',
    },
    {
      id: 12,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.51 PM.jpeg',
      title: 'Gate Out',
      category: 'Port Dispatch',
      location: 'En Route to Port',
    },
    {
      id: 13,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.52 PM (1).jpeg',
      title: 'Barcoded Cargo RFID Scan',
      category: 'Custom Clearance',
      location: 'JNPT Customs Terminal',
    },
    {
      id: 14,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.52 PM.jpeg',
      title: '40ft High Cube Container Sealing',
      category: 'Packaging',
      location: 'Gateway Terminal INNSA',
    },
    {
      id: 15,
      src: '/images/WhatsApp Image 2026-07-28 at 2.23.53 PM.jpeg',
      title: 'Vessel Departure Channel',
      category: 'Port Dispatch',
      location: 'Outer Anchorage Corridor',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Port Dispatch', 'Custom Clearance', 'Agro Export', 'Packaging', 'Cold Chain'];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-14 bg-[#070a10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-1 block">
              AUTHENTIC DISPATCH PROOF GALLERY
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif-title text-white">
              Actual Export Stuffings & Container Operations
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Photographic evidence from our actual container stuffings, customs seals, and port departures across India freight terminals.
            </p>
          </div>

          {/* User-Friendly Flex Wrap Category Filter Pills (No Shift+Scroll Required!) */}
          <div className="flex flex-wrap items-center gap-2 max-w-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 15 Real Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-44 md:h-52 rounded-xl overflow-hidden bg-slate-950 cursor-pointer border border-slate-800 hover:border-amber-400 transition-all duration-300 shadow-md"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag Badge */}
              <span className="absolute top-2 left-2 text-[8px] font-extrabold px-1.5 py-0.5 rounded bg-slate-900/90 text-amber-400 border border-amber-400/20 backdrop-blur-md">
                {img.category}
              </span>

              {/* Bottom Title & Location */}
              <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 space-y-0.5">
                <h4 className="text-[10px] font-bold text-white leading-tight truncate">
                  {img.title}
                </h4>
                <p className="text-[8px] text-slate-400 truncate">
                  {img.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)}
            className="absolute left-4 z-50 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredImages.length)}
            className="absolute right-4 z-50 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-3">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-700"
            />
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-amber-400 px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                Image {lightboxIndex + 1} of {filteredImages.length} — {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="text-base font-bold text-white">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-400">
                Terminal Location: {filteredImages[lightboxIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
