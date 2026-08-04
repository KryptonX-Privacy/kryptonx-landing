import { motion } from 'motion/react';

const partners = [
  {
    name: 'CoinMarketCap',
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="cmcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3861FB" />
            <stop offset="100%" stopColor="#2451E6" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#cmcGrad)" />
        <path d="M60 120 L75 85 L90 105 L90 120 M110 120 L110 80 L125 95 L140 80 L140 120" 
          stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'CoinGecko',
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="cgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8DC63F" />
            <stop offset="100%" stopColor="#73AB2D" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="110" rx="85" ry="75" fill="url(#cgGrad)" />
        <circle cx="75" cy="95" r="8" fill="white" />
        <circle cx="125" cy="95" r="8" fill="white" />
        <path d="M70 130 Q100 145 130 130" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
        <ellipse cx="50" cy="80" rx="18" ry="25" fill="url(#cgGrad)" />
        <ellipse cx="150" cy="80" rx="18" ry="25" fill="url(#cgGrad)" />
      </svg>
    )
  },
  {
    name: 'Pump.fun',
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="pumpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B9D" />
            <stop offset="50%" stopColor="#C651FF" />
            <stop offset="100%" stopColor="#4E98FF" />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="140" height="140" rx="30" fill="url(#pumpGrad)" />
        <path d="M100 60 L130 110 L100 100 L70 110 Z" fill="white" />
        <circle cx="100" cy="135" r="15" fill="white" />
        <text x="100" y="148" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="url(#pumpGrad)" textAnchor="middle">P</text>
      </svg>
    )
  },
  {
    name: 'DexScreener',
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="dexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4AA" />
            <stop offset="100%" stopColor="#00A881" />
          </linearGradient>
        </defs>
        <rect x="25" y="25" width="150" height="150" rx="25" fill="url(#dexGrad)" />
        <path d="M60 80 L80 100 L60 120 M80 100 L120 100 M120 80 L140 100 L120 120" 
          stroke="white" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="100" cy="140" r="6" fill="white" />
      </svg>
    )
  },
  {
    name: 'Raydium',
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="rayGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C73EED" />
            <stop offset="50%" stopColor="#5B6DEE" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <linearGradient id="rayGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C73EED" />
            <stop offset="100%" stopColor="#5B6DEE" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#rayGrad1)" />
        <circle cx="80" cy="90" r="25" fill="white" opacity="0.9" />
        <circle cx="120" cy="90" r="25" fill="white" opacity="0.9" />
        <path d="M60 130 Q100 150 140 130" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M100 60 L110 75 L90 75 Z" fill="url(#rayGrad2)" />
      </svg>
    )
  }
];

export function PartnerMarquee() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative py-16 overflow-hidden border-y border-emerald-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-5 py-2 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Ecosystem Partners</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">
            Trusted By <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Leading Platforms</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Integrated with the most trusted platforms in the crypto ecosystem
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{ willChange: 'transform' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="group relative flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                      <div className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                        {partner.logo}
                      </div>
                    </div>

                    <motion.div
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="text-emerald-300 text-xs font-semibold">{partner.name}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-gray-400 text-sm">Platform Partners</div>
          </div>
          <div className="h-12 w-px bg-emerald-500/20" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="h-12 w-px bg-emerald-500/20" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
