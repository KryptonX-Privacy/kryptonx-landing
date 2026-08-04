import { Shield, Lock, Eye, ArrowRight, Github, Send, Menu, X, Zap, Globe, Cpu, FileKey, Users, Code, Database, Network, Server, Blocks, Key, Check, Clock, Sparkles, Rocket, MessageCircle, Loader, Loader2, DollarSign, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { motion, AnimatePresence } from 'motion/react';
import { PrivacyBuilder } from './components/PrivacyBuilder';
import { PrivacyDock } from './components/PrivacyDock';
import { InteractivePhoneMockup } from './components/InteractivePhoneMockup';
import { AnimatedNavItem, AnimatedLaunchButton } from './components/AnimatedNavigation';
import { FloatingParticles } from './components/FloatingParticles';
import { AnimatedGradientText } from './components/AnimatedGradientText';
import { GlowingCard } from './components/GlowingCard';
import { CyberBeams } from './components/CyberBeams';
import { OrbitingElements } from './components/OrbitingElements';
import { MatrixRain } from './components/MatrixRain';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Documentation } from './components/Documentation';
import { CoreFeatures } from './components/CoreFeatures';
import { Examples } from './components/Examples';
import { Whitepaper } from './components/Whitepaper';
import { DownloadApp } from './components/DownloadApp';
import { AutoDemo } from './components/AutoDemo';
import { TechStackPro } from './components/TechStackPro';
import { TransactionFlowViz } from './components/TransactionFlowViz';
import { SmartWatchMockup } from './components/SmartWatchMockup';
import { PrivacyBrowserMockup } from './components/PrivacyBrowserMockup';
import { TokenInfoBar } from './components/TokenInfoBar';
import { WalletPrivacyDemo } from './components/WalletPrivacyDemo';
import { KryptonXRobot } from './components/KryptonXRobot';
import { KryptonXLogo } from './components/KryptonXLogo';
import { SplashScreen } from './components/SplashScreen';
import heroBg from '../imports/IMG_3967.png';
import pepeLogo from '../imports/3e90dfc4a0edf453059160b0dd3b0aa784464d38.png';
import birdLogo from '../imports/df3cd4eaa6b060829437737ae13252eeb950ff9f.png';
import solanaLogo from '../imports/e9aa988e6278ba018bc151896cc62c70a0e0e8fe.png';
import pillLogo from '../imports/e7e6065068e4a230430219ed598e81ac4d658928.png';

// Suppress Jotai multiple instances warning in development environment
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes?.('Detected multiple Jotai instances')) {
      return; // Suppress Jotai warning
    }
    originalWarn(...args);
  };
}

