import { useState, useEffect, useRef, useCallback } from 'react';
import { Lock, Eye, FileKey, Database, Network, Key, RefreshCw, CheckCircle, Shield, Zap, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const INTERVAL = 6000;

// ── ZK Proof Demo (auto-run) ───────────────────────────────────
function ZKProofDemo({ active }: { active: boolean }) {
  const [step, setStep] = useState(-1);
  const steps = [
    { label: 'Private Input', value: 'amount=42.00 · sender=0xAB…', icon: '🔒' },
    { label: 'Circuit Compiled', value: 'R1CS constraints: 12,847', icon: '⚙️' },
    { label: 'Proof Generated', value: 'π=(A,B,C) · 3.2ms elapsed', icon: '⚡' },
    { label: 'On-chain Verified', value: '✓ Valid · 0 bytes leaked', icon: '✅' },
  ];

  useEffect(() => {
    if (!active) { setStep(-1); return; }
    let cancelled = false;
    const run = async () => {
      setStep(-1);
      for (let i = 0; i < steps.length; i++) {
        await new Promise(r => setTimeout(r, 700));
        if (cancelled) return;
        setStep(i);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [active]);

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex-1 bg-black/50 rounded-2xl border border-emerald-500/10 p-4 font-mono text-xs overflow-hidden">
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-gray-600 text-[10px]">zk-prover.sh</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-600 text-[9px]">LIVE</span>
          </div>
        </div>
        <div className="space-y-2.5">
          {steps.map((s, i) => (
            <motion.div key={i} initial={false} animate={{ opacity: step >= i ? 1 : 0.15 }} transition={{ duration: 0.4 }} className="flex items-start gap-3">
              <span className="text-gray-600 select-none mt-0.5">{'>'}</span>
              <div className="flex-1">
                <div className={`flex items-center gap-2 ${step >= i ? 'text-emerald-400' : 'text-gray-700'}`}>
                  <span>{s.icon}</span>
                  <span className="font-medium">{s.label}</span>
                  {step >= i && <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="flex-1 h-px bg-emerald-500/30 origin-left" />}
                </div>
                {step >= i && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-1 text-gray-500 pl-6 text-[10px]">
                    {s.value}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
          <motion.div animate={{ opacity: step < steps.length - 1 ? [0.3, 1, 0.3] : 0 }} transition={{ repeat: Infinity, duration: 0.9 }} className="flex gap-2 text-teal-400 pl-4">
            <span className="animate-pulse">_</span>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[['Proof Time', '<4ms'], ['Security', '256-bit'], ['Leaked', '0 bytes']].map(([k, v]) => (
          <div key={k} className="bg-slate-900/60 border border-emerald-500/10 rounded-xl p-2.5 text-center">
            <p className="text-emerald-400 font-bold text-sm">{v}</p>
            <p className="text-gray-600 text-[9px] mt-0.5">{k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Stealth Demo (auto-run) ─────────────────────────────────────
function StealthDemo({ active }: { active: boolean }) {
  const [addresses, setAddresses] = useState(['8xKr…mQ3p', '4fNj…vB9c', 'Lw7T…kX2s']);

  useEffect(() => {
    if (!active) return;
    const rand = () => Math.random().toString(36).slice(2, 6).toUpperCase();
    const t = setInterval(() => {
      setAddresses(prev => [`${rand()}…${rand()}`, ...prev].slice(0, 4));
    }, 1800);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex-1 space-y-2 overflow-hidden">
        <AnimatePresence initial={false}>
          {addresses.map((addr, i) => (
            <motion.div key={addr}
              initial={{ opacity: 0, x: -24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${i === 0 ? 'bg-teal-500/10 border-teal-500/30 shadow-lg shadow-teal-500/5' : 'bg-slate-900/40 border-slate-800/60'}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${i === 0 ? 'bg-teal-500/20' : 'bg-slate-800/80'}`}>
                {i === 0 ? '🆕' : '✓'}
              </div>
              <code className={`flex-1 text-xs font-mono tracking-wide ${i === 0 ? 'text-teal-300' : 'text-gray-600'}`}>{addr}</code>
              {i === 0
                ? <span className="text-[9px] font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-2 py-0.5">FRESH</span>
                : <span className="text-[9px] text-gray-700">used</span>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="bg-slate-900/50 border border-teal-500/10 rounded-xl p-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
          <Eye className="w-4 h-4 text-teal-400" />
        </div>
        <div>
          <p className="text-white text-xs font-semibold">Zero Linkability</p>
          <p className="text-gray-600 text-[10px]">Every transaction = brand new address</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-500 text-[9px]">AUTO</span>
        </div>
      </div>
    </div>
  );
}

// ── Ring Demo (auto-run) ────────────────────────────────────────
function RingDemo({ active }: { active: boolean }) {
  const [highlight, setHighlight] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const signers = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank'];
  const trueIdx = 2;
  const angle = (i: number) => (i / signers.length) * 2 * Math.PI - Math.PI / 2;

  useEffect(() => {
    if (!active) { setHighlight(null); setDone(false); return; }
    let cancelled = false;
    const run = async () => {
      setDone(false); setHighlight(null);
      for (let i = 0; i < signers.length * 2 + 4; i++) {
        await new Promise(r => setTimeout(r, 110));
        if (cancelled) return;
        setHighlight(Math.floor(Math.random() * signers.length));
      }
      if (!cancelled) { setHighlight(null); setDone(true); }
    };
    run();
    return () => { cancelled = true; };
  }, [active]);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-52 h-52">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 208 208">
          <circle cx="104" cy="104" r="78" fill="none" stroke="rgba(20,184,166,0.12)" strokeWidth="1.5" strokeDasharray="5 5"/>
          {signers.map((_, i) => {
            const a = angle(i); const x1 = 104 + 78 * Math.cos(a); const y1 = 104 + 78 * Math.sin(a);
            const nx = 104 + 78 * Math.cos(angle((i + 1) % signers.length));
            const ny = 104 + 78 * Math.sin(angle((i + 1) % signers.length));
            return <line key={i} x1={x1} y1={y1} x2={nx} y2={ny} stroke="rgba(16,185,129,0.08)" strokeWidth="1" />;
          })}
        </svg>
        {signers.map((s, i) => {
          const a = angle(i);
          const x = 104 + 78 * Math.cos(a); const y = 104 + 78 * Math.sin(a);
          const isHot = highlight === i;
          const isTrue = done && i === trueIdx;
          return (
            <motion.div key={s}
              animate={{ scale: isHot ? 1.35 : 1 }}
              style={{ position: 'absolute', left: x - 18, top: y - 18, width: 36, height: 36 }}
              className={`rounded-full flex items-center justify-center text-[11px] font-bold border-2 transition-colors duration-100 ${
                isHot ? 'bg-teal-500 border-teal-300 text-white shadow-lg shadow-teal-500/60' :
                isTrue ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' :
                done ? 'bg-slate-900 border-slate-700 text-gray-600' :
                'bg-slate-900 border-slate-700 text-gray-500'
              }`}>
              {s[0]}
            </motion.div>
          );
        })}
        <div className={`absolute inset-0 m-auto w-16 h-16 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 ${done ? 'border-emerald-500/50 bg-emerald-500/10 shadow-lg shadow-emerald-500/20' : 'border-slate-700 bg-slate-900'}`}>
          <Shield className={`w-6 h-6 ${done ? 'text-emerald-400' : 'text-gray-600'}`} />
          <span className="text-[8px] text-gray-600 mt-0.5">???</span>
        </div>
      </div>
      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-center px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-xs text-emerald-400 font-semibold">True signer indistinguishable</p>
            <p className="text-[10px] text-gray-600 mt-0.5">Cryptographically proven</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Encrypt Demo (auto-run) ─────────────────────────────────────
function EncryptDemo({ active }: { active: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const [amount] = useState(((Math.random() * 9000) + 100).toFixed(2));
  const [cipher] = useState('0x' + Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(''));

  useEffect(() => {
    if (!active) { setRevealed(false); return; }
    const t1 = setTimeout(() => setRevealed(true), 1200);
    const t2 = setTimeout(() => setRevealed(false), 3200);
    const t3 = setTimeout(() => setRevealed(true), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [active]);

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex-1 bg-black/50 rounded-2xl border border-teal-500/10 p-4 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-[10px] uppercase tracking-widest">Blockchain (public)</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-600 text-[9px]">LIVE</span>
          </div>
        </div>
        <code className="block text-amber-400/70 break-all leading-relaxed text-[10px]">{cipher}</code>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-[10px] uppercase tracking-widest">Decrypted (private)</span>
          <Lock className="w-3 h-3 text-gray-700" />
        </div>
        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div key="v" initial={{ opacity: 0, filter: 'blur(6px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(6px)' }} transition={{ duration: 0.5 }}
              className="text-teal-400 font-bold text-xl">
              {amount} <span className="text-teal-600 text-sm font-normal">KRTX</span>
            </motion.div>
          ) : (
            <motion.div key="h" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-gray-700 text-xl tracking-widest select-none">
              ████████████
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-900/50 border border-teal-500/10 rounded-xl p-3 text-center">
          <p className="text-teal-400 font-bold text-xs">AES-256-GCM</p>
          <p className="text-gray-600 text-[9px] mt-0.5">Encryption</p>
        </div>
        <div className="bg-slate-900/50 border border-teal-500/10 rounded-xl p-3 text-center">
          <p className="text-teal-400 font-bold text-xs">Homomorphic</p>
          <p className="text-gray-600 text-[9px] mt-0.5">Still verifiable</p>
        </div>
      </div>
    </div>
  );
}

// ── Tor Demo (auto-run) ─────────────────────────────────────────
function TorDemo({ active }: { active: boolean }) {
  const [hop, setHop] = useState(0);
  const nodes = [
    { label: 'You', sub: '192.168.1.1', icon: '💻' },
    { label: 'Node A', sub: 'Frankfurt 🇩🇪', icon: '🔒' },
    { label: 'Node B', sub: 'Tokyo 🇯🇵', icon: '🔒' },
    { label: 'Node C', sub: 'Brazil 🇧🇷', icon: '🔒' },
    { label: 'Dest', sub: 'Anonymous', icon: '🎯' },
  ];

  useEffect(() => {
    if (!active) { setHop(0); return; }
    let current = 0;
    const t = setInterval(() => {
      current++;
      setHop(current);
      if (current >= nodes.length) clearInterval(t);
    }, 700);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="h-full flex flex-col justify-center gap-2">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-2">
          <motion.div animate={{ scale: hop > i ? 1 : 0.92, opacity: hop > i ? 1 : 0.3 }}
            className={`flex items-center gap-3 flex-1 px-4 py-2.5 rounded-xl border transition-all ${hop > i ? 'bg-emerald-500/10 border-emerald-500/25 shadow-sm shadow-emerald-500/10' : 'bg-slate-900/40 border-slate-800/60'}`}>
            <span className="text-base">{n.icon}</span>
            <div className="min-w-0">
              <p className={`text-xs font-semibold ${hop > i ? 'text-white' : 'text-gray-600'}`}>{n.label}</p>
              <p className={`text-[10px] ${hop > i ? 'text-gray-400' : 'text-gray-700'}`}>
                {i === 0 && hop > 0 ? '••••••••••' : n.sub}
              </p>
            </div>
            {hop > i && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              </motion.div>
            )}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.div animate={{ opacity: hop > i ? 1 : 0.15 }} className="w-5 flex-shrink-0 flex flex-col items-center gap-0.5">
              {[...Array(3)].map((_, j) => (
                <motion.div key={j}
                  animate={{ opacity: hop > i && hop <= i + 1 ? [0.2, 1, 0.2] : hop > i ? 1 : 0.1 }}
                  transition={{ delay: j * 0.15, repeat: hop > i && hop <= i + 1 ? Infinity : 0, duration: 0.5 }}
                  className="w-1 h-1 rounded-full bg-emerald-500" />
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── MultiSig Demo (auto-run) ────────────────────────────────────
function MultiSigDemo({ active }: { active: boolean }) {
  const [sigs, setSigs] = useState([false, false, false]);
  const signers = [
    { name: 'Owner', avatar: '👑' },
    { name: 'Co-Signer', avatar: '🔑' },
    { name: 'Guardian', avatar: '🛡️' },
  ];
  const threshold = 2;
  const count = sigs.filter(Boolean).length;
  const approved = count >= threshold;

  useEffect(() => {
    if (!active) { setSigs([false, false, false]); return; }
    const t1 = setTimeout(() => setSigs([true, false, false]), 700);
    const t2 = setTimeout(() => setSigs([true, true, false]), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active]);

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex-1 space-y-2.5">
        {signers.map((s, i) => (
          <motion.div key={s.name}
            animate={{ borderColor: sigs[i] ? 'rgba(16,185,129,0.4)' : 'rgba(51,65,85,1)' }}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border-2 transition-colors ${sigs[i] ? 'bg-emerald-500/8' : 'bg-slate-900/50'}`}>
            <span className="text-xl">{s.avatar}</span>
            <div className="flex-1">
              <p className={`text-sm font-semibold ${sigs[i] ? 'text-white' : 'text-gray-400'}`}>{s.name}</p>
              <p className={`text-[10px] mt-0.5 ${sigs[i] ? 'text-emerald-400' : 'text-gray-600'}`}>
                {sigs[i] ? 'Signature verified ✓' : 'Awaiting signature…'}
              </p>
            </div>
            <motion.div animate={{ scale: sigs[i] ? 1 : 0.75, opacity: sigs[i] ? 1 : 0.25 }}
              className={`w-7 h-7 rounded-full flex items-center justify-center ${sigs[i] ? 'bg-emerald-500 shadow-lg shadow-emerald-500/40' : 'bg-slate-700 border-2 border-slate-600'}`}>
              {sigs[i] && <span className="text-white text-xs font-bold">✓</span>}
            </motion.div>
          </motion.div>
        ))}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5">
          <div className="flex justify-between text-[11px] mb-2">
            <span className="text-gray-500">Threshold progress</span>
            <span className={`font-bold ${approved ? 'text-emerald-400' : 'text-gray-500'}`}>{count} / {threshold} required</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div animate={{ width: `${Math.min(count / threshold, 1) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-sm shadow-emerald-500/50" />
          </div>
          <AnimatePresence>
            {approved && (
              <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="text-emerald-400 text-[11px] font-semibold mt-2 flex items-center gap-1.5">
                <Zap className="w-3 h-3" />Transaction authorized
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ── Feature config ──────────────────────────────────────────────
const FEATURES = [
  { id: 'zk',       icon: Lock,     label: 'Zero-Knowledge Proofs', tag: 'ZK-SNARK',    desc: 'Validate transactions without revealing any sensitive information. Mathematically provable privacy.',       stats: ['<4ms proof', '256-bit', '0 bytes leaked'],    Demo: ZKProofDemo,  accent: '#10b981', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10', from: 'from-emerald-500', to: 'to-teal-500' },
  { id: 'stealth',  icon: Eye,      label: 'Stealth Addresses',     tag: 'One-Time',    desc: 'Every transaction uses a brand-new unique address. Zero linkability — your wallet history stays hidden.',  stats: ['∞ addresses', '0% linkable', '1-of-1 use'],   Demo: StealthDemo,  accent: '#14b8a6', border: 'border-teal-500/30',    text: 'text-teal-400',    bg: 'bg-teal-500/10',    from: 'from-teal-500',    to: 'to-emerald-500' },
  { id: 'ring',     icon: FileKey,  label: 'Ring Signatures',       tag: 'Privacy Mix', desc: 'Your signature is mixed with decoys — nobody can tell who actually signed the transaction.',              stats: ['16+ ring size', '100% deniable', '0 traceable'], Demo: RingDemo,   accent: '#10b981', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10', from: 'from-emerald-500', to: 'to-teal-500' },
  { id: 'encrypt',  icon: Database, label: 'Encrypted Amounts',     tag: 'Homomorphic', desc: 'Transaction amounts are encrypted on-chain yet remain verifiable by validators. Truly hidden balances.',    stats: ['AES-256-GCM', '0 exposure', 'Still valid'],   Demo: EncryptDemo,  accent: '#14b8a6', border: 'border-teal-500/30',    text: 'text-teal-400',    bg: 'bg-teal-500/10',    from: 'from-teal-500',    to: 'to-emerald-500' },
  { id: 'tor',      icon: Network,  label: 'Tor Integration',       tag: 'IP Shield',   desc: 'Built-in 3-hop Tor routing encrypts your network traffic. Your IP address is never exposed to anyone.',    stats: ['3 relay hops', '0% IP leak', 'Global nodes'], Demo: TorDemo,      accent: '#10b981', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10', from: 'from-emerald-500', to: 'to-teal-500' },
  { id: 'multisig', icon: Key,      label: 'Multi-Signature',       tag: 'M-of-N',      desc: 'Require multiple keys to authorize any transaction — institutional-grade security for every wallet.',       stats: ['Custom M-of-N', 'Custom signers', 'Private'],  Demo: MultiSigDemo, accent: '#14b8a6', border: 'border-teal-500/30',    text: 'text-teal-400',    bg: 'bg-teal-500/10',    from: 'from-teal-500',    to: 'to-emerald-500' },
];

// ── Main ────────────────────────────────────────────────────────
export function CoreFeatures() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause cycle when section is not visible in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const f = FEATURES[active];
  const Demo = f.Demo;

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    const step = 50;
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + (step / INTERVAL) * 100, 100));
    }, step);
    intervalRef.current = setInterval(() => {
      setActive(a => (a + 1) % FEATURES.length);
      setProgress(0);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    if (!paused && inView) startCycle();
    else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [paused, inView, startCycle]);

  const pick = (i: number) => {
    setActive(i);
    setProgress(0);
    if (!paused) startCycle();
  };

  return (
    <div ref={containerRef} className="space-y-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>

      {/* Tabs + pause button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2 flex-1">
          {FEATURES.map((feat, i) => {
            const isActive = active === i;
            return (
              <motion.button key={feat.id} onClick={() => pick(i)} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                  isActive
                    ? `bg-gradient-to-r ${feat.from} ${feat.to} text-white shadow-lg`
                    : 'bg-slate-900/70 border border-slate-800 text-gray-400 hover:border-slate-600 hover:text-gray-200'
                }`}>
                <feat.icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">{feat.label}</span>
                <span className="sm:hidden">{feat.tag}</span>
                {isActive && !paused && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-white/40 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
        <button onClick={() => setPaused(p => !p)}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0 bg-slate-900/50 border border-slate-800 rounded-lg px-3 py-2">
          {paused ? <><Play className="w-3 h-3" /> Auto-play</> : <><Pause className="w-3 h-3" /> Pause</>}
        </button>
      </div>

      {/* Content panel */}
      <AnimatePresence mode="wait">
        <motion.div key={f.id}
          initial={{ opacity: 0, x: 40, filter: 'blur(4px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Info panel (2/5) */}
          <div className={`lg:col-span-2 relative overflow-hidden rounded-2xl border ${f.border} bg-slate-900/70 backdrop-blur-sm p-7 flex flex-col`}>
            <motion.div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none"
              style={{ background: `radial-gradient(circle, ${f.accent}22, transparent 70%)` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.from} ${f.to} flex items-center justify-center shadow-xl flex-shrink-0`}
                  animate={{ boxShadow: [`0 0 20px ${f.accent}30`, `0 0 40px ${f.accent}50`, `0 0 20px ${f.accent}30`] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <f.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <span className={`inline-flex items-center gap-1 ${f.bg} border ${f.border} rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest ${f.text}`}>
                    {f.tag}
                  </span>
                  <h3 className="text-white text-lg font-bold mt-1.5 leading-tight">{f.label}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{f.desc}</p>
              <div className="grid grid-cols-3 gap-2 mb-5">
                {f.stats.map(s => (
                  <div key={s} className={`${f.bg} border ${f.border} rounded-xl p-2.5 text-center`}>
                    <p className={`${f.text} text-xs font-bold leading-tight`}>{s}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {FEATURES.map((_, i) => (
                  <button key={i} onClick={() => pick(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? `w-6 bg-gradient-to-r ${f.from} ${f.to}` : 'w-1.5 bg-slate-700 hover:bg-slate-500'}`} />
                ))}
                <span className="ml-auto text-gray-600 text-[10px] font-mono">{active + 1}/{FEATURES.length}</span>
              </div>
            </div>
          </div>

          {/* Demo panel (3/5) */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-sm flex flex-col" style={{ minHeight: 380 }}>
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/60 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: f.accent }}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${f.text}`}>Live Demo</span>
              </div>
              <motion.div animate={{ rotate: paused ? 0 : 360 }} transition={{ duration: 3, repeat: paused ? 0 : Infinity, ease: 'linear' }}>
                <RefreshCw className="w-3 h-3 text-gray-600" />
              </motion.div>
            </div>
            <div className="flex-1 p-5 overflow-hidden">
              <Demo active={inView && !paused} />
            </div>
            {!paused && (
              <div className="h-0.5 bg-slate-800/80 mx-5 mb-4 rounded-full overflow-hidden flex-shrink-0">
                <motion.div
                  className={`h-full bg-gradient-to-r ${f.from} ${f.to} rounded-full`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
