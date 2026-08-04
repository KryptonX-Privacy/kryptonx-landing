import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { 
  Shield, Zap, Lock, Eye, EyeOff, Send, Download, ArrowUpRight, 
  ArrowDownLeft, Sparkles, CheckCircle, Settings, Home as HomeIcon,
  User, Bell, Battery, Wifi, Signal, Camera, Phone, Mail, 
  MessageSquare, Music, Video, TrendingUp, Clock, ChevronDown,
  Maximize2, BarChart3, RefreshCw, Copy, QrCode, Globe, 
  ShieldCheck, Toggle, Activity
} from 'lucide-react';
import { KryptonXLogo } from './KryptonXLogo';
import { PhoneAppContent } from './PhoneAppContent';

type ScreenState = 'lock' | 'home' | 'app';

export function InteractivePhoneMockup() {
  const [screenState, setScreenState] = useState<ScreenState>('lock');
  const [dragY, setDragY] = useState(0);
  const [showSplash, setShowSplash] = useState(false);
  const [privacyMode, setPrivacyMode] = useState<'public' | 'private' | 'maximum'>('private');
  const [balanceVisible, setBalanceVisible] = useState(true);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (screenState === 'lock' && info.offset.y < 0) {
      setDragY(info.offset.y);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (screenState === 'lock' && info.offset.y < -150) {
      // Unlock
      setScreenState('home');
    }
    setDragY(0);
  };

  const handleAppOpen = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      setScreenState('app');
    }, 1200);
  };

  const handleHomePress = () => {
    setScreenState('home');
  };

  const handleUnlock = () => {
    setScreenState('home');
  };

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Title */}
      <div className="relative text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Interactive Mobile Experience</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold">
            Try <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">KryptonX</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {screenState === 'lock' && '📱 Click "Tap to Unlock" button to start'}
            {screenState === 'home' && '🏠 Tap the KryptonX app icon to experience privacy'}
            {screenState === 'app' && '🔐 Explore full privacy features • Click Home to go back'}
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto flex justify-center items-center px-4">
        {/* Phone Container */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Massive Glow Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-[120px] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Rings Around Phone */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[400px] h-[400px] border border-emerald-500/20 rounded-full" />
          </motion.div>

          {/* Phone Frame */}
          <motion.div
            className="relative z-10 will-change-transform"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Phone Container with 3D perspective */}
            <div className="relative w-[320px] sm:w-[360px]" style={{ perspective: '2000px' }}>
              <motion.div
                className="relative will-change-transform"
                whileHover={{
                  rotateY: 10,
                  rotateX: -10,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Phone Body */}
                <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-[3.5rem] p-3 shadow-2xl shadow-emerald-500/40 border-[4px] border-slate-800/50">
                  {/* Screen Bezel */}
                  <div className="relative bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-800/50">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-950 rounded-b-[1.8rem] z-50 shadow-xl border-x border-b border-slate-800/30 flex items-center justify-center gap-3">
                      <Camera className="w-2 h-2 text-slate-600" />
                      <div className="w-12 h-1.5 bg-slate-800 rounded-full" />
                    </div>

                    {/* Screen Content Container */}
                    <div className="relative h-[680px] bg-slate-950 overflow-hidden">
                      <AnimatePresence mode="wait">
                        {/* SPLASH SCREEN - Priority render */}
                        {showSplash ? (
                          <motion.div
                            key="splash"
                            className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 flex items-center justify-center z-50"
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                            >
                              <motion.div
                                animate={{ 
                                  rotate: [0, 360],
                                  scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                  rotate: { duration: 1, ease: "easeInOut" },
                                  scale: { duration: 0.5, repeat: 1, repeatType: "reverse" }
                                }}
                              >
                                <div className="w-24 h-24">
                                  <KryptonXLogo size={96} />
                                </div>
                              </motion.div>
                              <motion.div
                                className="text-white text-xl font-bold mt-6 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                KryptonX
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        ) : screenState === 'lock' ? (
                          /* LOCK SCREEN */
                          <motion.div
                            key="lock"
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -680 }}
                            transition={{ duration: 0.4 }}
                          >
                            {/* Wallpaper */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-teal-900/30">
                              <motion.div 
                                className="w-full h-full"
                                style={{
                                  backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
                                  backgroundSize: '60px 60px'
                                }}
                                animate={{ 
                                  backgroundPosition: ['0px 0px', '60px 60px'],
                                }}
                                transition={{ 
                                  duration: 20, 
                                  repeat: Infinity, 
                                  ease: "linear" 
                                }}
                              />
                              {/* Floating KryptonX Logo in background */}
                              <motion.div
                                className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-10"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  rotate: [0, 5, 0, -5, 0]
                                }}
                                transition={{ 
                                  duration: 10, 
                                  repeat: Infinity, 
                                  ease: "easeInOut" 
                                }}
                              >
                                <div className="w-48 h-48 relative">
                                  <KryptonXLogo size={192} />
                                </div>
                              </motion.div>
                            </div>

                            {/* Status Bar */}
                            <div className="relative flex items-center justify-between px-8 pt-10 pb-4 text-white text-xs font-semibold z-10">
                              <span className="text-emerald-300">{currentTime}</span>
                              <div className="flex items-center gap-1.5">
                                <Signal className="w-3.5 h-3.5 text-emerald-400" />
                                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                                <Battery className="w-5 h-3 text-emerald-400" fill="currentColor" />
                              </div>
                            </div>

                            {/* Lock Screen Content */}
                            <motion.div 
                              className="absolute inset-0 flex flex-col items-center justify-center px-8"
                              style={{ y: dragY }}
                            >
                              {/* Time */}
                              <motion.div 
                                className="text-white text-8xl font-bold mb-2 tracking-tight"
                                animate={{ opacity: [0.9, 1, 0.9] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                {currentTime}
                              </motion.div>
                              
                              {/* Date */}
                              <div className="text-emerald-300 text-lg font-medium mb-12">
                                {currentDate}
                              </div>

                              {/* Notifications Badge */}
                              <motion.div
                                className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl px-6 py-4 mb-8 flex items-center gap-3 cursor-pointer"
                                animate={{ 
                                  boxShadow: [
                                    '0 0 20px rgba(16, 185, 129, 0.2)',
                                    '0 0 40px rgba(16, 185, 129, 0.4)',
                                    '0 0 20px rgba(16, 185, 129, 0.2)'
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleUnlock}
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                  <Bell className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="text-white text-sm font-bold">KryptonX</div>
                                  <div className="text-emerald-300 text-xs">+125 KRTX received</div>
                                </div>
                              </motion.div>

                              {/* Unlock Button - PRIMARY INTERACTION */}
                              <motion.button
                                className="relative group"
                                onClick={handleUnlock}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ touchAction: 'manipulation' }}
                              >
                                <motion.div
                                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl px-8 py-4 shadow-2xl"
                                  animate={{ 
                                    boxShadow: [
                                      '0 10px 40px rgba(16, 185, 129, 0.4)',
                                      '0 10px 60px rgba(16, 185, 129, 0.6)',
                                      '0 10px 40px rgba(16, 185, 129, 0.4)'
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <div className="flex items-center gap-3">
                                    <Lock className="w-5 h-5 text-white" />
                                    <span className="text-white text-base font-bold">Tap to Unlock</span>
                                    <ChevronDown className="w-5 h-5 text-white rotate-180" />
                                  </div>
                                </motion.div>
                              </motion.button>

                              {/* Alternative: Swipe Up Indicator (with better touch handling) */}
                              <motion.div
                                className="absolute bottom-20"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <div
                                  className="flex flex-col items-center select-none"
                                  onPointerDown={(e) => {
                                    e.currentTarget.setPointerCapture(e.pointerId);
                                    e.stopPropagation();
                                    const startY = e.clientY;

                                    const el = e.currentTarget;

                                    const handlePointerMove = (moveEvent: PointerEvent) => {
                                      const deltaY = moveEvent.clientY - startY;
                                      if (deltaY < -100) {
                                        handleUnlock();
                                        el.removeEventListener('pointermove', handlePointerMove);
                                        el.removeEventListener('pointerup', handlePointerUp);
                                        el.removeEventListener('pointercancel', handlePointerUp);
                                      }
                                      setDragY(Math.min(0, deltaY));
                                    };

                                    const handlePointerUp = () => {
                                      setDragY(0);
                                      el.removeEventListener('pointermove', handlePointerMove);
                                      el.removeEventListener('pointerup', handlePointerUp);
                                      el.removeEventListener('pointercancel', handlePointerUp);
                                    };

                                    el.addEventListener('pointermove', handlePointerMove);
                                    el.addEventListener('pointerup', handlePointerUp);
                                    el.addEventListener('pointercancel', handlePointerUp);
                                  }}
                                  style={{ touchAction: 'pan-y', cursor: 'grab' }}
                                >
                                  <motion.div 
                                    className="w-32 h-1.5 bg-emerald-400/60 rounded-full mb-3"
                                    animate={{ 
                                      boxShadow: [
                                        '0 0 10px rgba(16, 185, 129, 0.5)',
                                        '0 0 20px rgba(16, 185, 129, 0.8)',
                                        '0 0 10px rgba(16, 185, 129, 0.5)'
                                      ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  />
                                  <div className="text-emerald-300/60 text-xs font-medium flex items-center gap-2">
                                    or swipe up
                                  </div>
                                </div>
                              </motion.div>
                            </motion.div>

                            {/* Lock Icon removed - using button instead */}
                          </motion.div>
                        ) : screenState === 'home' ? (
                          /* HOME SCREEN */
                          <motion.div
                            key="home"
                            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
                            initial={{ opacity: 0, y: 680 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                          >
                            {/* Animated Grid Background */}
                            <div className="absolute inset-0 opacity-5">
                              <motion.div 
                                className="w-full h-full"
                                style={{
                                  backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
                                  backgroundSize: '40px 40px'
                                }}
                                animate={{ y: [0, 40] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              />
                            </div>

                            {/* Status Bar */}
                            <div className="relative flex items-center justify-between px-8 pt-10 pb-4 text-white text-xs font-semibold z-10">
                              <span className="text-emerald-300">{currentTime}</span>
                              <div className="flex items-center gap-1.5">
                                <Signal className="w-3.5 h-3.5 text-emerald-400" />
                                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                                <Battery className="w-5 h-3 text-emerald-400" fill="currentColor" />
                              </div>
                            </div>

                            {/* Home Screen Content */}
                            <div className="relative px-8 pt-6 pb-32 h-full overflow-y-auto">
                              {/* Search Bar */}
                              <motion.div
                                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl px-4 py-3 mb-8 flex items-center gap-3 border border-slate-700/50"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <Sparkles className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">Search</span>
                              </motion.div>

                              {/* App Grid */}
                              <motion.div 
                                className="grid grid-cols-4 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                {/* Apps Row 1 */}
                                {[
                                  { icon: Phone, label: 'Phone', color: 'from-green-500 to-green-600' },
                                  { icon: Mail, label: 'Mail', color: 'from-blue-500 to-blue-600' },
                                  { icon: MessageSquare, label: 'Messages', color: 'from-emerald-500 to-emerald-600' },
                                  { icon: Camera, label: 'Camera', color: 'from-slate-600 to-slate-700' },
                                ].map((app, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex flex-col items-center gap-2"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                      <app.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-white text-[10px] font-medium">{app.label}</span>
                                  </motion.div>
                                ))}

                                {/* Apps Row 2 */}
                                {[
                                  { icon: Music, label: 'Music', color: 'from-pink-500 to-pink-600' },
                                  { icon: Video, label: 'Videos', color: 'from-red-500 to-red-600' },
                                  { icon: Globe, label: 'Browser', color: 'from-blue-400 to-blue-500' },
                                  { icon: Settings, label: 'Settings', color: 'from-slate-500 to-slate-600' },
                                ].map((app, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex flex-col items-center gap-2"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.05 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                      <app.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-white text-[10px] font-medium">{app.label}</span>
                                  </motion.div>
                                ))}

                                {/* KryptonX App - HERO */}
                                <motion.div
                                  className="flex flex-col items-center gap-2 col-span-1"
                                  initial={{ opacity: 0, scale: 0.3 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.7, duration: 0.6, type: "spring", bounce: 0.5 }}
                                  whileHover={{ scale: 1.15, y: -8 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={handleAppOpen}
                                >
                                  <motion.div 
                                    className="relative w-14 h-14 cursor-pointer"
                                    animate={{ 
                                      boxShadow: [
                                        '0 0 20px rgba(16, 185, 129, 0.5)',
                                        '0 0 40px rgba(16, 185, 129, 0.8)',
                                        '0 0 20px rgba(16, 185, 129, 0.5)'
                                      ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    {/* Premium Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-2xl shadow-2xl" />
                                    
                                    {/* Shine Effect */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-2xl"
                                      animate={{ x: ['-200%', '200%'] }}
                                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                    />
                                    
                                    {/* Logo N */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-10 h-10 relative">
                                        <KryptonXLogo size={40} />
                                      </div>
                                    </div>

                                    {/* Notification Badge */}
                                    <motion.div
                                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-slate-950 shadow-lg"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                      3
                                    </motion.div>

                                    {/* Pulsing Ring */}
                                    <motion.div
                                      className="absolute inset-0 border-2 border-emerald-400 rounded-2xl"
                                      animate={{ 
                                        scale: [1, 1.3, 1.3],
                                        opacity: [0.8, 0, 0]
                                      }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                  </motion.div>
                                  <span className="text-emerald-300 text-[10px] font-bold">KryptonX</span>
                                </motion.div>

                                {/* Empty slots */}
                                {[...Array(3)].map((_, idx) => (
                                  <div key={`empty-${idx}`} />
                                ))}
                              </motion.div>

                              {/* Page Indicators */}
                              <motion.div 
                                className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                              >
                                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                                <div className="w-2 h-2 bg-slate-600 rounded-full" />
                                <div className="w-2 h-2 bg-slate-600 rounded-full" />
                              </motion.div>
                            </div>

                            {/* Dock */}
                            <motion.div 
                              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-slate-800/80 backdrop-blur-2xl rounded-3xl px-5 py-4 border border-slate-700/50 shadow-2xl"
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="flex items-center justify-around">
                                {[
                                  { icon: Phone, color: 'from-green-500 to-green-600' },
                                  { icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
                                  { icon: Globe, color: 'from-orange-500 to-orange-600' },
                                  { icon: Music, color: 'from-pink-500 to-pink-600' },
                                ].map((app, idx) => (
                                  <motion.div
                                    key={idx}
                                    className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}
                                    whileHover={{ scale: 1.1, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <app.icon className="w-7 h-7 text-white" />
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full" />
                          </motion.div>
                        ) : screenState === 'app' ? (
                          /* APP SCREEN */
                          <motion.div
                            key="app"
                            className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            {/* Animated Background Grid */}
                            <div className="absolute inset-0 opacity-10">
                              <motion.div 
                                className="w-full h-full"
                                style={{
                                  backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
                                  backgroundSize: '40px 40px'
                                }}
                                animate={{ y: [0, 40] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              />
                            </div>

                            {/* NEW: Use PhoneAppContent Component */}
                            <PhoneAppContent
                              balanceVisible={balanceVisible}
                              setBalanceVisible={setBalanceVisible}
                              privacyMode={privacyMode}
                              setPrivacyMode={setPrivacyMode}
                              onHomePress={handleHomePress}
                              currentTime={currentTime}
                            />
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Phone Physical Buttons */}
                  <div className="absolute -right-[4px] top-32 w-[4px] h-16 bg-slate-700 rounded-l-md shadow-inner"></div>
                  <div className="absolute -right-[4px] top-52 w-[4px] h-24 bg-slate-700 rounded-l-md shadow-inner"></div>
                  <div className="absolute -left-[4px] top-52 w-[4px] h-14 bg-slate-700 rounded-r-md shadow-inner"></div>
                </div>

                {/* Phone Premium Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-teal-500/10 rounded-[3.5rem] blur-3xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}