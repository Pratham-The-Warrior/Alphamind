import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Bell, 
  Shield, 
  Smartphone, 
  Monitor, 
  Moon, 
  Sun,
  Eye,
  EyeOff,
  Save,
  RefreshCw
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const TerminalSettings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [apiKey, setApiKey] = useState('sk_live_51Mz...');
  const [showApiKey, setShowApiKey] = useState(false);
  const [refreshRate, setRefreshRate] = useState('5s');
  
  const [notifications, setNotifications] = useState({
    tradeAlerts: true,
    systemUpdates: true,
    riskWarnings: true,
    marketNews: false
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = [
    {
      id: 'appearance',
      title: 'APPEARANCE',
      icon: Monitor,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'light', icon: Sun, label: 'LIGHT' },
              { value: 'dark', icon: Moon, label: 'DARK' },
              { value: 'system', icon: Monitor, label: 'SYSTEM' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value as any)}
                className={`p-4 rounded border flex flex-col items-center justify-center space-y-2 transition-all ${
                  theme === option.value
                    ? 'bg-terminal-accent/10 border-terminal-accent text-terminal-accent'
                    : 'bg-terminal-surface border-terminal-border text-terminal-text-muted hover:border-terminal-text-dim'
                }`}
              >
                <option.icon className="w-6 h-6" />
                <span className="text-xs font-bold">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'notifications',
      title: 'NOTIFICATIONS',
      icon: Bell,
      content: (
        <div className="space-y-3">
          {[
            { key: 'tradeAlerts', label: 'TRADE EXECUTION ALERTS' },
            { key: 'riskWarnings', label: 'RISK THRESHOLD WARNINGS' },
            { key: 'systemUpdates', label: 'SYSTEM UPDATES & MAINTENANCE' },
            { key: 'marketNews', label: 'MARKET NEWS FLASH' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-3 bg-terminal-surface rounded border border-terminal-border">
              <span className="text-terminal-text text-sm">{item.label}</span>
              <button
                onClick={() => toggleNotification(item.key as keyof typeof notifications)}
                className={`w-10 h-5 rounded-full relative transition-colors ${
                  notifications[item.key as keyof typeof notifications]
                    ? 'bg-terminal-accent'
                    : 'bg-terminal-text-muted/20'
                }`}
              >
                <motion.div
                  animate={{ 
                    x: notifications[item.key as keyof typeof notifications] ? 20 : 2 
                  }}
                  className="absolute top-1 left-0 w-3 h-3 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'data',
      title: 'DATA & API',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-terminal-text-muted text-xs mb-2">API KEY</label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full bg-terminal-surface border border-terminal-border text-terminal-text px-3 py-2 rounded focus:outline-none focus:border-terminal-accent font-mono text-sm"
                />
                <button
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-terminal-text-muted hover:text-terminal-text"
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <button className="px-4 py-2 bg-terminal-accent text-terminal-bg font-bold rounded text-sm hover:bg-terminal-accent/90">
                UPDATE
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-terminal-text-muted text-xs mb-2">DATA REFRESH RATE</label>
            <div className="grid grid-cols-4 gap-2">
              {['1s', '5s', '15s', '60s'].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setRefreshRate(rate)}
                  className={`py-2 px-3 rounded text-xs font-mono border ${
                    refreshRate === rate
                      ? 'bg-terminal-accent/10 border-terminal-accent text-terminal-accent'
                      : 'bg-terminal-surface border-terminal-border text-terminal-text-muted hover:border-terminal-text-dim'
                  }`}
                >
                  {rate}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-3 mb-8"
      >
        <Settings className="w-6 h-6 text-terminal-accent" />
        <h1 className="text-2xl font-bold text-terminal-text tracking-tight">SYSTEM CONFIGURATION</h1>
      </motion.div>

      <div className="grid gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="terminal-panel p-6"
          >
            <div className="flex items-center space-x-2 mb-6 border-b border-terminal-border pb-2">
              <section.icon className="w-4 h-4 text-terminal-text-dim" />
              <h2 className="text-sm font-bold text-terminal-text-dim tracking-wider">{section.title}</h2>
            </div>
            {section.content}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-end space-x-4 pt-4"
        >
          <button className="flex items-center space-x-2 px-4 py-2 text-terminal-text-muted hover:text-terminal-text transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">RESET DEFAULTS</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 bg-terminal-accent text-terminal-bg font-bold rounded hover:bg-terminal-accent/90 transition-colors shadow-lg shadow-terminal-accent/20">
            <Save className="w-4 h-4" />
            <span className="text-sm">SAVE CHANGES</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
