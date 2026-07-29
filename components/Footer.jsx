'use client';

import { Phone, MessageCircle, ShieldCheck, Award, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenQuote, onSelectTab }) {
  return (
    <footer className="bg-[#05070d] text-slate-400 text-xs border-t border-slate-800/80 pt-10 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Instant Export Support Callout Banner (Matching Screenshot Image 2 & 3) */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#0a0f1e] border border-blue-900/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1 text-center md:text-left relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
              INSTANT EXPORT SUPPORT
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white font-serif-title">
              Ready to Export Your Cargo Worldwide?
            </h3>
            <p className="text-xs text-slate-300">
              Get guaranteed container space, customs clearance, and real-time vessel tracking.
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10 shrink-0">
            {/* Call Us 24/7 Button */}
            <a
              href="tel:9876543210"
              className="px-5 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-extrabold flex items-center gap-2.5 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <div className="text-left">
                <span className="text-[9px] text-slate-400 block font-normal leading-none">Call Us 24/7</span>
                <span className="text-xs text-white font-bold">+91 98765 43210</span>
              </div>
            </a>

            {/* WhatsApp Us Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Merash%20Express,%20I%20want%20to%20export%20my%20cargo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Footer 4-Column Layout (Matching Screenshot Image 2 & 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-sm">
                ME
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-brand">
                  MERASH <span className="text-amber-400">EXPRESS</span>
                </span>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
                  GLOBAL FREIGHT & EXPORT LOGISTICS
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Premier international freight forwarder providing end-to-end logistics solutions with reliable service and global reach.
            </p>

            <div className="flex items-center gap-4 pt-2 text-[11px] text-slate-300 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> ISO 9001:2015 Certified</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-emerald-400" /> IATA Accredited</span>
            </div>
          </div>

          {/* Export Services */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Export Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onSelectTab('catalog')} className="hover:text-amber-400 transition-colors">Sea Freight (FCL / LCL)</button></li>
              <li><button onClick={() => onSelectTab('catalog')} className="hover:text-amber-400 transition-colors">Air Express (IATA)</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-amber-400 transition-colors">Customs Clearance</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-amber-400 transition-colors">Cargo Insurance</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-amber-400 transition-colors">Door-to-Door Delivery</button></li>
              <li><button onClick={() => onSelectTab('gallery')} className="hover:text-amber-400 transition-colors">Packaging & Stuffing</button></li>
            </ul>
          </div>

          {/* Major Freight Hubs */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Major Freight Hubs</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Nhava Sheva (JNPT), Mumbai</li>
              <li>Mundra Port, Gujarat</li>
              <li>Pipavav Port, Gujarat</li>
              <li>Kandla Port, Gujarat</li>
              <li>Cochin Port, Kerala</li>
              <li>ICD & CFS Network Pan India</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:9876543210" className="font-bold hover:text-amber-400">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">export@merashexpress.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Merash Logistics Tower, Marine Drive, Navi Mumbai - 400 707</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Matching Screenshot Image 2 & 3) */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Merash Express. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
