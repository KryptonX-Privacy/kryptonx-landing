import { motion } from 'motion/react';

interface KryptonXLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  animated?: boolean;
  showText?: boolean;
  variant?: 'default' | 'compact' | 'icon-only';
}

/**
 * KryptonX brand icon — circular badge with stroke-based "KX" monogram.
 * K = emerald gradient (security / privacy)
 * X = amber/gold gradient (Solana / value)
 */
const KXIcon = ({ width, height, animated }: { width: number; height: number; animated: boolean }) => (
  <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Brand gradients */}
      <linearGradient id="kxi-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6ee7b7" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="kxi-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="kxi-ring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="45%" stopColor="#0d9488" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <linearGradient id="kxi-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#071220" />
        <stop offset="100%" stopColor="#030d18" />
      </linearGradient>
      {/* Radial inner highlight — glass sheen */}
      <radialGradient id="kxi-sheen" cx="38%" cy="28%" r="55%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      {/* Subtle glow on letters */}
      <filter id="kxi-glow" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* Drop shadow behind circle */}
      <filter id="kxi-drop" x="-12%" y="-12%" width="124%" height="128%">
        <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#10b981" floodOpacity="0.28" />
      </filter>
    </defs>

    {/* ── Background circle ── */}
    <circle cx="50" cy="50" r="47" fill="url(#kxi-bg)" filter="url(#kxi-drop)" />

    {/* ── Border ring ── */}
    <circle cx="50" cy="50" r="47" fill="none" stroke="url(#kxi-ring)" strokeWidth="1.6">
      {animated && (
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3.2s" repeatCount="indefinite" />
      )}
    </circle>

    {/* ── Inner thin ring — depth accent ── */}
    <circle cx="50" cy="50" r="41.5" fill="none" stroke="url(#kxi-green)" strokeWidth="0.5" opacity="0.18" />

    {/* ── Glass sheen ── */}
    <circle cx="50" cy="50" r="47" fill="url(#kxi-sheen)" />

    {/* ── K monogram (emerald) — stroke-based ── */}
    <g filter="url(#kxi-glow)" strokeLinecap="round" strokeLinejoin="round">
      {/* Vertical stem */}
      <line x1="18" y1="22" x2="18" y2="78"
        stroke="url(#kxi-green)" strokeWidth="7" />
      {/* Upper arm: stem-midpoint → upper-right */}
      <line x1="18" y1="50" x2="44" y2="22"
        stroke="url(#kxi-green)" strokeWidth="6.5" />
      {/* Lower arm: stem-midpoint → lower-right */}
      <line x1="18" y1="50" x2="44" y2="78"
        stroke="url(#kxi-green)" strokeWidth="6.5" />
    </g>

    {/* ── X monogram (gold) — stroke-based ── */}
    <g filter="url(#kxi-glow)" strokeLinecap="round">
      {/* TL → BR */}
      <line x1="54" y1="22" x2="82" y2="78"
        stroke="url(#kxi-gold)" strokeWidth="6.5" />
      {/* TR → BL */}
      <line x1="82" y1="22" x2="54" y2="78"
        stroke="url(#kxi-gold)" strokeWidth="6.5" />
    </g>

    {/* ── Micro separator dot between K and X ── */}
    <circle cx="49" cy="50" r="2.2" fill="#34d399" opacity="0.35" />

    {/* ── Four cardinal tick marks on outer ring ── */}
    {[0, 90, 180, 270].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 50 + 43 * Math.cos(rad);
      const y1 = 50 + 43 * Math.sin(rad);
      const x2 = 50 + 47 * Math.cos(rad);
      const y2 = 50 + 47 * Math.sin(rad);
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="url(#kxi-green)" strokeWidth="2" strokeLinecap="round" opacity="0.6">
          {animated && (
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s"
              repeatCount="indefinite" begin={`${i * 0.6}s`} />
          )}
        </line>
      );
    })}
  </svg>
);

export function KryptonXLogo({
  size = 'md',
  animated = true,
  showText = true,
  variant = 'default',
}: KryptonXLogoProps) {
  /* ── Numeric size shortcut ── */
  if (typeof size === 'number') {
    return <KXIcon width={size} height={size} animated={animated} />;
  }

  const sizes = {
    sm: { iconPx: 30, spacing: 'gap-2' },
    md: { iconPx: 38, spacing: 'gap-2.5' },
    lg: { iconPx: 52, spacing: 'gap-3' },
    xl: { iconPx: 72, spacing: 'gap-4' },
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-3xl',
  };

  const { iconPx, spacing } = sizes[size];
  const tSize = textSizes[size];

  const icon = (
    <div className="relative flex-shrink-0">
      {/* Soft ambient glow */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/20 blur-lg"
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.88, 1.08, 0.88] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <KXIcon width={iconPx} height={iconPx} animated={animated} />
    </div>
  );

  if (variant === 'icon-only') {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={animated ? { scale: 1.07 } : {}}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {icon}
      </motion.div>
    );
  }

  const wordmark = showText && (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-baseline">
        <span
          className={`${tSize} font-semibold text-white`}
          style={{ letterSpacing: '-0.025em' }}
        >
          Krypton
        </span>
        <span
          className={`${tSize} font-bold`}
          style={{
            letterSpacing: '-0.025em',
            background: 'linear-gradient(135deg,#fcd34d,#d97706)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          X
        </span>
      </div>
      {(size === 'lg' || size === 'xl') && (
        <span className="text-[9px] tracking-[0.2em] text-emerald-400/55 uppercase mt-[3px]">
          Privacy · Solana
        </span>
      )}
    </div>
  );

  return (
    <motion.div
      className={`flex items-center ${spacing}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {icon}
      {wordmark}
    </motion.div>
  );
}

export default KryptonXLogo;
