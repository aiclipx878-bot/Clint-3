import { Shield, ArrowUp, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';
import asdullahLogo from '../assets/images/asdullah_recovery_logo_1789371670605.jpg';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export function Footer({ onOpenAdmin }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#040605] border-t border-[#18D65A]/20 pt-16 pb-12 overflow-hidden text-[#8B968E]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[#18D65A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#18D65A]/40 bg-[#0B0F0C] p-0.5 shadow-md shadow-[#18D65A]/10">
                <img
                  src={asdullahLogo}
                  alt={AGENCY_CONFIG.name}
                  className="w-full h-full object-cover rounded-[9px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white tracking-wider uppercase">
                  {AGENCY_CONFIG.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#B8FFCC] uppercase">
                  {AGENCY_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8B968E] max-w-md mb-6 leading-relaxed">
              Professional, structured digital assistance for WhatsApp & Instagram account restrictions, unexpected bans, automated flag appeals, and platform re-verification.
            </p>

            <div className="flex flex-col space-y-2 text-xs font-mono text-[#A0AEA4]">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#18D65A]" />
                Direct Helpline: {AGENCY_CONFIG.phone}
              </span>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#18D65A] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#18D65A]" />
                Official WhatsApp: {AGENCY_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#home" className="hover:text-[#18D65A] transition-colors">
                  • Home
                </a>
              </li>
              <li>
                <a href="#what-i-do" className="hover:text-[#18D65A] transition-colors">
                  • What I Do
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#18D65A] transition-colors">
                  • Reviews & Proofs
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#18D65A] transition-colors">
                  • How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#18D65A] transition-colors">
                  • Book Intake / Contact
                </a>
              </li>
              {onOpenAdmin && (
                <li className="pt-2">
                  <button
                    onClick={onOpenAdmin}
                    className="text-[#35E875] hover:underline transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>• Open Dispatch Console</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Independent Notice & Scope */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 font-semibold">
              Security & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#8B968E]">
              <li>✓ Zero Passwords Required</li>
              <li>✓ Zero SMS OTP Requests</li>
              <li>✓ Official Platform Interface Appeals</li>
              <li>✓ Encrypted Client Communications</li>
              <li>✓ Independent Verification Guidance</li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="py-6 border-b border-white/5 text-[11px] font-mono leading-relaxed text-[#6E7B71]">
          <p>
            <strong className="text-[#8B968E]">Disclaimer & Legal Notice:</strong> Asdullah Ahmed provides independent technical advisory and structured appeal statement preparation for account review requests. We are an independent consultancy and are not affiliated, endorsed, authorized, or in any way officially associated with WhatsApp LLC, Meta Platforms, Inc., or Instagram. Official review verdicts and reinstatement determinations are solely and exclusively issued by the respective platform trust & safety operations. No recovery outcome is guaranteed.
          </p>
        </div>

        {/* Bottom copyright and scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-[#8B968E] text-center sm:text-left">
            © {new Date().getFullYear()} {AGENCY_CONFIG.name}. All rights reserved. Built for secure digital communication assistance.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#B8FFCC] hover:text-[#18D65A] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
