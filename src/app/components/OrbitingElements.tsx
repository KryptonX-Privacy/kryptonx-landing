import { Shield, Lock, Key, Zap } from 'lucide-react';

export function OrbitingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Orbit 1 - Purple icons */}
        <div className="absolute animate-orbit" style={{ animationDuration: '15s', willChange: 'transform' }}>
          <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30 animate-pulse-glow">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
        </div>
        
        {/* Orbit 2 - Cyan icons */}
        <div className="absolute animate-orbit" style={{ animationDuration: '20s', animationDelay: '-5s', willChange: 'transform' }}>
          <div className="bg-cyan-500/20 p-3 rounded-xl border border-cyan-500/30 animate-pulse-glow">
            <Lock className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
        
        {/* Orbit 3 - Purple icons */}
        <div className="absolute animate-orbit" style={{ animationDuration: '18s', animationDelay: '-10s', willChange: 'transform' }}>
          <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30 animate-pulse-glow">
            <Key className="w-6 h-6 text-purple-400" />
          </div>
        </div>
        
        {/* Orbit 4 - Cyan icons */}
        <div className="absolute animate-orbit" style={{ animationDuration: '22s', animationDelay: '-15s', willChange: 'transform' }}>
          <div className="bg-cyan-500/20 p-3 rounded-xl border border-cyan-500/30 animate-pulse-glow">
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
}