'use client';

import { useState } from 'react';
import { Ship, ShieldCheck, Box, Clock, Compass, CheckCircle2 } from 'lucide-react';

export default function LiveTracking() {
  const [trackingDetails] = useState({
    blNumber: 'MRSH-9042831-IN',
    status: 'On Track',
    vessel: 'MSC ALEXANDRA V-2026',
    carrier: 'Merash Ocean Lines (Direct Service)',
    eta: 'Aug 04, 2026 (On Schedule)',
    pol: 'Nhava Sheva (INNSA)',
    pod: 'Jebel Ali Port, Dubai (AEJEA)',
    gps: '17.27 N, 49.72 E (Speed 19.5 Knots)',
    progress: 65,
    milestones: [
      { title: 'Factory Gate Out & Tracking', time: 'Jul 26, 09:15 AM', location: 'Rajkot / Erode Hub', done: true },
      { title: 'CFS Stuffing & Weight Verification', time: 'Jul 27, 01:25 PM', location: 'Nhava Sheva CFS Terminal', done: true },
      { title: 'Customs Seal Approval & Phytosanitary', time: 'Jul 27, 06:10 PM', location: 'JNPT Customs Circle & APEDA', done: true },
      { title: 'Container Loaded & Vessel Stowage', time: 'Jul 28, 11:40 AM', location: 'Loaded on Board Vessel', done: true },
      { title: 'Vessel Departure (At Sea)', time: 'Jul 28, 05:10 PM', location: 'Arabian Sea Passage', done: true },
      { title: 'Port Discharge & Terminal Gate-Out', time: 'Aug 03, 10:40 AM', location: 'Jebel Ali Terminal 1', done: false },
      { title: 'Final Consignee Doorstep Delivery', time: 'Aug 04, 02:00 PM', location: 'Dubai Logistics Hub', done: false },
    ]
  });

  return (
    <section id="track" className="py-10 bg-[#070a10] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Dark Navy Card */}
        <div className="rounded-3xl bg-[#0a0f1d] border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Graphic Column (Hoisted Container Banner - FULLY VISIBLE) */}
            <div className="lg:col-span-5 relative bg-[#070b16] min-h-[420px] p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 overflow-hidden">
              
              {/* Crisp, Vivid Hoisted Container Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-85 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  backgroundImage: `url('/images/tracking-container.png')` 
                }}
              />
              
              {/* Subtle Bottom & Top Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#070a10]/80 via-transparent to-[#070a10]/95 pointer-events-none" />

              {/* Top Title Overlay */}
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-xl shadow-amber-400/20">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                  24/7 Container & <br />
                  Vessel GPS Tracking
                </h3>
                <p className="text-xs text-slate-200 font-medium drop-shadow">
                  Live satellite tracking for ocean containers, air cargo airway bills, and customs port clearance logs.
                </p>
              </div>

              {/* 4 Feature Cards (High-Contrast Translucent Backdrop) */}
              <div className="relative z-10 grid grid-cols-2 gap-2.5 pt-6">
                <div className="p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 space-y-0.5 shadow-lg">
                  <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs">
                    <Compass className="w-3.5 h-3.5" />
                    <span className="text-white">Live Vessel Tracking</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium">Real-time GPS updates</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 space-y-0.5 shadow-lg">
                  <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="text-white">Customs Compliance</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium">100% Documentation</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 space-y-0.5 shadow-lg">
                  <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs">
                    <Box className="w-3.5 h-3.5" />
                    <span className="text-white">Secure Packaging</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium">ISPM-15 Certified</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 space-y-0.5 shadow-lg">
                  <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-white">On-Time Delivery</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-medium">Reliable & Fast</p>
                </div>
              </div>

            </div>

            {/* Right Column: Tracking Details & Milestones */}
            <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
              
              {/* Header Status Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">B/L NUMBER</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-white font-mono">{trackingDetails.blNumber}</span>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ● {trackingDetails.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Vessel: <strong className="text-white">{trackingDetails.vessel}</strong> | Carrier: <strong className="text-white">{trackingDetails.carrier}</strong>
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">ETA AT DESTINATION</span>
                  <span className="text-xs font-extrabold text-amber-400">{trackingDetails.eta}</span>
                </div>
              </div>

              {/* POL / VOY / POD Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#0d1427] p-3.5 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">@ POL</span>
                  <span className="font-bold text-white text-[11px]">{trackingDetails.pol}</span>
                </div>
                <div className="sm:text-center border-y sm:border-y-0 sm:border-x border-slate-800 py-1.5 sm:py-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">VOY / ETA GPS</span>
                  <span className="font-bold text-amber-400 text-[11px]">{trackingDetails.gps}</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">@ POD</span>
                  <span className="font-bold text-white text-[11px]">{trackingDetails.pod}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
                    style={{ width: `${trackingDetails.progress}%` }}
                  />
                </div>
                <div className="text-right text-[10px] font-bold text-amber-400">
                  {trackingDetails.progress}% Completed
                </div>
              </div>

              {/* Milestone Timeline List */}
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                  MILESTONE STATUS & PORT LOGS
                </span>

                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {trackingDetails.milestones.map((m, i) => (
                    <div key={i} className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#0d1427]/60 border border-slate-800/60">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${m.done ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <div>
                          <span className={`font-bold ${m.done ? 'text-white' : 'text-slate-500'}`}>{m.title}</span>
                          <p className="text-[10px] text-slate-400">{m.location}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">{m.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
