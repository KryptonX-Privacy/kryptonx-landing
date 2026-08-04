import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Zap, Lock, Bell, Camera,
  Battery, Wifi, Signal, CheckCircle,
  Sparkles, ArrowRight, ChevronRight
} from 'lucide-react';
import { KryptonXLogo } from './KryptonXLogo';

// ── App Store "Notify Me" phone screen ─────────────────────────────────────
function AppStoreScreen() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: '#000' }}>

      {/* Status bar */}
      <div className="flex items-center justify-between px-7 pt-10 pb-2 flex-shrink-0">
        <span className="text-white text-xs font-semibold">9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3 h-3 text-white" />
          <Wifi className="w-3 h-3 text-white" />
          <Battery className="w-5 h-3 text-white" fill="white" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-5 pt-1 pb-3 flex-shrink-0">
        <span className="text-blue-400 text-xs">‹ Search</span>
        <div className="flex gap-3">
          <span className="text-blue-400 text-xs">···</span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-hidden px-5">

        {/* App hero */}
        <div className="flex gap-4 mb-5">
          {/* App icon */}
          <motion.div
            className="w-[76px] h-[76px] rounded-[18px] flex-shrink-0 flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #065f46 100%)' }}
            animate={{ boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 24px rgba(16,185,129,0.6)', '0 0 0px rgba(16,185,129,0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <KryptonXLogo size={56} animated={false} showText={false} variant="icon-only" />
          </motion.div>

          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold mb-0.5">KryptonX</p>
            <p className="text-gray-400 text-[11px] mb-2">Privacy Crypto Wallet</p>
            {/* Coming Soon badge */}
            <span className="inline-flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 rounded-full px-2.5 py-0.5">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span className="text-amber-400 text-[10px] font-semibold">Coming Soon</span>
            </span>
          </div>
        </div>

        {/* Notify Me button — Apple's actual UI for upcoming apps */}
        <motion.button
          className="w-full rounded-xl py-3 mb-5 font-semibold text-sm flex items-center justify-center gap-2 border"
          style={{
            background: 'rgba(59,130,246,0.15)',
            borderColor: 'rgba(59,130,246,0.4)',
            color: '#60a5fa'
          }}
          whileTap={{ scale: 0.97 }}
          animate={{ borderColor: ['rgba(59,130,246,0.3)', 'rgba(59,130,246,0.6)', 'rgba(59,130,246,0.3)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Bell className="w-4 h-4" />
          Notify Me
        </motion.button>

        {/* Description */}
        <p className="text-gray-400 text-[11px] leading-relaxed mb-5">
          KryptonX brings zero-knowledge privacy to Solana. Anonymous transactions, stealth addresses, and private DeFi — all in one app.
        </p>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-4" />

        {/* Feature list */}
        <p className="text-white text-[11px] font-semibold mb-3">What to expect</p>
        {[
          { icon: Shield, text: 'Zero-knowledge proofs' },
          { icon: Lock, text: 'Stealth address support' },
          { icon: Zap, text: 'Solana-speed transfers' },
        ].map((f, i) => (
          <motion.div
            key={f.text}
            className="flex items-center gap-3 mb-3"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.12 }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
            >
              <f.icon className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-gray-300 text-[11px]">{f.text}</span>
            <ChevronRight className="w-3 h-3 text-gray-600 ml-auto" />
          </motion.div>
        ))}

        {/* Divider */}
        <div className="h-px bg-white/10 mb-4 mt-1" />

        {/* Developer info */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-500 text-[10px]">Developer</p>
            <p className="text-white text-[11px] font-medium">KryptonX Labs</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-[10px]">Category</p>
            <p className="text-white text-[11px] font-medium">Finance</p>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center py-2.5 flex-shrink-0">
        <div className="w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

// ── Waitlist form ───────────────────────────────────────────────────────────
function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <div>
          <p className="text-white text-sm font-semibold">You're on the list</p>
          <p className="text-gray-400 text-xs">We'll notify you the moment KryptonX launches on iOS.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="flex items-center gap-2 rounded-xl p-1.5 transition-all duration-300"
        style={{
          background: 'rgba(15,23,42,0.8)',
          border: `1px solid ${focused ? 'rgba(16,185,129,0.6)' : 'rgba(255,255,255,0.1)'}`,
          boxShadow: focused ? '0 0 0 3px rgba(16,185,129,0.1)' : 'none',
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm px-3 py-2 outline-none"
          required
        />
        <motion.button
          type="submit"
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Notify Me
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
      <p className="text-gray-600 text-xs mt-2 pl-2">No spam. Launch notification only.</p>
    </form>
  );
}

// ── Main section ────────────────────────────────────────────────────────────
export function DownloadApp() {
  return (
    <section id="download" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background — same atmosphere as Try section */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Coming to iOS — Join the Waitlist</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-5 font-bold">
              Mobile App{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We're building the most private crypto wallet on iOS. Be the first to know when it drops.
            </p>
          </motion.div>
        </div>

        {/* Layout: phone left, CTA right */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">

          {/* ── iPhone mockup — identical frame to Try section ── */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow blob */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-[120px] rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-[420px] h-[420px] border border-emerald-500/20 rounded-full" />
            </motion.div>

            {/* Floating phone */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative w-[320px] sm:w-[360px]" style={{ perspective: '2000px' }}>
                <motion.div
                  className="relative"
                  whileHover={{ rotateY: 8, rotateX: -8, scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Phone shell */}
                  <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-[3.5rem] p-3 shadow-2xl shadow-emerald-500/40 border-[4px] border-slate-800/50">
                    <div className="relative bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-800/50">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-950 rounded-b-[1.8rem] z-50 shadow-xl border-x border-b border-slate-800/30 flex items-center justify-center gap-3">
                        <Camera className="w-2 h-2 text-slate-600" />
                        <div className="w-12 h-1.5 bg-slate-800 rounded-full" />
                      </div>
                      {/* Screen */}
                      <div className="h-[680px] overflow-hidden">
                        <AppStoreScreen />
                      </div>
                    </div>
                    {/* Physical buttons */}
                    <div className="absolute -right-[4px] top-32 w-[4px] h-16 bg-slate-700 rounded-l-md" />
                    <div className="absolute -right-[4px] top-52 w-[4px] h-24 bg-slate-700 rounded-l-md" />
                    <div className="absolute -left-[4px] top-52 w-[4px] h-14 bg-slate-700 rounded-r-md" />
                  </div>

                  {/* Phone ambient glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-teal-500/10 rounded-[3.5rem] blur-3xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: CTA content ── */}
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {/* App icon + name */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #065f46 100%)' }}
              >
                <KryptonXLogo size={44} animated={false} showText={false} variant="icon-only" />
              </div>
              <div>
                <p className="text-white text-xl font-bold">KryptonX</p>
                <p className="text-gray-400 text-sm">Privacy Crypto Wallet · iOS</p>
              </div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-3 leading-snug">
              Privacy in your pocket —<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                launching soon.
              </span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The KryptonX iOS app is in active development. Enter your email and we'll notify you the moment it's live on the App Store.
            </p>

            {/* Waitlist form */}
            <div className="mb-8">
              <WaitlistForm />
            </div>

            {/* What's included */}
            <div className="space-y-2.5">
              {[
                'Zero-knowledge proof transactions',
                'Stealth address & private keys',
                'Private DeFi — swap & stake anonymously',
                'Solana-native speed',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Apple badge (greyed out / disabled — not live yet) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-600 text-xs mb-3 uppercase tracking-wider font-medium">Available soon on</p>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 opacity-60 cursor-not-allowed select-none">
                <svg width="20" height="24" viewBox="0 0 22 27" fill="white" opacity="0.7">
                  <path d="M18.04 14.23c0-3.23 2.64-4.78 2.76-4.86-1.51-2.2-3.85-2.5-4.68-2.53-1.99-.2-3.88 1.17-4.89 1.17-1.01 0-2.57-1.14-4.24-1.11-2.17.03-4.18 1.27-5.3 3.21-2.27 3.94-.58 9.77 1.63 12.97 1.08 1.56 2.36 3.31 4.05 3.25 1.63-.07 2.24-1.05 4.21-1.05 1.97 0 2.53 1.05 4.24.99 1.75-.03 2.85-1.6 3.92-3.17.78-1.14 1.3-2.33 1.64-3.51-3.8-1.44-3.34-7.16.66-9.36z"/>
                  <path d="M14.71 4.84C15.6 3.76 16.2 2.27 16.04.73c-1.4.06-3.08.93-4.07 2.08-.89 1.03-1.67 2.67-1.46 4.23 1.55.12 3.14-.78 4.2-2.2z"/>
                </svg>
                <div>
                  <p className="text-white/50 text-[10px] leading-none">Download on the</p>
                  <p className="text-white/70 text-base font-semibold leading-none mt-0.5">App Store</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
