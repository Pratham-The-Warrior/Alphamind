import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, Target } from 'lucide-react';

const performanceData = [
  { period: '1D', portfolio: '+2.89%', benchmark: '+1.24%', alpha: '+1.65%' },
  { period: '1W', portfolio: '+5.67%', benchmark: '+3.21%', alpha: '+2.46%' },
  { period: '1M', portfolio: '+12.4%', benchmark: '+8.9%', alpha: '+3.5%' },
  { period: '3M', portfolio: '+18.7%', benchmark: '+14.2%', alpha: '+4.5%' },
  { period: '6M', portfolio: '+24.8%', benchmark: '+19.1%', alpha: '+5.7%' },
  { period: '1Y', portfolio: '+31.2%', benchmark: '+22.8%', alpha: '+8.4%' },
];

const riskMetrics = [
  { metric: 'Value at Risk (95%)', value: '-$42,350', description: '1-Day VaR' },
  { metric: 'Expected Shortfall', value: '-$67,890', description: 'Conditional VaR' },
  { metric: 'Maximum Drawdown', value: '-8.4%', description: 'Peak to Trough' },
  { metric: 'Calmar Ratio', value: '3.71', description: 'Return/Max DD' },
  { metric: 'Sortino Ratio', value: '2.89', description: 'Downside Risk Adj.' },
  { metric: 'Information Ratio', value: '1.45', description: 'Active Return/Risk' },
];

const correlationMatrix = [
  { asset: 'SPY', correlation: 0.78 },
  { asset: 'QQQ', correlation: 0.85 },
  { asset: 'IWM', correlation: 0.62 },
  { asset: 'EFA', correlation: 0.45 },
  { asset: 'EEM', correlation: 0.38 },
  { asset: 'TLT', correlation: -0.23 },
  { asset: 'GLD', correlation: -0.15 },
  { asset: 'VIX', correlation: -0.67 },
];

const attributionData = [
  { factor: 'Asset Selection', contribution: '+4.2%', description: 'Stock picking alpha' },
  { factor: 'Sector Allocation', contribution: '+2.1%', description: 'Sector timing' },
  { factor: 'Market Timing', contribution: '+1.8%', description: 'Entry/exit timing' },
  { factor: 'Currency Effect', contribution: '-0.3%', description: 'FX impact' },
  { factor: 'Interaction Effect', contribution: '+0.6%', description: 'Combined effects' },
];

export const TerminalAnalytics: React.FC = () => {
  return (
    <div className="p-4 space-y-4 h-full overflow-auto">
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
                <th className="text-right p-3 text-terminal-text-muted text-xs">BENCHMARK (SPY)</th>
                <th className="text-right p-3 text-terminal-text-muted text-xs">ALPHA</th>
                <th className="text-right p-3 text-terminal-text-muted text-xs">OUTPERFORMANCE</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((data, index) => (
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

      <div className="grid grid-cols-2 gap-4">
        {/* Risk Metrics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-4 h-4 text-terminal-warning" />
            <span className="text-terminal-warning text-sm font-bold">RISK METRICS</span>
          </div>
          
          <div className="space-y-3">
            {riskMetrics.map((risk, index) => (
              <div key={risk.metric} className="bg-terminal-surface p-3 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-terminal-text text-xs font-bold">{risk.metric}</span>
                  <span className={`font-mono text-sm ${
                    risk.value.startsWith('-') ? 'text-terminal-danger' : 'text-terminal-success'
                  }`}>
                    {risk.value}
                  </span>
                </div>
                <div className="text-terminal-text-muted text-xs">{risk.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Correlation Matrix */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-4 h-4 text-terminal-blue" />
            <span className="text-terminal-blue text-sm font-bold">CORRELATION MATRIX</span>
          </div>
          
          <div className="space-y-2">
            {correlationMatrix.map((corr, index) => (
              <div key={corr.asset} className="flex items-center justify-between">
                <span className="text-terminal-text text-sm font-bold">{corr.asset}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-terminal-surface h-2 rounded">
                    <div 
                      className={`h-2 rounded ${
                        corr.correlation > 0.5 ? 'bg-terminal-danger' :
                        corr.correlation > 0 ? 'bg-terminal-warning' :
                        'bg-terminal-success'
                      }`}
                      style={{ width: `${Math.abs(corr.correlation) * 100}%` }}
                    ></div>
                  </div>
                  <span className={`font-mono text-sm ${
                    corr.correlation > 0.5 ? 'text-terminal-danger' :
                    corr.correlation > 0 ? 'text-terminal-warning' :
                    'text-terminal-success'
                  }`}>
                    {corr.correlation.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
          {attributionData.map((attr, index) => (
            <div key={attr.factor} className="bg-terminal-surface p-3 rounded text-center">
              <div className="text-terminal-text-muted text-xs mb-1">{attr.factor}</div>
              <div className={`text-lg font-bold font-mono ${
                attr.contribution.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'
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