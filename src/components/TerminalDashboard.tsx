import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, BarChart3, DollarSign, Percent } from 'lucide-react';

const portfolioMetrics = [
  { label: 'TOTAL VALUE', value: '847,293.45', change: '+12.4%', changeType: 'up' },
  { label: 'P&L TODAY', value: '+23,847.32', change: '+2.89%', changeType: 'up' },
  { label: 'BETA', value: '1.24', change: '+0.08', changeType: 'up' },
  { label: 'SHARPE RATIO', value: '2.14', change: '+0.18', changeType: 'up' },
];

const topPositions = [
  {
    symbol: 'AAPL',
    shares: '1,250',
    avgCost: '175.23',
    currentPrice: '189.84',
    pnl: '+18,262.50',
    pnlPct: '+8.34%',
    weight: '15.2%'
  },
  {
    symbol: 'MSFT',
    shares: '800',
    avgCost: '365.45',
    currentPrice: '378.92',
    pnl: '+10,776.00',
    pnlPct: '+3.69%',
    weight: '12.8%'
  },
  {
    symbol: 'GOOGL',
    shares: '450',
    avgCost: '148.90',
    currentPrice: '142.67',
    pnl: '-2,803.50',
    pnlPct: '-4.18%',
    weight: '8.9%'
  },
  {
    symbol: 'TSLA',
    shares: '300',
    avgCost: '225.67',
    currentPrice: '234.56',
    pnl: '+2,667.00',
    pnlPct: '+3.94%',
    weight: '7.3%'
  },
];

const marketData = [
  { symbol: 'SPX', value: '4,567.89', change: '+23.45', pct: '+0.52%', volume: '3.2B' },
  { symbol: 'NDX', value: '14,234.56', change: '+89.12', pct: '+0.63%', volume: '2.8B' },
  { symbol: 'DJI', value: '34,567.89', change: '-45.67', pct: '-0.13%', volume: '1.9B' },
  { symbol: 'VIX', value: '18.45', change: '-1.23', pct: '-6.25%', volume: '245M' },
];

const sectorPerformance = [
  { sector: 'TECHNOLOGY', weight: '28.5%', pnl: '+15.2%', allocation: 85 },
  { sector: 'HEALTHCARE', weight: '18.3%', pnl: '+8.7%', allocation: 65 },
  { sector: 'FINANCIALS', weight: '15.7%', pnl: '+12.1%', allocation: 70 },
  { sector: 'ENERGY', weight: '12.2%', pnl: '-3.4%', allocation: 45 },
  { sector: 'CONSUMER', weight: '11.8%', pnl: '+6.9%', allocation: 55 },
  { sector: 'INDUSTRIALS', weight: '8.9%', pnl: '+4.2%', allocation: 40 },
];

