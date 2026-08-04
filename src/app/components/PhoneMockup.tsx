import { motion } from 'motion/react';
import { Shield, Zap, Lock, ArrowRight, Wallet, TrendingUp, Eye, Send, Download, ArrowUpRight, ArrowDownLeft, Sparkles, CheckCircle } from 'lucide-react';

export function PhoneMockup() {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Title */}
      <div className="relative text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Mobile Application</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold">
            Experience <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">KryptonX</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Your gateway to private, secure, and lightning-fast transactions on Solana
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
        {/* 3D Phone Mockup - REDESIGNED */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Massive Glow Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-[120px] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Rings Around Phone */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[400px] h-[400px] border border-emerald-500/20 rounded-full" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[450px] h-[450px] border border-teal-500/10 rounded-full" />
          </motion.div>

          {/* Phone Frame */}
          <motion.div
            className="relative z-10 will-change-transform"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Phone Container with 3D perspective */}
            <div className="relative w-[320px] sm:w-[360px]" style={{ perspective: '2000px' }}>
              <motion.div
                className="relative will-change-transform"
                whileHover={{
                  rotateY: 10,
                  rotateX: -10,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Phone Body - Premium Design */}
                <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-[3.5rem] p-3 shadow-2xl shadow-emerald-500/40 border-[4px] border-slate-800/50">
                  {/* Screen Bezel */}
                  <div className="relative bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-800/50">
                    {/* Notch - Modern */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-950 rounded-b-[1.8rem] z-20 shadow-xl border-x border-b border-slate-800/30"></div>

                    {/* Screen Content - REDESIGNED */}
                    <div className="relative h-[680px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
                      {/* Animated Background Grid */}
                      <div className="absolute inset-0 opacity-10">
                        <motion.div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                          }}
                          animate={{ y: [0, 40] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                      </div>

                      {/* Status Bar - Enhanced */}
                      <div className="relative flex items-center justify-between px-8 pt-10 pb-4 text-white text-xs font-semibold z-10">
                        <span className="text-emerald-300">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <motion.div 
                            className="w-1 h-1 bg-emerald-400 rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                            <path d="M1 3h3v6H1V3zm5 0h3v9H6V3zm5 0h3v12h-3V3z" opacity="0.3"/>
                            <path d="M1 6h3v3H1V6zm5-3h3v9H6V3z" className="text-emerald-400"/>
                          </svg>
                          <div className="w-6 h-3 border border-emerald-400 rounded-sm relative">
                            <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" style={{ width: '80%' }} />
                            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-emerald-400 rounded-r-sm" />
                          </div>
                        </div>
                      </div>

                      {/* App Content - Modern UI */}
                      <div className="relative px-6 pb-8 space-y-6 z-10">
                        {/* Header with Premium Logo */}
                        <motion.div
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <div className="flex items-center gap-3">
                            {/* Premium Logo Badge */}
                            <motion.div 
                              className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50"
                              animate={{ rotate: [0, 5, 0, -5, 0] }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                              <Shield className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                              <Lock className="w-3 h-3 text-white absolute z-10" strokeWidth={3} />
                            </motion.div>
                            <div>
                              <div className="text-white text-base font-bold">KryptonX</div>
                              <div className="text-emerald-400 text-xs font-medium">Secure Wallet</div>
                            </div>
                          </div>
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center backdrop-blur-sm border border-emerald-500/20"
                            whileHover={{ scale: 1.1, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Eye className="w-4 h-4 text-emerald-400" />
                          </motion.div>
                        </motion.div>

                        {/* Balance Card - Premium Design */}
                        <motion.div
                          className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-[2rem] p-6 shadow-2xl overflow-hidden"
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          style={{
                            boxShadow: '0 25px 70px rgba(16, 185, 129, 0.5)'
                          }}
                        >
                          {/* Animated gradient shine */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-200%', '200%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatDelay: 2
                            }}
                          />
                          
                          {/* Floating particles in card */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/30 rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [0, -30, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                            />
                          ))}
                          
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2 text-emerald-100 text-xs font-medium">
                                <Lock className="w-3.5 h-3.5" strokeWidth={2.5} />
                                <span>Private Balance</span>
                              </div>
                              <CheckCircle className="w-4 h-4 text-emerald-200" />
                            </div>
                            <motion.div 
                              className="text-white text-5xl font-bold mb-4 tracking-tight"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                            >
                              $12,847.52
                            </motion.div>
                            <div className="flex items-center gap-2 text-emerald-50 text-sm font-medium">
                              <div className="bg-emerald-400/30 rounded-full p-1">
                                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
                              </div>
                              <span>+24.5% this week</span>
                            </div>
                          </div>

                          {/* Decorative corner accent */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl" />
                        </motion.div>

                        {/* Quick Actions - Modern Icons */}
                        <motion.div
                          className="grid grid-cols-4 gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          {[
                            { icon: Send, label: 'Send', gradient: 'from-emerald-500 to-teal-500' },
                            { icon: Download, label: 'Receive', gradient: 'from-teal-500 to-emerald-500' },
                            { icon: Zap, label: 'Swap', gradient: 'from-emerald-500 to-teal-600' },
                            { icon: Shield, label: 'Stake', gradient: 'from-teal-600 to-emerald-500' },
                          ].map((action, idx) => (
                            <motion.div
                              key={idx}
                              className="text-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                              whileHover={{ scale: 1.08, y: -4 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div 
                                className={`w-16 h-16 bg-gradient-to-br ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg transition-shadow hover:shadow-xl`}
                                whileHover={{ 
                                  boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)',
                                }}
                              >
                                <action.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                              </motion.div>
                              <span className="text-gray-300 text-[11px] font-semibold">{action.label}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Recent Transactions - Enhanced */}
                        <motion.div
                          className="bg-slate-900/80 backdrop-blur-xl rounded-[1.5rem] p-5 border border-emerald-500/20 shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-white text-sm font-bold">Recent Activity</div>
                            <motion.div 
                              className="w-2 h-2 bg-emerald-400 rounded-full"
                              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                          
                          <div className="space-y-2.5">
                            {[
                              { icon: ArrowUpRight, type: 'Sent', amount: '-50 KRTX', time: '2m ago', color: 'emerald' },
                              { icon: ArrowDownLeft, type: 'Received', amount: '+125 KRTX', time: '1h ago', color: 'teal' },
                              { icon: Zap, type: 'Swap', amount: '75 KRTX', time: '3h ago', color: 'emerald' },
                            ].map((tx, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/60 transition-all cursor-pointer border border-transparent hover:border-emerald-500/30"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                                whileHover={{ x: 4, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 bg-gradient-to-br from-${tx.color}-500 to-${tx.color}-600 rounded-xl flex items-center justify-center shadow-md`}>
                                    <tx.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                  </div>
                                  <div>
                                    <div className="text-white text-xs font-semibold">{tx.type}</div>
                                    <div className="text-gray-500 text-[10px] font-medium">{tx.time}</div>
                                  </div>
                                </div>
                                <div className="text-white text-xs font-bold">{tx.amount}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Bottom Navigation Hint */}
                        <motion.div
                          className="flex items-center justify-center gap-1.5 pt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1, duration: 0.6 }}
                        >
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all ${
                                i === 1 ? 'w-6 bg-emerald-400' : 'w-1.5 bg-slate-700'
                              }`}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Physical Buttons */}
                  <div className="absolute -right-[4px] top-32 w-[4px] h-16 bg-slate-700 rounded-l-md shadow-inner"></div>
                  <div className="absolute -right-[4px] top-52 w-[4px] h-24 bg-slate-700 rounded-l-md shadow-inner"></div>
                  <div className="absolute -left-[4px] top-52 w-[4px] h-14 bg-slate-700 rounded-r-md shadow-inner"></div>
                </div>

                {/* Phone Premium Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-teal-500/10 rounded-[3.5rem] blur-3xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features List - Enhanced */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            {
              icon: Shield,
              color: 'emerald',
              title: 'Zero-Knowledge Privacy',
              description: 'All transactions are encrypted with ZK-SNARK proofs, ensuring complete privacy without compromising security.',
            },
            {
              icon: Zap,
              color: 'teal',
              title: 'Lightning Fast on Solana',
              description: 'Built on Solana\'s high-performance infrastructure for instant transactions with minimal fees.',
            },
            {
              icon: Wallet,
              color: 'emerald',
              title: 'Easy to Use Interface',
              description: 'Intuitive design makes privacy accessible to everyone, from beginners to crypto experts.',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-7 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -6 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500"
              />
              
              <div className="relative flex items-start gap-5">
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:shadow-${feature.color}-500/50 group-hover:scale-110`}
                  whileHover={{ rotate: 8 }}
                >
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </motion.div>
                <div className="flex-1 pt-1">
                  <h3 className="text-white text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-emerald-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Button - Premium */}
          <motion.button
            className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/40 group relative overflow-hidden font-bold text-base"
            whileHover={{ scale: 1.03, boxShadow: '0 30px 80px rgba(16, 185, 129, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <Sparkles className="relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Get Started with KryptonX</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}