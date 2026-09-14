import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Hero3DPhone } from './Hero3DPhone';
import { AGENCY_CONFIG } from '../data/cases';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden">
      {/* Cinematic dark lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#18D65A]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#18D65A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#18D65A]/30 mb-6 shadow-md shadow-black/40"
            >
              <ShieldCheck className="w-4 h-4 text-[#18D65A]" />
              <span className="text-xs font-semibold text-[#B8FFCC] tracking-wide">
                Professional WhatsApp & Instagram Recovery Support
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#18D65A]" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#F5F7F5] mb-6 uppercase"
            >
              Account Restricted?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D65A] via-[#35E875] to-[#B8FFCC] block mt-1">
                Let's Work On Your Recovery.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#8B968E] max-w-xl mb-8 leading-relaxed font-normal"
            >
              Facing a disabled, banned, restricted, or inaccessible account?
              Get structured assistance with the official review and recovery process.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                id="hero-start-recovery-cta"
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-xl shadow-[#18D65A]/25 hover:shadow-[#18D65A]/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-[#050706]" />
                <span>START RECOVERY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-view-cases-cta"
                href="#case-studies"
                className="group flex items-center justify-center gap-2 bg-[#0B0F0C] hover:bg-[#101512] border border-[#18D65A]/30 hover:border-[#18D65A]/70 text-[#F5F7F5] px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all"
              >
                <span>VIEW SUCCESS CASES</span>
                <ChevronRight className="w-4 h-4 text-[#18D65A] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Micro credibility metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#101512] border border-white/5 flex items-center justify-center text-[#18D65A]">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F5F7F5]">15–45 Mins</span>
                  <span className="text-[10px] text-[#8B968E]">Response Window</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#101512] border border-white/5 flex items-center justify-center text-[#18D65A]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F5F7F5]">Zero Passwords</span>
                  <span className="text-[10px] text-[#8B968E]">Safe In-App Flow</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#101512] border border-white/5 flex items-center justify-center text-[#18D65A]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F5F7F5]">Official Review</span>
                  <span className="text-[10px] text-[#8B968E]">Platform Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Interactive Phone Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DPhone />
          </div>

        </div>
      </div>
    </section>
  );
}
