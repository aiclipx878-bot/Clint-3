import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  ZoomIn,
  X,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Smartphone,
  Eye,
  Check,
  Calendar,
  Lock,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

// Import all 5 uploaded Real Life Work proof images
import waProofAug24 from '../assets/images/wa_proof_aug24_1789375116796.jpg';
import waProofAug25 from '../assets/images/wa_proof_aug25_1789375138622.jpg';
import waProofSep4 from '../assets/images/wa_proof_sep4_1789375159437.jpg';
import waProofSep1 from '../assets/images/wa_proof_sep1_1789375184483.jpg';
import waProofAug31 from '../assets/images/wa_proof_aug31_1789375200129.jpg';
import instagramProofPhoto from '../assets/images/instagram_restriction_proof_1789371843808.jpg';

interface RealLifeCase {
  id: string;
  title: string;
  category: 'WhatsApp Unban' | 'Instagram Restriction' | 'Account Recovery';
  dateStr: string;
  imageSrc: string;
  summary: string;
  watermarkNote: string;
  beforeStatus: string;
  afterStatus: string;
  highlights: string[];
}

const REAL_LIFE_CASES: RealLifeCase[] = [
  {
    id: 'proof-aug24',
    title: 'WhatsApp Unban & Payment Confirmation (Aug 24)',
    category: 'WhatsApp Unban',
    dateStr: 'Mon, Aug 24 • 0:31 AM',
    imageSrc: waProofAug24,
    summary:
      'Live notification center capturing both WhatsApp Business & personal WhatsApp unban notices ("Welcome back to WhatsApp. Verify your account so you can start chatting.") alongside PhonePe payment dispatch.',
    watermarkNote: 'Authentic watermark: Asdullah Ahmed • +91 8271465644',
    beforeStatus: 'Permanent / Temporary Ban on WhatsApp Business & Messenger',
    afterStatus: 'Welcome back to WhatsApp • Account access reinstated',
    highlights: [
      'Dual account unban notifications delivered concurrently',
      'PhonePe payment confirmation received from satisfied client',
      'Original phone screenshot with Jio True5G network stamp',
    ],
  },
  {
    id: 'proof-aug25',
    title: 'WhatsApp Business Before & After Physical Proof (Aug 25)',
    category: 'WhatsApp Unban',
    dateStr: 'Tue, Aug 25 • Official Review',
    imageSrc: waProofAug25,
    summary:
      'Direct side-by-side comparison: On the left, physical hand holding phone showing "This account can\'t use WhatsApp". On the right, WhatsApp Business verified review screen stating "This account can now use WhatsApp".',
    watermarkNote: 'WhatsApp Unban Non-Appeal • 100% Safe • Asdullah Ahmed +91 8271465644',
    beforeStatus: 'Banned: "This account can\'t use WhatsApp since 25 August 2026"',
    afterStatus: 'Restored: "This account can now use WhatsApp — review requested & cleared"',
    highlights: [
      'Physical device photography proving real-world hardware verification',
      'Official Meta review clearing all policy and device flags',
      '100% Non-appeal structured recovery methodology',
    ],
  },
  {
    id: 'proof-sep4',
    title: 'Client Chat Unban Confirmation "Unbnn done\' ✔" (Sep 4)',
    category: 'WhatsApp Unban',
    dateStr: 'Fri, Sep 4 • 9:30 AM',
    imageSrc: waProofSep4,
    summary:
      'Direct client conversation log with embedded hardware proof and notification banner: WhatsApp notification "Welcome back to WhatsApp" confirmed in live client thread with "Unbnn done\' ✔".',
    watermarkNote: 'Watermarked @khtrnak_man_786 • Asdullah Ahmed',
    beforeStatus: 'Blocked: "This account can\'t use WhatsApp since Sep 4, 2026"',
    afterStatus: 'Unbanned & Verified at 9:30 AM with instant chat confirmation',
    highlights: [
      'Live client interaction recording immediate unban completion',
      'Top hardware screen displaying exact banned status before fix',
      'Notification popup confirming verified re-entry within 2 minutes',
    ],
  },
  {
    id: 'proof-sep1',
    title: 'Triple WhatsApp Recovery Lockscreen (Sep 1)',
    category: 'WhatsApp Unban',
    dateStr: 'Tue, Sep 1 • 10:24 AM',
    imageSrc: waProofSep1,
    summary:
      'Morning notification stack showing three consecutive WhatsApp unban verifications processed for WhatsApp Business and personal lines under Asdullah Ahmed signature.',
    watermarkNote: 'Handwritten signature watermark: Asdullah Ahmed • +91 8271465644',
    beforeStatus: 'Multiple business accounts suspended across simultaneous devices',
    afterStatus: 'All 3 accounts cleared with "Welcome back to WhatsApp" verifications',
    highlights: [
      'Triple account batch unban completed on single morning schedule',
      'Consecutive WhatsApp Business and standard messenger unbans',
      'Signed with Asdullah Ahmed security watermark',
    ],
  },
  {
    id: 'proof-aug31',
    title: 'Nighttime WhatsApp Business Recovery (Aug 31)',
    category: 'WhatsApp Unban',
    dateStr: 'Mon, Aug 31 • 22:33 PM',
    imageSrc: waProofAug31,
    summary:
      'Nighttime emergency resolution with dual WhatsApp Business notifications and bright neon green handwritten signature watermark. High-speed turnaround for critical business account.',
    watermarkNote: 'Vibrant neon green watermark: Asdullah Ahmed • +91 8271465644',
    beforeStatus: 'Urgent business line locked out during active sales hours',
    afterStatus: 'Account restored and confirmed: "Welcome back to WhatsApp"',
    highlights: [
      '24/7 urgent handling completed at 22:33 PM night window',
      'Dual WhatsApp Business confirmation cards',
      'Client settlement dispatched immediately upon verification',
    ],
  },
  {
    id: 'proof-instagram',
    title: 'Instagram Business Restriction Removed (Archived Proof)',
    category: 'Instagram Restriction',
    dateStr: 'Case Study • Restored',
    imageSrc: instagramProofPhoto,
    summary:
      'Algorithmic direct-message restriction and feature ban lifted from business profile. Official Meta review cleared all recommendation and message removal penalties.',
    watermarkNote: 'Verified Case Review • Asdullah Ahmed',
    beforeStatus: 'Restricted: Cannot send messages, share links, or view followers',
    afterStatus: 'Restored: "Your account meets all of our guidelines"',
    highlights: [
      'Direct messaging and link-sharing completely unlocked',
      'Recommendation eligibility restored for search discovery',
      'Verified platform review completed successfully',
    ],
  },
];

