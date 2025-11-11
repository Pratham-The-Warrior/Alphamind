import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, TrendingDown, BarChart3, DollarSign } from 'lucide-react';

const portfolioHoldings = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    shares: 1250,
    avgCost: 175.23,
    currentPrice: 189.84,
    marketValue: 237300,
    pnl: 18262.50,
    pnlPct: 8.34,
    weight: 15.2,
    sector: 'Technology'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    shares: 800,
    avgCost: 365.45,
    currentPrice: 378.92,
    marketValue: 303136,
    pnl: 10776.00,
    pnlPct: 3.69,
    weight: 12.8,
    sector: 'Technology'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    shares: 450,
    avgCost: 148.90,
    currentPrice: 142.67,
    marketValue: 64201.50,
    pnl: -2803.50,
    pnlPct: -4.18,
    weight: 8.9,
    sector: 'Technology'
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase',
    shares: 600,
    avgCost: 145.67,
    currentPrice: 152.34,
    marketValue: 91404,
    pnl: 4002.00,
    pnlPct: 4.58,
    weight: 7.3,
    sector: 'Financials'
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    shares: 400,
    avgCost: 168.45,
    currentPrice: 172.89,
    marketValue: 69156,
    pnl: 1776.00,
    pnlPct: 2.64,
    weight: 5.8,
    sector: 'Healthcare'
  },
];

const sectorAllocation = [
  { sector: 'Technology', weight: 36.9, value: 604637.50, pnl: 26234.50 },
  { sector: 'Financials', weight: 18.3, value: 91404, pnl: 4002.00 },
  { sector: 'Healthcare', weight: 15.7, value: 69156, pnl: 1776.00 },
  { sector: 'Energy', weight: 12.2, value: 45678, pnl: -1234.50 },
  { sector: 'Consumer', weight: 11.8, value: 42345, pnl: 2345.00 },
  { sector: 'Cash', weight: 5.1, value: 18900, pnl: 0 },
];

const performanceMetrics = [
  { label: 'TOTAL VALUE', value: '$847,293.45', change: '+12.4%' },
  { label: 'DAY P&L', value: '+$23,847.32', change: '+2.89%' },
  { label: 'TOTAL P&L', value: '+$89,234.67', change: '+11.78%' },
  { label: 'CASH BALANCE', value: '$18,900.00', change: '2.23%' },
];

export const TerminalPortfolio: React.FC = () => {
  return (
    <div className="p-4 space-y-4 h-full overflow-auto">
      {/* Performance Metrics */}
      <div className="grid grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="terminal-panel p-4"
          >
            <div className="text-terminal-text-muted text-xs mb-1">{metric.label}</div>
            <div className="text-terminal-text text-lg font-bold font-mono">{metric.value}</div>
            <div className="text-terminal-success text-xs">{metric.change}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Holdings Table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-2 terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-4 h-4 text-terminal-accent" />
            <span className="text-terminal-accent text-sm font-bold">PORTFOLIO HOLDINGS</span>
          </div>
          
          <div className="overflow-auto">
            <table className="w-full data-grid">
              <thead className="bg-terminal-surface">
                <tr className="border-b border-terminal-border">
                  <th className="text-left p-2 text-terminal-text-muted text-xs">SYMBOL</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">SHARES</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">AVG COST</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">CURRENT</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">MKT VALUE</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">P&L</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">%</th>
                  <th className="text-right p-2 text-terminal-text-muted text-xs">WEIGHT</th>
                </tr>
              </thead>
              <tbody>
                {portfolioHoldings.map((holding, index) => (
                  <tr key={holding.symbol} className="border-b border-terminal-border hover:bg-terminal-surface">
                    <td className="p-2">
                      <div>
                        <div className="text-terminal-text font-bold text-sm">{holding.symbol}</div>
                        <div className="text-terminal-text-muted text-xs">{holding.sector}</div>
                      </div>
                    </td>
                    <td className="p-2 text-right text-terminal-text font-mono text-sm">
                      {holding.shares.toLocaleString()}
                    </td>
                    <td className="p-2 text-right text-terminal-text font-mono text-sm">
                      ${holding.avgCost.toFixed(2)}
                    </td>
                    <td className="p-2 text-right text-terminal-text font-mono text-sm">
                      ${holding.currentPrice.toFixed(2)}
                    </td>
                    <td className="p-2 text-right text-terminal-text font-mono text-sm">
                      ${holding.marketValue.toLocaleString()}
                    </td>
                    <td className={`p-2 text-right font-mono text-sm ${
                      holding.pnl >= 0 ? 'text-terminal-success' : 'text-terminal-danger'
                    }`}>
                      {holding.pnl >= 0 ? '+' : ''}${holding.pnl.toLocaleString()}
                    </td>
                    <td className={`p-2 text-right font-mono text-sm ${
                      holding.pnlPct >= 0 ? 'text-terminal-success' : 'text-terminal-danger'
                    }`}>
                      {holding.pnlPct >= 0 ? '+' : ''}{holding.pnlPct.toFixed(2)}%
                    </td>
                    <td className="p-2 text-right text-terminal-text-dim font-mono text-sm">
                      {holding.weight.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Sector Allocation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <PieChart className="w-4 h-4 text-terminal-blue" />
            <span className="text-terminal-blue text-sm font-bold">SECTOR ALLOCATION</span>
          </div>
          
          <div className="space-y-3">
            {sectorAllocation.map((sector, index) => (
              <div key={sector.sector}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-terminal-text text-xs font-bold">{sector.sector}</span>
                  <span className="text-terminal-text-dim text-xs">{sector.weight.toFixed(1)}%</span>
                </div>
                <div className="bg-terminal-surface h-2 rounded mb-1">
                  <div 
                    className="bg-terminal-accent h-2 rounded" 
                    style={{ width: `${sector.weight}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-terminal-text-muted">${sector.value.toLocaleString()}</span>
                  <span className={sector.pnl >= 0 ? 'text-terminal-success' : 'text-terminal-danger'}>
                    {sector.pnl >= 0 ? '+' : ''}${sector.pnl.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Portfolio Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="terminal-panel p-4"
      >
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign className="w-4 h-4 text-terminal-purple" />
          <span className="text-terminal-purple text-sm font-bold">PORTFOLIO ANALYTICS</span>
        </div>
        
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">BETA</div>
            <div className="text-terminal-text text-lg font-bold font-mono">1.24</div>
            <div className="text-terminal-success text-xs">vs S&P 500</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">SHARPE RATIO</div>
            <div className="text-terminal-text text-lg font-bold font-mono">2.14</div>
            <div className="text-terminal-success text-xs">Excellent</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">ALPHA</div>
            <div className="text-terminal-success text-lg font-bold font-mono">+3.2%</div>
            <div className="text-terminal-text-muted text-xs">vs Benchmark</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">VOLATILITY</div>
            <div className="text-terminal-warning text-lg font-bold font-mono">18.4%</div>
            <div className="text-terminal-text-muted text-xs">Annualized</div>
          </div>
          
          <div className="bg-terminal-surface p-3 rounded">
            <div className="text-terminal-text-muted text-xs mb-1">MAX DRAWDOWN</div>
            <div className="text-terminal-danger text-lg font-bold font-mono">-8.4%</div>
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