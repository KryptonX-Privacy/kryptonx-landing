import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KryptonXLogo } from './KryptonXLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

const BOOT_STEPS = [
  'Initializing ZK circuits...',
  'Loading encryption keys...',
  'Establishing secure connection...',
  'Verifying privacy protocols...',
  'Ready.',
];

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'boot' | 'exit'>('enter');
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase('boot'), 800);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(progressInterval); return 100; }
        return p + 1.6;
      });
    }, 30);

    // Cycle boot steps
    let step = 0;
    const stepInterval = setInterval(() => {
      step++;
      if (step < BOOT_STEPS.length) {
        setStepIndex(step);
      } else {
        clearInterval(stepInterval);
      }
    }, 380);

    // Exit
    const exitTimer = setTimeout(() => setPhase('exit'), 2600);
    const completeTimer = setTimeout(() => onComplete(), 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#040d07' }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* App icon — same style as phone mockup */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-4 rounded-[2.8rem] opacity-0"
            animate={{ opacity: [0, 0.4, 0], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%)' }}
          />

          {/* Icon body */}
          <div className="relative w-28 h-28 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-[2rem] shadow-2xl shadow-emerald-500/30 overflow-hidden">
            {/* Shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
              animate={{ x: ['-120%', '120%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
            />
            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <KryptonXLogo size={80} animated={false} />
            </div>
          </div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-2"
        >
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #6ee7b7, #14b8a6, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            KryptonX
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-emerald-500/50 text-xs tracking-[0.25em] uppercase mb-12"
        >
          Privacy · Solana
        </motion.p>

        {/* Boot status messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'boot' ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="h-5 mb-5"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={stepIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className={`text-xs font-mono ${stepIndex === BOOT_STEPS.length - 1 ? 'text-emerald-400' : 'text-emerald-600'}`}
            >
              {BOOT_STEPS[stepIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-48"
        >
          <div className="h-px bg-emerald-900/60 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, #059669, #10b981, #34d399)',
                boxShadow: '0 0 8px rgba(16,185,129,0.6)',
              }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom version tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 text-emerald-700 text-[10px] font-mono tracking-widest"
      >
        v1.0.0 · MAINNET
      </motion.div>
    </motion.div>
  );
}
