import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  Instagram,
  FileSearch,
  KeyRound,
  Activity,
  Briefcase,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
  X,
  ExternalLink,
} from 'lucide-react';
import { SERVICES, AGENCY_CONFIG } from '../data/cases';
import { ServiceItem } from '../types';

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Instagram':
        return Instagram;
      case 'FileSearch':
        return FileSearch;
      case 'KeyRound':
        return KeyRound;
      case 'Activity':
        return Activity;
      case 'Briefcase':
        return Briefcase;
      default:
        return ShieldAlert;
    }
  };

  const scrollToContact = () => {
    setSelectedService(null);
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="what-i-do" data-id="services" className="relative py-24 bg-[#050706] overflow-hidden border-t border-[#18D65A]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#18D65A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              SPECIALIZED CONSULTANCY • MAIN OFFERING
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            What I Do
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-2xl leading-relaxed">
            Targeted technical assistance for accounts subject to platform penalties, erroneous algorithm bans, identity loops, or administrative lockouts.
          </p>
        </div>

        {/* 6-Service Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[#18D65A]/10"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#101512] border border-white/10 flex items-center justify-center text-[#18D65A] group-hover:border-[#18D65A]/50 group-hover:scale-105 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#8B968E] group-hover:text-[#18D65A] transition-colors">
                      #{service.number}
                    </span>
                  </div>

                  {/* Platform Tag */}
                  <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-[#B8FFCC] border border-white/5 mb-3">
                    {service.platform}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#B8FFCC] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8B968E] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Timeline & Details Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#A0AEA4] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#18D65A]" />
                    {service.timeline.split('typically')[0] || 'Fast Case Setup'}
                  </span>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-mono text-[#18D65A] hover:text-[#35E875] flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Policy Bottom Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0B0F0C] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B968E]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            Need an immediate feasibility diagnostic on your active restriction notice?
          </span>
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#35E875] hover:text-[#B8FFCC] transition-colors cursor-pointer shrink-0 font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Error Screenshot to WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#0B0F0C] border border-[#18D65A]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-[#8B968E] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#18D65A] uppercase tracking-wider mb-2">
                <span>Scope #{selectedService.number}</span>
                <span>•</span>
                <span>{selectedService.platform}</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                {selectedService.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8B968E] leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 font-semibold">
                Key Deliverables & Action Items:
              </h4>

              <div className="space-y-2.5 mb-6">
                {selectedService.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#E1E6E2]">
                    <CheckCircle2 className="w-4 h-4 text-[#18D65A] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#101512] border border-white/5 mb-6 text-xs font-mono text-[#A0AEA4] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#18D65A] shrink-0" />
                <span>{selectedService.timeline}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=Hello%20Asdullah,%20I%20need%20assistance%20with%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#18D65A] text-[#040605] py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#35E875] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-[#040605]" />
                  <span>Start Case on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#8B968E] hover:text-white font-mono text-xs cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
