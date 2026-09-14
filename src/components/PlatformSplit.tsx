import { motion } from 'motion/react';
import { MessageCircle, Instagram, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function PlatformSplit() {
  const whatsappIssues = [
    "Personal Number Ban Reversal",
    "WhatsApp Business Lockouts",
    "Automated Spam Filter Flags",
    "Review Request Stuck Pending",
    "Registration SMS Loop Guidance",
  ];

  const instagramIssues = [
    "Suspended / Disabled Profiles",
    "Direct Message (DM) & Link Bans",
    "Follow / Unfollow Action Blocks",
    "Community Guidelines Strike Appeal",
    "Under-18 Account Availability Restoral",
  ];

  return (
    <section className="relative py-24 bg-[#050706] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
              SPECIALIZED PLATFORM FOCUS
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
            WhatsApp & Instagram Pathways
          </h2>

          <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
            Tailored assistance frameworks designed specifically around Meta and WhatsApp trust & safety policies.
          </p>
        </div>

        {/* 2-Column Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: WhatsApp Focus (Emerald Dark Theme) */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative rounded-3xl bg-[#09110B] border border-[#18D65A]/40 p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/80 overflow-hidden group"
          >
            {/* Ambient emerald backlight */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#18D65A]/10 blur-[100px] pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#102216] border border-[#18D65A]/40 flex items-center justify-center text-[#18D65A] shadow-lg shadow-[#18D65A]/10 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-8 h-8 fill-[#18D65A]/20" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#35E875] bg-[#122818] border border-[#18D65A]/30">
                  WHATSAPP ASSISTANCE
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                WhatsApp Account Recovery
              </h3>

              <p className="text-sm text-[#8B968E] mb-6 leading-relaxed">
                Facing "This account can't use WhatsApp" on personal or business numbers? We prepare platform-compliant review documentation to request official unban reviews.
              </p>

              {/* Common Issues Tag List */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8FFCC] block mb-3 font-semibold">
                  Common WhatsApp Issues We Help With:
                </span>
                <div className="space-y-2">
                  {whatsappIssues.map((issue, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F7F5] bg-[#0E1A11] p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#18D65A] shrink-0" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent("Hello Asdullah, I need assistance with a banned or restricted WhatsApp account.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] py-3.5 rounded-full font-bold text-xs tracking-wide shadow-lg shadow-[#18D65A]/25 hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-[#050706]" />
                <span>Start WhatsApp Recovery Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Instagram Focus (Cyber Magenta-Emerald Theme) */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative rounded-3xl bg-[#0F0C14] border border-[#a855f7]/30 hover:border-[#a855f7]/60 p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/80 overflow-hidden group transition-all duration-300"
          >
            {/* Ambient cyber backlight */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#a855f7]/10 blur-[100px] pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1D122B] border border-[#a855f7]/40 flex items-center justify-center text-[#d946ef] shadow-lg shadow-[#a855f7]/10 group-hover:scale-105 transition-transform">
                  <Instagram className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#d946ef] bg-[#29133D] border border-[#a855f7]/30">
                  INSTAGRAM ASSISTANCE
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                Instagram Account Recovery
              </h3>

              <p className="text-sm text-[#8B968E] mb-6 leading-relaxed">
                Facing account suspensions, feature bans (can't send messages, view followers, or share links), or recommendation blocks? We help submit structured human appeals.
              </p>

              {/* Common Issues Tag List */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d8b4fe] block mb-3 font-semibold">
                  Common Instagram Issues We Help With:
                </span>
                <div className="space-y-2">
                  {instagramIssues.map((issue, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F7F5] bg-[#171224] p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#d946ef] shrink-0" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent("Hello Asdullah, I need assistance with a disabled or restricted Instagram account.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d946ef] to-[#18D65A] text-white py-3.5 rounded-full font-bold text-xs tracking-wide shadow-lg shadow-[#d946ef]/25 hover:scale-[1.02] transition-transform"
              >
                <Instagram className="w-4 h-4" />
                <span>Start Instagram Recovery Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
