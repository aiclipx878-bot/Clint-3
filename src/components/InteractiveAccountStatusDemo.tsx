import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle,
  Clock,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function InteractiveAccountStatusDemo() {
  const [selectedState, setSelectedState] = useState<'restricted' | 'review' | 'restored'>('restricted');

  const states = [
    {
      id: 'restricted' as const,
      label: 'RESTRICTED',
      badge: 'Step 1: The Strike',
      color: 'red',
      activeColor: 'bg-red-500/20 text-red-400 border-red-500/50',
    },
    {
      id: 'review' as const,
      label: 'IN REVIEW',
      badge: 'Step 2: Appeal Filed',
      color: 'amber',
      activeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
    },
    {
      id: 'restored' as const,
      label: 'RESTORED',
      badge: 'Step 3: Unban Done',
      color: 'emerald',
      activeColor: 'bg-[#18D65A]/20 text-[#35E875] border-[#18D65A]/50',
    },
  ];

  return (
    <section className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-[#18D65A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              INTERACTIVE STATUS SIMULATOR
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Test the Recovery Lifecycle
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Click each status state below to preview how our structured review assistance guides accounts
            from initial lockout notice to full restoration.
          </p>

          {/* Interactive State Toggle Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {states.map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedState(st.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                  selectedState === st.id
                    ? `${st.activeColor} shadow-lg shadow-black/40 scale-105`
                    : 'bg-[#0B0F0C] border-white/10 text-[#8B968E] hover:text-white hover:border-white/20'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>{st.label}</span>
                <span className="text-[10px] opacity-70">({st.badge})</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Simulated Smartphone Interface */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B0F0C] border border-[#18D65A]/30 p-6 sm:p-10 shadow-2xl shadow-black/70">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Phone Simulator Frame */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-[270px] sm:w-[300px] rounded-[34px] bg-[#020403] border-[6px] border-[#18231a] p-3 shadow-2xl shadow-black">
                
                {/* Dynamic island notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#111] mr-1.5" />
                  <div className="w-6 h-1 bg-[#222] rounded-full" />
                </div>

                <div className="relative w-full aspect-[9/18] bg-[#0c100d] rounded-[26px] p-4 flex flex-col justify-between select-none text-left border border-white/5">
                  
                  {/* Status header */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#8B968E] pt-2 mb-2">
                    <span>12:00</span>
                    <span>5G • 98%</span>
                  </div>

                  {/* Dynamic Interactive Screen */}
                  <AnimatePresence mode="wait">
                    {selectedState === 'restricted' && (
                      <motion.div
                        key="demo-restricted"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex flex-col justify-between py-2"
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center mx-auto mb-3">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                          </div>
                          <h4 className="font-bold text-sm text-white mb-1">
                            This account can't use WhatsApp
                          </h4>
                          <p className="text-[10px] font-mono text-red-400 mb-3">
                            STATUS: BANNED / RESTRICTED
                          </p>
                          <div className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl text-[11px] text-[#8B968E] text-left leading-relaxed">
                            Some activity on your account may not have followed our Terms of Service. You can request a review to restore your account access.
                          </div>
                        </div>

                        <div className="space-y-2">
                          <button
                            onClick={() => setSelectedState('review')}
                            className="w-full py-2.5 rounded-full bg-red-600 text-white font-bold text-xs text-center shadow-md hover:bg-red-500 transition-colors"
                          >
                            Simulate Request Review →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {selectedState === 'review' && (
                      <motion.div
                        key="demo-review"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex flex-col justify-between py-2"
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center mx-auto mb-3 animate-pulse">
                            <Clock className="w-6 h-6 text-amber-400" />
                          </div>
                          <h4 className="font-bold text-sm text-white mb-1">
                            Account in review
                          </h4>
                          <p className="text-[10px] font-mono text-amber-400 mb-3">
                            OFFICIAL APPEAL PENDING
                          </p>
                          <div className="p-3 bg-amber-950/20 border border-amber-500/20 rounded-xl text-[11px] text-[#8B968E] text-left leading-relaxed">
                            Your account activity and device info is being checked. Asdullah Ahmed structured guidance statement filed with review team.
                          </div>
                        </div>

                        <div className="space-y-2">
                          <button
                            onClick={() => setSelectedState('restored')}
                            className="w-full py-2.5 rounded-full bg-amber-600 text-white font-bold text-xs text-center shadow-md hover:bg-amber-500 transition-colors"
                          >
                            Simulate Restored Decision →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {selectedState === 'restored' && (
                      <motion.div
                        key="demo-restored"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex flex-col justify-between py-2"
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-[#18D65A]/20 border border-[#18D65A]/50 flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="w-7 h-7 text-[#18D65A]" />
                          </div>
                          <h4 className="font-bold text-sm text-white mb-1">
                            This account can now use WhatsApp
                          </h4>
                          <p className="text-[10px] font-mono text-[#35E875] mb-3">
                            UNBAN DONE • ACCESS RESTORED
                          </p>
                          <div className="p-3 bg-[#122316] border border-[#18D65A]/30 rounded-xl text-[11px] text-[#B8FFCC] text-left leading-relaxed shadow-lg">
                            <span className="font-bold block text-white mb-0.5">Push Notification Received:</span>
                            "Welcome back to WhatsApp. Verify your account so you can start chatting."
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="w-full py-2.5 rounded-full bg-[#18D65A] text-[#050706] font-bold text-xs text-center shadow-lg shadow-[#18D65A]/30">
                            Verify account & Log In
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-[#8B968E]">
                    <span>Official WhatsApp Client</span>
                    <span>Verified Flow</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Information & Action Box */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-[#18D65A] uppercase font-bold">
                  SIMULATOR INSIGHTS
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-[#8B968E] uppercase">
                  {selectedState} phase
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                {selectedState === 'restricted' && 'Immediate Diagnostic & Error Triage'}
                {selectedState === 'review' && 'Platform Terms Compliance Filing'}
                {selectedState === 'restored' && 'Device Re-Login & Security Hardening'}
              </h3>

              <p className="text-sm text-[#8B968E] leading-relaxed mb-6">
                {selectedState === 'restricted' &&
                  'When an account receives an unexpected ban, impulsive spamming of unformatted appeals usually leads to permanent rejections. We analyze the root cause first.'}
                {selectedState === 'review' &&
                  'Our structured statement is submitted through the proper platform review portal, outlining user compliance without sharing any passwords or sensitive credentials.'}
                {selectedState === 'restored' &&
                  'When approved, WhatsApp sends official system notifications. We guide you through verifying your number on your device and restoring all chat archives safely.'}
              </p>

              <div className="p-4 rounded-xl bg-[#101512] border border-white/5 space-y-2 mb-6 text-xs text-[#F5F7F5]">
                <div className="flex items-center gap-2 font-mono text-[#B8FFCC]">
                  <ShieldCheck className="w-4 h-4 text-[#18D65A]" />
                  <span>Key Safety Rule:</span>
                </div>
                <p className="text-[#8B968E]">
                  You remain in full control of your device and authentication credentials throughout every step.
                </p>
              </div>

              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-lg shadow-[#18D65A]/25 hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-[#050706]" />
                <span>Start Review Assistance on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
