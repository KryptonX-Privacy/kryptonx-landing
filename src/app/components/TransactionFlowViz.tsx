import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, ShieldCheck, Zap } from 'lucide-react';

// ── KryptonX actual transaction flow nodes ────────────────────────────────────
// Sender → ZK-SNARK → 3×Tor Relay → Encrypted Mempool → Stealth Address
const NODES = [
  { id: 'sender',  fx: 0.04, fy: 0.50, r: 24, color: '#10b981', label: 'Sender',         sub: 'Your Wallet',         type: 'endpoint' },
  { id: 'zk',      fx: 0.26, fy: 0.50, r: 22, color: '#10b981', label: 'ZK-SNARK',        sub: 'Groth16 / BN254',     type: 'proof'    },
  { id: 'tor0',    fx: 0.50, fy: 0.16, r: 18, color: '#14b8a6', label: 'Tor Relay α',     sub: 'Hop 1 / Onion',       type: 'relay'    },
  { id: 'tor1',    fx: 0.50, fy: 0.50, r: 18, color: '#14b8a6', label: 'Tor Relay β',     sub: 'Hop 2 / Onion',       type: 'relay'    },
  { id: 'tor2',    fx: 0.50, fy: 0.84, r: 18, color: '#14b8a6', label: 'Tor Relay γ',     sub: 'Hop 3 / Onion',       type: 'relay'    },
  { id: 'mempool', fx: 0.74, fy: 0.50, r: 22, color: '#818cf8', label: 'Enc. Mempool',    sub: 'Tx hidden pre-confirm', type: 'mempool' },
  { id: 'recv',    fx: 0.96, fy: 0.50, r: 24, color: '#818cf8', label: 'Stealth Addr',    sub: 'Ring Sig 1-of-5',     type: 'endpoint' },
];

// Particle travels: sender→zk (ph0), zk→tor[i] (ph1), tor[i]→mempool (ph2), mempool→recv (ph3)
const STATUS = [
  { badge: 'ZK',  color: '#10b981', text: 'Groth16 ZK-SNARK proof generated on BN254 curve' },
  { badge: 'RS',  color: '#10b981', text: 'Ring signature applied — 1-of-5 anonymity set'  },
  { badge: 'TOR', color: '#14b8a6', text: 'Onion-routing via Tor (3-hop IP obfuscation)'   },
  { badge: 'MEM', color: '#818cf8', text: 'Encrypted mempool: tx hidden pre-confirmation'  },
  { badge: 'SOL', color: '#818cf8', text: 'Solana PoS validator confirms — stealth address resolved' },
  { badge: 'BP',  color: '#10b981', text: 'Bulletproof range proof: amount verified without reveal'  },
];

interface Particle {
  phase:    0 | 1 | 2 | 3;
  torIdx:   number;
  t:        number;
  speed:    number;
  trail:    Array<{ x: number; y: number }>;
  color:    string;
}

function cubicPt(
  p0: {x:number;y:number}, cp1: {x:number;y:number},
  cp2: {x:number;y:number}, p1: {x:number;y:number}, t: number
) {
  const u = 1 - t;
  return {
    x: u*u*u*p0.x + 3*u*u*t*cp1.x + 3*u*t*t*cp2.x + t*t*t*p1.x,
    y: u*u*u*p0.y + 3*u*u*t*cp1.y + 3*u*t*t*cp2.y + t*t*t*p1.y,
  };
}

