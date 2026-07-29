'use client';

import { useState } from 'react';
import { Container, Calculator, Ship, Plane, CheckCircle2, ArrowRight, X, Phone, MessageCircle } from 'lucide-react';

export default function CargoBooking({ isOpen, onClose }) {
  const [cargoType, setCargoType] = useState('agro');
  const [shippingMode, setShippingMode] = useState('sea-20');
  const [destination, setDestination] = useState('dubai');
  const [weightKg, setWeightKg] = useState(2500);

  if (!isOpen) return null;

  // Calculate estimated freight
  const baseRatePerKg = shippingMode === 'air' ? 4.5 : shippingMode === 'sea-40' ? 0.35 : 0.45;
  const estimatedCost = Math.round(weightKg * baseRatePerKg);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              BookMyShow Style Cargo Space Calculator
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Export Freight Quote & Slot Booking
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Cargo Type Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
            1. Select Commodity Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'agro', label: 'Spices & Agro' },
              { id: 'textiles', label: 'Textiles & Fabrics' },
              { id: 'industrial', label: 'Machinery & Hardware' },
              { id: 'perishables', label: 'Cold Perishables' },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCargoType(item.id)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                  cargoType === item.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Shipping Mode */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
            2. Select Shipping Mode & Container Slot
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setShippingMode('sea-20')}
              className={`p-3 rounded-2xl text-left border transition-all ${
                shippingMode === 'sea-20'
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs">
                <Ship className="w-4 h-4 text-blue-500" /> 20ft FCL Sea
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Standard Full Container Load</p>
            </button>

            <button
              type="button"
              onClick={() => setShippingMode('sea-40')}
              className={`p-3 rounded-2xl text-left border transition-all ${
                shippingMode === 'sea-40'
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs">
                <Ship className="w-4 h-4 text-indigo-500" /> 40ft High Cube
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Large Volume Capacity</p>
            </button>

            <button
              type="button"
              onClick={() => setShippingMode('air')}
              className={`p-3 rounded-2xl text-left border transition-all ${
                shippingMode === 'air'
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs">
                <Plane className="w-4 h-4 text-amber-500" /> Air Cargo Express
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">48-72 Hours Priority</p>
            </button>
          </div>
        </div>

        {/* Step 3: Destination & Cargo Weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Destination Port
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
            >
              <option value="dubai">Jebel Ali Port, Dubai (UAE)</option>
              <option value="singapore">Port of Singapore (SG)</option>
              <option value="rotterdam">Port of Rotterdam (NL)</option>
              <option value="hamburg">Port of Hamburg (DE)</option>
              <option value="losangeles">Port of Los Angeles (US)</option>
              <option value="london">London Gateway (UK)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Estimated Weight (KG)
            </label>
            <input
              type="number"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              step="500"
              min="100"
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Estimated Price Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider block">Estimated Freight Cost</span>
            <div className="text-2xl font-extrabold text-white">${estimatedCost.toLocaleString()} USD</div>
            <span className="text-[10px] text-emerald-400">Includes Port Loading & Documentation</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/919876543210?text=Hi%20Merash%20Express,%20I%20want%20to%20confirm%20a%20quote%20for%20${weightKg}KG%20${cargoType}%20to%20${destination}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Confirm on WhatsApp</span>
            </a>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 text-center">
          For custom packing, phytosanitary certificates or urgent shipping assistance, call direct: <a href="tel:9876543210" className="text-blue-600 dark:text-blue-400 font-bold">+91 98765 43210</a>.
        </p>

      </div>
    </div>
  );
}
