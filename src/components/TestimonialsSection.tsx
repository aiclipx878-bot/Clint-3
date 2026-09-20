import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ZoomIn,
  X,
  ExternalLink,
  MessageCircle,
  Smartphone,
  Eye,
} from 'lucide-react';
import { REAL_REVIEWS, AGENCY_CONFIG } from '../data/cases';
import { ALL_REVIEW_PHOTOS, ReviewPhotoItem } from '../data/reviewPhotos';

export function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<'proofs' | 'reviews'>('proofs');
  const [selectedPhoto, setSelectedPhoto] = useState<ReviewPhotoItem | null>(null);

  return (
    <section id="reviews" className="relative py-24 bg-[#050706] overflow-hidden border-t border-[#18D65A]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-[#18D65A]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#18D65A]" />
              <span className="text-xs font-mono tracking-[0.2em] text-[#B8FFCC] uppercase font-semibold">
                CLIENT VERIFICATIONS & FEEDBACK
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F7F5] uppercase">
              Proof & Reviews
            </h2>

            <p className="mt-3 text-base text-[#8B968E] max-w-xl leading-relaxed">
              Authentic feedback and direct screenshots from clients who successfully navigated account restrictions and official platform appeals.
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0B0F0C] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('proofs')}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === 'proofs'
                  ? 'bg-[#18D65A] text-[#040605] font-bold shadow-md shadow-[#18D65A]/20'
                  : 'text-[#8B968E] hover:text-white'
              }`}
            >
              8 Screenshot Proofs
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === 'reviews'
                  ? 'bg-[#18D65A] text-[#040605] font-bold shadow-md shadow-[#18D65A]/20'
                  : 'text-[#8B968E] hover:text-white'
              }`}
            >
              Client Statements
            </button>
          </div>
        </div>

        {/* Tab 1: 8 Real Screenshot Proofs Grid */}
        {activeTab === 'proofs' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_REVIEW_PHOTOS.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 overflow-hidden shadow-xl shadow-black/60 flex flex-col justify-between transition-all"
              >
                {/* Image Container with Zoom Trigger */}
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative aspect-[9/16] w-full overflow-hidden bg-[#070B08] cursor-pointer"
                >
                  <img
                    src={photo.imageSrc || photo.fallbackCdnUrl}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      if ((e.target as HTMLImageElement).src !== photo.fallbackCdnUrl) {
                        (e.target as HTMLImageElement).src = photo.fallbackCdnUrl;
                      }
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#18D65A] text-[#040605] flex items-center justify-center shadow-lg shadow-[#18D65A]/30">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
                      Inspect Full Proof
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#050706]/90 backdrop-blur-md border border-[#18D65A]/30 text-[10px] font-mono text-[#35E875] font-semibold">
                    Proof #{photo.number}
                  </div>
                </div>

                {/* Card Meta Description */}
                <div className="p-4 bg-[#0B0F0C] border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8B968E] mb-1.5">
                    <span>{photo.platform}</span>
                    <span className="text-[#18D65A] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-[#E1E6E2] font-medium line-clamp-2">
                    "{photo.quote}"
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-[#A0AEA4]">
                    {photo.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Testimonial Cards */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REAL_REVIEWS.map((rev) => (
              <motion.div
                key={rev.id}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-[#0B0F0C] border border-white/5 hover:border-[#18D65A]/40 p-8 flex flex-col justify-between shadow-xl shadow-black/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#18D65A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#18D65A]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#B8FFCC] border border-white/5">
                      {rev.platform}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#18D65A]/20 mb-4" />

                  <p className="text-sm text-[#F5F7F5] leading-relaxed mb-6 italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col space-y-1 text-xs font-mono">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18D65A]" />
                    {rev.clientContext}
                  </span>
                  <span className="text-[#8B968E] text-[11px]">
                    {rev.verifiedStatus} • {rev.outcomeTime}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Fullscreen Proof Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-[#0B0F0C] border border-[#18D65A]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Topbar */}
              <div className="p-4 sm:px-6 bg-[#070B08] border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#B8FFCC]">
                    {selectedPhoto.clientContext} • {selectedPhoto.platform}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedPhoto.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-[#B8FFCC] transition-colors"
                  >
                    <span>Original Host</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-2 rounded-xl bg-white/5 text-[#8B968E] hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Display */}
              <div className="flex-1 overflow-y-auto p-4 flex justify-center bg-[#050706]">
                <img
                  src={selectedPhoto.imageSrc || selectedPhoto.fallbackCdnUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                  onError={(e) => {
                    if ((e.target as HTMLImageElement).src !== selectedPhoto.fallbackCdnUrl) {
                      (e.target as HTMLImageElement).src = selectedPhoto.fallbackCdnUrl;
                    }
                  }}
                />
              </div>

              {/* Modal Bottom Details */}
              <div className="p-4 sm:px-6 bg-[#070B08] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#8B968E] text-center sm:text-left">
                  <span>"{selectedPhoto.quote}"</span>
                  <span className="block text-[11px] text-[#18D65A] font-semibold">
                    {selectedPhoto.highlight}
                  </span>
                </div>

                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#18D65A] text-[#040605] hover:bg-[#35E875] px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-[#040605]" />
                  <span>Ask About This Case</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
