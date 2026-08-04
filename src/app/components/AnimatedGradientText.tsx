import { ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function AnimatedGradientText({ 
  children, 
  className = '', 
  gradient = 'from-purple-400 via-cyan-400 to-pink-400' 
}: AnimatedGradientTextProps) {
  return (
    <span 
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-gradient-shift ${className}`}
    >
      {children}
    </span>
  );
}
