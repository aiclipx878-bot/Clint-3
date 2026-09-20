import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  CheckCircle2,
  ZoomIn,
  X,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Smartphone,
  Eye,
  Maximize2,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

// Direct paths to all 8 authentic review images (stored in public/images/reviews/)
export interface ReviewPhotoItem {
  id: string;
  number: number;
  title: string;
  platform: 'WhatsApp' | 'WhatsApp Business';
  imageSrc: string;
  fallbackCdnUrl: string;
  originalLink: string;
  hostSource: 'ImgBB' | 'im.ge';
  quote: string;
  clientContext: string;
  dateStr: string;
  verifiedStatus: string;
}

export const ALL_REVIEW_PHOTOS: ReviewPhotoItem[] = [
  {
    id: 'rev-photo-1',
    number: 1,
    title: 'Personal WhatsApp Ban Reversal Chat',
    platform: 'WhatsApp',
    imageSrc: '/images/reviews/review_1_aug.jpg',
    fallbackCdnUrl: 'https://i.ibb.co/dsSzD6ng/8213e5d3-4ff1-4b34-a6f0-24620ea8f860.jpg',
    originalLink: 'https://ibb.co/5XdfLvqF',
    hostSource: 'ImgBB',
    quote: 'Jazakallah khair bhai! Mera WhatsApp account bilkul recover ho gaya within a few hours. Super fast response!',
    clientContext: 'Personal WhatsApp Account',
    dateStr: 'August 2026',
    verifiedStatus: 'Verified WhatsApp Chat Log',
  },
  {
    id: 'rev-photo-2',
    number: 2,
    title: 'Client Appreciation & Instant Gratitude',
    platform: 'WhatsApp Business',
    imageSrc: '/images/reviews/review_2_chat.jpg',
    fallbackCdnUrl: 'https://i.ibb.co/5hDJBTbP/6d19adef-0dc9-4acc-b00c-2912fad9db64.jpg',
    originalLink: 'https://ibb.co/k2nPQKNt',
    hostSource: 'ImgBB',
    quote: 'Thank you so much brother, kaam ho gaya mera! Genuine and trustworthy service from Asdullah Ahmed.',
    clientContext: 'Commercial Client Line',
    dateStr: 'August 2026',
    verifiedStatus: 'Real-Time Resolution Chat',
  },
  {
    id: 'rev-photo-3',
    number: 3,
    title: 'Business Re-login & Order Access Restored',
    platform: 'WhatsApp Business',
    imageSrc: '/images/reviews/review_3_client.jpg',
    fallbackCdnUrl: 'https://i.ibb.co/tPqVXcMs/f53b60a7-a3b4-4d26-9e3d-c8a0c7c7f692.jpg',
    originalLink: 'https://ibb.co/Hpt5dYDz',
    hostSource: 'ImgBB',
    quote: 'Bhai account wapas login ho gaya! Bohot tension me tha customer orders ke wajah se. Best guidance.',
    clientContext: 'Business Customer Line',
    dateStr: 'August 2026',
    verifiedStatus: 'Verified Platform Review Pass',
  },
  {
    id: 'rev-photo-4',
    number: 4,
    title: 'Direct Client Assistance & Review Clearance',
    platform: 'WhatsApp',
    imageSrc: '/images/reviews/review_4_proof.jpg',
    fallbackCdnUrl: 'https://i.im.ge/QQuHYtc/c6c989ed-d118-4d91-827a-ad46c38409f8.jpg',
    originalLink: 'https://im.ge/i/QQuHYtc',
    hostSource: 'im.ge',
    quote: 'Official review clear ho gaya bro! You guided every step so cleanly. 100% recommended.',
    clientContext: 'Individual Account Recovery',
    dateStr: 'September 2026',
    verifiedStatus: 'Direct Client Interaction Proof',
  },
  {
    id: 'rev-photo-5',
    number: 5,
    title: 'Complete Workflow Chat & Reinstatement',
    platform: 'WhatsApp Business',
    imageSrc: '/images/reviews/review_5_proof.jpg',
    fallbackCdnUrl: 'https://i.im.ge/QQuHbzL/1947be6c-e4b1-4b59-8d17-bd273dff3e26.jpg',
    originalLink: 'https://im.ge/i/QQuHbzL',
    hostSource: 'im.ge',
    quote: 'Detailed conversation showing initial intake to final successful unban notification. Transparent throughout.',
    clientContext: 'Full Case Review History',
    dateStr: 'September 2026',
    verifiedStatus: 'Full Case Review History',
  },
  {
    id: 'rev-photo-6',
    number: 6,
    title: 'Step-by-Step Diagnostic & Unban Proof',
    platform: 'WhatsApp',
    imageSrc: '/images/reviews/review_6_proof.jpg',
    fallbackCdnUrl: 'https://i.im.ge/QQuH8jx/2e58dbf5-c1dc-49d0-a8ca-627889e466d4.jpg',
    originalLink: 'https://im.ge/i/QQuH8jx',
    hostSource: 'im.ge',
    quote: 'Bhai dil khush kar diya aapne! Instant update aur guidance mila. Genuine helper for banned numbers.',
    clientContext: 'Urgent Unban Resolution',
    dateStr: 'September 2026',
    verifiedStatus: 'Verified Client Message Stream',
  },
  {
    id: 'rev-photo-7',
    number: 7,
    title: 'Customer Satisfaction & Verification Notice',
    platform: 'WhatsApp Business',
    imageSrc: '/images/reviews/review_7_proof.jpg',
    fallbackCdnUrl: 'https://i.im.ge/QQuHgFG/0060b77a-4506-4572-b105-92e1a29990d6.jpg',
    originalLink: 'https://im.ge/i/QQuHgFG',
    hostSource: 'im.ge',
    quote: 'Account ban lifted seamlessly. Extremely polite and honest about feasibility from the first minute.',
    clientContext: 'Enterprise Priority Support',
    dateStr: 'September 2026',
    verifiedStatus: 'Verified Satisfied Review',
  },
  {
    id: 'rev-photo-8',
    number: 8,
    title: 'Re-Verification Pass & Chat Recovery Notice',
    platform: 'WhatsApp',
    imageSrc: '/images/reviews/review_8_proof.jpg',
    fallbackCdnUrl: 'https://i.im.ge/QQuHRWa/f6553465-78bf-4bf5-b147-1da13475be50.jpg',
    originalLink: 'https://im.ge/i/QQuHRWa',
    hostSource: 'im.ge',
    quote: 'Official WhatsApp unban confirmed! All chats and groups restored completely intact.',
    clientContext: 'Account Re-verification Chat',
    dateStr: 'September 2026',
    verifiedStatus: 'Official Re-Verification Proof',
  },
];

