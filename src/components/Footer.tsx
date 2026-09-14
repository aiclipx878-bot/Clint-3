import { ShieldCheck, MessageCircle, Phone, ArrowUp, Lock, CheckCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="agency-footer" className="relative bg-[#040605] border-t border-[#18D65A]/20 pt-16 pb-12 overflow-hidden text-[#8B968E]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[#18D65A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B0F0C] border border-[#18D65A]/40 flex items-center justify-center text-[#18D65A] shadow-md shadow-[#18D65A]/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  {AGENCY_CONFIG.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#B8FFCC] uppercase">
                  Digital Recovery Assistance
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8B968E] max-w-sm mb-6 leading-relaxed">
              Providing structured guidance and documentation assistance for official WhatsApp and Instagram
              account reviews, suspension appeals, and restriction diagnostics.
            </p>

            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B0F0C] border border-[#18D65A]/40 hover:border-[#18D65A] text-[#F5F7F5] px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#18D65A]/10"
            >
              <MessageCircle className="w-4 h-4 text-[#18D65A]" />
              <span>WhatsApp: +91 8271465644</span>
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-[#18D65A] transition-colors">
                  Services & Scope
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#18D65A] transition-colors">
                  Before & After Timeline
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-[#18D65A] transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#18D65A] transition-colors">
                  Review Workflow
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#18D65A] transition-colors">
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Ethical & Security Standards */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-semibold flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#18D65A]" />
              Ethical Standards
            </h4>
            <p className="text-xs text-[#8B968E] leading-relaxed mb-4">
              We strictly adhere to zero-credential principles. We never request, store, or handle account passwords, SMS verification OTPs, or session cookies.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#35E875]">
              <CheckCircle className="w-3.5 h-3.5 text-[#18D65A]" />
              <span>Official Review Channels Only</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Mandate */}
        <div className="pt-8 text-[11px] font-mono leading-relaxed space-y-3">
          <p className="text-[#8B968E]/80">
            <strong>LEGAL DISCLAIMER:</strong> {AGENCY_CONFIG.name} is an independent digital recovery assistance consultancy. We are not affiliated with, endorsed by, authorized by, or sponsored by WhatsApp LLC, Meta Platforms, Inc., or Instagram. All product names, logos, and brands are property of their respective owners. We do not engage in hacking, unauthorized system access, or circumvention of technological security protections. All recovery requests are processed strictly through official platform review channels.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-[10px] text-[#8B968E]">
            <span>
              © {new Date().getFullYear()} {AGENCY_CONFIG.name}. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8B968E] hover:text-[#18D65A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
