import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const MESSAGES = [
  { text: 'ZK proof verified.', sub: 'Sender: hidden · Amount: encrypted' },
  { text: 'Network secured.', sub: '2,847 nodes active · 0 breaches' },
  { text: 'Privacy enabled.', sub: 'Stealth address generated' },
  { text: 'Transaction private.', sub: 'Ring signature: 1-of-11' },
  { text: 'You are anonymous.', sub: 'Tor routing: 3 hops active' },
  { text: 'Blockchain verified.', sub: 'Groth16 proof · 47ms' },
];

export function KryptonXRobot() {
  const [showMessage, setShowMessage] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const t = setTimeout(() => triggerMessage(), 1500);
    const msgInterval = setInterval(() => {
      if (Math.random() > 0.5) triggerMessage();
    }, 12000);
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 100);
    }, 3500 + Math.random() * 1500);

    return () => {
      clearTimeout(t);
      clearInterval(msgInterval);
      clearInterval(blinkInterval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function triggerMessage() {
    setMsgIndex(i => (i + 1) % MESSAGES.length);
    setShowMessage(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
  }

  const msg = MESSAGES[msgIndex];

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-3">

      {/* Speech bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-[220px]"
          >
            <div className="bg-[#040d07] border border-emerald-500/40 rounded-xl px-4 py-3 shadow-xl shadow-emerald-500/10 backdrop-blur-xl">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-500 text-[9px] font-mono uppercase tracking-widest">KRYX</span>
              </div>
              <p className="text-white text-xs font-semibold leading-snug">{msg.text}</p>
              <p className="text-emerald-500/70 text-[10px] font-mono mt-0.5 leading-snug">{msg.sub}</p>
            </div>
            <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-[#040d07] border-r border-b border-emerald-500/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.3 }}
        className="cursor-pointer select-none"
        onClick={triggerMessage}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl scale-125 pointer-events-none" />

            <svg width="72" height="88" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* Antenna */}
              <line x1="36" y1="6" x2="36" y2="16" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
              <motion.circle
                cx="36" cy="5" r="3.5" fill="#10b981"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ filter: 'drop-shadow(0 0 4px #10b981)' }}
              />

              {/* Head */}
              <rect x="14" y="16" width="44" height="36" rx="12" fill="#0f1f18" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.7"/>
              {/* Head top glow line */}
              <line x1="24" y1="17" x2="48" y2="17" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1"/>

              {/* Eyes */}
              <motion.rect
                x="20" y="28" width="13" height="8" rx="3"
                fill="#10b981"
                animate={{ scaleY: isBlinking ? 0.05 : 1 }}
                transition={{ duration: 0.08 }}
                style={{ transformOrigin: '26.5px 32px', filter: 'drop-shadow(0 0 5px #10b981)' }}
              />
              <motion.rect
                x="39" y="28" width="13" height="8" rx="3"
                fill="#10b981"
                animate={{ scaleY: isBlinking ? 0.05 : 1 }}
                transition={{ duration: 0.08 }}
                style={{ transformOrigin: '45.5px 32px', filter: 'drop-shadow(0 0 5px #10b981)' }}
              />

              {/* Mouth — small rounded bar */}
              <rect x="27" y="42" width="18" height="3" rx="1.5" fill="#10b981" fillOpacity="0.4"/>

              {/* Neck */}
              <rect x="30" y="52" width="12" height="6" rx="2" fill="#0f1f18" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1"/>

              {/* Body */}
              <rect x="10" y="58" width="52" height="28" rx="12" fill="#0f1f18" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.7"/>
              {/* Body top glow */}
              <line x1="22" y1="59" x2="50" y2="59" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1"/>

              {/* Chest — KX logo text */}
              <text x="36" y="76" textAnchor="middle" fontSize="10" fontWeight="700"
                fontFamily="monospace" fill="#10b981" opacity="0.9"
                style={{ filter: 'drop-shadow(0 0 4px #10b981)' }}>
                KX
              </text>

              {/* Shoulder bolts */}
              <circle cx="16" cy="66" r="2" fill="#1a2e22" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1"/>
              <circle cx="56" cy="66" r="2" fill="#1a2e22" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1"/>

            </svg>

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div
                className="absolute w-2 h-2 rounded-full bg-emerald-400"
                style={{
                  top: '8%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  boxShadow: '0 0 8px #10b981',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
