import { motion } from 'framer-motion';
import {
  Brain,
  PieChart,
  TrendingUp,
  BarChart3,
  Zap,
  Settings,
  ChevronRight
} from 'lucide-react';

interface TerminalSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'dashboard', label: 'AI DASHBOARD', icon: Brain, hotkey: 'F1' },
  { id: 'portfolio', label: 'PORTFOLIO', icon: PieChart, hotkey: 'F2' },
  { id: 'markets', label: 'MARKETS', icon: TrendingUp, hotkey: 'F3' },
  { id: 'analytics', label: 'ANALYTICS', icon: BarChart3, hotkey: 'F4' },
  { id: 'optimizer', label: 'OPTIMIZER', icon: Zap, hotkey: 'F5' },
  { id: 'settings', label: 'SETTINGS', icon: Settings, hotkey: 'F6' },
];

export const TerminalSidebar = ({
  activeSection,
  onSectionChange
}: TerminalSidebarProps) => {
  return (
    <div className="w-48 bg-terminal-surface border-r border-terminal-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-terminal-border">
        <div className="text-terminal-accent font-bold text-lg">ALPHA MIND</div>
        <div className="text-terminal-text-muted text-xs">PORTFOLIO ANALYZER</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        {navigation.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center justify-between p-3 mb-1 text-left transition-all duration-200 group ${activeSection === item.id
              ? 'bg-terminal-accent text-terminal-bg border-l-2 border-terminal-accent'
              : 'text-terminal-text-dim hover:text-terminal-text hover:bg-terminal-panel'
              }`}
            whileHover={{ x: 2 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.label}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs opacity-50">{item.hotkey}</span>
              {activeSection === item.id && (
                <ChevronRight className="w-3 h-3" />
              )}
            </div>
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-terminal-border">
        <div className="bg-terminal-panel p-3 rounded">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-terminal-success rounded-full animate-pulse"></div>
            <span className="text-xs text-terminal-text">MARKET STATUS</span>
          </div>
          <div className="text-xs text-terminal-text-dim space-y-1">
            <div className="flex justify-between"><span>DATA FEED</span><span className="text-terminal-success">ONLINE</span></div>
            <div className="flex justify-between"><span>LATENCY</span><span>23ms</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};