export const TerminalDashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-4 h-full overflow-auto">
      {/* Portfolio Metrics */}
      <div className="grid grid-cols-4 gap-4">
        {portfolioMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="terminal-panel p-4"
          >
            <div className="text-terminal-text-muted text-xs mb-1">{metric.label}</div>
            <div className="text-terminal-text text-lg font-bold font-mono">{metric.value}</div>
            <div className={`text-xs flex items-center space-x-1 ${
              metric.changeType === 'up' ? 'text-terminal-success' :
              metric.changeType === 'down' ? 'text-terminal-danger' :
              'text-terminal-text-dim'
            }`}>
              {metric.changeType === 'up' && <TrendingUp className="w-3 h-3" />}
              {metric.changeType === 'down' && <TrendingDown className="w-3 h-3" />}
              <span>{metric.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 h-96">
        {/* Top Positions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-4 h-4 text-terminal-accent" />
            <span className="text-terminal-accent text-sm font-bold">TOP POSITIONS</span>
          </div>
          
          <div className="space-y-3">
            {topPositions.map((position, index) => (
              <div key={position.symbol} className="border-b border-terminal-border pb-2 last:border-b-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-terminal-text font-mono font-bold">{position.symbol}</span>
                  <span className="text-terminal-text-dim text-xs">{position.weight}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-terminal-text-muted">SHARES: </span>
                    <span className="text-terminal-text">{position.shares}</span>
                  </div>
                  <div>
                    <span className="text-terminal-text-muted">AVG: </span>
                    <span className="text-terminal-text">${position.avgCost}</span>
                  </div>
                  <div>
                    <span className="text-terminal-text-muted">CURRENT: </span>
                    <span className="text-terminal-text">${position.currentPrice}</span>
                  </div>
                  <div>
                    <span className="text-terminal-text-muted">P&L: </span>
                    <span className={position.pnl.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'}>
                      {position.pnl}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-4 h-4 text-terminal-blue" />
            <span className="text-terminal-blue text-sm font-bold">MARKET OVERVIEW</span>
          </div>
          
          <div className="space-y-3">
            {marketData.map((market, index) => (
              <div key={market.symbol} className="flex items-center justify-between">
                <span className="text-terminal-text font-mono font-bold text-sm">{market.symbol}</span>
                <div className="text-right">
                  <div className="text-terminal-text text-sm font-mono">{market.value}</div>
                  <div className={`text-xs ${
                    market.change.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'
                  }`}>
                    {market.change} ({market.pct})
                  </div>
                  <div className="text-xs text-terminal-text-muted">VOL: {market.volume}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-terminal-border">
            <div className="text-xs text-terminal-text-muted mb-2">MARKET BREADTH</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-terminal-text-muted">ADV/DEC: </span>
                <span className="text-terminal-success">1,847/1,203</span>
              </div>
              <div>
                <span className="text-terminal-text-muted">NEW H/L: </span>
                <span className="text-terminal-text">234/67</span>
              </div>
              <div>
                <span className="text-terminal-text-muted">UP VOL: </span>
                <span className="text-terminal-success">2.8B</span>
              </div>
              <div>
                <span className="text-terminal-text-muted">DN VOL: </span>
                <span className="text-terminal-danger">1.9B</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sector Performance */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Percent className="w-4 h-4 text-terminal-warning" />
            <span className="text-terminal-warning text-sm font-bold">SECTOR ALLOCATION</span>
          </div>
          
          <div className="space-y-3">
            {sectorPerformance.map((sector, index) => (
              <div key={sector.sector}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-terminal-text text-xs font-bold">{sector.sector}</span>
                  <div className="text-right">
                    <span className="text-terminal-text-dim text-xs">{sector.weight}</span>
                    <span className={`ml-2 text-xs ${
                      sector.pnl.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'
                    }`}>
                      {sector.pnl}
                    </span>
                  </div>
                </div>
                <div className="bg-terminal-surface h-1 rounded">
                  <div 
                    className="bg-terminal-accent h-1 rounded" 
                    style={{ width: `${sector.allocation}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Risk Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="terminal-panel p-4"
      >
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign className="w-4 h-4 text-terminal-purple" />
          <span className="text-terminal-purple text-sm font-bold">RISK METRICS & ANALYTICS</span>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">VALUE AT RISK (95%)</div>
            <div className="text-terminal-danger text-lg font-bold font-mono">-$42,350</div>
            <div className="text-terminal-text-muted text-xs">1-Day VaR</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">PORTFOLIO BETA</div>
            <div className="text-terminal-text text-lg font-bold font-mono">1.24</div>
            <div className="text-terminal-success text-xs">vs S&P 500</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">MAX DRAWDOWN</div>
            <div className="text-terminal-warning text-lg font-bold font-mono">-8.4%</div>
            <div className="text-terminal-text-muted text-xs">Last 12M</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">CORRELATION</div>
            <div className="text-terminal-text text-lg font-bold font-mono">0.78</div>
            <div className="text-terminal-text-muted text-xs">vs Market</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};