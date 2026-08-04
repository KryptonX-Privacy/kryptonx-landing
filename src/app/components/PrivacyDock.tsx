import { FileKey, Download, Code, Book, Wrench, Terminal, ArrowRight, ExternalLink, Zap, Shield, Lock, Eye, Rocket, Users, Star, TrendingUp, CheckCircle, AlertCircle, Clock, Package, Cpu, Database, Globe, Server, Boxes, FileCode, Play, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import solanaLogo from '../../imports/e9aa988e6278ba018bc151896cc62c70a0e0e8fe.png';

interface PrivacyDockProps {
  onNavigateToWhitepaper?: () => void;
}

export function PrivacyDock({ onNavigateToWhitepaper }: PrivacyDockProps) {
  const [copiedCommand, setCopiedCommand] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install @kryptonx/sdk');
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  const tools = [
    {
      title: "KRTX Wallet",
      description: "Official desktop and mobile wallet with full privacy features",
      icon: FileKey,
      color: "purple",
      tag: "v2.1.0",
      status: "Coming Soon",
      action: "Coming Soon",
      features: ["Desktop & Mobile", "Hardware Wallet", "Multi-Sig"]
    },
    {
      title: "Developer SDK",
      description: "Build privacy-first dApps with our comprehensive SDK",
      icon: Code,
      color: "cyan",
      tag: "Latest",
      status: "Coming Soon",
      action: "Coming Soon",
      features: ["TypeScript", "React Native", "Web3.js"]
    },
    {
      title: "Block Explorer",
      description: "Privacy-preserving blockchain explorer and analytics",
      icon: Terminal,
      color: "purple",
      tag: "Live",
      status: "Online",
      action: "Explore",
      features: ["Real-time", "Analytics", "API Access"]
    },
    {
      title: "API Documentation",
      description: "Complete API reference for developers and integrators",
      icon: Book,
      color: "cyan",
      tag: "v1.5",
      status: "Updated",
      action: "Read",
      features: ["REST API", "WebSocket", "GraphQL"]
    },
    {
      title: "Testing Suite",
      description: "Test private transactions in our sandbox environment",
      icon: Wrench,
      color: "purple",
      tag: "Beta",
      status: "Coming Soon",
      action: "Coming Soon",
      features: ["Testnet", "Faucet", "Debugging"]
    },
    {
      title: "CLI Tools",
      description: "Command-line interface for advanced users and automation",
      icon: Terminal,
      color: "cyan",
      tag: "v3.0",
      status: "Coming Soon",
      action: "Coming Soon",
      features: ["Cross-platform", "Scripting", "Automation"]
    }
  ];

  const resources = [
    {
      title: "Smart Contract Templates",
      description: "Pre-built privacy contracts",
      downloads: "15K+",
      icon: FileCode,
      color: "purple",
      size: "12 MB"
    },
    {
      title: "Integration Guides",
      description: "Step-by-step tutorials",
      downloads: "8K+",
      icon: Book,
      color: "cyan",
      size: "5 MB"
    },
    {
      title: "Security Audits",
      description: "Independent audit reports",
      downloads: "25K+",
      icon: Shield,
      color: "purple",
      size: "8 MB"
    },
    {
      title: "Whitepaper",
      description: "Technical specifications",
      downloads: "50K+",
      icon: FileKey,
      color: "cyan",
      size: "3 MB"
    }
  ];

  const stats = [
    { label: "Total Downloads", value: "500K+", icon: Download, color: "purple" },
    { label: "Active Developers", value: "12K+", icon: Users, color: "cyan" },
    { label: "GitHub Stars", value: "25K+", icon: Star, color: "purple" },
    { label: "API Calls/Day", value: "2M+", icon: Zap, color: "cyan" }
  ];

  const integrations = [
    { name: "Solana", status: "Live", icon: Server, color: "cyan" }
  ];

  const tutorials = [
    {
      title: "Getting Started with KryptonX SDK",
      duration: "10 min",
      level: "Beginner",
      views: "25K",
      color: "purple"
    },
    {
      title: "Building Your First Private dApp",
      duration: "25 min",
      level: "Intermediate",
      views: "18K",
      color: "cyan"
    },
    {
      title: "Advanced Zero-Knowledge Proofs",
      duration: "45 min",
      level: "Advanced",
      views: "12K",
      color: "purple"
    },
    {
      title: "Implementing Ring Signatures",
      duration: "30 min",
      level: "Advanced",
      views: "9K",
      color: "cyan"
    }
  ];

  return (
    <div className="w-full">
      {/* Header with Animated Background */}
      <div className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6 animate-bounce-gentle">
            <Boxes className="w-4 h-4 text-purple-400 animate-spin-slow" />
            <span className="text-purple-300 text-sm">Developer Resources Hub</span>
          </div>
          
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4 animate-slide-in-up">
            Developer <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-text-shimmer">Dock</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to build, test, and deploy privacy-focused applications on KryptonX Network
          </p>
        </div>
      </div>

      {/* Main Tools Grid - Enhanced */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-2xl flex items-center gap-3">
            <Rocket className="w-6 h-6 text-purple-400" />
            Development Tools
          </h3>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isPurple = tool.color === 'purple';
            
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-slate-900/80 ${
                  isPurple ? 'to-purple-900/40 border-purple-500/30 hover:border-purple-400/60' : 'to-cyan-900/40 border-cyan-500/30 hover:border-cyan-400/60'
                } backdrop-blur-xl border-2 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl ${
                  isPurple ? 'hover:shadow-purple-500/20' : 'hover:shadow-cyan-500/20'
                } transition-all cursor-pointer animate-slide-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isPurple ? 'from-purple-500/0 to-purple-500/5' : 'from-cyan-500/0 to-cyan-500/5'
                } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${
                      isPurple ? 'from-purple-500 to-purple-600' : 'from-cyan-500 to-cyan-600'
                    } p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg animate-glow-pulse`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <span className={`${
                        isPurple ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                      } px-3 py-1 rounded-full text-xs border`}>
                        {tool.tag}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        {tool.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{tool.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-800/50 text-gray-400 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className={`w-full ${
                    isPurple ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border-purple-500/30' : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border-cyan-500/30'
                  } border rounded-lg py-2 flex items-center justify-center gap-2 group-hover:gap-3 transition-all`}>
                    <span>{tool.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resources Section - Enhanced */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-2xl flex items-center gap-3">
            <Package className="w-6 h-6 text-cyan-400" />
            Developer Resources
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            const isPurple = resource.color === 'purple';
            const isWhitepaper = resource.title === 'Whitepaper';
            
            return (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-slate-900/80 ${
                  isPurple ? 'to-purple-900/40 border-purple-500/20' : 'to-cyan-900/40 border-cyan-500/20'
                } backdrop-blur-xl border rounded-xl p-6 hover:border-${
                  isPurple ? 'purple' : 'cyan'
                }-500/50 hover:scale-105 transition-all cursor-pointer animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${
                    isPurple ? 'bg-purple-500/20' : 'bg-cyan-500/20'
                  } p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${
                      isPurple ? 'text-purple-400' : 'text-cyan-400'
                    }`} />
                  </div>
                </div>
                
                <h4 className="text-white mb-2">{resource.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{resource.size}</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    Verified
                  </span>
                </div>
                
                <button 
                  onClick={() => {
                    if (isWhitepaper && onNavigateToWhitepaper) {
                      onNavigateToWhitepaper();
                    }
                  }}
                  className={`w-full flex items-center justify-center gap-2 ${
                    isPurple ? 'text-purple-400 hover:text-purple-300' : 'text-cyan-400 hover:text-cyan-300'
                  } text-sm group-hover:gap-3 transition-all`}
                >
                  {isWhitepaper ? (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Start & Community - Side by Side Enhanced */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {/* Quick Start */}
        <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all animate-slide-in-up">
          <h3 className="text-white text-2xl mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-purple-400" />
            Quick Start Guide
          </h3>
          
          {/* Install Command */}
          <div className="bg-slate-950/70 rounded-xl p-4 mb-4 border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs uppercase tracking-wider">Installation</span>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                {copiedCommand ? (
                  <>
                    <Check className="w-3 h-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <pre className="text-cyan-300 text-sm font-mono overflow-x-auto">
npm install @kryptonx/sdk
            </pre>
          </div>

          {/* Code Example */}
          <div className="bg-slate-950/70 rounded-xl p-4 mb-4 border border-purple-500/20 overflow-x-auto">
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Example Code</div>
            <pre className="text-sm font-mono">
<span className="text-pink-400">import</span> <span className="text-white">{'{'}</span> <span className="text-cyan-300">KryptonX</span> <span className="text-white">{'}'}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'@kryptonx/sdk'</span><span className="text-white">;</span>
{'\n'}
<span className="text-pink-400">const</span> <span className="text-white">krtx</span> <span className="text-pink-400">=</span> <span className="text-pink-400">new</span> <span className="text-yellow-300">KryptonX</span><span className="text-white">(</span><span className="text-white">{'{'}</span>
  <span className="text-cyan-300">network</span><span className="text-white">:</span> <span className="text-green-300">'mainnet'</span>
<span className="text-white">{'}'}</span><span className="text-white">)</span><span className="text-white">;</span>
{'\n'}
<span className="text-gray-500">// Create private transaction</span>
<span className="text-pink-400">const</span> <span className="text-white">tx</span> <span className="text-pink-400">=</span> <span className="text-pink-400">await</span> <span className="text-white">krtx</span><span className="text-white">.</span><span className="text-yellow-300">send</span><span className="text-white">(</span><span className="text-white">{'{'}</span>
  <span className="text-cyan-300">to</span><span className="text-white">:</span> <span className="text-green-300">'krtx5h...3k2m'</span><span className="text-white">,</span>
  <span className="text-cyan-300">amount</span><span className="text-white">:</span> <span className="text-orange-300">100</span><span className="text-white">,</span>
  <span className="text-cyan-300">privacy</span><span className="text-white">:</span> <span className="text-green-300">'maximum'</span>
<span className="text-white">{'}'}</span><span className="text-white">)</span><span className="text-white">;</span>
            </pre>
          </div>

          <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm mb-1">Need Help?</p>
              <p className="text-gray-400 text-xs">
                Check our comprehensive documentation and tutorials to get started quickly.
              </p>
            </div>
          </div>
        </div>

        {/* Community Support - Enhanced */}
        <div className="bg-gradient-to-br from-slate-900/80 to-cyan-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all animate-slide-in-up">
          <h3 className="text-white text-2xl mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-cyan-400" />
            Community Support
          </h3>
          
          <div className="space-y-3">
            <div className="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 hover:scale-105 transition-all cursor-pointer border border-transparent hover:border-purple-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white mb-1 flex items-center gap-2">
                  Developer Discord
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Online</span>
                </p>
                <p className="text-gray-400 text-sm">5,000+ active developers</p>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 hover:scale-105 transition-all cursor-pointer border border-transparent hover:border-cyan-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white mb-1">Documentation Hub</p>
                <p className="text-gray-400 text-sm">Comprehensive guides & API docs</p>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <a href="https://github.com/KryptonX-Privacy/kryptonx-landing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 hover:scale-105 transition-all cursor-pointer border border-transparent hover:border-purple-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white mb-1 flex items-center gap-2">
                  GitHub Repository
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-400">25K</span>
                </p>
                <p className="text-gray-400 text-sm">Open source & transparent</p>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 hover:scale-105 transition-all cursor-pointer border border-transparent hover:border-cyan-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white mb-1">Tutorial Videos</p>
                <p className="text-gray-400 text-sm">Step-by-step video guides</p>
              </div>
              <Play className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Tutorials Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-2xl flex items-center gap-3">
            <Play className="w-6 h-6 text-purple-400" />
            Video Tutorials
          </h3>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tutorials.map((tutorial, index) => {
            const isPurple = tutorial.color === 'purple';
            
            return (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-slate-900/80 ${
                  isPurple ? 'to-purple-900/40 border-purple-500/20 hover:border-purple-500/50' : 'to-cyan-900/40 border-cyan-500/20 hover:border-cyan-500/50'
                } backdrop-blur-xl border rounded-xl p-6 hover:scale-105 transition-all cursor-pointer animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className={`w-full h-32 bg-gradient-to-br ${
                    isPurple ? 'from-purple-600/20 to-purple-800/40' : 'from-cyan-600/20 to-cyan-800/40'
                  } rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      isPurple ? 'from-purple-500 to-purple-600' : 'from-cyan-500 to-cyan-600'
                    } rounded-full flex items-center justify-center shadow-lg`}>
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <span className={`absolute top-2 right-2 ${
                    isPurple ? 'bg-purple-500/80' : 'bg-cyan-500/80'
                  } text-white text-xs px-2 py-1 rounded`}>
                    {tutorial.duration}
                  </span>
                </div>
                
                <h4 className="text-white mb-2 text-sm">{tutorial.title}</h4>
                
                <div className="flex items-center justify-between text-xs">
                  <span className={`${
                    isPurple ? 'bg-purple-500/20 text-purple-400' : 'bg-cyan-500/20 text-cyan-400'
                  } px-2 py-1 rounded`}>
                    {tutorial.level}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {tutorial.views}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Integrations Section */}
      <div className="mb-16">
        <h3 className="text-white text-2xl mb-6 flex items-center gap-3">
          <Globe className="w-6 h-6 text-cyan-400" />
          Blockchain Integration
        </h3>
        
        <div className="max-w-md mx-auto">
          {integrations.map((integration, index) => {
            const isLive = integration.status === 'Live';
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-cyan-900/40 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl p-8 hover:scale-105 hover:border-cyan-500/50 transition-all cursor-pointer text-center animate-slide-in-up hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Solana Logo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-2xl shadow-cyan-500/30 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1">
                  <img 
                    src={solanaLogo}
                    alt="Solana Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <h4 className="text-white text-2xl mb-3">{integration.name}</h4>
                
                <span className={`inline-flex items-center gap-2 text-sm ${
                  isLive ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                } px-4 py-2 rounded-full`}>
                  {isLive && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>}
                  {integration.status}
                </span>
                
                <p className="text-gray-400 text-sm mt-4">
                  Built on Solana's high-performance blockchain for lightning-fast private transactions
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/50 via-slate-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 text-center animate-border-glow">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-bounce-gentle" />
          
          <h3 className="text-white text-3xl sm:text-4xl mb-4">
            Start Building <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Today</span>
          </h3>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the future of private, secure transactions on KryptonX Network
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 animate-background-pan">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get API Key
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/50 inline-flex items-center gap-2 hover:scale-105">
              <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Examples
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Full documentation included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}