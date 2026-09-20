import { motion } from 'motion/react';
import {
  FileText,
  Search,
  ShieldAlert,
  Send,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { PROCESS_STEPS, AGENCY_CONFIG } from '../data/cases';

export function ProcessTimeline() {
  const stepIcons = [FileText, Search, ShieldAlert, Send, CheckCircle];

  return (
    <section id="how-it-works" data-id="process" className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-[#18D65A]/5 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              5-STEP STRUCTURED FLOW • THE PROCESS
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            How It Works
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-2xl leading-relaxed">
            From initial intake screenshot to platform decision notification. A transparent, privacy-first protocol designed to prevent premature appeal rejection.
          </p>
        </div>

        {/* Sequential Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const StepIcon = stepIcons[idx] || ShieldCheck;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/50 group"
              >
                <div>
                  {/* Top Step Counter & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#101512] border border-[#18D65A]/30 flex items-center justify-center text-[#18D65A] group-hover:scale-105 group-hover:bg-[#18D65A]/10 transition-all shadow-md">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#35E875] bg-[#18D65A]/15 px-2 py-0.5 rounded border border-[#18D65A]/25">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Step Tag */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8B968E] block mb-1">
                    {step.tag}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-[#B8FFCC] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#8B968E] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Box */}
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#18D65A] block uppercase tracking-wider mb-1 font-semibold">
                    Deliverable
                  </span>
                  <p className="text-[11px] text-[#A0AEA4] font-mono leading-tight">
                    {step.deliverable}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#09110B] border border-[#18D65A]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#102216] border border-[#18D65A]/40 flex items-center justify-center text-[#18D65A] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                Zero Password & Zero OTP Guarantee
              </h4>
              <p className="text-xs text-[#8B968E] max-w-xl">
                We never request verification codes, two-factor authenticator seeds, or device login credentials. All official appeals are lodged through official client interfaces.
              </p>
            </div>
          </div>

          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#18D65A] text-[#040605] hover:bg-[#35E875] px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#18D65A]/20 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-[#040605]" />
            <span>Consult On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
