import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUpRight, X } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isExpandedOnTouch, setIsExpandedOnTouch] = useState(true);

  // Detect touch screens using media queries & touch capabilities
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check media queries for touch/coarse pointers
    const hoverNoneQuery = window.matchMedia('(hover: none)');
    const pointerCoarseQuery = window.matchMedia('(pointer: coarse)');

    const checkIsTouch = () => {
      const hasTouchMedia = hoverNoneQuery.matches || pointerCoarseQuery.matches;
      const hasTouchPoints = typeof navigator !== 'undefined' && (navigator.maxTouchPoints > 0 || ('ontouchstart' in window));
      const isMobileWidth = window.innerWidth <= 768;
      
      const detectedTouch = Boolean(hasTouchMedia || hasTouchPoints || isMobileWidth);
      setIsTouchDevice(detectedTouch);
      if (detectedTouch) {
        setIsExpandedOnTouch(true);
      }
    };

    // Initial check
    checkIsTouch();

    // Listeners for changes in viewport or pointer capability
    const handleMediaQueryChange = () => checkIsTouch();
    const handleTouchStart = () => {
      setIsTouchDevice(true);
    };

    hoverNoneQuery.addEventListener?.('change', handleMediaQueryChange);
    pointerCoarseQuery.addEventListener?.('change', handleMediaQueryChange);
    window.addEventListener('resize', handleMediaQueryChange, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true, once: true });

    return () => {
      hoverNoneQuery.removeEventListener?.('change', handleMediaQueryChange);
      pointerCoarseQuery.removeEventListener?.('change', handleMediaQueryChange);
      window.removeEventListener('resize', handleMediaQueryChange);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Determine if the expanded details should be shown
  const showExpanded = isTouchDevice ? isExpandedOnTouch : isHovered;

  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 select-none"
    >
      <div className="relative flex items-center">
        {/* Pulsing ambient green aura */}
        <span className="absolute -inset-1 rounded-full bg-[#18D65A]/25 blur-md pointer-events-none animate-pulse" />

        {/* Main Floating WhatsApp Action Pill */}
        <motion.div
          id="floating-whatsapp-container"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
          className="relative flex items-center bg-[#0B0F0C] border border-[#18D65A]/50 hover:border-[#18D65A] rounded-full p-1.5 sm:p-2 shadow-2xl shadow-black/80 transition-all duration-300"
          onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
          onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
        >
          {/* Main Clickable WhatsApp Link */}
          <a
            id="floating-whatsapp-btn"
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Asdullah Ahmed on WhatsApp (+91 8271465644)"
            aria-expanded={showExpanded}
            className="flex items-center group/btn outline-none focus-visible:ring-2 focus-visible:ring-[#18D65A] rounded-full"
          >
            {/* WhatsApp Icon Circle with 3D gradient */}
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#14532d] via-[#16a34a] to-[#22c55e] text-white shadow-inner shrink-0">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-none drop-shadow-sm" />
              
              {/* Online status beacon */}
              <span
                title="Online Now"
                className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#35E875] border-2 border-[#0B0F0C] rounded-full shadow-[0_0_8px_#35E875]"
              />
            </div>

            {/* Label Content: Animated expansion */}
            <AnimatePresence>
              {showExpanded && (
                <motion.div
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: 'auto', opacity: 1, marginLeft: 10 }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="overflow-hidden whitespace-nowrap pr-2 flex flex-col text-left"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-[#F5F7F5]">
                      Chat With Us
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#18D65A]" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-medium text-[#35E875]">
                    <Phone className="w-2.5 h-2.5 text-[#18D65A]" />
                    <span>+91 8271465644</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </a>

          {/* High-Contrast Clear 'X' Close Button for Touch Devices */}
          {isTouchDevice && isExpandedOnTouch && (
            <motion.button
              type="button"
              id="btn-whatsapp-collapse"
              aria-label="Collapse WhatsApp label"
              title="Close label"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpandedOnTouch(false);
              }}
              className="ml-1 mr-1 w-7 h-7 flex items-center justify-center rounded-full bg-[#1A251D] hover:bg-[#25372A] border-2 border-white/40 hover:border-white text-white shadow-md transition-colors cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.button>
          )}
        </motion.div>

        {/* Re-expand Toggle Button for Touch Screens when Collapsed */}
        {isTouchDevice && !isExpandedOnTouch && (
          <motion.button
            type="button"
            id="btn-whatsapp-touch-expand"
            aria-label="Expand WhatsApp details"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpandedOnTouch(true);
            }}
            className="absolute -top-2.5 -left-2.5 bg-[#142318] hover:bg-[#1C3322] border-2 border-[#18D65A] text-[#35E875] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-xl flex items-center gap-1 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#18D65A] animate-ping" />
            <span>CHAT</span>
          </motion.button>
        )}
      </div>
    </aside>
  );
}
