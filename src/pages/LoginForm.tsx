import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Zap,
  Activity,
  Brain,
  Globe,
  TrendingDown,
  TrendingUp,
  BarChart2
} from "lucide-react";
import { terminalMarketOverview as marketData } from "../services/mockData";

const commoditiesData = [
  { symbol: "GOLD", value: "₹62,450", pct: "+0.45%" },
  { symbol: "SILVER", value: "₹74,820", pct: "-0.12%" },
  { symbol: "CRUDE", value: "₹6,345", pct: "+1.20%" },
  { symbol: "BTC", value: "₹56,42,150", pct: "+2.15%" },
];

interface LoginFormProps {
  onLogin: (credentials: { username: string; password: string }) => void;
  onNavigate: (view: "forgot-password" | "contact-support" | "signup" | "privacy" | "terms") => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onNavigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState<"trader" | "demo">("trader");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLogin({ username, password });
      setIsLoading(false);
    }, 1500);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      onLogin({ username: "DEMO_USER", password: "demo" });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-screen bg-terminal-bg overflow-hidden flex flex-col lg:flex-row matrix-bg relative">
      {/* Left Side: Brand & Stats (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-[60%] flex-col p-12 relative overflow-hidden border-r border-terminal-border/30"
      >
        {/* Branding */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="bg-terminal-panel rounded shadow-terminal-glow overflow-hidden w-16 h-16 flex items-center justify-center">
              <img src="/unicorn.png" alt="Alpha Mind Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-terminal-accent tracking-tighter">ALPHA MIND</h1>
              <p className="text-terminal-text-dim text-xs font-mono uppercase tracking-[0.3em]">Personal Portfolio Intelligence</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-terminal-text font-bold text-sm tracking-widest border-l-2 border-terminal-accent pl-3">MARKET INDICES</h3>
              <div className="space-y-4">
                {marketData.map((item, idx) => (
                  <motion.div
                    key={item.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex justify-between items-center bg-terminal-surface/50 p-3 border border-terminal-border group hover:border-terminal-accent/50 transition-all"
                  >
                    <span className="text-terminal-text font-mono font-bold">{item.symbol}</span>
                    <div className="text-right">
                      <div className="text-terminal-text text-sm font-mono">{item.value}</div>
                      <div className={`text-[10px] ${item.pct.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'}`}>
                        {item.pct}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-terminal-text font-bold text-sm tracking-widest border-l-2 border-terminal-blue pl-3 uppercase">Platform Capabilities</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: 'INTELLIGENCE', desc: 'AI-driven portfolio analysis' },
                  { icon: Shield, label: 'RISK', desc: 'Real-time holdings alerts' },
                  { icon: Zap, label: 'OPTIMIZE', desc: 'Instant rebalancing' },
                  { icon: Globe, label: 'MARKETS', desc: 'Global coverage' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="group p-4 bg-terminal-surface/50 border border-terminal-border rounded-lg hover:border-terminal-blue/50 hover:bg-terminal-surface/80 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-terminal-bg border border-terminal-blue/30 rounded group-hover:border-terminal-blue transition-colors">
                        <item.icon className="w-4 h-4 text-terminal-blue group-hover:text-terminal-accent transition-colors" />
                      </div>
                      <span className="text-[10px] text-terminal-text font-bold tracking-widest">{item.label}</span>
                    </div>
                    <p className="text-[9px] text-terminal-text-dim leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-[10px] text-terminal-text-dim/60 font-mono text-center leading-relaxed">
                Advanced algorithms processing real-time market data.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-terminal-text font-bold text-sm tracking-widest border-l-2 border-terminal-warning pl-3 mb-4">COMMODITIES LIVE</h3>
            <div className="grid grid-cols-4 gap-4">
              {commoditiesData.map((item, idx) => (
                <motion.div
                  key={item.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + idx * 0.1 }}
                  className="bg-terminal-panel border border-terminal-border p-3 rounded group hover:border-terminal-warning/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <BarChart2 className="w-3 h-3 text-terminal-warning" />
                    {item.pct.startsWith('+') ?
                      <TrendingUp className="w-3 h-3 text-terminal-success" /> :
                      <TrendingDown className="w-3 h-3 text-terminal-danger" />
                    }
                  </div>
                  <div className="text-xs font-bold text-terminal-text font-mono mb-1">{item.symbol}</div>
                  <div className="text-[10px] text-terminal-text-dim">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative scanlines */}
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-[0.03]"></div>
      </motion.div>

      {/* Right Side: Login Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12 scrollbar-thin scrollbar-thumb-terminal-border scrollbar-track-terminal-surface overflow-y-auto"
      >
        <div className="w-full max-w-md">
          {/* Header (Mobile) */}
          <div className="lg:hidden text-center mb-10">
            <h1 className="text-3xl font-bold text-terminal-accent mb-2">ALPHA MIND</h1>
            <p className="text-terminal-text-dim text-xs uppercase tracking-widest">Smart Investment Platform</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-terminal-text font-bold text-xl mb-1">PORTFOLIO LOGIN</h3>
            <p className="text-terminal-text-muted text-xs">Sign in to manage your wealth</p>
          </motion.div>

          {/* Login Type Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex mb-8 bg-terminal-surface/50 rounded-lg p-1 border border-terminal-border backdrop-blur-sm"
          >
            <button
              onClick={() => setLoginType("trader")}
              className={`flex-1 py-3 px-4 text-xs font-bold rounded-md transition-all ${loginType === "trader"
                ? "bg-terminal-accent text-terminal-bg shadow-terminal"
                : "text-terminal-text-dim hover:text-terminal-text"
                }`}
            >
              INVESTOR
            </button>
            <button
              onClick={() => setLoginType("demo")}
              className={`flex-1 py-3 px-4 text-xs font-bold rounded-md transition-all ${loginType === "demo"
                ? "bg-terminal-accent text-terminal-bg shadow-terminal"
                : "text-terminal-text-dim hover:text-terminal-text"
                }`}
            >
              DEMO
            </button>
          </motion.div>

          {/* Main Form container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-terminal-surface border border-terminal-border rounded-lg p-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-terminal-accent/30 to-transparent"></div>

            <AnimatePresence mode="wait">
              {loginType === "trader" ? (
                <form key="trader" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-terminal-text-muted text-[10px] font-bold mb-2 uppercase tracking-widest">
                      USERNAME
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted group-focus-within:text-terminal-accent transition-colors" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-terminal-bg/50 border border-terminal-border rounded focus:border-terminal-accent focus:outline-none transition-all text-sm"
                        placeholder="ENTER ID..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-terminal-text-muted text-[10px] font-bold mb-2 uppercase tracking-widest">
                      PASSWORD
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted group-focus-within:text-terminal-accent transition-colors" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 bg-terminal-bg/50 border border-terminal-border rounded focus:border-terminal-accent focus:outline-none transition-all text-sm font-mono"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-terminal-text-muted hover:text-terminal-text"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(255, 107, 53, 0.3)" }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-terminal-accent text-terminal-bg font-bold rounded hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin"></div>
                        <span className="tracking-widest">AUTHENTICATING...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-current" />
                        <span className="tracking-widest capitalize">Access Portfolio</span>
                      </>
                    )}
                  </motion.button>

                  <div className="flex justify-between items-center pt-4 border-t border-terminal-border/20">
                    <button
                      type="button"
                      onClick={() => onNavigate('forgot-password')}
                      className="text-[9px] text-terminal-text-muted hover:text-terminal-accent transition-colors uppercase font-bold tracking-tighter"
                    >
                      Lost Key?
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('signup')}
                      className="text-[9px] text-terminal-text font-bold hover:text-terminal-accent transition-colors uppercase border-b border-terminal-accent/30"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              ) : (
                <div key="demo" className="text-center py-4">
                  <div className="w-16 h-16 bg-terminal-warning/10 border border-terminal-warning/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-8 h-8 text-terminal-warning animate-pulse" />
                  </div>
                  <h3 className="text-terminal-text font-bold mb-2 text-xl tracking-tight">PRACTICE PORTFOLIO</h3>
                  <p className="text-terminal-text-dim text-xs mb-8">
                    Test strategies risk-free with ₹1 Crore virtual cash
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-3 bg-terminal-bg/50 border border-terminal-border rounded">
                      <div className="text-terminal-warning text-lg font-bold font-mono">₹1 Cr</div>
                      <div className="text-[9px] text-terminal-text-muted font-bold uppercase">Funding</div>
                    </div>
                    <div className="p-3 bg-terminal-bg/50 border border-terminal-border rounded">
                      <div className="text-terminal-success text-lg font-bold font-mono">LIVE</div>
                      <div className="text-[9px] text-terminal-text-muted font-bold uppercase">Environment</div>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleDemoLogin}
                    disabled={isLoading}
                    whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(255, 184, 0, 0.2)" }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-terminal-warning text-terminal-bg font-bold rounded transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin"></div>
                        <span>SYNCING...</span>
                      </div>
                    ) : (
                      "INITIALIZE DEMO"
                    )}
                  </motion.button>
                </div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer Security Notice */}


          <footer className="mt-12 text-center text-terminal-text-muted text-[10px]">
            <div className="flex justify-center space-x-4 mb-4">
              <button onClick={() => onNavigate('privacy')} className="hover:text-terminal-text transition-colors uppercase font-bold tracking-widest">Privacy</button>
              <span>/</span>
              <button onClick={() => onNavigate('terms')} className="hover:text-terminal-text transition-colors uppercase font-bold tracking-widest">Terms</button>
              <span>/</span>
              <button onClick={() => onNavigate('contact-support')} className="hover:text-terminal-text transition-colors uppercase font-bold tracking-widest">Help</button>
            </div>
            <p>© 2025 ALPHA MIND TECHNOLOGIES. ALL SYSTEMS OPERATIONAL.</p>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};
