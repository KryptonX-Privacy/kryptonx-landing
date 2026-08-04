import { Check, X, Shield, Zap, DollarSign, Lock, Eye, Globe, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface ComparisonFeature {
  name: string;
  icon: any;
  zkprivacy: boolean | string;
  traditional: boolean | string;
  description: string;
}

export function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const features: ComparisonFeature[] = [
    {
      name: 'Complete Privacy',
      icon: Shield,
      zkprivacy: true,
      traditional: false,
      description: 'Transaction details completely hidden from public view'
    },
    {
      name: 'Transaction Speed',
      icon: Zap,
      zkprivacy: '< 1 second',
      traditional: '5-30 seconds',
      description: 'Average time to confirm transactions'
    },
    {
      name: 'Network Fees',
      icon: DollarSign,
      zkprivacy: '$0.001',
      traditional: '$0.50 - $5.00',
      description: 'Average cost per transaction'
    },
    {
      name: 'Sender Anonymity',
      icon: Eye,
      zkprivacy: true,
      traditional: false,
      description: 'Sender identity protected by zero-knowledge proofs'
    },
    {
      name: 'Receiver Anonymity',
      icon: Lock,
      zkprivacy: true,
      traditional: false,
      description: 'Receiver identity hidden from blockchain explorers'
    },
    {
      name: 'Amount Hidden',
      icon: Shield,
      zkprivacy: true,
      traditional: false,
      description: 'Transaction amounts encrypted and private'
    },
    {
      name: 'Regulatory Compliant',
      icon: Globe,
      zkprivacy: true,
      traditional: true,
      description: 'Optional selective disclosure for compliance'
    },
    {
      name: 'Proof Generation',
      icon: Clock,
      zkprivacy: '< 500ms',
      traditional: 'N/A',
      description: 'Time to generate zero-knowledge proof'
    },
    {
      name: 'Scalability',
      icon: TrendingUp,
      zkprivacy: '10,000+ TPS',
      traditional: '2,000 TPS',
      description: 'Transactions per second capacity'
    }
  ];

  const renderCell = (value: boolean | string, isZKPrivacy: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className={`${isZKPrivacy ? 'bg-green-500/20' : 'bg-green-500/10'} p-2 rounded-lg`}>
            <Check className={`w-6 h-6 ${isZKPrivacy ? 'text-green-400' : 'text-green-500'}`} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="bg-red-500/20 p-2 rounded-lg">
            <X className="w-6 h-6 text-red-400" />
          </div>
        </div>
      );
    }
    
    return (
      <div className="text-center">
        <span className={`${isZKPrivacy ? 'text-cyan-400' : 'text-gray-400'} font-semibold text-lg`}>
          {value}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl sm:text-5xl mb-4">
          Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">ZKPrivacy</span>?
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          See how ZKPrivacy outperforms traditional cryptocurrencies in privacy, speed, and cost
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="text-left p-6 text-gray-400 font-semibold uppercase text-sm">
                  Feature
                </th>
                <th className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-xl">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">ZKPrivacy</span>
                  </div>
                </th>
                <th className="p-6 text-center text-gray-400 font-semibold">
                  Traditional Crypto
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <tr
                    key={index}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`border-b border-purple-500/10 transition-all duration-300 ${
                      hoveredRow === index ? 'bg-purple-500/10' : ''
                    }`}
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`bg-purple-500/20 p-2 rounded-lg transition-all duration-300 ${
                          hoveredRow === index ? 'scale-110 bg-purple-500/30' : ''
                        }`}>
                          <Icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">{feature.name}</div>
                          {hoveredRow === index && (
                            <div className="text-gray-400 text-sm mt-1 animate-fade-in">
                              {feature.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      {renderCell(feature.zkprivacy, true)}
                    </td>
                    <td className="p-6">
                      {renderCell(feature.traditional, false)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold">{feature.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-cyan-500/30">
                  <div className="text-cyan-400 text-xs mb-2 uppercase font-semibold">ZKPrivacy</div>
                  {renderCell(feature.zkprivacy, true)}
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-gray-500/30">
                  <div className="text-gray-400 text-xs mb-2 uppercase font-semibold">Traditional</div>
                  {renderCell(feature.traditional, false)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 border border-green-500/30 px-6 py-3 rounded-xl">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-white">
            <span className="text-green-400 font-semibold">9/9</span> features superior to traditional crypto
          </span>
        </div>
      </div>

      {/* Add fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
