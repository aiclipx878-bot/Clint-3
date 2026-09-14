import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertCircle,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Smartphone,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function BeforeAfterSlider() {
  const [activeStep, setActiveStep] = useState<0 | 1 | 2>(1);
  const [platformMode, setPlatformMode] = useState<'whatsapp' | 'instagram'>('whatsapp');

  const steps = [
    {
      id: 0,
      phase: "BEFORE",
      headline: "Account Restricted",
      color: "red",
      statusBadge: "Access Blocked",
      badgeClass: "bg-red-500/15 border-red-500/40 text-red-400",
      accentBg: "border-red-500/30",
      description:
        "Unexpected lockouts, automated spam flags, or community guideline strikes halting personal or business communications.",
      timestamp: "Day 0 — Immediate Lockout",
    },
    {
      id: 1,
      phase: "DURING",
      headline: "Review / Appeal Process",
      color: "amber",
      statusBadge: "Under Official Review",
      badgeClass: "bg-amber-500/15 border-amber-500/40 text-amber-400",
      accentBg: "border-amber-500/30",
      description:
        "Structured case assessment, TOS alignment, and formal review submission through platform moderation channels.",
      timestamp: "Hours 1–12 — Case Active",
    },
    {
      id: 2,
      phase: "AFTER",
      headline: "Account Access Restored",
      color: "emerald",
      statusBadge: "Unban Done • Verified",
      badgeClass: "bg-[#18D65A]/20 border-[#18D65A]/50 text-[#35E875]",
      accentBg: "border-[#18D65A]/40",
      description:
        "Platform review cleared, in-app verification completed, and full access to chats, followers, and business tools restored.",
      timestamp: "Hours 6–24 — Restored",
    },
  ];

  return (
    <section id="timeline" className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#18D65A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
              <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
                CASE STUDY TIMELINE
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
              From Restriction to Recovery
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#8B968E] max-w-xl leading-relaxed">
              Every case is different. Our role is to help clients navigate the available platform review and recovery process.
            </p>
          </div>

          {/* Platform Switcher (WhatsApp vs Instagram) */}
          <div className="flex items-center bg-[#0B0F0C] border border-white/10 rounded-full p-1 self-start md:self-auto">
            <button
              onClick={() => setPlatformMode('whatsapp')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                platformMode === 'whatsapp'
                  ? 'bg-[#18D65A] text-[#050706] shadow-md shadow-[#18D65A]/20'
                  : 'text-[#8B968E] hover:text-[#F5F7F5]'
              }`}
            >
              WhatsApp Case Flow
            </button>
            <button
              onClick={() => setPlatformMode('instagram')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                platformMode === 'instagram'
                  ? 'bg-gradient-to-r from-[#d946ef] to-[#18D65A] text-white shadow-md'
                  : 'text-[#8B968E] hover:text-[#F5F7F5]'
              }`}
            >
              Instagram Case Flow
            </button>
          </div>
        </div>

        {/* Phase Step Selectors / Draggable Slider Controls */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id as 0 | 1 | 2)}
                className={`relative flex flex-col p-3 sm:p-5 rounded-xl border text-left transition-all duration-300 ${
                  isSelected
                    ? `bg-[#101512] ${step.accentBg} shadow-lg shadow-black/50`
                    : 'bg-[#0B0F0C] border-white/5 hover:border-white/15 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#8B968E]">
                    {step.phase}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[9px] sm:text-[11px] font-mono border ${step.badgeClass}`}>
                    {step.statusBadge}
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-display font-bold text-[#F5F7F5] truncate">
                  {step.headline}
                </h3>

                {isSelected && (
                  <motion.div
                    layoutId="activeTimelineBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#18D65A] to-[#35E875] rounded-b-xl"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Smartphone Showcase Container */}
        <div className="relative rounded-3xl bg-[#0B0F0C] border border-[#18D65A]/25 p-6 sm:p-10 shadow-2xl shadow-black/60 overflow-hidden">
          
          {/* Ambient Glow */}
          <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-500 ${
            activeStep === 0 ? 'bg-red-500/10' : activeStep === 1 ? 'bg-amber-500/10' : 'bg-[#18D65A]/15'
          }`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Phone Frame rendering realistic mobile screenshot */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] rounded-[36px] bg-[#020403] border-[6px] border-[#18231a] p-3 shadow-2xl shadow-black">
                
                {/* Hardware Speaker & Camera notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] mr-2" />
                  <div className="w-8 h-1 bg-[#222] rounded-full" />
                </div>

                {/* Inner Screen Canvas */}
                <div className="relative w-full aspect-[9/18.5] bg-[#0c100d] rounded-[28px] overflow-hidden p-4 flex flex-col justify-between text-left font-sans select-none border border-white/5">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#8B968E] pt-2 mb-4">
                    <span>19:50</span>
                    <span>5G • 100%</span>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* WHATSAPP CONTENT */}
                    {platformMode === 'whatsapp' ? (
                      activeStep === 0 ? (
                        /* BEFORE: WhatsApp Banned */
                        <motion.div
                          key="wa-before"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex-1 flex flex-col justify-between py-2"
                        >
                          <div>
                            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                              <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h4 className="text-center font-bold text-base text-white mb-2">
                              This account can't use WhatsApp
                            </h4>
                            <p className="text-[11px] text-center text-[#8B968E] mb-4">
                              Since: 25 August 2026
                            </p>
                            <div className="bg-[#141b16] rounded-xl p-3 text-[11px] text-[#8B968E] leading-relaxed border border-red-500/20 mb-3">
                              Some activity on your account may not have followed our Terms of Service. You can request a review to restore your account access.
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="w-full py-2.5 rounded-full bg-red-600/90 text-white font-bold text-xs text-center shadow-md">
                              Request review
                            </div>
                            <p className="text-[10px] text-center text-[#8B968E]">
                              Most reviews are completed within 24 hours.
                            </p>
                          </div>
                        </motion.div>
                      ) : activeStep === 1 ? (
                        /* DURING: WhatsApp In Review */
                        <motion.div
                          key="wa-during"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex-1 flex flex-col justify-between py-2"
                        >
                          <div>
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                              <Clock className="w-6 h-6 text-amber-400" />
                            </div>
                            <h4 className="text-center font-bold text-base text-white mb-2">
                              Account in review
                            </h4>
                            <p className="text-[11px] text-center text-amber-400 font-mono mb-4">
                              Review requested: 25 August 2026
                            </p>
                            <div className="bg-[#141b16] rounded-xl p-3 text-[11px] text-[#8B968E] leading-relaxed border border-amber-500/20 mb-3">
                              Your account activity and device info is being checked to make sure it follows our Terms of Service. We'll notify you of the result.
                            </div>
                          </div>

                          <div className="p-3 bg-[#101912] rounded-xl border border-[#18D65A]/20 text-[11px]">
                            <span className="text-[#35E875] font-semibold block mb-1">
                              Asdullah Ahmed Support:
                            </span>
                            <span className="text-[#8B968E]">
                              Case statement dispatched. Platform queue monitoring active.
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        /* AFTER: WhatsApp Restored */
                        <motion.div
                          key="wa-after"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex-1 flex flex-col justify-between py-2"
                        >
                          <div>
                            <div className="w-12 h-12 rounded-full bg-[#18D65A]/20 border border-[#18D65A]/50 flex items-center justify-center mx-auto mb-4">
                              <CheckCircle2 className="w-7 h-7 text-[#18D65A]" />
                            </div>
                            <h4 className="text-center font-bold text-base text-white mb-1">
                              This account can now use WhatsApp
                            </h4>
                            <p className="text-[11px] text-center text-[#18D65A] font-mono mb-3">
                              UNBAN DONE • RESTORED
                            </p>
                            
                            {/* Notification Simulation Card */}
                            <div className="bg-[#122316] rounded-xl p-3 border border-[#18D65A]/30 mb-3 shadow-lg">
                              <div className="flex items-center gap-1.5 text-[10px] text-[#35E875] font-bold mb-1">
                                <MessageCircle className="w-3 h-3" />
                                <span>WhatsApp Support • Now</span>
                              </div>
                              <p className="text-xs text-white font-medium">
                                Welcome back to WhatsApp. Verify your account so you can start chatting.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="w-full py-2.5 rounded-full bg-[#18D65A] text-[#050706] font-bold text-xs text-center shadow-lg shadow-[#18D65A]/30">
                              Verify account
                            </div>
                            <p className="text-[10px] text-center text-[#8B968E]">
                              Chats, media & contacts fully restored.
                            </p>
                          </div>
                        </motion.div>
                      )
                    ) : (
                      /* INSTAGRAM CONTENT */
                      activeStep === 0 ? (
                        /* BEFORE: Instagram Restriction */
                        <motion.div
                          key="ig-before"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex-1 flex flex-col justify-between py-2"
                        >
                          <div>
                            <div className="text-center mb-3">
                              <span className="text-xs font-mono text-red-400">Account Status</span>
                              <h4 className="font-bold text-sm text-white mt-1">Review features you can't use</h4>
                            </div>

                            <div className="space-y-2 text-[10px]">
                              <div className="p-2 bg-red-950/40 border border-red-500/30 rounded-lg text-red-300">
                                ⚠ You can't view people's followers
                              </div>
                              <div className="p-2 bg-red-950/40 border border-red-500/30 rounded-lg text-red-300">
                                ⚠ You can't send messages
                              </div>
                              <div className="p-2 bg-red-950/40 border border-red-500/30 rounded-lg text-red-300">
                                ⚠ You can't share links
                              </div>
                            </div>
                          </div>

                          <div className="text-[10px] text-center text-red-400 font-mono py-2 bg-red-900/20 rounded-lg">
                            BEFORE — RESTRICTED
                          </div>
                        </motion.div>
                      ) : activeStep === 1 ? (
                        /* DURING: Instagram Review */
                        <motion.div
                          key="ig-during"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex-1 flex flex-col justify-between py-2"
                        >
                          <div>
                            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                              <Clock className="w-5 h-5 text-amber-400" />
                            </div>
                            <h4 className="text-center font-bold text-sm text-white mb-2">
                              Community Review Submitted
                            </h4>
                            <p className="text-[11px] text-[#8B968E] text-center leading-relaxed">
                              Formal policy statement lodged with Instagram trust & safety review team.
                            </p>
                          </div>

                          <div className="p-2.5 bg-[#141b16] rounded-lg border border-amber-500/30 text-[10px] text-amber-300 text-center font-mono">
                            DURING — APPEAL PENDING
                          </div>
                        </motion.div>
                      ) : (
                        /* AFTER: Instagram Restored */
                        <motion.div
                          key="ig-after"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex-1 flex flex-col justify-between py-2"
                        >
                          <div>
                            <div className="w-10 h-10 rounded-full bg-[#18D65A]/20 flex items-center justify-center mx-auto mb-2">
                              <CheckCircle2 className="w-6 h-6 text-[#18D65A]" />
                            </div>
                            <h4 className="text-center font-bold text-sm text-white mb-1">
                              Your account meets all guidelines
                            </h4>
                            <p className="text-[10px] text-center text-[#8B968E] mb-3">
                              Feature restrictions or recommendation limits removed.
                            </p>

                            <div className="space-y-1.5 text-[10px] text-[#B8FFCC]">
                              <div className="p-1.5 bg-[#101b13] border border-[#18D65A]/30 rounded flex items-center justify-between">
                                <span>Content removals</span>
                                <span className="text-[#18D65A]">✓ Clean</span>
                              </div>
                              <div className="p-1.5 bg-[#101b13] border border-[#18D65A]/30 rounded flex items-center justify-between">
                                <span>Recommendation eligibility</span>
                                <span className="text-[#18D65A]">✓ Eligible</span>
                              </div>
                              <div className="p-1.5 bg-[#101b13] border border-[#18D65A]/30 rounded flex items-center justify-between">
                                <span>Direct Messaging</span>
                                <span className="text-[#18D65A]">✓ Restored</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-[10px] text-center text-[#35E875] font-mono py-2 bg-[#142618] rounded-lg border border-[#18D65A]/30">
                            AFTER — RESTORED
                          </div>
                        </motion.div>
                      )
                    )}
                  </AnimatePresence>

                  {/* Watermark badge inside phone */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-[#8B968E]">
                    <span>Asdullah Ahmed</span>
                    <span>+91 8271465644</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Detailed Case Explanation */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase border ${steps[activeStep].badgeClass}`}>
                  STAGE {steps[activeStep].id + 1} OF 3
                </span>
                <span className="text-xs font-mono text-[#8B968E]">
                  {steps[activeStep].timestamp}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F7F5] mb-4">
                {steps[activeStep].headline}
              </h3>

              <p className="text-sm sm:text-base text-[#8B968E] mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Case Proof Highlights */}
              <div className="bg-[#101512] rounded-2xl p-5 border border-white/5 mb-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B8FFCC] uppercase font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#18D65A]" />
                  <span>Real Case Insights & Methodology</span>
                </div>
                
                {activeStep === 0 && (
                  <p className="text-xs text-[#8B968E] leading-relaxed">
                    Account restrictions frequently occur due to automated filter sensitivity or bulk messaging triggers. The most critical step at this stage is avoiding repeated invalid appeal attempts.
                  </p>
                )}
                {activeStep === 1 && (
                  <p className="text-xs text-[#8B968E] leading-relaxed">
                    We prepare a concise, platform-compliant review petition addressing the Terms of Service. Cases are routed strictly through official Meta and WhatsApp support channels.
                  </p>
                )}
                {activeStep === 2 && (
                  <p className="text-xs text-[#8B968E] leading-relaxed">
                    Once the review is accepted, official push notifications appear on the device. Re-verification is completed with zero credentials shared, leaving your security 100% in your hands.
                  </p>
                )}
              </div>

              {/* Navigation Controls & Direct CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? (prev - 1) as 0 | 1 | 2 : 2))}
                    className="w-10 h-10 rounded-full bg-[#101512] border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < 2 ? (prev + 1) as 0 | 1 | 2 : 0))}
                    className="w-10 h-10 rounded-full bg-[#101512] border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#18D65A] hover:bg-[#35E875] text-[#050706] px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md shadow-[#18D65A]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-[#050706]" />
                  <span>Discuss Your Restriction on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
