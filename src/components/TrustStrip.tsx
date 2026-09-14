import { Shield, CheckCircle, Lock, MessageSquare, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function TrustStrip() {
  const trustItems = [
    { label: "WhatsApp Recovery Assistance", icon: MessageSquare },
    { label: "Instagram Recovery Assistance", icon: CheckCircle },
    { label: "Structured Review Support", icon: Shield },
    { label: "Client Case Studies", icon: ArrowRight },
    { label: "Secure Communication", icon: Lock },
  ];

  return (
    <section aria-label="Agency Credibility" className="relative py-8 bg-[#070B08] border-y border-[#18D65A]/15 overflow-hidden">
      {/* Background cyber ambient pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Badge Label */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18D65A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18D65A]"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FFCC] font-semibold">
              TRUST STANDARDS
            </span>
            <span className="h-4 w-px bg-white/10 hidden md:block" />
          </div>

          {/* Scroller / Grid of Trust Items */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#0B0F0C] px-3.5 py-1.5 rounded-full border border-white/5 hover:border-[#18D65A]/40 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#18D65A]" />
                  <span className="text-xs font-medium text-[#F5F7F5] tracking-wide whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Responsible Position Banner */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8B968E] gap-2">
          <span>{AGENCY_CONFIG.guaranteeNotice}</span>
          <span className="text-[#B8FFCC]">Direct Helpline: +91 8271465644</span>
        </div>
      </div>
    </section>
  );
}
