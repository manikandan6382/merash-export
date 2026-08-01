'use client';

import { useState, useEffect } from 'react';
import { Phone, ArrowRight, MessageCircle, Menu, X, Compass, Package, Image as ImageIcon, Briefcase, HelpCircle, PhoneCall } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav shadow-2xl py-2.5 px-3 sm:px-6 md:px-8' 
        : 'bg-[#070a10] py-3.5 px-3 sm:px-6 md:px-8 border-b border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
        >
          {/* Custom Gold Monogram Icon */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-base sm:text-lg tracking-tighter shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-white font-brand whitespace-nowrap">
                MERASH <span className="text-amber-400">EXPORT</span>
              </span>
            </div>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-widest text-slate-400 font-semibold truncate max-w-[170px] sm:max-w-none">
              GLOBAL FREIGHT & EXPORT LOGISTICS
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links (xl screens and up) */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <button 
            onClick={() => handleNavClick('catalog')} 
            className="hover:text-amber-400 transition-colors"
          >
            Export Commodities
          </button>
          <button 
            onClick={() => handleNavClick('track')} 
            className="hover:text-amber-400 transition-colors"
          >
            Live Tracking
          </button>
          <button 
            onClick={() => handleNavClick('gallery')} 
            className="hover:text-amber-400 transition-colors"
          >
            Inspection Gallery
          </button>
          <button 
            onClick={() => handleNavClick('catalog')} 
            className="hover:text-amber-400 transition-colors"
          >
            Export Services
          </button>
          <button 
            onClick={() => handleNavClick('home')} 
            className="hover:text-amber-400 transition-colors"
          >
            Resources
          </button>
          <button 
            onClick={() => handleNavClick('chat')} 
            className="hover:text-amber-400 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Instant Rate Calculator Button (Desktop & Tablet) */}
          <button
            onClick={() => { onOpenQuote(); setMobileMenuOpen(false); }}
            className="hidden md:flex items-center gap-1.5 text-xs font-extrabold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all whitespace-nowrap"
          >
            <span>Instant Rate Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Direct Phone / WhatsApp Button Pill */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Merash%20Export,%20I%20want%20to%20inquire%20about%20export%20freight"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-slate-900 border border-slate-700 text-white hover:border-emerald-500 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">+91 98765 43210</span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
            </span>
          </a>

          {/* Mobile Menu Toggle Button (Visible on screens < xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-amber-400 transition-colors"
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-[#090e1a] border-b border-slate-800 shadow-2xl p-4 space-y-4 animate-in slide-in-from-top duration-200 z-50 max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-1 text-xs font-bold text-slate-200">
            <button
              onClick={() => handleNavClick('catalog')}
              className="w-full text-left p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center gap-2.5 text-amber-400"
            >
              <Package className="w-4 h-4 text-amber-400" />
              <span>Export Commodities</span>
            </button>

            <button
              onClick={() => handleNavClick('track')}
              className="w-full text-left p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center gap-2.5"
            >
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Live Vessel & Container Tracking</span>
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className="w-full text-left p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center gap-2.5"
            >
              <ImageIcon className="w-4 h-4 text-emerald-400" />
              <span>15 Inspection Photos & Proofs</span>
            </button>

            <button
              onClick={() => handleNavClick('catalog')}
              className="w-full text-left p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center gap-2.5"
            >
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Export Services (Sea / Air / Customs)</span>
            </button>

            <button
              onClick={() => handleNavClick('chat')}
              className="w-full text-left p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center gap-2.5"
            >
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>24/7 Live Support & Assistance</span>
            </button>
          </div>

          {/* Mobile Instant Rate Calculator Button */}
          <button
            onClick={() => { onOpenQuote(); setMobileMenuOpen(false); }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Instant Rate Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Direct Phone & WhatsApp Callouts */}
          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <a
              href="tel:9876543210"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Call 98765 43210</span>
            </a>

            <a
              href="https://wa.me/919876543210?text=Hi%20Merash%20Export,%20I%20want%20to%20inquire%20about%20export%20freight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
