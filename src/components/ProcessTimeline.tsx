import { motion } from 'motion/react';
import {
  MessageSquare,
  Search,
  FileCheck2,
  Cpu,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { PROCESS_STEPS, AGENCY_CONFIG } from '../data/cases';

export function ProcessTimeline() {
  const stepIcons = [MessageSquare, Search, FileCheck2, Cpu, CheckCircle];

  return (
    <section id="process" className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#18D65A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              STRUCTURED RECOVERY WORKFLOW
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            How The Process Works
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Transparent, compliant, and step-by-step. We guide you through the official platform channels
            without ever requesting account passwords.
          </p>
        </div>

        {/* 5-Step Connected Timeline Cards */}
        <div className="relative">
          {/* Desktop Connecting Glowing Line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#18D65A]/10 via-[#18D65A]/50 to-[#18D65A]/10 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || CheckCircle;
              return (
                <motion.div
                  key={step.number}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/50 transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[#18D65A]/15"
                >
                  {/* Top Step Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#101512] border border-[#18D65A]/30 flex items-center justify-center text-[#18D65A] group-hover:scale-110 group-hover:border-[#18D65A] transition-all shadow-md shadow-[#18D65A]/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm font-bold text-[#8B968E] group-hover:text-[#35E875] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Tag */}
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider text-[#B8FFCC] bg-[#142318] border border-[#18D65A]/20 mb-3">
                      {step.tag}
                    </span>

                    {/* Step Title */}
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#B8FFCC] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#8B968E] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] font-mono text-[#35E875] block">
                      Deliverable:
                    </span>
                    <span className="text-[11px] text-[#F5F7F5] font-medium leading-snug">
                      {step.deliverable}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#101512] border border-[#18D65A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#18D65A]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#18D65A]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Ready to Initiate Step 01?
              </h4>
              <p className="text-xs text-[#8B968E]">
                Send your error screenshot directly to Asdullah Ahmed via WhatsApp for rapid intake.
              </p>
            </div>
          </div>

          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#18D65A] hover:bg-[#35E875] text-[#050706] px-6 py-3 rounded-full font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#18D65A]/25 hover:scale-105"
          >
            <span>Send Case Screenshot</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
