'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import LiveTracking from '../components/LiveTracking';
import ShipmentGallery from '../components/ShipmentGallery';
import CargoBooking from '../components/CargoBooking';
import LiveChat from '../components/LiveChat';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState(null);

  // Smooth scroll tab handler
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'catalog') {
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'track') {
      document.getElementById('track')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'gallery') {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'chat') {
      setIsChatOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#070a10] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Hero Section & Freight Calculator */}
      <Hero
        onOpenQuote={() => setIsQuoteOpen(true)}
        onSelectTab={handleTabChange}
      />

      {/* Export Commodities Catalog */}
      <ProductShowcase
        onOpenQuote={() => setIsQuoteOpen(true)}
        onSelectImage={(src) => setSelectedLightboxImage(src)}
      />

      {/* 24/7 Live Container Tracking */}
      <LiveTracking />

      {/* Authentic Dispatch Proof Gallery (15 Real Images) */}
      <ShipmentGallery
        onSelectImage={(src) => setSelectedLightboxImage(src)}
      />

      {/* B2B Cargo Booking Estimator Modal */}
      <CargoBooking
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Live Assistant Support Chat & WhatsApp */}
      <LiveChat
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />

      {/* Native Mobile App Bottom Nav Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Footer & CTA Banner */}
      <Footer
        onOpenQuote={() => setIsQuoteOpen(true)}
        onSelectTab={handleTabChange}
      />

      {/* Standalone High-Res Lightbox Modal with Prominent 'X' Close Button */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedLightboxImage(null)}
        >
          {/* Prominent Close 'X' Button */}
          <button
            onClick={() => setSelectedLightboxImage(null)}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-800/90 text-white hover:bg-amber-400 hover:text-slate-950 transition-all shadow-2xl border border-slate-700"
            title="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-4xl max-h-[85vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedLightboxImage}
              alt="Inspection view"
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      )}
    </main>
  );
}