type PageView = 'home' | 'builder' | 'dock' | 'docs' | 'examples' | 'whitepaper';

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function Navigation({ currentPage, setCurrentPage }: { currentPage: PageView; setCurrentPage: (page: PageView) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = 'KryptonX | Privacy-First Crypto on Solana';
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Check if it's Builder or Dock
    if (href === '#builder') {
      setCurrentPage('builder');
      return;
    }
    if (href === '#dock') {
      setCurrentPage('dock');
      return;
    }
    
    // For other sections, scroll to them
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleTryDemo = () => {
    setIsMenuOpen(false);
    const element = document.querySelector('#mobile-app');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Technology', href: '#technology' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Builder', href: '#builder' },
    { name: 'Dock', href: '#dock' },
    { name: 'Community', href: '#community' }
  ];


  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentPage('home')}>
            {/* App icon style logo — mirrors the phone mockup icon */}
            <div className="animate-logo-float relative flex-shrink-0">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-emerald-500/40 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Rounded square gradient background */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/40 overflow-hidden">
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent" />
                {/* KX Logo centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <KryptonXLogo size={28} animated={false} />
                </div>
              </div>
            </div>
            <div className="relative">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-teal-300 group-hover:to-amber-300 transition-all duration-300">
                KryptonX
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <AnimatedNavItem
                key={item.name}
                name={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                index={index}
              />
            ))}
            <AnimatedLaunchButton index={navItems.length + 1} onClick={handleTryDemo} />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500/20 animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-gray-300 hover:text-emerald-400 hover:translate-x-2 py-2 transition-all duration-300 hover:bg-emerald-500/5 rounded-lg px-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleTryDemo}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-2 rounded-lg mt-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Try Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

function AppInner() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash === '#builder') {
      setCurrentPage('builder');
    } else if (currentHash === '#dock') {
      setCurrentPage('dock');
    } else if (currentHash === '#docs') {
      setCurrentPage('docs');
    } else if (currentHash === '#examples') {
      setCurrentPage('examples');
    } else if (currentHash === '#whitepaper') {
      setCurrentPage('whitepaper');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Lock scroll on <html> when a sub-page overlay is active
  useEffect(() => {
    if (currentPage !== 'home') {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [currentPage]);

  // Show splash screen on first load
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #040d07, #060f09, #040d07)' }}>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Interactive KryptonX Robot Mascot */}
      <KryptonXRobot />
      
      {/* Sub-pages — scroll on the fixed element itself, no nested scroll context */}
      <AnimatePresence mode="wait">
        {currentPage !== 'home' && (
          <motion.div
            key={currentPage}
            className="fixed inset-0 z-40 bg-slate-950 overflow-y-auto"
            style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* decorative orbs — pointer-events-none so they never block scroll */}
            <div className="fixed top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="fixed bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

            {currentPage === 'whitepaper' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Whitepaper onBack={() => setCurrentPage('dock')} />
              </motion.div>
            ) : (
              <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-8">
                    <button
                      onClick={() => setCurrentPage('home')}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                      <span>Back to Home</span>
                    </button>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {currentPage === 'builder' && <PrivacyBuilder />}
                    {currentPage === 'dock' && <PrivacyDock onNavigateToWhitepaper={() => setCurrentPage('whitepaper')} />}
                    {currentPage === 'docs' && <Documentation />}
                    {currentPage === 'examples' && <Examples />}
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show Home Page */}
      <AnimatePresence mode="wait">
      {currentPage === 'home' && (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            {/* Overlay: dark tint + fade ke bawah */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(4,13,7,0.45) 0%, rgba(4,13,7,0.55) 60%, rgba(4,13,7,0.95) 100%)' }}></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ willChange: 'opacity' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ willChange: 'opacity' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-glow-pulse" style={{ willChange: 'opacity' }}></div>
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite',
              willChange: 'transform'
            }}></div>
          </div>

          {/* Cyber Beams - Futuristic laser beams */}
          <CyberBeams />

          {/* Matrix Rain - Digital rain effect - REMOVED for performance */}
          {/* <MatrixRain /> */}

          {/* Orbiting Elements - Floating crypto icons */}
          <OrbitingElements />

          {/* Floating Particles - REDUCED from 30 to 12 */}
          <FloatingParticles count={12} />

          {/* Rotating Rings with gradient */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 border border-emerald-500/10 rounded-full animate-spin-slow" style={{ willChange: 'transform' }}></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 border border-teal-500/10 rounded-full animate-spin-reverse" style={{ willChange: 'transform' }}></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 border-2 border-transparent bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 rounded-full blur-sm animate-spin-slow" style={{ willChange: 'transform' }}></div>

          {/* Holographic data streams */}
          <div className="absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-data-stream" style={{ willChange: 'transform' }}></div>
          <div className="absolute right-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-teal-400/30 to-transparent animate-data-stream" style={{ animationDelay: '1s', willChange: 'transform' }}></div>
          
          {/* Pulsing nodes */}
          <div className="absolute top-1/4 right-1/5 w-3 h-3 bg-emerald-400/60 rounded-full animate-bounce-gentle blur-sm" style={{ willChange: 'transform' }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-teal-400/60 rounded-full animate-bounce-gentle blur-sm" style={{ animationDelay: '0.5s', willChange: 'transform' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-bounce-gentle blur-sm" style={{ animationDelay: '1s', willChange: 'transform' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <TokenInfoBar />

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
              The Future of <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Private</span> Transactions
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Experience truly anonymous and secure cryptocurrency transactions with military-grade encryption and zero-knowledge proofs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 hover:-translate-y-1 animate-background-pan">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Start Trading Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('docs')}
                className="group bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-emerald-500/30 hover:border-emerald-500/50 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Read Documentation
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 mb-16">
              <a href="https://x.com/kryptonxprivacy?s=11" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg transition-all border border-emerald-500/20 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-emerald-500/30">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://t.me/KryptonX_Privacy" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg transition-all border border-emerald-500/20 hover:border-teal-500/50 text-gray-300 hover:text-teal-400 hover:scale-110 hover:-rotate-6 hover:shadow-lg hover:shadow-teal-500/30">
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="https://github.com/KryptonX-Privacy/kryptonx-landing" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg transition-all border border-emerald-500/20 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-emerald-500/30">
                <Github className="w-5 h-5 group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Trusted By Industry Leaders</h3>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-right whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set 2 */}
              <div className="flex items-center gap-6 ml-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set 3 */}
              <div className="flex items-center gap-6 ml-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set 4 */}
              <div className="flex items-center gap-6 ml-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={pepeLogo} alt="Pepe" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={birdLogo} alt="Bird" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-emerald-500/40 transition-all">
                  <img src={solanaLogo} alt="Solana" className="w-full h-full object-contain" />
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-lg p-2 w-20 h-14 flex items-center justify-center hover:border-teal-500/40 transition-all">
                  <img src={pillLogo} alt="Pill" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm">About KryptonX</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Redefining <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Financial Privacy</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              KryptonX is a next-generation cryptocurrency built on the foundation of absolute privacy and security. 
              We believe financial freedom begins with financial privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-4">

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-900/60 backdrop-blur-sm p-6 group"
              >
                {/* Ambient glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/8 rounded-full blur-2xl group-hover:bg-emerald-500/14 transition-all duration-700" />

                {/* Top label */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-px h-5 bg-emerald-400 rounded-full" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Our Mission</span>
                </div>

                {/* Icon + headline */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-lg" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/25 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Financial<br />
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Sovereignty</span>
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  To empower every individual with true financial sovereignty through cutting-edge privacy technology — where your transactions are your business alone.
                </p>

                {/* Progress pillars */}
                <div className="flex items-end gap-2 h-10">
                  {[
                    { label: 'Privacy', w: '100%' },
                    { label: 'Freedom', w: '94%' },
                    { label: 'Security', w: '98%' },
                  ].map((item, i) => (
                    <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-sm bg-slate-800 overflow-hidden" style={{ height: 28 }}>
                        <motion.div
                          className="w-full rounded-sm bg-gradient-to-t from-emerald-600 to-emerald-400"
                          style={{ height: item.w }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="text-[8px] text-gray-600 uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="relative overflow-hidden rounded-2xl border border-teal-500/15 bg-slate-900/60 backdrop-blur-sm p-6 group"
              >
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/8 rounded-full blur-2xl group-hover:bg-teal-500/14 transition-all duration-700" />

                {/* Top label */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-px h-5 bg-teal-400 rounded-full" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-400">Our Vision</span>
                </div>

                {/* Icon + headline */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-lg" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/25 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Privacy as a<br />
                    <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Fundamental Right</span>
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  A world where privacy is not a luxury. KryptonX aims to be the gold standard for private, secure, and untraceable transactions on Solana.
                </p>

                {/* Milestone dots */}
                <div className="flex items-center gap-0 relative">
                  <div className="absolute inset-y-3 left-3 right-3 h-px bg-slate-700" />
                  {[
                    { label: 'Build',    done: true  },
                    { label: 'Launch',   done: false },
                    { label: 'Scale',    done: false },
                    { label: 'Standard', done: false },
                  ].map((step, i) => (
                    <div key={step.label} className="flex-1 flex flex-col items-center gap-2 relative z-10">
                      <motion.div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          step.done
                            ? 'bg-teal-500 border-teal-500'
                            : 'bg-slate-900 border-slate-700'
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 300 }}
                      >
                        {step.done
                          ? <Check className="w-3 h-3 text-white" />
                          : <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        }
                      </motion.div>
                      <span className={`text-[8px] uppercase tracking-widest font-medium ${step.done ? 'text-teal-400' : 'text-slate-600'}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Why KryptonX — visual metric cards */}
            <div className="grid grid-cols-2 gap-3">

              {/* Card 1 — Untraceable */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-900/80 to-emerald-950/40 border border-emerald-500/15 rounded-2xl p-5 flex flex-col gap-3 group hover:border-emerald-500/35 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5">100%</div>
                  <div className="text-[10px] text-emerald-400/70 uppercase tracking-widest mb-2">Anonymous</div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Untraceable Transactions</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">ZK-proofs & ring signatures hide every trace</p>
                </div>
              </motion.div>

              {/* Card 2 — Decentralized */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="bg-gradient-to-br from-slate-900/80 to-teal-950/40 border border-teal-500/15 rounded-2xl p-5 flex flex-col gap-3 group hover:border-teal-500/35 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Network className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5">0</div>
                  <div className="text-[10px] text-teal-400/70 uppercase tracking-widest mb-2">Central Points</div>
                  {/* Animated nodes */}
                  <div className="flex items-center gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 rounded-full bg-teal-500/40"
                        style={{ width: `${[18, 12, 20, 10, 16, 14][i]}%` }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Decentralized & Secure</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">No authority controls your funds — ever</p>
                </div>
              </motion.div>

              {/* Card 3 — Lightning Fast */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="bg-gradient-to-br from-slate-900/80 to-emerald-950/40 border border-emerald-500/15 rounded-2xl p-5 flex flex-col gap-3 group hover:border-emerald-500/35 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">65K</span>
                    <span className="text-xs text-emerald-400/70 mb-1">TPS</span>
                  </div>
                  <div className="text-[10px] text-emerald-400/70 uppercase tracking-widest mb-2">Throughput</div>
                  {/* Speed bars */}
                  <div className="flex items-end gap-0.5 h-6">
                    {[30, 50, 40, 70, 55, 90, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-emerald-600 to-emerald-400"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Lightning Fast</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">Private txns at Solana speed — no compromise</p>
                </div>
              </motion.div>

              {/* Card 4 — Low Fees */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="bg-gradient-to-br from-slate-900/80 to-teal-950/40 border border-teal-500/15 rounded-2xl p-5 flex flex-col gap-3 group hover:border-teal-500/35 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-gray-500">Others</span>
                    <span className="text-gray-400 line-through">$2.50</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-slate-600/50" />
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-teal-400 font-semibold">KryptonX</span>
                    <span className="text-teal-300 font-bold">$0.001</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: '2%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Ultra Low Fees</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">99.96% cheaper — privacy shouldn't cost a fortune</p>
                </div>
              </motion.div>

            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-xl mb-2">Community Driven</h4>
                <p className="text-gray-400">
                  Built by privacy advocates, for privacy advocates. Join our growing community of users worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-xl mb-2">Open Source</h4>
                <p className="text-gray-400">
                  Complete transparency with fully auditable code. Trust through verification, not through authority.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-xl mb-2">Innovation First</h4>
                <p className="text-gray-400">
                  Constantly evolving with the latest advancements in cryptography and blockchain technology.
                </p>
              </div>
            </div>

            {/* Wallet Privacy Demo */}
            <WalletPrivacyDemo />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-teal-400 animate-zap-electric" />
              <span className="text-teal-300 text-sm">Core Features</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Unmatched <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Privacy Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Advanced technology stack designed to protect your financial freedom
            </p>
          </div>

          <CoreFeatures />
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-emerald-400 animate-cpu-process" />
              <span className="text-emerald-300 text-sm">Technology Stack</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Powered by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Advanced Technology</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Built on cutting-edge cryptographic protocols and blockchain architecture
            </p>
          </div>

          {/* Professional Tech Stack Demo */}
          <TechStackPro />

          {/* Transaction Flow — Privacy in Action */}
          <TransactionFlowViz />

          {/* Download App Section */}
          <DownloadApp />

          {/* 3D Phone Mockup - Mobile App Section */}
          <div id="mobile-app">
            <InteractivePhoneMockup />
          </div>

          {/* Auto Demo Section */}
          <AutoDemo />
        </div>
      </section>

      {/* Privacy Browser + Extension Demo */}
      <PrivacyBrowserMockup />

      {/* Smartwatch Section */}
      <SmartWatchMockup />

      {/* Banner with Rotating Logo */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />
            
            {/* Main Banner Card */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 sm:p-12 overflow-hidden">
              {/* Corner Glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left - Rotating Logo */}
                <div className="relative flex-shrink-0">
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 w-56 h-56 -left-14 -top-14"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                  </motion.div>

                  {/* Middle Ring */}
                  <motion.div
                    className="absolute inset-0 w-44 h-44 -left-10 -top-10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full border border-teal-500/30" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                  </motion.div>

                  {/* Logo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <KryptonXLogo size={40} />
                    </motion.div>
                  </div>
                </div>

                {/* Center/Right - Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      KryptonX
                    </span>
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-4" />
                  <p className="text-xl sm:text-2xl text-emerald-400/80 mb-6">
                    Privacy Protocol on Solana Blockchain
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm backdrop-blur-xl">
                      🔒 Zero-Knowledge Proofs
                    </div>
                    <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-sm backdrop-blur-xl">
                      ⚡ Lightning Fast
                    </div>
                    <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm backdrop-blur-xl">
                      🛡️ Maximum Security
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-teal-400 animate-clock-tick" />
              <span className="text-teal-300 text-sm">Development Roadmap</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Journey Ahead</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A clear path to becoming the world's leading privacy cryptocurrency
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 hidden lg:block"></div>
            
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center ring-4 ring-emerald-500/20">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Completed</span>
                    <span className="text-gray-400">Q1 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 1: Foundation</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 animate-checkmark" />
                      Official website and web platform launch
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 animate-checkmark" />
                      Community establishment and social media presence
                    </li>
                    <li className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                      Launch on Pump.fun
                    </li>
                    <li className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                      Website features and functionality updates
                    </li>
                    <li className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                      DexScreener paid and booster
                    </li>
                    <li className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-yellow-400 animate-spin" />
                      Initial marketing campaign and community growth
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center ring-4 ring-teal-500/20 animate-pulse">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm">In Progress</span>
                    <span className="text-gray-400">Q2 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 2: Growth</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Testnet launch with core privacy features
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Smart contract integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Security audit by leading firms
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Mobile wallet applications (iOS & Android)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Major exchange listings
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Cross-chain bridge implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin-slow" />
                      Community governance launch
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center ring-4 ring-emerald-500/20">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">Upcoming</span>
                    <span className="text-gray-400">Q3 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 3: Expansion</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Privacy DEX integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Layer 2 scaling solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Enterprise partnerships
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin-slow" />
                      Advanced privacy features (quantum-resistant)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center ring-4 ring-teal-500/20">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-sm">Future</span>
                    <span className="text-gray-400">Q4 2026</span>
                  </div>
                  <h3 className="text-white text-2xl mb-3">Phase 4: Global Adoption</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      Merchant payment solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      DeFi ecosystem expansion
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      Global marketing campaign
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin-slow" />
                      Privacy protocol licensing
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-emerald-400 animate-users-group" />
              <span className="text-emerald-300 text-sm">Join Our Community</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl mb-6">
              Be Part of the <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Privacy Revolution</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Connect with privacy advocates, developers, and enthusiasts from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <a href="https://x.com/kryptonxprivacy?s=11" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl w-fit mb-4 group-hover:animate-bounce-subtle">
                <XIcon className="w-8 h-8 text-white animate-social-float" />
              </div>
              <h3 className="text-white text-xl mb-2">X (Twitter)</h3>
              <p className="text-gray-400 mb-4">Follow us for the latest updates and announcements</p>
              <div className="flex items-center gap-2 text-emerald-400">
                <span>Follow @KryptonX</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="https://t.me/KryptonX_Privacy" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-slate-900/50 to-teal-900/20 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-4 rounded-2xl w-fit mb-4 group-hover:animate-bounce-subtle">
                <Send className="w-8 h-8 text-white animate-telegram-send" />
              </div>
              <h3 className="text-white text-xl mb-2">Telegram</h3>
              <p className="text-gray-400 mb-4">Join our active community chat and get instant support</p>
              <div className="flex items-center gap-2 text-teal-400">
                <span>Join Group</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="#" className="group bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl w-fit mb-4 group-hover:animate-bounce-subtle">
                <MessageCircle className="w-8 h-8 text-white animate-discord-pulse" />
              </div>
              <h3 className="text-white text-xl mb-2">Discord</h3>
              <p className="text-gray-400 mb-4">Connect with developers and contribute to the project</p>
              <div className="flex items-center gap-2 text-emerald-400">
                <span>Join Server</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-white text-3xl mb-4">Ready to Experience True Privacy?</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Start trading KryptonX today and take control of your financial privacy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/30">
                Buy on Pump.fun
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('whitepaper')}
                className="group bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-emerald-500/30 hover:border-emerald-500/50 flex items-center gap-2"
              >
                <FileKey className="w-5 h-5" />
                View Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-emerald-500/20 bg-slate-950/50 backdrop-blur-xl overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/5 via-slate-950 to-teal-950/5" />
        
        {/* Floating Particles in Footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Animated Top Border Line */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Section with Animation */}
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <KryptonXLogo size={40} />
              </motion.div>
              <span className="text-white text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                KryptonX
              </span>
            </motion.div>

            {/* Animated Divider */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-500/50" />
              <motion.div
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-500/50" />
            </motion.div>

            {/* Description with Gradient Animation */}
            <motion.p
              className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The future of private, secure, and anonymous cryptocurrency transactions.
              <br />
              <span className="text-emerald-400/70">Built on Solana • Powered by Zero-Knowledge</span>
            </motion.p>

            {/* Social Links with Hover Animation */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="https://x.com/kryptonxprivacy?s=11"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://t.me/KryptonX_Privacy"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 text-emerald-400" />
              </motion.a>
              
              <motion.a
                href="https://github.com/KryptonX-Privacy/kryptonx-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-emerald-400" />
              </motion.a>
            </motion.div>

            {/* Copyright with Fade Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-500 text-xs">
                © 2026 KryptonX. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Privacy First • Security Always • Decentralized Forever
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Animated Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent blur-sm"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </footer>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppInner />
    </ErrorBoundary>
  );
}
