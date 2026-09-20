import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Shield, ArrowUpRight, Radio } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/cases';
import asdullahLogo from '../assets/images/asdullah_recovery_logo_1789371670605.jpg';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'What I Do', href: '#what-i-do', id: 'what-i-do' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Book / Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['home', 'what-i-do', 'reviews', 'how-it-works', 'contact'];
      for (const sId of sectionIds) {
        const el = document.getElementById(sId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 150) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050706]/95 backdrop-blur-md py-3 border-b border-[#18D65A]/20 shadow-xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#18D65A]/40 bg-[#0B0F0C] p-0.5 shadow-md shadow-[#18D65A]/15 group-hover:border-[#18D65A] transition-colors">
            <img
              src={asdullahLogo}
              alt="Asdullah Ahmed"
              className="w-full h-full object-cover rounded-[9px]"
              onError={(e) => {
                // Fallback icon if image doesn't load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-base sm:text-lg text-white tracking-wide uppercase group-hover:text-[#B8FFCC] transition-colors">
                {AGENCY_CONFIG.name}
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-[#18D65A]/15 text-[#35E875] border border-[#18D65A]/30">
                VERIFIED
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#8B968E] uppercase">
              Digital Recovery Assistance
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#0A0E0B]/80 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#18D65A]/20 font-semibold border border-[#18D65A]/40'
                    : 'text-[#8B968E] hover:text-[#B8FFCC] hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#18D65A] text-[#040605] hover:bg-[#35E875] px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#18D65A]/20 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-[#040605]" />
            <span>Consult On WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-2 rounded-xl bg-[#18D65A]/20 border border-[#18D65A]/40 text-[#18D65A]"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#0B0F0C] border border-white/10 text-[#8B968E] hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070B08] border-b border-[#18D65A]/20 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2.5 text-sm font-mono rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-[#18D65A] bg-[#18D65A]/10 font-bold'
                      : 'text-[#8B968E] hover:text-[#18D65A] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10">
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#18D65A] text-[#040605] py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#18D65A]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-[#040605]" />
                  <span>Start WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
