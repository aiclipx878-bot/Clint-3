import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert } from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminPanelSection } from './components/AdminPanelSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050706] text-[#F5F7F5] selection:bg-[#18D65A]/25 selection:text-[#35E875] antialiased">
      {/* Intro Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 10. Minimal Sticky Navigation */}
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. WHAT I DO / MAIN OFFERING */}
        <ServicesSection />

        {/* 3. REVIEWS / TESTIMONIALS & VERIFIED PROOFS */}
        <TestimonialsSection />

        {/* 4. HOW IT WORKS / 5-STEP FLOW */}
        <ProcessTimeline />

        {/* 5. BOOK / CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenAdmin={() => setShowAdmin(true)} />

      {/* Floating Action Trigger */}
      <FloatingWhatsApp />

      {/* Admin Dispatch Console Modal (Preserving Full Working Booking Logic) */}
      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-7xl max-h-[92vh] bg-[#070B08] border border-[#18D65A]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Top Control Bar */}
              <div className="px-6 py-4 bg-[#0A0F0C] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18D65A] animate-pulse" />
                  <span className="font-mono text-xs text-[#B8FFCC] uppercase tracking-wider font-semibold">
                    Live Bookings & Dispatch Management
                  </span>
                </div>

                <button
                  onClick={() => setShowAdmin(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#8B968E] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Admin Console"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Admin Panel Content */}
              <div className="flex-1 overflow-y-auto">
                <AdminPanelSection />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
