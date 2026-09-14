import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import asdullahLogo from '../assets/images/asdullah_recovery_logo_1789371670605.jpg';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Initializing Secure Environment...",
    "Verifying Identity & Encryption...",
    "Retrieving Recovery Protocols...",
    "Synchronizing Client Cases...",
    "System Ready."
  ];

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('has_visited_recovery');
    const totalDuration = hasVisited ? 1200 : 2800;
    const intervalTime = 40;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          sessionStorage.setItem('has_visited_recovery', 'true');
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Sync status text with progress percentage
  useEffect(() => {
    if (progress < 20) setStatusIndex(0);
    else if (progress < 45) setStatusIndex(1);
    else if (progress < 70) setStatusIndex(2);
    else if (progress < 90) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030504] text-white select-none overflow-hidden"
      >
        {/* Ambient subtle cyber glow and grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[280px] rounded-full bg-[#18D65A]/10 blur-[100px] pointer-events-none" />

        <div className="relative flex flex-col items-center z-10 px-4 w-full max-w-xl text-center">
          
          {/* Logo Showcase Display */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-6 group w-full max-w-md sm:max-w-lg"
          >
            {/* Outer glowing frame */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-400/30 via-[#18D65A]/25 to-transparent shadow-2xl shadow-cyan-950/60 overflow-hidden">
              <div className="relative rounded-xl overflow-hidden bg-black/90 border border-white/10">
                <img
                  src={asdullahLogo}
                  alt="Asdullah Ahmed - Trusted Recovery Assistance Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-64 sm:max-h-72 drop-shadow-2xl"
                />
                
                {/* Subtle scanning light bar */}
                <motion.div
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none shadow-[0_0_12px_#38bdf8]"
                />
              </div>
            </div>

            {/* Corner metallic tech accents */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#18D65A]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#18D65A]" />
          </motion.div>

          {/* Status Text Sequence */}
          <div className="h-6 mb-3 flex items-center justify-center">
            <motion.p
              key={statuses[statusIndex]}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.2 }}
              className="text-xs sm:text-sm font-mono uppercase text-[#B8FFCC] tracking-wider"
            >
              {statuses[statusIndex]}
            </motion.p>
          </div>

          {/* High-tech Dual-Tone Progress Bar */}
          <div className="w-56 sm:w-64 h-1.5 bg-[#0B0F0C] rounded-full overflow-hidden border border-cyan-500/20 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-[#18D65A] to-[#35E875]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Progress Percent & System Init details */}
          <div className="mt-2.5 flex items-center justify-between w-56 sm:w-64 text-[10px] font-mono text-[#8B968E]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18D65A] animate-pulse" />
              STATUS: OK
            </span>
            <span className="text-cyan-300 font-semibold">{Math.round(progress)}%</span>
          </div>

          {/* Skip Button */}
          <button
            id="btn-skip-loading"
            onClick={onComplete}
            className="mt-6 text-[11px] font-mono text-[#8B968E]/70 hover:text-cyan-400 transition-colors uppercase tracking-wider underline underline-offset-4 cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