export function TransactionFlowViz() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const rafRef      = useRef(0);
  const particleRef = useRef<Particle[]>([]);
  const dashRef     = useRef(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [txCount,   setTxCount]   = useState(1247);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx(i => (i + 1) % STATUS.length);
      setTxCount(n => n + Math.floor(Math.random() * 4 + 1));
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function setup() {
      const W = canvas!.parentElement!.clientWidth;
      const H = 320;
      canvas!.width  = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width  = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.scale(dpr, dpr);
    }
    setup();

    const W = () => canvas!.clientWidth;
    const H = () => canvas!.clientHeight;
    const npos = (i: number) => ({ x: NODES[i].fx * W(), y: NODES[i].fy * H() });

    // Build bezier control points for a path between two node positions
    function arc(a: {x:number;y:number}, b: {x:number;y:number}) {
      const mx = (a.x + b.x) / 2;
      return { p0: a, cp1: { x: mx, y: a.y }, cp2: { x: mx, y: b.y }, p1: b };
    }

    function legCPs(p: Particle): ReturnType<typeof arc> {
      if (p.phase === 0) return arc(npos(0), npos(1));                 // sender → zk
      if (p.phase === 1) return arc(npos(1), npos(2 + p.torIdx));      // zk → tor[i]
      if (p.phase === 2) return arc(npos(2 + p.torIdx), npos(5));      // tor[i] → mempool
      return arc(npos(5), npos(6));                                     // mempool → recv
    }

    function particlePt(p: Particle) {
      const { p0, cp1, cp2, p1 } = legCPs(p);
      return cubicPt(p0, cp1, cp2, p1, p.t);
    }

    function spawn() {
      const colors = ['#10b981', '#34d399', '#6ee7b7'];
      particleRef.current.push({
        phase: 0, torIdx: Math.floor(Math.random() * 3),
        t: 0, speed: 0.30 + Math.random() * 0.18,
        trail: [],
        color: colors[Math.floor(Math.random() * 3)],
      });
    }

    // Seed some particles mid-journey
    for (let i = 0; i < 10; i++) {
      const ph = [0,1,2,3][Math.floor(Math.random()*4)] as 0|1|2|3;
      particleRef.current.push({
        phase: ph, torIdx: Math.floor(Math.random()*3),
        t: Math.random(), speed: 0.30 + Math.random() * 0.18,
        trail: [],
        color: ['#10b981','#34d399','#6ee7b7'][Math.floor(Math.random()*3)],
      });
    }

    function hexA(a: number) {
      return Math.floor(Math.max(0,Math.min(1,a))*255).toString(16).padStart(2,'0');
    }

    function drawArc(a: {x:number;y:number}, b: {x:number;y:number}, alpha: number, width: number) {
      const mx = (a.x+b.x)/2;
      ctx!.beginPath();
      ctx!.moveTo(a.x, a.y);
      ctx!.bezierCurveTo(mx, a.y, mx, b.y, b.x, b.y);
      ctx!.globalAlpha = alpha;
      ctx!.lineWidth   = width;
      ctx!.stroke();
      ctx!.globalAlpha = 1;
    }

    function drawNode(ni: number) {
      const nd = NODES[ni];
      const { x, y } = npos(ni);
      const R = nd.r;

      // Outer glow
      const og = ctx!.createRadialGradient(x, y, 0, x, y, R * 3.2);
      og.addColorStop(0,   nd.color + '35');
      og.addColorStop(1,   nd.color + '00');
      ctx!.fillStyle = og;
      ctx!.beginPath(); ctx!.arc(x, y, R * 3.2, 0, Math.PI*2); ctx!.fill();

      // Body fill
      const fill = ctx!.createRadialGradient(x-R*.25, y-R*.25, 0, x, y, R);
      fill.addColorStop(0,  nd.color + '45');
      fill.addColorStop(1,  nd.color + '15');
      ctx!.fillStyle = fill;
      ctx!.beginPath(); ctx!.arc(x, y, R, 0, Math.PI*2); ctx!.fill();

      // Ring
      ctx!.beginPath(); ctx!.arc(x, y, R, 0, Math.PI*2);
      ctx!.strokeStyle = nd.color + 'cc';
      ctx!.lineWidth = 1.5; ctx!.stroke();

      // Inner dot
      ctx!.beginPath(); ctx!.arc(x, y, R*.28, 0, Math.PI*2);
      ctx!.fillStyle = nd.color + 'ee'; ctx!.fill();

      // Label
      ctx!.textAlign  = 'center';
      ctx!.fillStyle  = '#ffffff';
      ctx!.font       = `600 10px "Inter",system-ui,sans-serif`;
      ctx!.fillText(nd.label, x, y + R + 15);
      ctx!.fillStyle  = nd.color + 'bb';
      ctx!.font       = `500 8.5px "JetBrains Mono",monospace`;
      ctx!.fillText(nd.sub, x, y + R + 26);
    }

    let lastTs = 0, spawnT = 0;

    function frame(ts: number) {
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs   = ts;
      dashRef.current -= dt * 25;
      spawnT  -= dt;

      const cW = W(), cH = H();
      ctx!.clearRect(0, 0, cW, cH);

      // ── Draw all path segments ──
      // sender→zk, zk→tor×3, tor×3→mempool, mempool→recv
      const segs: Array<[number,number]> = [
        [0,1],
        [1,2],[1,3],[1,4],
        [2,5],[3,5],[4,5],
        [5,6],
      ];

      ctx!.save();
      // Glow pass
      ctx!.strokeStyle = '#10b981';
      for (const [a,b] of segs) {
        const ca = a <= 1 ? '#10b981' : a <= 4 ? '#14b8a6' : '#818cf8';
        ctx!.strokeStyle = ca;
        drawArc(npos(a), npos(b), 0.07, 9);
      }
      // Dashed animated pass
      ctx!.setLineDash([4, 8]);
      ctx!.lineDashOffset = dashRef.current;
      for (const [a,b] of segs) {
        const ca = a <= 1 ? '#10b981' : a <= 4 ? '#14b8a6' : '#818cf8';
        ctx!.strokeStyle = ca;
        drawArc(npos(a), npos(b), 0.30, 1.3);
      }
      ctx!.setLineDash([]);
      ctx!.restore();

      // ── Lock icons at midpoints ──
      ctx!.font = '10px serif';
      ctx!.textBaseline = 'middle';
      ctx!.textAlign = 'center';
      for (const [a,b] of segs) {
        const pa = npos(a), pb = npos(b);
        const mx = (pa.x+pb.x)/2;
        const my = (pa.y*(pa.y===pb.y ? 1 : 1) + pb.y) / 2;
        const midPt = cubicPt(pa, {x:mx,y:pa.y}, {x:mx,y:pb.y}, pb, 0.5);
        ctx!.fillStyle = a<=1 ? '#10b981cc' : a<=4 ? '#14b8a6cc' : '#818cf8cc';
        ctx!.fillText('🔒', midPt.x, midPt.y - 11);
      }
      ctx!.textBaseline = 'alphabetic';

      // ── Update & draw particles ──
      const dead: number[] = [];
      for (let i = 0; i < particleRef.current.length; i++) {
        const p = particleRef.current[i];
        p.t += dt * p.speed;
        if (p.t >= 1) {
          if (p.phase < 3) {
            p.phase = (p.phase + 1) as 0|1|2|3;
            p.t = 0; p.trail = [];
          } else {
            dead.push(i); continue;
          }
        }
        const pos = particlePt(p);
        p.trail.push(pos);
        if (p.trail.length > 14) p.trail.shift();

        // Trail
        for (let ti = 1; ti < p.trail.length; ti++) {
          const frac = ti / p.trail.length;
          ctx!.beginPath();
          ctx!.moveTo(p.trail[ti-1].x, p.trail[ti-1].y);
          ctx!.lineTo(p.trail[ti].x,   p.trail[ti].y);
          ctx!.strokeStyle = p.color + hexA(frac*frac*0.9);
          ctx!.lineWidth   = 1.2 + frac * 2.2;
          ctx!.stroke();
        }

        // Glow
        const grd = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 11);
        grd.addColorStop(0, p.color + 'ff');
        grd.addColorStop(0.5, p.color + '77');
        grd.addColorStop(1, p.color + '00');
        ctx!.fillStyle = grd;
        ctx!.beginPath(); ctx!.arc(pos.x, pos.y, 11, 0, Math.PI*2); ctx!.fill();

        // Core
        ctx!.beginPath(); ctx!.arc(pos.x, pos.y, 2.8, 0, Math.PI*2);
        ctx!.fillStyle = '#fff'; ctx!.fill();
      }
      for (let i = dead.length-1; i >= 0; i--) particleRef.current.splice(dead[i], 1);

      // Spawn
      if (spawnT <= 0 && particleRef.current.length < 16) {
        spawn(); spawnT = 0.30 + Math.random() * 0.45;
      }

      // Draw nodes on top
      for (let i = 0; i < NODES.length; i++) drawNode(i);

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const s = STATUS[statusIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl overflow-hidden border border-emerald-500/20 mt-8"
      style={{
        background: 'linear-gradient(135deg,#020d06 0%,#040f09 60%,#030a08 100%)',
        boxShadow: '0 0 40px rgba(16,185,129,0.08)',
      }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Privacy in Action</p>
            <p className="text-gray-500 text-[10px]">Live KryptonX transaction routing</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono">
            <Zap className="w-3 h-3 text-teal-400" />
            <span className="text-teal-400">{txCount.toLocaleString()}</span>
            <span className="text-gray-600">tx routed</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/25 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-[10px] font-mono">LIVE</span>
          </div>
        </div>
      </div>

      {/* ── Canvas ── */}
      <div className="px-2 py-1">
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%' }} />
      </div>

      {/* ── Tech legend ── */}
      <div className="flex flex-wrap items-center justify-center gap-5 px-6 py-3 border-t border-emerald-500/10">
        {[
          { color: 'bg-emerald-400', label: 'ZK-SNARK / Ring Sig' },
          { color: 'bg-teal-400',    label: 'Tor Onion Relay'     },
          { color: 'bg-indigo-400',  label: 'Enc. Mempool / Stealth Addr' },
          { color: 'bg-emerald-300', label: 'Encrypted Packet'    },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${l.color} flex-shrink-0`} />
            <span className="text-gray-500 text-[10px]">{l.label}</span>
          </div>
        ))}
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center gap-3 px-6 py-3 border-t border-emerald-500/10 bg-emerald-950/20">
        <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
        <AnimatePresence mode="wait">
          <motion.div
            key={statusIdx}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2"
          >
            <span
              className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded"
              style={{ background: s.color + '22', color: s.color, border: `1px solid ${s.color}44` }}
            >
              {s.badge}
            </span>
            <span className="text-emerald-400 text-[11px] font-mono">{s.text}</span>
          </motion.div>
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-4 flex-shrink-0">
          {[
            { label: 'Privacy',  value: '100%'  },
            { label: 'Fee',      value: '$0.001' },
            { label: 'Finality', value: '400ms'  },
          ].map(st => (
            <div key={st.label} className="flex items-center gap-1.5">
              <span className="text-gray-600 text-[9px] uppercase tracking-widest">{st.label}</span>
              <span className="text-emerald-400 text-[10px] font-bold font-mono">{st.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
