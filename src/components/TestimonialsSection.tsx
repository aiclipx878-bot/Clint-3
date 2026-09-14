import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { REAL_REVIEWS, AGENCY_CONFIG } from '../data/cases';

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#070B08] border-t border-[#18D65A]/15 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#18D65A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              CLIENT EXPERIENCES & FEEDBACK
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Real Client Reactions
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Unfiltered feedback and communication from account holders who experienced lockouts
            and successfully had their platform reviews completed.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REAL_REVIEWS.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -6 }}
              className="p-7 rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 transition-all duration-300 shadow-xl shadow-black/50 flex flex-col justify-between"
            >
              <div>
                {/* Platform Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider text-[#B8FFCC] bg-[#142318] border border-[#18D65A]/20">
                    {rev.platform}
                  </span>
                  <div className="flex items-center text-[#18D65A] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#18D65A]" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-white font-medium italic mb-6 leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-[#F5F7F5] font-semibold">{rev.clientContext}</span>
                  <span className="text-[#8B968E]">{rev.dateStr}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#35E875]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#18D65A]" />
                  <span>{rev.verifiedStatus}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Note */}
        <div className="text-center">
          <p className="text-xs font-mono text-[#8B968E]">
            {AGENCY_CONFIG.guaranteeNotice} • Inquiries handled individually by {AGENCY_CONFIG.name}.
          </p>
        </div>

      </div>
    </section>
  );
}
