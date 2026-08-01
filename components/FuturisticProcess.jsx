'use client';

import { useState } from 'react';
import { Cpu, FileText, CheckCircle2, ShieldCheck, Sparkles, Box, ArrowRight } from 'lucide-react';

export default function FuturisticProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      stepNumber: '01',
      tag: 'INITIALIZING',
      title: 'Export Verification Engine',
      description: 'Merash Export Engine validates HS Codes, APEDA standards, and port customs compliance parameters.',
    },
    {
      id: 2,
      stepNumber: '02',
      tag: 'PROCESSING',
      title: 'Documentation & Cargo Convergence',
      description: 'Phytosanitary, ISPM-15 packaging seals, and Bill of Lading manifests converge into seamless customs clearance.',
    },
    {
      id: 3,
      stepNumber: '03',
      tag: 'READY',
      title: 'Vessel Loading & Satellite Tracking Active',
      description: 'Container sealed and loaded onboard vessel. 24/7 satellite GPS vessel tracking live.',
    },
  ];

  return (
    <section className="py-16 bg-[#050811] text-white relative overflow-hidden border-y border-slate-800/80">
      
      {/* Dark Ambient Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 inline-block">
            HIGH-INTELLIGENCE FREIGHT WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-title text-white">
            Automated 3-Step Export Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From factory gate verification to real-time vessel tracking across international waters.
          </p>
        </div>

        {/* 3 Futuristic Step Panels (Matching DocsAI Layout Exactly) */}
        <div className="space-y-6">
          
          {/* STEP 01: INITIALIZING */}
          <div 
            onClick={() => setActiveStep(1)}
            className={`group rounded-3xl bg-[#090e1a]/90 border transition-all duration-500 overflow-hidden cursor-pointer ${
              activeStep === 1 
                ? 'border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.25)]' 
                : 'border-slate-800/80 opacity-80 hover:opacity-100 hover:border-slate-700'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[220px]">
              
              {/* Left Details */}
              <div className="lg:col-span-4 p-6 sm:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80">
                <div className="space-y-1">
                  <span className="text-3xl font-extrabold font-mono text-blue-500 tracking-tight block">
                    01
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                    INITIALIZING
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  DocsAI export engine wakes up with intelligence. Validates HS Codes, APEDA requirements, and customs parameters.
                </p>

                {/* Glowing Active Progress Bar */}
                <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full bg-blue-500 transition-all duration-500 ${activeStep === 1 ? 'w-full shadow-[0_0_12px_#3b82f6]' : 'w-1/3'}`} />
                </div>
              </div>

              {/* Right 3D Visual Pedestal (Step 01 Graphics) */}
              <div className="lg:col-span-8 p-8 relative flex items-center justify-center min-h-[200px] bg-[#070b16]/60">
                
                {/* 3D Elevated Pedestal Box */}
                <div className="relative group-hover:scale-105 transition-transform duration-500">
                  
                  {/* Outer Radial Glow */}
                  <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl animate-pulse" />

                  {/* 3D Chip Platform */}
                  <div className="relative w-48 h-32 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 border border-blue-500/40 shadow-2xl flex flex-col items-center justify-center p-4 transform [transform:rotateX(20deg)_rotateY(-10deg)]">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-2">
                      <Cpu className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-300">HS-CODE VERIFIED</span>
                    <span className="text-[8px] font-mono text-slate-400">APEDA & Phytosanitary</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* STEP 02: LOADING & CONVERGENCE */}
          <div 
            onClick={() => setActiveStep(2)}
            className={`group rounded-3xl bg-[#090e1a]/90 border transition-all duration-500 overflow-hidden cursor-pointer ${
              activeStep === 2 
                ? 'border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.25)]' 
                : 'border-slate-800/80 opacity-80 hover:opacity-100 hover:border-slate-700'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[240px]">
              
              {/* Left Details */}
              <div className="lg:col-span-4 p-6 sm:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80">
                <div className="space-y-1">
                  <span className="text-3xl font-extrabold font-mono text-blue-500 tracking-tight block">
                    02
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                    LOADING
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  All document types and packing manifests flow seamlessly into DocsAI for automated port customs seal clearance.
                </p>

                {/* Glowing Active Progress Bar */}
                <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full bg-blue-500 transition-all duration-500 ${activeStep === 2 ? 'w-full shadow-[0_0_12px_#3b82f6]' : 'w-2/3'}`} />
                </div>
              </div>

              {/* Right Converging Light Beams & Floating Cards (Step 02 Graphics) */}
              <div className="lg:col-span-8 p-8 relative flex items-center justify-center min-h-[220px] bg-[#070b16]/60 overflow-hidden">
                
                {/* SVG Light Beams streaming into center icon */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 600 200">
                  <path d="M 50 40 Q 250 100 300 100" stroke="url(#blue-gradient)" strokeWidth="2" fill="none" />
                  <path d="M 50 160 Q 250 100 300 100" stroke="url(#blue-gradient)" strokeWidth="2" fill="none" />
                  <path d="M 550 40 Q 350 100 300 100" stroke="url(#blue-gradient)" strokeWidth="2" fill="none" />
                  <path d="M 550 160 Q 350 100 300 100" stroke="url(#blue-gradient)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Left Floating Cards */}
                <div className="hidden sm:flex flex-col gap-2 absolute left-8 text-[9px] font-mono text-slate-300 space-y-1">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-blue-400" /> B/L Manifest #9042
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> ISPM-15 Certified
                  </div>
                </div>

                {/* Center Glowing Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 border-2 border-blue-300 text-white flex flex-col items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.8)]">
                  <FileText className="w-8 h-8 text-white" />
                  <span className="text-[9px] font-extrabold tracking-widest mt-1">AI</span>
                </div>

                {/* Right Floating Cards */}
                <div className="hidden sm:flex flex-col gap-2 absolute right-8 text-[9px] font-mono text-slate-300 space-y-1">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Box className="w-3 h-3 text-amber-400" /> Customs Seal Gate 4
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-blue-400" /> Phytosanitary Pass
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* STEP 03: READY */}
          <div 
            onClick={() => setActiveStep(3)}
            className={`group rounded-3xl bg-[#090e1a]/90 border transition-all duration-500 overflow-hidden cursor-pointer ${
              activeStep === 3 
                ? 'border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.25)]' 
                : 'border-slate-800/80 opacity-80 hover:opacity-100 hover:border-slate-700'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[220px]">
              
              {/* Left Details */}
              <div className="lg:col-span-4 p-6 sm:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80">
                <div className="space-y-1">
                  <span className="text-3xl font-extrabold font-mono text-blue-500 tracking-tight block">
                    03
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                    READY
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Intelligence ready. Vessel stowage confirmed. You're all set to track your cargo across international routes.
                </p>

                {/* Glowing Active Progress Bar */}
                <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full bg-blue-500 transition-all duration-500 ${activeStep === 3 ? 'w-full shadow-[0_0_12px_#3b82f6]' : 'w-full'}`} />
                </div>
              </div>

              {/* Right Glowing 3D Emblem & Floor Reflection Platform (Step 03 Graphics) */}
              <div className="lg:col-span-8 p-8 relative flex items-center justify-center min-h-[200px] bg-[#070b16]/60 overflow-hidden">
                
                {/* Illuminated Floor Ring Gradients */}
                <div className="absolute bottom-4 w-72 h-16 bg-gradient-to-r from-blue-600/30 via-indigo-500/40 to-blue-600/30 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-6 w-56 h-8 rounded-full border border-blue-500/50 shadow-[0_0_25px_#3b82f6]" />

                {/* Glowing 3D Emblem */}
                <div className="relative z-10 flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-amber-400 text-slate-950 flex items-center justify-center font-black text-2xl shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                    <FileText className="w-8 h-8 text-slate-950" />
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight text-white font-brand drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    Merash<span className="text-blue-400">AI</span>
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
