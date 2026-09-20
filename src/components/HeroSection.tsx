import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
  Lock,
  Clock,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';
import { Hero3DPhone } from './Hero3DPhone';

export function HeroSection() {
  const handleScrollToWhatIDo = (e: MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#what-i-do');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#050706]">
      {/* Background Ambient Glows & Cyber Matrix Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#18D65A]/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#35E875]/5 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Triggers */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live System Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B150F] border border-[#18D65A]/30 text-[#B8FFCC] mb-6 shadow-lg shadow-[#18D65A]/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18D65A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18D65A]"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                TRUSTED DIGITAL ASSISTANCE • WHATSAPP & INSTAGRAM
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase mb-6"
            >
              Account Restricted or Banned? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D65A] via-[#35E875] to-[#B8FFCC]">
                We Guide Your Official Review.
              </span>
            </motion.h1>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#8B968E] max-w-xl leading-relaxed mb-8"
            >
              Professional, structured case assistance for restricted WhatsApp numbers, disabled Instagram creator handles, and Meta review appeals. 100% privacy-focused — zero passwords required.
            </motion.p>

            {/* Direct CTA Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#18D65A] hover:bg-[#35E875] text-[#040605] px-7 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#18D65A]/25 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-[#040605]" />
                <span>Consult On WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#what-i-do"
                onClick={handleScrollToWhatIDo}
                className="flex items-center justify-center gap-2 bg-[#0B0F0C] hover:bg-[#121A14] text-white hover:text-[#B8FFCC] px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-[#18D65A]/40 transition-all cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#18D65A]" />
                <span>Explore What I Do</span>
              </a>
            </motion.div>

            {/* Trust Indicator Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5 w-full font-mono text-xs"
            >
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#18D65A]" />
                  15–45 Min
                </span>
                <span className="text-[#8B968E] text-[11px]">Rapid Intake Response</span>
              </div>

              <div className="flex flex-col">
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#18D65A]" />
                  0 Passwords
                </span>
                <span className="text-[#8B968E] text-[11px]">Zero-Credential Policy</span>
              </div>

              <div className="flex flex-col">
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#18D65A]" />
                  Official Flow
                </span>
                <span className="text-[#8B968E] text-[11px]">Direct Platform Review</span>
              </div>

              <div className="flex flex-col">
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#18D65A]" />
                  Independent
                </span>
                <span className="text-[#8B968E] text-[11px]">Verified Guidance</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D Phone Screen */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="w-full max-w-[420px] aspect-[9/16] relative rounded-3xl p-1 bg-gradient-to-b from-[#18D65A]/30 via-transparent to-[#18D65A]/10 shadow-2xl shadow-black">
              <Hero3DPhone />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
