import { motion } from 'framer-motion';
import {
  User,
  Settings,
  Shield,
  Activity,
  TrendingUp,
  Award,
  BarChart3
} from 'lucide-react';

const tradingStats = [
  { label: 'TOTAL TRADES', value: '2,847', change: '+234 this month' },
  { label: 'WIN RATE', value: '73.2%', change: '+2.1% vs last month' },
  { label: 'PROFIT FACTOR', value: '2.14', change: 'Excellent rating' },
  { label: 'MAX DRAWDOWN', value: '-8.4%', change: 'Within risk limits' },
  { label: 'SHARPE RATIO', value: '1.87', change: 'Above benchmark' },
  { label: 'TOTAL P&L', value: '+₹70,47,293', change: '+18.7% YTD' }
];

const recentActivity = [
  { time: '14:23:45', action: 'BUY', symbol: 'RELIANCE', quantity: '100', price: '2,678.35', status: 'FILLED' },
  { time: '13:45:12', action: 'SELL', symbol: 'TCS', quantity: '50', price: '4,012.75', status: 'FILLED' },
  { time: '12:34:28', action: 'BUY', symbol: 'HDFCBANK', quantity: '150', price: '1,678.90', status: 'FILLED' },
  { time: '11:56:33', action: 'SELL', symbol: 'INFY', quantity: '200', price: '1,612.45', status: 'PARTIAL' },
  { time: '10:23:17', action: 'BUY', symbol: 'BHARTIARTL', quantity: '75', price: '1,567.80', status: 'FILLED' }
];

const achievements = [
  { title: 'PROFIT MASTER', description: 'Achieved 70%+ win rate', icon: Award, color: 'text-terminal-success' },
  { title: 'RISK MANAGER', description: 'Kept drawdown under 10%', icon: Shield, color: 'text-terminal-blue' },
  { title: 'VOLUME TRADER', description: 'Executed 1000+ trades', icon: Activity, color: 'text-terminal-accent' },
  { title: 'ALPHA GENERATOR', description: 'Beat market by 15%+', icon: TrendingUp, color: 'text-terminal-warning' }
];

const accountSettings = [
  { category: 'TRADING', items: ['Order Types', 'Risk Limits', 'Auto-Execute', 'Stop Loss'] },
  { category: 'NOTIFICATIONS', items: ['Price Alerts', 'News Updates', 'Trade Confirmations', 'Risk Warnings'] },
  { category: 'DISPLAY', items: ['Theme Settings', 'Layout Config', 'Data Refresh', 'Chart Settings'] },
  { category: 'SECURITY', items: ['2FA Settings', 'API Keys', 'Session Timeout', 'Login History'] }
];

interface UserProfileProps {
  onClose: () => void;
}

export const UserProfile = ({ onClose }: UserProfileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-terminal-bg bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-terminal-surface border border-terminal-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-terminal-panel border-b border-terminal-border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-terminal-accent rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-terminal-bg" />
              </div>
              <div>
                <h1 className="text-terminal-accent text-2xl font-bold">TRADER_001</h1>
                <p className="text-terminal-text-dim">Professional Trader • Premium Account</p>
                <div className="flex items-center space-x-4 mt-2 text-xs">
                  <span className="text-terminal-success">● ONLINE</span>
                  <span className="text-terminal-text-muted">Last Login: 2024-01-15 09:23:45</span>
                  <span className="text-terminal-text-muted">Session: 4h 23m</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-terminal-text-muted hover:text-terminal-text text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Trading Statistics */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-terminal-accent" />
              <h2 className="text-terminal-accent text-lg font-bold">TRADING PERFORMANCE</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {tradingStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-terminal-panel p-4 rounded border border-terminal-border"
                >
                  <div className="text-terminal-text-muted text-xs mb-1">{stat.label}</div>
                  <div className="text-terminal-text text-xl font-bold font-mono">{stat.value}</div>
                  <div className="text-terminal-success text-xs">{stat.change}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-5 h-5 text-terminal-blue" />
                <h2 className="text-terminal-blue text-lg font-bold">RECENT ACTIVITY</h2>
              </div>
              <div className="bg-terminal-panel rounded border border-terminal-border">
                <table className="w-full data-grid">
                  <thead className="bg-terminal-surface">
                    <tr className="border-b border-terminal-border">
                      <th className="text-left p-3 text-terminal-text-muted text-xs">TIME</th>
                      <th className="text-center p-3 text-terminal-text-muted text-xs">ACTION</th>
                      <th className="text-left p-3 text-terminal-text-muted text-xs">SYMBOL</th>
                      <th className="text-right p-3 text-terminal-text-muted text-xs">QTY</th>
                      <th className="text-right p-3 text-terminal-text-muted text-xs">PRICE</th>
                      <th className="text-center p-3 text-terminal-text-muted text-xs">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity, index) => (
                      <tr key={index} className="border-b border-terminal-border hover:bg-terminal-surface">
                        <td className="p-3 text-terminal-text font-mono text-xs">{activity.time}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 text-xs font-bold ${activity.action === 'BUY' ? 'bg-terminal-success text-terminal-bg' : 'bg-terminal-danger text-terminal-bg'
                            }`}>
                            {activity.action}
                          </span>
                        </td>
                        <td className="p-3 text-terminal-text font-bold text-sm">{activity.symbol}</td>
                        <td className="p-3 text-right text-terminal-text font-mono text-sm">{activity.quantity}</td>
                        <td className="p-3 text-right text-terminal-text font-mono text-sm">₹{activity.price}</td>
                        <td className="p-3 text-center">
                          <span className={`text-xs px-2 py-1 rounded ${activity.status === 'FILLED' ? 'bg-terminal-success bg-opacity-20 text-terminal-success' :
                            activity.status === 'PARTIAL' ? 'bg-terminal-warning bg-opacity-20 text-terminal-warning' :
                              'bg-terminal-danger bg-opacity-20 text-terminal-danger'
                            }`}>
                            {activity.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-terminal-warning" />
                <h2 className="text-terminal-warning text-lg font-bold">ACHIEVEMENTS</h2>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-terminal-panel p-4 rounded border border-terminal-border flex items-center space-x-3"
                  >
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    <div>
                      <div className="text-terminal-text font-bold text-sm">{achievement.title}</div>
                      <div className="text-terminal-text-muted text-xs">{achievement.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-terminal-purple" />
              <h2 className="text-terminal-purple text-lg font-bold">ACCOUNT SETTINGS</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {accountSettings.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-terminal-panel p-4 rounded border border-terminal-border"
                >
                  <h3 className="text-terminal-accent font-bold text-sm mb-3">{section.category}</h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <button
                        key={item}
                        className="block w-full text-left text-terminal-text-dim hover:text-terminal-text text-xs py-1 hover:bg-terminal-surface rounded transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-terminal-border">
            <button className="flex-1 bg-terminal-accent text-terminal-bg py-3 px-6 font-bold text-sm hover:bg-opacity-90 transition-all">
              EDIT PROFILE
            </button>
            <button className="flex-1 bg-terminal-surface border border-terminal-border text-terminal-text py-3 px-6 font-bold text-sm hover:bg-terminal-panel transition-all">
              EXPORT DATA
            </button>
            <button className="flex-1 bg-terminal-surface border border-terminal-border text-terminal-text py-3 px-6 font-bold text-sm hover:bg-terminal-panel transition-all">
              SECURITY SETTINGS
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};