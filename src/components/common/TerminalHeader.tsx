import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Activity, Wifi, Shield, Clock, User, Settings, LogOut } from 'lucide-react';
import { UserProfile } from './UserProfile';

interface TerminalHeaderProps {
  user?: { username: string } | null;
  onLogout?: () => void;
  onNavigate?: (section: string) => void;
}

export const TerminalHeader = ({ user, onLogout, onNavigate }: TerminalHeaderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketStatus] = useState('OPEN');
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="bg-terminal-surface border-b border-terminal-border px-4 py-2 flex items-center justify-between text-xs">
      {/* Left: System Status */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-terminal-success rounded-full animate-pulse-slow"></div>
          <span className="text-terminal-success">ALPHA MIND v2.1.4</span>
        </div>

        <div className="flex items-center space-x-2">
          <Activity className="w-3 h-3 text-terminal-accent" />
          <span className="text-terminal-text-dim">AI ENGINE: ACTIVE</span>
        </div>

        <div className="flex items-center space-x-2">
          <Wifi className="w-3 h-3 text-terminal-success" />
          <span className="text-terminal-text-dim">FEED: REAL-TIME</span>
        </div>

        <div className="flex items-center space-x-2">
          <Shield className="w-3 h-3 text-terminal-warning" />
          <span className="text-terminal-text-dim">ENCRYPTION: AES-256</span>
        </div>
      </div>

      {/* Center: Ticker */}
      <div className="flex-1 mx-8 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap">
          <span className="text-terminal-text-dim">
            NIFTY 50: 24,567.85 (+0.96%) | SENSEX: 81,234.65 (+0.98%) | BANK NIFTY: 52,345.20 (-0.30%) | GOLD MCX: ₹62,450 (+0.46%) | USD/INR: 83.45 (+0.12%)
          </span>
        </div>
      </div>

      {/* Right: User & Time */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-terminal-text-dim">MARKET:</span>
          <span className={`${marketStatus === 'OPEN' ? 'text-terminal-success' : 'text-terminal-danger'}`}>
            {marketStatus}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3 text-terminal-text-dim" />
          <span className="text-terminal-text font-mono">{formatTime(currentTime)}</span>
        </div>

        <button
          onClick={() => setShowProfile(true)}
          className="flex items-center space-x-2 hover:bg-terminal-panel rounded px-2 py-1 transition-colors"
        >
          <User className="w-3 h-3 text-terminal-accent" />
          <span className="text-terminal-accent">{user?.username || 'TRADER_001'}</span>
        </button>

        <button
          onClick={onLogout}
          className="p-1 hover:bg-terminal-panel rounded group"
          title="Logout"
        >
          <LogOut className="w-3 h-3 text-terminal-text-dim hover:text-terminal-danger group-hover:text-terminal-danger" />
        </button>

        <button
          onClick={() => onNavigate?.('settings')}
          className="p-1 hover:bg-terminal-panel rounded"
        >
          <Settings className="w-3 h-3 text-terminal-text-dim hover:text-terminal-accent" />
        </button>
      </div>

      <AnimatePresence>
        {showProfile && <UserProfile onClose={() => setShowProfile(false)} />}
      </AnimatePresence>
    </div>
  );
};