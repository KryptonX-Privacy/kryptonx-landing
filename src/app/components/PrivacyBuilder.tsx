import { InteractiveBuilder } from './InteractiveBuilder';
import { Shield, Lock, Eye, ArrowRight, Send, Key, Check, Zap } from 'lucide-react';

export function PrivacyBuilder() {
  const handle3DCircuit = () => {
    window.open('https://circuit.kryptonx.xyz/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl sm:text-5xl mb-4">
          Visual Circuit <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Builder</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Design custom zero-knowledge circuits with drag & drop - Build privacy-preserving proofs visually
        </p>
      </div>

      {/* Featured 3D Circuit Builder Card */}
      <div className="mb-12 relative group">
        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500"></div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-purple-500/30 animate-border-flow"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-purple-300 text-sm font-medium">Featured Experience</span>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    3D Circuit Builder
                  </span>
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Experience our advanced 3D circuit visualization platform. Build complex zero-knowledge proofs with an immersive 3D interface that brings your privacy circuits to life.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Interactive 3D node-based editor</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>Real-time circuit visualization</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Advanced ZK-SNARK circuit design</span>
                  </div>
                </div>

                <button
                  onClick={handle3DCircuit}
                  className="group/btn relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Launch 3D Circuit Builder
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>

              {/* Right - Visual Preview */}
              <div className="relative">
                {/* Background Gradient Orbs */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

                {/* Preview Card */}
                <div className="relative bg-slate-950/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  {/* 3D Circuit Preview Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Animated Grid */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                        animation: 'grid-move 20s linear infinite'
                      }}></div>
                    </div>

                    {/* 3D Icon Representation */}
                    <div className="relative z-10">
                      <div className="relative">
                        {/* Orbiting Nodes */}
                        <div className="absolute -inset-12">
                          <div className="w-full h-full relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-bounce-slow"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-bounce-slow" style={{animationDelay: '1.5s'}}></div>
                          </div>
                        </div>

                        {/* Center Circuit Icon */}
                        <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-8 rounded-2xl shadow-2xl shadow-purple-500/50">
                          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float-medium ${3 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Info Label */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Platform • Full 3D Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Builder */}
      <InteractiveBuilder />

      {/* How It Works */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
            <Lock className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-white text-xl mb-3">1. Add Components</h3>
          <p className="text-gray-400 text-sm">
            Click components from the sidebar to add inputs, operations, and outputs to your circuit.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
          <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">
            <ArrowRight className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-white text-xl mb-3">2. Connect Nodes</h3>
          <p className="text-gray-400 text-sm">
            Drag nodes to position them and create logical connections between components.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
            <Check className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-white text-xl mb-3">3. Generate Code</h3>
          <p className="text-gray-400 text-sm">
            Export your circuit as Circom code, ready to compile and deploy on KryptonX.
          </p>
        </div>
      </div>

      {/* Privacy Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg flex-shrink-0">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Zero-Knowledge Proofs</h4>
              <p className="text-gray-400 text-sm">
                Create circuits that prove statements without revealing the underlying data using ZK-SNARK technology.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-lg flex-shrink-0">
              <Key className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Privacy-Preserving Logic</h4>
              <p className="text-gray-400 text-sm">
                Build complex privacy logic with range checks, comparisons, and cryptographic operations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/20 p-3 rounded-lg flex-shrink-0">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Instant Compilation</h4>
              <p className="text-gray-400 text-sm">
                Generate optimized Circom code instantly and compile circuits in seconds for rapid development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg flex-shrink-0">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Production Ready</h4>
              <p className="text-gray-400 text-sm">
                Export battle-tested circuits that are audited and optimized for gas efficiency and security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Example Use Cases */}
      <div className="mt-12 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
        <h3 className="text-white text-2xl mb-6 text-center">Example Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Age Verification</h4>
            <p className="text-gray-400 text-sm">Prove you're over 18 without revealing your birth date</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Income Range</h4>
            <p className="text-gray-400 text-sm">Prove income is within a range without exact amount</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">KYC Compliance</h4>
            <p className="text-gray-400 text-sm">Verify identity attributes without exposing PII</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Credit Score</h4>
            <p className="text-gray-400 text-sm">Prove creditworthiness without revealing score</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Voting Systems</h4>
            <p className="text-gray-400 text-sm">Anonymous voting with verifiable eligibility</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <h4 className="text-white mb-2">Token Gating</h4>
            <p className="text-gray-400 text-sm">Prove token ownership without wallet exposure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
