import { motion } from 'motion/react';
import { Shield, Lock, Zap, Sparkles } from 'lucide-react';

export function LogoDownload() {
  // Logo SVG component with N letter with ANIMATIONS
  const KryptonXLogoSVG = ({ size = 160, id }: { size?: number; id?: string }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" id={id}>
      <defs>
        <linearGradient id={`logoGradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981">
            <animate attributeName="stop-color" values="#10b981; #14b8a6; #10b981" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="50%" stopColor="#14b8a6">
            <animate attributeName="stop-color" values="#14b8a6; #f59e0b; #14b8a6" dur="3s" repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" stopColor="#f59e0b">
            <animate attributeName="stop-color" values="#f59e0b; #10b981; #f59e0b" dur="3s" repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        <linearGradient id={`shimmerGradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-1 0"
            to="1 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <filter id={`glow-${id}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id={`glowStrong-${id}`}>
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feFlood floodColor="#10b981" floodOpacity="0.8" result="glowColor"/>
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
          <feMerge>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background with pulse animation */}
      <rect width="40" height="40" rx="10" fill={`url(#logoGradient-${id})`} opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2s" repeatCount="indefinite"/>
      </rect>
      
      {/* Border with animated gradient */}
      <rect x="1" y="1" width="38" height="38" rx="9" stroke={`url(#logoGradient-${id})`} strokeWidth="2" opacity="0.7" fill="none" />
      
      {/* Main N letter with glow */}
      <g>
        <path 
          d="M13 13 L16 13 L16 22 L24 13 L27 13 L27 27 L24 27 L24 18 L16 27 L13 27 Z" 
          fill={`url(#logoGradient-${id})`}
          filter={`url(#glowStrong-${id})`}
          strokeWidth="0.5"
          stroke={`url(#logoGradient-${id})`}
        />
        
        {/* Shimmer overlay on N */}
        <path 
          d="M13 13 L16 13 L16 22 L24 13 L27 13 L27 27 L24 27 L24 18 L16 27 L13 27 Z" 
          fill={`url(#shimmerGradient-${id})`}
          opacity="0.4"
        />
      </g>
      
      {/* Animated corner dot */}
      <circle cx="29" cy="11" r="2" fill="#f59e0b" filter={`url(#glow-${id})`} opacity="0.8">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Orbiting particles */}
      <circle cx="10" cy="10" r="1" fill="#10b981" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="10s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="30" r="1" fill="#14b8a6" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="360 20 20" to="0 20 20" dur="8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );

  return (
    <div className="relative py-32 px-4 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-3xl animate-pulse" />
          
          {/* Main Banner Card */}
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-12 overflow-hidden shadow-2xl">
            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl" />
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1000 400">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
                    <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                  </linearGradient>
                </defs>
                <rect width="1000" height="400" fill="url(#grid-pattern)" opacity="0.5" />
              </svg>
            </div>

            {/* Main Content Layout */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
              {/* Left Side - Rotating Logo with Rings */}
              <div className="relative">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 w-80 h-80 -left-20 -top-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                </motion.div>

                {/* Middle Ring */}
                <motion.div
                  className="absolute inset-0 w-64 h-64 -left-12 -top-12"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border border-teal-500/30" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                </motion.div>

                {/* Logo Center */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl" />
                  <div className="relative animate-spin-slow">
                    <KryptonXLogoSVG size={200} id="banner" />
                  </div>
                </div>

                {/* Floating Icons Around Logo */}
                <motion.div
                  className="absolute -top-8 -left-8"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 backdrop-blur-xl border border-emerald-500/30 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-8 -right-8"
                  animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-500/5 backdrop-blur-xl border border-teal-500/30 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-teal-400" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-500/5 backdrop-blur-xl border border-amber-500/30 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -right-8"
                  animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-xl border border-purple-500/30 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Text Content */}
              <div className="text-center lg:text-left max-w-xl">
                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold mb-4 relative">
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                      KRTX
                    </span>
                    <span className="text-gray-300 ml-2">Privacy</span>
                  </h1>
                </motion.div>

                {/* Divider Line */}
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="h-px bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent flex-1" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  className="text-xl sm:text-2xl text-emerald-400/90 font-medium tracking-wide mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Privacy Protocol on Solana
                </motion.p>

                {/* Feature Tags */}
                <motion.div
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-xl">
                    🔒 Zero-Knowledge
                  </div>
                  <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium backdrop-blur-xl">
                    ⚡ Lightning Fast
                  </div>
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium backdrop-blur-xl">
                    🛡️ Secure
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Decoration Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </div>
        </motion.div>

        {/* Stats Cards Below */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 text-center group hover:border-emerald-500/40 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">Private Transactions</div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-6 text-center group hover:border-teal-500/40 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              &lt;1s
            </div>
            <div className="text-gray-400 text-sm">Transaction Speed</div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 text-center group hover:border-amber-500/40 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              $0.001
            </div>
            <div className="text-gray-400 text-sm">Transaction Fee</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
