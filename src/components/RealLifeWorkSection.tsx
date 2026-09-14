import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  ZoomIn,
  X,
  MessageCircle,
  ExternalLink,
  Smartphone,
  Check,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';
import realLifeProofPhoto from '../assets/images/instagram_restriction_proof_1789371843808.jpg';

export function RealLifeWorkSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section
      id="real-life-work"
      className="relative py-24 bg-[#060907] border-t border-cyan-500/20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#18D65A]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-[0.2em] text-cyan-300 uppercase font-semibold">
              AUTHENTIC CLIENT EVIDENCE
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Real Life Work
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-2xl leading-relaxed">
            Unedited photo documentation of client cases resolved by Asdullah Ahmed.
            Review the exact before-and-after account statuses and verified platform outcome below.
          </p>
        </div>

        {/* Real Life Work Showcase Container */}
        <div className="rounded-3xl bg-[#090E0A] border border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Photo As It Is */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                
                {/* Glow frame */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-cyan-400/40 via-[#18D65A]/25 to-transparent blur-md opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* The Photo Frame */}
                <div
                  onClick={() => setIsZoomed(true)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-black shadow-2xl shadow-cyan-950/70 transition-all duration-300 group-hover:scale-[1.01]"
                >
                  <img
                    src={realLifeProofPhoto}
                    alt="Real Life Work - Instagram Restriction Removed by Asdullah Ahmed"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover select-none"
                  />

                  {/* Hover Overlay with Zoom Prompt */}
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4 text-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/30">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-200">
                      Click To Enlarge Photo
                    </span>
                    <span className="text-[10px] font-mono text-[#8B968E]">
                      Inspect Full Resolution
                    </span>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-3 left-3 bg-[#050706]/90 backdrop-blur-md border border-cyan-400/50 text-cyan-300 text-[10px] font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>REAL LIFE WORK PROOF</span>
                  </div>
                </div>

                {/* Bottom caption and quick zoom trigger */}
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#8B968E] px-1">
                  <span className="text-cyan-200">Instagram Account Status</span>
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View High-Res</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column: Case Summary & Real World Outcome */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold mb-3 w-fit">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>CASE STUDY: INSTAGRAM RESTRICTION REMOVAL</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2">
                Instagram Restriction Removed
              </h3>

              <p className="text-sm sm:text-base text-cyan-300 font-mono mb-6">
                Account access restored successfully • Official review complete
              </p>

              {/* Side-by-side Before and After status breakdown from photo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                {/* Before Card */}
                <div className="p-4 rounded-2xl bg-[#120E0E] border border-red-500/30 shadow-inner">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-red-300 bg-red-950/60 px-2.5 py-0.5 rounded border border-red-500/30">
                      BEFORE — RESTRICTED
                    </span>
                    <span className="text-[11px] font-mono text-[#8B968E]">19:50</span>
                  </div>

                  <p className="text-xs text-red-200 font-semibold mb-2">
                    "Review features you can't use"
                  </p>

                  <ul className="space-y-1.5 text-xs font-mono text-[#8B968E]">
                    <li className="flex items-center gap-2 text-red-400">
                      <span className="text-red-500 font-bold">✕</span> You can't view people's followers
                    </li>
                    <li className="flex items-center gap-2 text-red-400">
                      <span className="text-red-500 font-bold">✕</span> You can't send messages
                    </li>
                    <li className="flex items-center gap-2 text-red-400">
                      <span className="text-red-500 font-bold">✕</span> You can't share links
                    </li>
                  </ul>
                </div>

                {/* After Card */}
                <div className="p-4 rounded-2xl bg-[#0B150F] border border-[#18D65A]/40 shadow-inner">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#35E875] bg-[#142318] px-2.5 py-0.5 rounded border border-[#18D65A]/40">
                      AFTER — RESTORED
                    </span>
                    <span className="text-[11px] font-mono text-[#8B968E]">20:02</span>
                  </div>

                  <p className="text-xs text-[#35E875] font-semibold mb-2">
                    "Your account meets all of our guidelines"
                  </p>

                  <ul className="space-y-1.5 text-xs font-mono text-[#8B968E]">
                    <li className="flex items-center gap-2 text-[#35E875]">
                      <Check className="w-3.5 h-3.5 text-[#18D65A] stroke-[3]" /> Content and message removals
                    </li>
                    <li className="flex items-center gap-2 text-[#35E875]">
                      <Check className="w-3.5 h-3.5 text-[#18D65A] stroke-[3]" /> Recommendation eligibility
                    </li>
                    <li className="flex items-center gap-2 text-[#35E875]">
                      <Check className="w-3.5 h-3.5 text-[#18D65A] stroke-[3]" /> Monetisation & feature access
                    </li>
                  </ul>
                </div>

              </div>

              {/* Case Narrative */}
              <p className="text-xs sm:text-sm text-[#8B968E] leading-relaxed mb-6">
                This account was blocked by automated algorithmic security flags, halting all direct message inquiries and link sharing essential to the user's business operations. With our tailored platform submission and structured appeal documentation, the case was processed and all restriction flags were removed.
              </p>

              {/* Contact Call to Action */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Asdullah Ahmed, I saw your Instagram restriction removal proof in the Real Life Work section and need help with my account."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-xl shadow-[#18D65A]/25 hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-[#050706]" />
                  <span>WhatsApp: +91 82714 65644</span>
                </a>

                <button
                  onClick={() => setIsZoomed(true)}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#101512] border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Inspect Fullscreen Photo</span>
                </button>
              </div>

              {/* Verified Author Attribution */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#8B968E]">
                <span>Case Handler: Asdullah Ahmed</span>
                <span className="text-cyan-400 font-semibold">Digital Recovery Expert</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full max-h-[92vh] flex flex-col items-center rounded-2xl bg-[#050706] border-2 border-cyan-400/50 p-4 shadow-2xl shadow-cyan-950/80 overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Real Life Work Proof
                  </span>
                </div>

                <button
                  onClick={() => setIsZoomed(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close zoomed view"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Image Viewport */}
              <div className="w-full overflow-y-auto max-h-[72vh] flex justify-center rounded-xl bg-black">
                <img
                  src={realLifeProofPhoto}
                  alt="Enlarged Instagram Restriction Proof Photo"
                  referrerPolicy="no-referrer"
                  className="w-auto max-w-full h-auto max-h-[70vh] object-contain rounded-lg select-none"
                />
              </div>

              {/* Modal Bottom Action */}
              <div className="w-full pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#8B968E]">+91 82714 65644</span>
                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Asdullah Ahmed, I reviewed your Instagram restriction removal proof and want to request a case review."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#18D65A] text-[#050706] font-bold px-3.5 py-1.5 rounded-full text-[11px] hover:bg-[#35E875] transition-colors"
                >
                  Contact on WhatsApp →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
