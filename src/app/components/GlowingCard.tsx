import { ReactNode } from 'react';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({ 
  children, 
  className = '', 
  glowColor = 'purple' 
}: GlowingCardProps) {
  const glowColors = {
    purple: 'hover:shadow-purple-500/50',
    cyan: 'hover:shadow-cyan-500/50',
    pink: 'hover:shadow-pink-500/50',
    green: 'hover:shadow-green-500/50',
  };

  return (
    <div 
      className={`
        relative group
        bg-slate-900/50 backdrop-blur-xl 
        border border-purple-500/20 
        rounded-2xl p-8 
        transition-all duration-500 
        hover:scale-105 hover:border-${glowColor}-500/50
        hover:shadow-2xl ${glowColors[glowColor as keyof typeof glowColors]}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
