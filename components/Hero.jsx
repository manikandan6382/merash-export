'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';

export default function Hero({ onSelectTab }) {
  const liveUpdates = [
    "🚢 MSC INBARID 24328 ➔ Nhava Sheva (India) — 3 hrs ago",
    "✈️ CMA CGM TAGE 8041 ➔ Jebel Ali (UAE) — 29 min ago",
    "⚓ COSCO SHIPPING TAIPEI ➔ Rotterdam (NL) — 1 hr ago",
    "📦 EVER GIVEN V-902 ➔ Port of Singapore — 2 hrs ago",
  ];

  return (
    <section className="relative bg-[#070a10] text-white w-full overflow-hidden">
      
      {/* Top Live Port Feed Ticker Bar */}
      <div className="bg-[#0b101d] text-white py-2 px-4 border-y border-slate-800/80 mb-6 pb-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 shrink-0 text-[10px] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            LIVE PORT FEED
          </span>
          
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="animate-marquee flex gap-8 text-slate-300 font-mono text-[11px]">
              {liveUpdates.concat(liveUpdates).map((update, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  {update}
                  <span className="text-slate-700">|</span>
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => onSelectTab('track')}
            className="text-[11px] font-bold text-amber-400 hover:underline shrink-0 whitespace-nowrap hidden sm:inline"
          >
            View All Updates ➔
          </button>
        </div>
      </div>

      {/* 100% END-TO-END EDGE-TO-EDGE FULL WIDTH HERO BANNER (Height set to 450px) */}
      <div className="w-full left-0 right-0 m-0 p-0 overflow-hidden">
        <div className="w-full h-[450px] sm:h-[520px] md:h-[580px] lg:h-[650px] relative flex items-center">
          
          {/* Sunset Container Vessel Background Image */}
          <img
            src="/images/full-hero-ship.png"
            alt="Merash Export Global Freight Container Vessel"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a10]/90 via-[#070a10]/60 to-transparent" />

          {/* Clean Content Overlay (Title, Description & Start Call CTAs ONLY) */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-400 text-[11px] font-extrabold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INTERNATIONAL FREIGHT & EXPORT LOGISTICS</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-lg">
                Global Container Exports <br />
                <span className="font-serif-title italic font-normal text-amber-400">
                  Engineered for Exporters
                </span>
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed drop-shadow max-w-xl">
                Exporting spices, agricultural commodities, textiles, stainless steel utensils, and industrial products seamlessly. Guaranteed port container slots, 100% customs clearance, and 24/7 vessel tracking.
              </p>

              {/* Action Buttons: Start Call & WhatsApp */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Start Call Button */}
                <a
                  href="tel:9876543210"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs sm:text-sm font-extrabold shadow-2xl shadow-amber-500/30 hover:scale-[1.03] transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call +91 98765 43210</span>
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  href="https://wa.me/919876543210?text=Hi%20Merash%20Export,%20I%20want%20to%20inquire%20about%20export%20freight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>

                {/* Track Container Button */}
                <button
                  onClick={() => onSelectTab('track')}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white text-xs sm:text-sm font-bold hover:border-amber-400 transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Track Shipment</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
