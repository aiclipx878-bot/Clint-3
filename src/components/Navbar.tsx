import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, MessageCircle, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['home', 'services', 'timeline', 'case-studies', 'process', 'why-us', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact & Booking', href: '#contact', id: 'contact' },
    { name: 'Admin Panel', href: '#admin-panel', id: 'admin-panel' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050706]/90 backdrop-blur-md py-3.5 border-b border-[#18D65A]/15 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="navbar-brand-logo"
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B0F0C] border border-[#18D65A]/30 group-hover:border-[#18D65A] transition-colors shadow-lg shadow-[#18D65A]/10">
            <ShieldCheck className="w-5 h-5 text-[#18D65A] group-hover:scale-110 transition-transform" />
            <span className="absolute -inset-0.5 rounded-xl bg-[#18D65A]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#F5F7F5] group-hover:text-white flex items-center gap-1.5">
              {AGENCY_CONFIG.name}
              <span className="w-1.5 h-1.5 rounded-full bg-[#18D65A] inline-block" />
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#8B968E] uppercase">
              Recovery Assistance
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0B0F0C]/80 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                  isActive ? 'text-[#F5F7F5]' : 'text-[#8B968E] hover:text-[#F5F7F5]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-[#18D65A]/15 border border-[#18D65A]/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right WhatsApp & Admin Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            id="navbar-admin-link"
            href="#admin-panel"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#122416] hover:bg-[#18331F] border border-[#18D65A]/40 text-[#B8FFCC] text-xs font-mono font-semibold transition-colors"
            title="Access Live Bookings Admin Panel"
          >
            <span className="w-2 h-2 rounded-full bg-[#18D65A] animate-pulse" />
            <span>Admin Live</span>
          </a>

          <a
            id="navbar-whatsapp-cta"
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#101512] hover:bg-[#142018] border border-[#18D65A]/40 hover:border-[#18D65A] text-[#F5F7F5] px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#18D65A]/10 hover:shadow-[#18D65A]/25"
          >
            <MessageCircle className="w-4 h-4 text-[#18D65A] fill-[#18D65A]/20" />
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8B968E] group-hover:text-[#35E875] transition-colors" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            id="mobile-quick-wa-btn"
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#101512] border border-[#18D65A]/30 text-[#18D65A]"
            aria-label="Direct WhatsApp Contact"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            id="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B0F0C] border border-white/10 text-[#F5F7F5]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B0F0C]/98 border-b border-[#18D65A]/20 px-4 pt-4 pb-6 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#8B968E] hover:text-[#F5F7F5] hover:bg-[#101512] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] font-mono text-[#18D65A]">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/5 flex flex-col gap-3">
                <a
                  id="mobile-menu-whatsapp-btn"
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#18D65A] to-[#35E875] text-[#050706] font-bold text-sm shadow-lg shadow-[#18D65A]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-[#050706]" />
                  <span>Start WhatsApp Chat (+91 8271465644)</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#8B968E]">
                  <Phone className="w-3 h-3 text-[#18D65A]" />
                  <span>Direct Line: +91 8271465644</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
