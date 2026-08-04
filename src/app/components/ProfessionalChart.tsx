import { useState } from 'react';
import { TrendingUp, TrendingDown, Lock } from 'lucide-react';

type Period = '1H' | '4H' | '1D' | '1W' | '1M';

const periods: Period[] = ['1H', '4H', '1D', '1W', '1M'];

export function ProfessionalChart() {
  const [period, setPeriod] = useState<Period>('1D');

  return (
    <div className="relative bg-slate-950/60 border border-emerald-500/10 rounded-2xl overflow-hidden p-4 sm:p-6">
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white text-2xl font-bold">$--.--------</span>
            <span className="flex items-center gap-1 text-sm font-semibold px-2 py-0.5 rounded-full text-gray-500 bg-slate-800/60 border border-slate-700/50">
              <TrendingUp className="w-3.5 h-3.5" />
              --.-- %
            </span>
          </div>
          <p className="text-gray-500 text-xs mt-0.5">$KRTX / SOL — Pump.fun</p>
        </div>

        {/* Period Selector */}
        <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-700/50 rounded-xl p-1">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                period === p
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-slate-800/60'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Labels */}
      <div className="flex items-center justify-between px-1 mb-2">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 text-[10px] uppercase tracking-widest">Range</span>
          <span className="text-gray-600 text-[11px]">H: <span className="text-gray-500">$--.--------</span></span>
          <span className="text-gray-600 text-[11px]">L: <span className="text-gray-500">$--.--------</span></span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400/40"></div>
          <span className="text-gray-600 text-[10px]">Price</span>
          <div className="w-2 h-2 rounded-full bg-teal-400/30 ml-2"></div>
          <span className="text-gray-600 text-[10px]">Volume</span>
        </div>
      </div>

      {/* Chart Area — empty with overlay */}
      <div className="relative h-56 sm:h-72 w-full bg-slate-900/40 border border-slate-800/60 rounded-xl overflow-hidden mb-4">
        {/* Fake grid lines for visual */}
        <div className="absolute inset-0 flex flex-col justify-between py-3 px-2 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-px bg-slate-800/60" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-end justify-around px-4 pb-6 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-5 rounded-sm bg-slate-800/80"
                style={{ height: `${[20, 35, 28, 50, 40, 65, 55, 45][i] * 1.8}px` }}
              />
            </div>
          ))}
        </div>

        {/* Not yet listed overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl px-8 py-6 flex flex-col items-center gap-3 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <Lock className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">Not Yet Listed</p>
              <p className="text-gray-400 text-xs mt-0.5">Data available after launch on Pump.fun</p>
            </div>
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-[11px] font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* X-axis placeholder */}
      <div className="flex justify-between px-2 mb-6">
        {['--:--', '--:--', '--:--', '--:--', '--:--', '--:--'].map((t, i) => (
          <span key={i} className="text-gray-700 text-[10px]">{t}</span>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Price', sub: 'Per token', color: 'emerald' },
          { label: 'Market Cap', sub: 'Total value', color: 'teal' },
          { label: 'Volume 24h', sub: 'Trading volume', color: 'amber' },
          { label: '24h Change', sub: 'Price change', color: 'green' },
        ].map(({ label, sub, color }) => (
          <div
            key={label}
            className={`bg-slate-950/50 border border-${color}-500/10 rounded-xl p-4`}
          >
            <p className="text-gray-400 text-xs mb-2">{label}</p>
            <p className="text-gray-500 text-xl font-bold">---</p>
            <p className="text-gray-600 text-xs mt-1">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
