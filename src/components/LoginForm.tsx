import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  TrendingUp,
  Shield,
  Zap,
  Activity,
} from "lucide-react";

interface LoginFormProps {
  onLogin: (credentials: { username: string; password: string }) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
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
    <div className="min-h-screen w-screen bg-terminal-bg p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-accent scrollbar-track-terminal-surface flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header (Icon Removed) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-terminal-accent mb-2">
            ALPHA MIND
          </h1>
          <p className="text-terminal-text-dim text-sm">
            Professional Trading Terminal
          </p>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-terminal-surface border border-terminal-border rounded-lg p-4 mb-6"
        >
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-terminal-success rounded-full animate-pulse"></div>
              <span className="text-terminal-success">MARKETS OPEN</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-3 h-3 text-terminal-warning" />
              <span className="text-terminal-text-dim">SECURE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-3 h-3 text-terminal-blue" />
              <span className="text-terminal-text-dim">REAL-TIME</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-3 h-3 text-terminal-accent" />
              <span className="text-terminal-text-dim">LIVE DATA</span>
            </div>
          </div>
        </motion.div>

        {/* Login Type Toggle */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex mb-6 bg-terminal-surface rounded-lg p-1 border border-terminal-border"
        >
          <button
            onClick={() => setLoginType("trader")}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all ${
              loginType === "trader"
                ? "bg-terminal-accent text-terminal-bg"
                : "text-terminal-text-dim hover:text-terminal-text"
            }`}
          >
            PROFESSIONAL
          </button>
          <button
            onClick={() => setLoginType("demo")}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all ${
              loginType === "demo"
                ? "bg-terminal-accent text-terminal-bg"
                : "text-terminal-text-dim hover:text-terminal-text"
            }`}
          >
            DEMO
          </button>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-terminal-surface border border-terminal-border rounded-lg p-6"
        >
          {loginType === "trader" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-terminal-text-muted text-xs font-medium mb-2">
                  TRADER ID
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors"
                    placeholder="Enter your trader ID"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-terminal-text-muted text-xs font-medium mb-2">
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-terminal-text-muted hover:text-terminal-text"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-terminal-accent text-terminal-bg font-bold rounded-lg hover:shadow-terminal-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin"></div>
                    <span>AUTHENTICATING...</span>
                  </div>
                ) : (
                  "ACCESS TERMINAL"
                )}
              </motion.button>
            </form>
          ) : (
            <div className="text-center">
              <Zap className="w-12 h-12 text-terminal-warning mx-auto mb-4" />
              <h3 className="text-terminal-text font-bold mb-2 text-lg">
                DEMO TRADING
              </h3>
              <p className="text-terminal-text-dim text-sm mb-6">
                Experience Alpha Mind with $100,000 virtual portfolio
              </p>

              <div className="bg-terminal-bg rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="text-center">
                    <div className="text-terminal-accent font-bold">
                      REAL-TIME
                    </div>
                    <div className="text-terminal-text-dim">Market Data</div>
                  </div>
                  <div className="text-center">
                    <div className="text-terminal-success font-bold">$100K</div>
                    <div className="text-terminal-text-dim">Virtual Cash</div>
                  </div>
                  <div className="text-center">
                    <div className="text-terminal-blue font-bold">FULL</div>
                    <div className="text-terminal-text-dim">
                      Platform Access
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-terminal-warning font-bold">
                      RISK-FREE
                    </div>
                    <div className="text-terminal-text-dim">Trading</div>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleDemoLogin}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-terminal-warning text-terminal-bg font-bold rounded-lg hover:shadow-terminal-glow transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin"></div>
                    <span>LOADING DEMO...</span>
                  </div>
                ) : (
                  "START DEMO TRADING"
                )}
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="flex justify-center space-x-4 text-xs mb-4">
            <button className="text-terminal-text-dim hover:text-terminal-accent transition-colors">
              Forgot Password?
            </button>
            <span className="text-terminal-border">|</span>
            <button className="text-terminal-text-dim hover:text-terminal-accent transition-colors">
              Contact Support
            </button>
          </div>

          <div className="bg-terminal-panel border border-terminal-warning rounded-lg p-3">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Shield className="w-3 h-3 text-terminal-warning" />
              <span className="text-terminal-warning text-xs font-bold">
                SECURITY NOTICE
              </span>
            </div>
            <p className="text-xs text-terminal-text-dim">
              Your connection is secured with AES-256 encryption. Never share
              credentials.
            </p>
          </div>

          <p className="text-xs text-terminal-text-muted mt-4">
            © 2025 Alpha Mind. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
