import { motion } from 'motion/react';
import {
  Shield,
  MessageSquare,
  Layers,
  Lock,
  Smartphone,
  CheckCircle2,
  LockKeyhole,
} from 'lucide-react';
import { WHY_CHOOSE_US, AGENCY_CONFIG } from '../data/cases';

export function WhyChooseUs() {
  const icons = [Shield, MessageSquare, Layers, Lock, Smartphone, CheckCircle2];

  return (
    <section id="why-us" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#18D65A]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              AGENCY STANDARDS
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Why Work With Us
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-2xl leading-relaxed">
            We operate strictly as an independent digital recovery consultancy. We uphold the highest
            standards of transparency, user privacy, and realistic platform expectations.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx] || Shield;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[#18D65A]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#101512] border border-white/10 flex items-center justify-center text-[#18D65A] mb-5 group-hover:scale-110 group-hover:border-[#18D65A]/50 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#B8FFCC] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#8B968E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8B968E]">
                  <span>STANDARD 0{idx + 1}</span>
                  <span className="text-[#18D65A] font-bold">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Zero Credentials Guarantee Box */}
        <div className="rounded-3xl bg-[#0B130E] border border-[#18D65A]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#18D65A]/20 border border-[#18D65A]/40 flex items-center justify-center text-[#18D65A] shrink-0 mt-1 sm:mt-0">
              <LockKeyhole className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                Zero-Credential Privacy Mandate
              </h4>
              <p className="text-xs sm:text-sm text-[#8B968E] max-w-2xl leading-relaxed">
                We will never request your account password, SMS OTP codes, 2-factor authentication keys, or private chat data. All official reviews are submitted from your own device through legitimate platform interfaces.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <span className="inline-block px-4 py-2 rounded-full text-xs font-mono font-bold text-[#B8FFCC] bg-[#102016] border border-[#18D65A]/40">
              100% NON-CREDENTIAL ASSISTANCE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
