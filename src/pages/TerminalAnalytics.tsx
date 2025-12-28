import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, Target } from 'lucide-react';

import {
  performanceData,
  analyticsRiskMetrics as riskMetrics,
  attributionData
} from '../services/mockData';
import { CorrelationMatrix } from '../components/analytics/CorrelationMatrix';

export const TerminalAnalytics: React.FC = () => {
  const [leftWidth, setLeftWidth] = React.useState(33);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = React.useState(false);

  const startResizing = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback((e: MouseEvent) => {
    if (isResizing && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      if (newWidth > 20 && newWidth < 80) {
        setLeftWidth(newWidth);
      }
    }
  }, [isResizing]);

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    } else {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  return (
    <div className="p-4 space-y-4 h-full overflow-auto" ref={containerRef}>
      {/* Performance Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="terminal-panel p-4"
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-4 h-4 text-terminal-accent" />
          <span className="text-terminal-accent text-sm font-bold">PERFORMANCE ANALYSIS</span>
        </div>

        <div className="overflow-auto">
          <table className="w-full data-grid">
            <thead className="bg-terminal-surface">
              <tr className="border-b border-terminal-border">
                <th className="text-left p-3 text-terminal-text-muted text-xs">PERIOD</th>
                <th className="text-right p-3 text-terminal-text-muted text-xs">PORTFOLIO</th>
                <th className="text-right p-3 text-terminal-text-muted text-xs">BENCHMARK (NIFTY 50)</th>
                <th className="text-right p-3 text-terminal-text-muted text-xs">ALPHA</th>
                <th className="text-right p-3 text-terminal-text-muted text-xs">OUTPERFORMANCE</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((data) => (
                <tr key={data.period} className="border-b border-terminal-border hover:bg-terminal-surface">
                  <td className="p-3 text-terminal-text font-bold">{data.period}</td>
                  <td className="p-3 text-right text-terminal-success font-mono">{data.portfolio}</td>
                  <td className="p-3 text-right text-terminal-text font-mono">{data.benchmark}</td>
                  <td className="p-3 text-right text-terminal-accent font-mono">{data.alpha}</td>
                  <td className="p-3 text-right">
                    <div className="bg-terminal-surface h-2 rounded">
                      <div
                        className="bg-terminal-success h-2 rounded"
                        style={{ width: `${Math.min(parseFloat(data.alpha.replace('%', '')) * 10, 100)}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className={`flex space-x-2 min-h-[500px] ${isResizing ? 'select-none' : ''}`}>
        {/* Risk Metrics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="terminal-panel p-4"
          style={{ width: `${leftWidth}%` }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-4 h-4 text-terminal-warning" />
            <span className="text-terminal-warning text-sm font-bold">RISK METRICS</span>
          </div>

          <div className="space-y-3">
            {riskMetrics.map((risk) => (
              <div key={risk.metric} className="bg-terminal-surface p-3 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-terminal-text text-xs font-bold">{risk.metric}</span>
                  <span className={`font-mono text-sm ${risk.value.startsWith('-') ? 'text-terminal-danger' : 'text-terminal-success'
                    }`}>
                    {risk.value}
                  </span>
                </div>
                <div className="text-terminal-text-muted text-xs">{risk.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resizer Handle */}
        <div
          className={`w-1 hover:w-1.5 transition-all cursor-col-resize flex items-center justify-center group ${isResizing ? 'bg-terminal-accent' : 'bg-transparent hover:bg-terminal-accent/30'
            }`}
          onMouseDown={startResizing}
        >
          <div className={`h-8 w-px bg-terminal-accent/50 group-hover:bg-terminal-accent ${isResizing ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Correlation Matrix */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <CorrelationMatrix />
        </div>
      </div>

      {/* Attribution Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="terminal-panel p-4"
      >
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-4 h-4 text-terminal-purple" />
          <span className="text-terminal-purple text-sm font-bold">PERFORMANCE ATTRIBUTION</span>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {attributionData.map((attr) => (
            <div key={attr.factor} className="bg-terminal-surface p-3 rounded text-center">
              <div className="text-terminal-text-muted text-xs mb-1">{attr.factor}</div>
              <div className={`text-lg font-bold font-mono ${attr.contribution.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'
                }`}>
                {attr.contribution}
              </div>
              <div className="text-terminal-text-muted text-xs mt-1">{attr.description}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Statistical Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="terminal-panel p-4"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="w-4 h-4 text-terminal-green" />
          <span className="text-terminal-green text-sm font-bold">STATISTICAL SUMMARY</span>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-terminal-text-muted text-xs mb-1">ANNUALIZED RETURN</div>
            <div className="text-terminal-success text-2xl font-bold font-mono">31.2%</div>
            <div className="text-terminal-text-muted text-xs">vs 22.8% benchmark</div>
          </div>

          <div className="text-center">
            <div className="text-terminal-text-muted text-xs mb-1">VOLATILITY</div>
            <div className="text-terminal-warning text-2xl font-bold font-mono">18.4%</div>
            <div className="text-terminal-text-muted text-xs">Standard deviation</div>
          </div>

          <div className="text-center">
            <div className="text-terminal-text-muted text-xs mb-1">WIN RATE</div>
            <div className="text-terminal-success text-2xl font-bold font-mono">67.3%</div>
            <div className="text-terminal-text-muted text-xs">Profitable days</div>
          </div>

          <div className="text-center">
            <div className="text-terminal-text-muted text-xs mb-1">PROFIT FACTOR</div>
            <div className="text-terminal-accent text-2xl font-bold font-mono">2.14</div>
            <div className="text-terminal-text-muted text-xs">Gross profit/loss</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};