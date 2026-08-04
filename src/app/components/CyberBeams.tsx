export function CyberBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical beams */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-beam-pulse" style={{ animationDelay: '0s', willChange: 'opacity' }}></div>
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-beam-pulse" style={{ animationDelay: '0.5s', willChange: 'opacity' }}></div>
      <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-beam-pulse" style={{ animationDelay: '1s', willChange: 'opacity' }}></div>
      
      {/* Horizontal beams */}
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-beam-pulse" style={{ animationDelay: '0.3s', willChange: 'opacity' }}></div>
      <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-beam-pulse" style={{ animationDelay: '0.8s', willChange: 'opacity' }}></div>
      
      {/* Scan lines */}
      <div className="absolute inset-0">
        <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan-line" style={{ willChange: 'transform' }}></div>
      </div>
    </div>
  );
}