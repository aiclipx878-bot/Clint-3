import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  X,
  MessageCircle,
  Clock,
  Sparkles,
  Smartphone,
  Eye,
} from 'lucide-react';
import { CASE_STUDIES, AGENCY_CONFIG } from '../data/cases';
import { CaseStudy } from '../types';

export function CaseStudiesGallery() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featured = CASE_STUDIES[featuredIndex];

  return (
    <section id="case-studies" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#18D65A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              DOCUMENTED CASE EVIDENCE
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Recovery Cases & Proof
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-2xl leading-relaxed">
            Real case studies from clients who faced account suspensions, bans, or restriction flags.
            Click any case to inspect the detailed verification breakdown.
          </p>
        </div>

        {/* Featured Case Study Showcase (Left: Visual Case Card | Right: Case Info) */}
        <div className="mb-16 rounded-3xl bg-[#0B0F0C] border border-[#18D65A]/30 p-6 sm:p-10 shadow-2xl shadow-black/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Interactive 3D Case Card */}
            <div className="lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCase(featured)}
                className="group relative cursor-pointer rounded-2xl bg-[#101512] border border-[#18D65A]/40 overflow-hidden shadow-2xl shadow-[#18D65A]/10 p-6 flex flex-col justify-between min-h-[380px]"
              >
                {/* Background holographic lighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#18D65A]/15 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Top badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#18D65A]/20 text-[#35E875] border border-[#18D65A]/40">
                    {featured.badgeText}
                  </span>
                  <span className="text-xs font-mono text-[#8B968E]">
                    {featured.dateStr}
                  </span>
                </div>

                {/* Center Case Graphic Mockup */}
                <div className="relative z-10 my-6 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#070A08] border border-[#18D65A]/40 flex items-center justify-center mb-4 shadow-lg shadow-[#18D65A]/20 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-[#18D65A]" />
                  </div>

                  <span className="text-xs font-mono uppercase text-[#B8FFCC] tracking-wider mb-1">
                    {featured.platform}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {featured.title}
                  </h3>

                  {/* Notification snippet preview */}
                  <div className="mt-4 p-3 rounded-xl bg-[#070A08]/90 border border-white/10 text-left text-xs font-mono text-[#8B968E] max-w-sm">
                    <span className="text-[#35E875] block font-bold mb-0.5">🔔 Verified Push Alert:</span>
                    "{featured.notificationSnippet}"
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                  <span className="text-[#8B968E] flex items-center gap-1.5 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#18D65A]" />
                    Human Review Verified
                  </span>
                  <span className="text-[#18D65A] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Full Case <Eye className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>

              {/* Case switcher dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {CASE_STUDIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeaturedIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      featuredIndex === i ? 'w-8 bg-[#18D65A]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Select case ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Featured Case Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase font-bold text-[#18D65A]">
                  CASE STUDY 0{featuredIndex + 1}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-[#8B968E]">{featured.platform}</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                {featured.title}
              </h3>

              {/* Status Flow Progression Bar */}
              <div className="mb-6 p-4 rounded-xl bg-[#101512] border border-white/5">
                <span className="text-[10px] font-mono uppercase text-[#8B968E] block mb-2 font-semibold">
                  STATUS PROGRESSION
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-red-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>{featured.statusBefore}</span>
                  </div>
                  <span className="text-white/30 hidden sm:block">→</span>
                  <div className="flex items-center gap-2 text-amber-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>{featured.statusDuring}</span>
                  </div>
                  <span className="text-white/30 hidden sm:block">→</span>
                  <div className="flex items-center gap-2 text-[#35E875] font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
                    <span>{featured.statusAfter}</span>
                  </div>
                </div>
              </div>

              {/* Case Summary */}
              <p className="text-sm sm:text-base text-[#8B968E] leading-relaxed mb-6">
                {featured.summary}
              </p>

              {/* Case Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {featured.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#F5F7F5]">
                    <CheckCircle2 className="w-4 h-4 text-[#18D65A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Client Quote Box */}
              {featured.clientQuote && (
                <div className="p-4 rounded-xl bg-[#070A08] border-l-2 border-[#18D65A] text-xs text-[#B8FFCC] italic mb-6">
                  "{featured.clientQuote}"
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedCase(featured)}
                  className="flex items-center gap-2 bg-[#18D65A] hover:bg-[#35E875] text-[#050706] px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all shadow-md shadow-[#18D65A]/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>Open Full Verification Modal</span>
                </button>

                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[#8B968E] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#18D65A]" />
                  <span>Request Similar Case Review</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Gallery of Remaining Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.div
              key={cs.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCase(cs)}
              className="cursor-pointer rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[#18D65A]/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase text-[#18D65A] font-bold">
                    CASE 0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#101512] text-[#8B968E] border border-white/5">
                    {cs.platform}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-[#F5F7F5] group-hover:text-white mb-2 line-clamp-2">
                  {cs.title}
                </h4>

                <p className="text-xs text-[#8B968E] line-clamp-3 mb-4 leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#35E875] text-[11px] font-semibold">{cs.badgeText}</span>
                <span className="text-[#8B968E] group-hover:text-white transition-colors">Inspect →</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Full-Screen Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B0F0C] border border-[#18D65A]/50 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#18D65A]/25"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#101512] border border-white/10 hover:border-white/30 text-[#8B968E] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close case study details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#18D65A] uppercase">
                  VERIFIED CASE FILE
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-[#B8FFCC] uppercase">
                  {selectedCase.platform}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                {selectedCase.title}
              </h3>

              {/* Status Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 bg-red-950/20 border border-red-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-red-400 block mb-1">INITIAL RESTRICTION</span>
                  <span className="text-xs font-bold text-red-200">{selectedCase.statusBefore}</span>
                </div>
                <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-xl">
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">REVIEW ACTION</span>
                  <span className="text-xs font-bold text-amber-200">{selectedCase.statusDuring}</span>
                </div>
                <div className="p-3.5 bg-[#122416] border border-[#18D65A]/40 rounded-xl">
                  <span className="text-[10px] font-mono text-[#35E875] block mb-1">FINAL OUTCOME</span>
                  <span className="text-xs font-bold text-white">{selectedCase.statusAfter}</span>
                </div>
              </div>

              {/* Case Narrative */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B8FFCC] mb-2 font-semibold">
                  Case Overview & Review Background
                </h4>
                <p className="text-sm text-[#8B968E] leading-relaxed">
                  {selectedCase.summary}
                </p>
              </div>

              {/* Push Notification Verification Proof */}
              <div className="mb-6 p-4 rounded-xl bg-[#070A08] border border-[#18D65A]/30">
                <div className="flex items-center gap-2 text-xs font-mono text-[#35E875] font-bold mb-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Platform Verification Notice Logged</span>
                </div>
                <div className="p-3 bg-[#101512] rounded-lg border border-white/10 text-xs font-mono text-[#F5F7F5]">
                  {selectedCase.notificationSnippet}
                </div>
              </div>

              {/* Deliverables / Highlights */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B8FFCC] mb-3 font-semibold">
                  Verification Safeguards & Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCase.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F7F5] bg-[#101512] p-2.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-[#18D65A] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B968E]">
                  <ShieldCheck className="w-4 h-4 text-[#18D65A]" />
                  <span>Agency ID: Asdullah Ahmed • +91 8271465644</span>
                </div>

                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(`Hello Asdullah, I read your case study "${selectedCase.title}" and would like assistance with my account.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-lg shadow-[#18D65A]/30 hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-[#050706]" />
                  <span>Discuss Similar Case on WhatsApp</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
