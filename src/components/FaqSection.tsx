import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/cases';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#18D65A]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            Clear Answers & Policies
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Transparent explanations of our assistance process, safety boundaries, and realistic platform outcomes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B0F0C] border-[#18D65A]/40 shadow-xl shadow-black/40'
                    : 'bg-[#0B0F0C]/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="font-mono text-xs font-bold text-[#18D65A]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-[#101512] border border-white/10 flex items-center justify-center shrink-0 text-[#18D65A] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#142318] border-[#18D65A]/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#8B968E] leading-relaxed border-t border-white/5">
                        <p className="pt-2">{faq.answer}</p>
                        
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#B8FFCC]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#18D65A]" />
                          <span>Category: {faq.category} Policy</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
