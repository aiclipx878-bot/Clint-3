import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  Instagram,
  FileSearch,
  KeyRound,
  Activity,
  Briefcase,
  ArrowUpRight,
  X,
  CheckCircle2,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { SERVICES, AGENCY_CONFIG } from '../data/cases';
import { ServiceItem } from '../types';

export function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#18D65A]" />;
      case 'Instagram':
        return <Instagram className="w-6 h-6 text-[#35E875]" />;
      case 'FileSearch':
        return <FileSearch className="w-6 h-6 text-[#18D65A]" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-[#35E875]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#18D65A]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#35E875]" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-[#18D65A]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Background cyber radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#18D65A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              STRUCTURED DIGITAL ASSISTANCE
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            What We Help With
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-2xl leading-relaxed">
            Every case is unique. We provide structured guidance through the available platform-approved
            review channels for individual, creator, and business accounts.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.number}
              id={`service-card-${service.number}`}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setActiveService(service)}
              className="group cursor-pointer relative flex flex-col justify-between p-7 rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/50 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[#18D65A]/10"
            >
              {/* Subtle green hover glow on card border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#18D65A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#18D65A]/70 group-hover:text-[#18D65A] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#101512] border border-white/10 flex items-center justify-center group-hover:border-[#18D65A]/40 group-hover:scale-110 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Platform Tag */}
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#B8FFCC] bg-[#142318] border border-[#18D65A]/20">
                    {service.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#F5F7F5] group-hover:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#8B968E] leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#8B968E] flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#18D65A]" />
                  {service.timeline.split(' ')[0]} turnaround
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#18D65A] group-hover:translate-x-0.5 transition-transform">
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expandable Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#0B0F0C] border border-[#18D65A]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#18D65A]/20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#101512] border border-white/10 hover:border-white/30 text-[#8B968E] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-[#18D65A] font-bold">
                  SERVICE {activeService.number}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-[#B8FFCC] uppercase">
                  {activeService.platform}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                {activeService.title}
              </h3>

              <p className="text-sm text-[#8B968E] mb-6 leading-relaxed">
                {activeService.description}
              </p>

              <div className="mb-6 bg-[#101512] rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B8FFCC] mb-3 font-semibold">
                  What Our Structured Assistance Includes:
                </h4>
                <ul className="space-y-2.5">
                  {activeService.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F7F5]">
                      <CheckCircle2 className="w-4 h-4 text-[#18D65A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B968E] w-full sm:w-auto">
                  <Clock className="w-4 h-4 text-[#18D65A]" />
                  <span>{activeService.timeline}</span>
                </div>

                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(`Hello Asdullah, I need assistance regarding Service ${activeService.number}: ${activeService.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] px-6 py-3 rounded-xl font-bold text-xs tracking-wide shadow-lg shadow-[#18D65A]/25 hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-[#050706]" />
                  <span>Inquire About This Service</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
