import { motion } from 'motion/react';
import { Boxes } from 'lucide-react';

interface NavItemProps {
  name: string;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  index: number;
}

export function AnimatedNavItem({ name, href, onClick, index }: NavItemProps) {
  const isExternal = href.startsWith('http');

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="relative text-gray-300 transition-all duration-300 group cursor-pointer font-medium"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ scale: 1.05, color: '#10b981' }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{name}</span>
      
      {/* Animated underline */}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 shadow-lg shadow-emerald-400/50"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      
      {/* Glow effect */}
      <motion.span
        className="absolute inset-0 rounded-lg blur-xl"
        initial={{ opacity: 0, background: 'transparent' }}
        whileHover={{
          opacity: 1,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating dot indicator */}
      <motion.span
        className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        animate={{
          boxShadow: [
            '0 0 0px rgba(16, 185, 129, 0)',
            '0 0 10px rgba(16, 185, 129, 0.8)',
            '0 0 0px rgba(16, 185, 129, 0)'
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}
      />
    </motion.a>
  );
}

interface Animated3DCircuitButtonProps {
  index: number;
  href: string;
}

export function Animated3DCircuitButton({ index, href }: Animated3DCircuitButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-5 py-2 rounded-lg font-medium overflow-hidden shadow-lg shadow-purple-500/20 cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 40px rgba(168, 85, 247, 0.45)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        animate={{ rotate: [0, 0] }}
      >
        <Boxes className="w-4 h-4" />
        3D Circuit
      </motion.span>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
      />

      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 20px rgba(168, 85, 247, 0.3)',
            '0 0 40px rgba(34, 211, 238, 0.6)',
            '0 0 20px rgba(168, 85, 247, 0.3)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.a>
  );
}

interface AnimatedLaunchButtonProps {
  index: number;
  onClick?: () => void;
}

export function AnimatedLaunchButton({ index, onClick }: AnimatedLaunchButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium overflow-hidden shadow-lg shadow-emerald-500/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span className="relative z-10">Try Demo</motion.span>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      
      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0"
        animate={{
          boxShadow: [
            '0 0 20px rgba(16, 185, 129, 0.3)',
            '0 0 40px rgba(16, 185, 129, 0.6)',
            '0 0 20px rgba(16, 185, 129, 0.3)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.button>
  );
}