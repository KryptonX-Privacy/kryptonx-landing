import { useState } from 'react';
import { Copy, Check, ExternalLink, Rocket, BarChart3, FileCode } from 'lucide-react';

const CA = 'TBA'; // replace with the official contract address at launch
const PUMP_URL = 'https://pump.fun';
const DEX_URL = 'https://dexscreener.com';

export function TokenInfoBar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (CA === 'TBA') return;
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 mb-10 w-full max-w-2xl mx-auto">

      {/* Pump.fun */}
      <a
        href={PUMP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-900/70 border border-white/8 hover:border-emerald-500/30 transition-all group flex-1"
      >
        <div className="flex items-center gap-2.5">
          <Rocket className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
          <div className="text-left">
            <div className="text-[10px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Pump.fun</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-white font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-gray-700 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
      </a>

      {/* Contract Address */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-900/70 border border-white/8 flex-[2]">
        <div className="flex items-center gap-2.5 min-w-0">
          <FileCode className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">Contract Address</div>
            {CA === 'TBA' ? (
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <span className="text-sm text-gray-500 font-mono">To Be Announced</span>
              </div>
            ) : (
              <span className="text-sm text-emerald-400 font-mono truncate block">{CA}</span>
            )}
          </div>
        </div>
        <button
          onClick={handleCopy}
          disabled={CA === 'TBA'}
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 hover:bg-slate-700 border border-white/5"
          title={CA === 'TBA' ? 'CA not yet available' : 'Copy CA'}
        >
          {copied
            ? <Check className="w-3.5 h-3.5 text-emerald-400" />
            : <Copy className="w-3.5 h-3.5 text-gray-400" />
          }
        </button>
      </div>

      {/* DexScreener */}
      <a
        href={DEX_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-900/70 border border-white/8 hover:border-emerald-500/30 transition-all group flex-1"
      >
        <div className="flex items-center gap-2.5">
          <BarChart3 className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
          <div className="text-left">
            <div className="text-[10px] text-gray-600 uppercase tracking-widest leading-none mb-0.5">DexScreener</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-white font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-gray-700 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
      </a>

    </div>
  );
}