export function RealLifeWorkSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'All' | 'WhatsApp Unban' | 'Instagram Restriction'>('All');

  const filteredCases = REAL_LIFE_CASES.filter((c) => {
    if (activeFilter === 'All') return true;
    return c.category === activeFilter;
  });

  const currentCase = REAL_LIFE_CASES[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : REAL_LIFE_CASES.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < REAL_LIFE_CASES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="real-life-work"
      className="relative py-24 bg-[#050806] border-t border-[#18D65A]/20 overflow-hidden text-[#E1E8E3]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-[#18D65A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#18D65A] uppercase font-semibold">
              UNEDITED CLIENT EVIDENCE • REAL LIFE WORK
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Real Life Work Proof
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#8B968E] max-w-2xl leading-relaxed">
            Direct, authentic photo evidence of client recoveries performed by <span className="text-[#18D65A] font-semibold">Asdullah Ahmed</span>.
            Review the exact unedited screenshots, before-and-after WhatsApp unbans, and verified notifications below.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
            {(['All', 'WhatsApp Unban', 'Instagram Restriction'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#18D65A] text-[#050706] shadow-lg shadow-[#18D65A]/20'
                    : 'bg-[#0E1511] text-[#8B968E] border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {filter === 'All' ? `All Real Life Proofs (${REAL_LIFE_CASES.length})` : filter}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED REAL LIFE WORK VIEWER (Main Showcase) */}
        <div className="rounded-3xl bg-[#090F0C] border border-[#18D65A]/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 relative overflow-hidden mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image Put Exactly As It Is Given with phone ratio */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="relative group w-full max-w-sm">
                
                {/* Glow ring */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#18D65A]/40 via-cyan-500/20 to-transparent blur-md opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* The Unedited Image Frame */}
                <div
                  id={`featured-work-card-${currentCase.id}`}
                  onClick={() => setIsZoomed(true)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden border-2 border-[#18D65A]/50 bg-black shadow-2xl shadow-[#18D65A]/20 transition-all duration-300 group-hover:scale-[1.01]"
                >
                  <img
                    src={currentCase.imageSrc}
                    alt={currentCase.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[560px] object-contain select-none bg-black mx-auto"
                  />

                  {/* Zoom Overlay Prompt on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4 text-center backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-[#18D65A]/20 border border-[#18D65A] flex items-center justify-center text-[#18D65A] shadow-lg shadow-[#18D65A]/30 animate-bounce">
                      <ZoomIn className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#B8FFCC]">
                      Click To Enlarge High-Res Photo
                    </span>
                    <span className="text-[10px] font-mono text-[#8B968E]">
                      Inspect Authentic Watermark & Timestamps
                    </span>
                  </div>

                  {/* Watermark badge on top */}
                  <div className="absolute top-3 left-3 bg-[#050706]/90 backdrop-blur-md border border-[#18D65A]/50 text-[#18D65A] text-[10px] font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18D65A]" />
                    <span>REAL LIFE WORK PROOF #{selectedIndex + 1}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-cyan-300" />
                    <span>{currentCase.dateStr.split('•')[0]}</span>
                  </div>
                </div>

                {/* Sub-bar with zoom and navigation controls */}
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#8B968E] px-1">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                      title="Previous Proof"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-[#18D65A] font-bold px-2">
                      {selectedIndex + 1} / {REAL_LIFE_CASES.length}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                      title="Next Proof"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => setIsZoomed(true)}
                    className="text-[#18D65A] hover:text-[#35E875] underline underline-offset-2 flex items-center gap-1.5 cursor-pointer font-semibold"
                  >
                    <span>View Fullscreen</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>

            </div>

            {/* Right Column: Case Dossier & Verified Outcomes */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18D65A]/10 border border-[#18D65A]/40 text-[#18D65A] text-xs font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#18D65A]" />
                  <span>{currentCase.category}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
                  <Calendar className="w-3 h-3 text-[#18D65A]" />
                  <span>{currentCase.dateStr}</span>
                </div>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2">
                {currentCase.title}
              </h3>

              <p className="text-xs font-mono text-[#18D65A] mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentCase.watermarkNote}</span>
              </p>

              <p className="text-xs sm:text-sm text-[#8B968E] leading-relaxed mb-6">
                {currentCase.summary}
              </p>

              {/* Status Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                {/* Before Status */}
                <div className="p-4 rounded-2xl bg-[#140D0D] border border-red-500/30">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-red-300 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
                      BEFORE — LOCKED / BANNED
                    </span>
                  </div>
                  <p className="text-xs text-red-300 font-semibold leading-snug">
                    {currentCase.beforeStatus}
                  </p>
                </div>

                {/* After Status */}
                <div className="p-4 rounded-2xl bg-[#0C1610] border border-[#18D65A]/40">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#35E875] bg-[#142318] px-2 py-0.5 rounded border border-[#18D65A]/40">
                      AFTER — UNBANNED & RESTORED
                    </span>
                  </div>
                  <p className="text-xs text-[#35E875] font-semibold leading-snug">
                    {currentCase.afterStatus}
                  </p>
                </div>

              </div>

              {/* Case Highlights Checklist */}
              <div className="mb-6 space-y-2">
                {currentCase.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-[#A2B0A6]">
                    <div className="w-4 h-4 rounded-full bg-[#18D65A]/20 border border-[#18D65A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#18D65A] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="real-life-whatsapp-contact"
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Asdullah Ahmed, I saw your real life work proof (${currentCase.title}) on your website and need help with my account.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#18D65A] text-[#050706] px-5 py-2.5 rounded-full font-bold text-xs shadow-lg shadow-[#18D65A]/25 hover:bg-[#35E875] hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-[#050706]" />
                  <span>WhatsApp Case Review (+91 82714 65644)</span>
                </a>

                <button
                  onClick={() => setIsZoomed(true)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#18D65A]/40 text-xs font-mono text-[#B8FFCC] hover:text-white transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#18D65A]" />
                  <span>Inspect Full Resolution</span>
                </button>
              </div>

              {/* Authenticity Guarantee */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8B968E]">
                <span>Verified Direct Case Worker: <strong className="text-white">Asdullah Ahmed</strong></span>
                <span className="text-[#18D65A] font-semibold">100% Non-Appeal Safe Recovery</span>
              </div>

            </div>

          </div>

        </div>

        {/* THUMBNAIL GALLERY: ALL 5 IMAGES AS THEY ARE GIVEN */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#18D65A]" />
                <span>Gallery: Select Any Real Life Work Proof To View</span>
              </h3>
              <p className="text-xs text-[#8B968E] mt-0.5">
                All 5 client work proofs displayed exactly as submitted with verified watermarks.
              </p>
            </div>
            <span className="text-xs font-mono text-[#18D65A]">
              Showing {filteredCases.length} Authentic Records
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredCases.map((caseItem) => {
              const originalIndex = REAL_LIFE_CASES.findIndex((c) => c.id === caseItem.id);
              const isSelected = selectedIndex === originalIndex;

              return (
                <div
                  key={caseItem.id}
                  id={`thumbnail-${caseItem.id}`}
                  onClick={() => {
                    setSelectedIndex(originalIndex);
                  }}
                  className={`group relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-200 flex flex-col bg-[#080D0A] ${
                    isSelected
                      ? 'border-[#18D65A] ring-2 ring-[#18D65A]/30 scale-[1.02] shadow-xl shadow-[#18D65A]/20'
                      : 'border-white/10 hover:border-[#18D65A]/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Photo container in aspect-ratio */}
                  <div className="relative aspect-[9/16] bg-black overflow-hidden">
                    <img
                      src={caseItem.imageSrc}
                      alt={caseItem.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Selection Check Indicator */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#18D65A] text-[#050706] flex items-center justify-center shadow-lg">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}

                    <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/80 backdrop-blur-sm rounded px-1.5 py-0.5 text-[9px] font-mono text-white text-center truncate border border-white/10">
                      {caseItem.dateStr.split('•')[0]}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-2 border-t border-white/5 flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-white truncate">
                      Proof #{originalIndex + 1}
                    </span>
                    <span className="text-[9px] font-mono text-[#8B968E] truncate">
                      {caseItem.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL (Enlarges any of the 5 images as it is given) */}
      <AnimatePresence>
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full max-h-[95vh] flex flex-col items-center rounded-2xl bg-[#070C09] border-2 border-[#18D65A]/50 p-4 shadow-2xl shadow-[#18D65A]/20 overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18D65A] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider truncate max-w-[280px] sm:max-w-md">
                    Real Life Work Proof #{selectedIndex + 1} — {currentCase.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#18D65A] hidden sm:inline">
                    {selectedIndex + 1} of {REAL_LIFE_CASES.length}
                  </span>
                  <button
                    onClick={() => setIsZoomed(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Close zoomed view"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Viewport with high resolution scroll/fit */}
              <div className="relative w-full overflow-y-auto max-h-[75vh] flex justify-center items-center rounded-xl bg-black p-2">
                <img
                  src={currentCase.imageSrc}
                  alt={currentCase.title}
                  referrerPolicy="no-referrer"
                  className="w-auto max-w-full h-auto max-h-[72vh] object-contain rounded-lg select-none shadow-2xl"
                />

                {/* Left/Right Floating Nav inside Modal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xl"
                  title="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xl"
                  title="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Bottom Action */}
              <div className="w-full pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#8B968E] text-[11px] truncate">
                  Asdullah Ahmed • +91 82714 65644
                </span>
                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Asdullah Ahmed, I am viewing Real Life Work proof #${selectedIndex + 1} (${currentCase.title}) and need recovery assistance.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#18D65A] text-[#050706] font-bold px-4 py-1.5 rounded-full text-[11px] hover:bg-[#35E875] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#050706]" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
