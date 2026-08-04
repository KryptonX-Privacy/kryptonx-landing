import { Shield, Lock, Key, Zap, Eye, FileKey, Network, Database, Server, Globe, Cpu } from 'lucide-react';

export function AnimatedBackground() {
  const icons = [
    { Icon: Shield, position: 'top-20 left-10', delay: '0s', color: 'text-purple-400' },
    { Icon: Lock, position: 'top-40 right-20', delay: '1s', color: 'text-cyan-400' },
    { Icon: Key, position: 'top-60 left-1/4', delay: '2s', color: 'text-pink-400' },
    { Icon: Zap, position: 'bottom-40 right-1/4', delay: '0.5s', color: 'text-purple-400' },
    { Icon: Eye, position: 'bottom-60 left-20', delay: '1.5s', color: 'text-cyan-400' },
    { Icon: FileKey, position: 'top-1/3 right-10', delay: '2.5s', color: 'text-purple-400' },
    { Icon: Network, position: 'bottom-1/3 left-1/3', delay: '0.8s', color: 'text-cyan-400' },
    { Icon: Database, position: 'top-2/3 right-1/3', delay: '1.8s', color: 'text-pink-400' },
    { Icon: Server, position: 'top-1/4 left-1/2', delay: '2.2s', color: 'text-purple-400' },
    { Icon: Globe, position: 'bottom-1/4 right-1/2', delay: '1.2s', color: 'text-cyan-400' },
    { Icon: Cpu, position: 'top-1/2 left-10', delay: '2.8s', color: 'text-purple-400' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map(({ Icon, position, delay, color }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-icon-bounce`}
          style={{ animationDelay: delay }}
        >
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      ))}
    </div>
  );
}
