import { useEffect, useState } from 'react';

interface Drop {
  id: number;
  left: number;
  delay: number;
  duration: number;
  char: string;
}

export function MatrixRain() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const characters = '01';
    const newDrops: Drop[] = [];

    for (let i = 0; i < 15; i++) {
      newDrops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 2,
        char: characters[Math.floor(Math.random() * characters.length)],
      });
    }

    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-cyan-400 text-sm font-mono animate-matrix-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
}