export function TestimonialsSection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const activePhoto = selectedPhotoIndex !== null ? ALL_REVIEW_PHOTOS[selectedPhotoIndex] : null;

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : ALL_REVIEW_PHOTOS.length - 1));
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < ALL_REVIEW_PHOTOS.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section
      id="reviews"
      className="relative py-24 bg-[#050806] border-t border-[#18D65A]/20 overflow-hidden text-[#E1E8E3]"
    >
      {/* Anchor for testimonials compatibility */}
      <div id="testimonials" className="absolute -top-12 left-0 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-[#18D65A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#18D65A] uppercase font-semibold">
              UNEDITED CLIENT FEEDBACK • ALL 8 CHAT PROOFS
            </span>
            <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
            Client Reviews & Chat Screenshots
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#8B968E] max-w-2xl leading-relaxed">
            Every photo below is an authentic, unedited conversation screenshot showing real customer reviews,
            grateful messages, and successful WhatsApp unban verifications handled by{' '}
            <span className="text-[#18D65A] font-semibold">Asdullah Ahmed</span>.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#B8FFCC] bg-[#142318] px-4 py-1.5 rounded-full border border-[#18D65A]/30">
            <CheckCircle2 className="w-4 h-4 text-[#18D65A]" />
            <span>Displaying All 8 Authentic Client Review Photos</span>
          </div>
        </div>

        {/* ALL 8 PHOTOS DISPLAYED OPENLY IN A HIGH-VISIBILITY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 mb-16">
          {ALL_REVIEW_PHOTOS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col rounded-2xl bg-[#090F0C] border border-white/10 hover:border-[#18D65A]/60 transition-all duration-300 shadow-xl shadow-black/60 overflow-hidden hover:-translate-y-1"
            >
              {/* Card Top Pill Header */}
              <div className="px-4 py-3 bg-[#0D1510] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
                  <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                    Photo #{item.number} of 8
                  </span>
                </div>
                <div className="flex items-center text-[#18D65A] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#18D65A]" />
                  ))}
                </div>
              </div>

              {/* IMAGE CONTAINER: Generous height so the screenshot text is clearly legible */}
              <div
                id={`review-photo-card-${item.id}`}
                onClick={() => setSelectedPhotoIndex(index)}
                className="relative bg-black cursor-pointer overflow-hidden flex items-center justify-center p-2 min-h-[380px] max-h-[460px] group/img"
              >
                <img
                  src={item.imageSrc}
                  alt={`Review ${item.number}: ${item.title}`}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Failover to CDN URL if local route is interrupted
                    if (e.currentTarget.src !== item.fallbackCdnUrl) {
                      e.currentTarget.src = item.fallbackCdnUrl;
                    }
                  }}
                  className="w-full h-auto max-h-[440px] object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-[1.02]"
                />

                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#18D65A]/20 border border-[#18D65A] flex items-center justify-center text-[#18D65A] shadow-lg shadow-[#18D65A]/40 mb-2 animate-bounce">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                    Click to View Full Size
                  </span>
                  <span className="text-[10px] font-mono text-[#8B968E] mt-1">
                    Read unedited chat & timestamps
                  </span>
                </div>

                {/* Badge showing original host */}
                <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-sm border border-white/20 px-2 py-0.5 rounded text-[10px] font-mono text-[#B8FFCC] flex items-center gap-1 shadow-lg">
                  <Smartphone className="w-3 h-3 text-[#18D65A]" />
                  <span>{item.hostSource}</span>
                </div>
              </div>

              {/* Textual Feedback and Details */}
              <div className="p-4 flex-1 flex flex-col justify-between border-t border-white/5 bg-[#0A100D]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#142318] text-[#18D65A] border border-[#18D65A]/30">
                      {item.platform}
                    </span>
                    <span className="text-[10px] font-mono text-[#8B968E]">
                      {item.dateStr}
                    </span>
                  </div>

                  <p className="text-xs text-white italic font-medium leading-relaxed mb-3">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#8B968E] truncate max-w-[140px]">
                    {item.clientContext}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={item.originalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B968E] hover:text-white flex items-center gap-1 text-[10px] underline"
                      title="Open original link"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => setSelectedPhotoIndex(index)}
                      className="text-[#18D65A] hover:text-[#35E875] font-semibold flex items-center gap-0.5 cursor-pointer"
                    >
                      <ZoomIn className="w-3 h-3" />
                      <span>Zoom</span>
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* TRUST SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div className="p-6 rounded-2xl bg-[#090F0C] border border-[#18D65A]/20 shadow-lg">
            <div className="flex items-center text-[#18D65A] gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#18D65A]" />
              ))}
            </div>
            <h4 className="text-sm font-bold text-white mb-1">
              Direct Client Conversations
            </h4>
            <p className="text-xs text-[#8B968E] leading-relaxed">
              Every review photo is captured directly from client chat threads upon resolution of their account lockout.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090F0C] border border-[#18D65A]/20 shadow-lg">
            <div className="flex items-center text-[#18D65A] gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#18D65A]" />
              ))}
            </div>
            <h4 className="text-sm font-bold text-white mb-1">
              Non-Appeal Safe Recovery
            </h4>
            <p className="text-xs text-[#8B968E] leading-relaxed">
              Strictly Terms-of-Service compliant procedures. We never request passwords, OTPs, or authentication credentials.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090F0C] border border-[#18D65A]/20 shadow-lg">
            <div className="flex items-center text-[#18D65A] gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#18D65A]" />
              ))}
            </div>
            <h4 className="text-sm font-bold text-white mb-1">
              Personalized 1-on-1 Handling
            </h4>
            <p className="text-xs text-[#8B968E] leading-relaxed">
              Direct assistance with Asdullah Ahmed via WhatsApp (+91 82714 65644) for immediate human review.
            </p>
          </div>
        </div>

        {/* Quick CTA to WhatsApp */}
        <div className="mt-12 text-center flex flex-col items-center">
          <a
            id="reviews-cta-whatsapp"
            href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
              'Hello Asdullah Ahmed, I reviewed your client chat proofs on your website and need help recovering my account.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#18D65A] text-[#050706] font-bold px-7 py-3 rounded-full text-sm shadow-xl shadow-[#18D65A]/30 hover:bg-[#35E875] hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-[#050706]" />
            <span>Chat Directly on WhatsApp (+91 82714 65644)</span>
          </a>
          <p className="text-xs font-mono text-[#8B968E] mt-3">
            Case evaluations initiated within minutes • Honest diagnostic guidance
          </p>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePhoto && selectedPhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[95vh] flex flex-col items-center rounded-2xl bg-[#070C09] border-2 border-[#18D65A]/50 p-4 shadow-2xl shadow-[#18D65A]/20 overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18D65A] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider truncate">
                    Review Photo #{activePhoto.number} of 8 — {activePhoto.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono text-[#18D65A] font-bold hidden sm:inline">
                    {selectedPhotoIndex + 1} / {ALL_REVIEW_PHOTOS.length}
                  </span>
                  <button
                    onClick={() => setSelectedPhotoIndex(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Close zoomed view"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Full Image Viewport */}
              <div className="relative w-full overflow-y-auto max-h-[75vh] flex justify-center items-center rounded-xl bg-black p-2">
                <img
                  src={activePhoto.imageSrc}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (e.currentTarget.src !== activePhoto.fallbackCdnUrl) {
                      e.currentTarget.src = activePhoto.fallbackCdnUrl;
                    }
                  }}
                  className="w-auto max-w-full h-auto max-h-[72vh] object-contain rounded-lg select-none shadow-2xl"
                />

                {/* Prev / Next navigation inside modal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-black/95 border border-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xl"
                  title="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-black/95 border border-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xl"
                  title="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Bottom Bar */}
              <div className="w-full pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#8B968E] text-[11px] truncate">
                    Hosted on {activePhoto.hostSource}
                  </span>
                  <a
                    href={activePhoto.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8FFCC] hover:text-white flex items-center gap-1 text-[11px] underline"
                  >
                    <span>Original Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <a
                  href={`${AGENCY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Asdullah Ahmed, I am viewing Review Photo #${activePhoto.number} (${activePhoto.title}) on your website and would like help with my account.`
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
