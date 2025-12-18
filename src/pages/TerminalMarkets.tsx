import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Search, Filter, Star, BarChart3 } from 'lucide-react';

import {
  marketData,
  marketCategories as categories,
  topMovers
} from '../services/mockData';

export const TerminalMarkets: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = marketData.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.market === activeCategory;
    const matchesSearch = item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-terminal-accent text-lg font-bold">MARKET DATA</h1>
          <p className="text-terminal-text-muted text-xs">Real-time Level II quotes and market depth</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Top Movers */}
          <div className="bg-terminal-panel p-2 rounded border border-terminal-border">
            <div className="text-terminal-text-muted text-xs mb-1">TOP MOVERS</div>
            <div className="flex space-x-3">
              {topMovers.slice(0, 3).map((mover) => (
                <div key={mover.symbol} className="text-center">
                  <div className="text-terminal-text text-xs font-bold">{mover.symbol}</div>
                  <div className={`text-xs ${mover.change.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'
                    }`}>
                    {mover.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-terminal-text-muted" />
              <input
                type="text"
                placeholder="Search symbols..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="terminal-input pl-7 pr-3 py-1 w-48"
              />
            </div>
            <button className="terminal-button p-1">
              <Filter className="w-3 h-3" />
            </button>
            <button className="terminal-button p-1">
              <BarChart3 className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex space-x-1 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1 text-xs font-bold transition-all ${activeCategory === category
              ? 'bg-terminal-accent text-terminal-bg'
              : 'bg-terminal-surface text-terminal-text-dim hover:text-terminal-text border border-terminal-border'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Market Table */}
      <div className="flex-1 terminal-panel overflow-hidden">
        <div className="h-full overflow-auto">
          <table className="w-full data-grid">
            <thead className="bg-terminal-surface sticky top-0">
              <tr className="border-b border-terminal-border">
                <th className="text-left p-2 text-terminal-text-muted">SYMBOL</th>
                <th className="text-left p-2 text-terminal-text-muted">NAME</th>
                <th className="text-right p-2 text-terminal-text-muted">LAST</th>
                <th className="text-right p-2 text-terminal-text-muted">BID</th>
                <th className="text-right p-2 text-terminal-text-muted">ASK</th>
                <th className="text-right p-2 text-terminal-text-muted">CHANGE</th>
                <th className="text-right p-2 text-terminal-text-muted">%</th>
                <th className="text-right p-2 text-terminal-text-muted">VOLUME</th>
                <th className="text-center p-2 text-terminal-text-muted">MARKET</th>
                <th className="text-center p-2 text-terminal-text-muted">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <motion.tr
                  key={item.symbol}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="border-b border-terminal-border hover:bg-terminal-surface transition-colors"
                >
                  <td className="p-2">
                    <div className="flex items-center space-x-2">
                      <button className="text-terminal-text-muted hover:text-terminal-warning">
                        <Star className="w-3 h-3" />
                      </button>
                      <span className="text-terminal-text font-bold">{item.symbol}</span>
                    </div>
                  </td>
                  <td className="p-2 text-terminal-text-dim">{item.name}</td>
                  <td className="p-2 text-right text-terminal-text font-mono">
                    {item.price.toLocaleString()}
                  </td>
                  <td className="p-2 text-right text-terminal-blue font-mono">
                    {item.bid.toLocaleString()}
                  </td>
                  <td className="p-2 text-right text-terminal-orange font-mono">
                    {item.ask.toLocaleString()}
                  </td>
                  <td className={`p-2 text-right font-mono ${item.change >= 0 ? 'text-terminal-success' : 'text-terminal-danger'
                    }`}>
                    {item.change >= 0 ? '+' : ''}{item.change}
                  </td>
                  <td className={`p-2 text-right font-mono ${item.pct >= 0 ? 'text-terminal-success' : 'text-terminal-danger'
                    }`}>
                    <div className="flex items-center justify-end space-x-1">
                      {item.pct >= 0 ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      <span>{item.pct >= 0 ? '+' : ''}{item.pct}%</span>
                    </div>
                  </td>
                  <td className="p-2 text-right text-terminal-text-dim font-mono">{item.volume}</td>
                  <td className="p-2 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${item.market === 'NASDAQ' ? 'bg-terminal-blue bg-opacity-20 text-terminal-blue' :
                      item.market === 'CRYPTO' ? 'bg-terminal-orange bg-opacity-20 text-terminal-orange' :
                        item.market === 'COMMODITY' ? 'bg-terminal-yellow bg-opacity-20 text-terminal-yellow' :
                          item.market === 'ETF' ? 'bg-terminal-purple bg-opacity-20 text-terminal-purple' :
                            'bg-terminal-green bg-opacity-20 text-terminal-green'
                      }`}>
                      {item.market}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex space-x-1">
                      <button className="bg-terminal-success text-terminal-bg px-2 py-1 text-xs font-bold hover:bg-opacity-90 transition-all">
                        BUY
                      </button>
                      <button className="bg-terminal-danger text-terminal-bg px-2 py-1 text-xs font-bold hover:bg-opacity-90 transition-all">
                        SELL
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Statistics Footer */}
      <div className="mt-4 bg-terminal-panel p-3 rounded border border-terminal-border">
        <div className="grid grid-cols-6 gap-4 text-xs">
          <div>
            <span className="text-terminal-text-muted">TOTAL VOLUME: </span>
            <span className="text-terminal-text font-mono">8.9B</span>
          </div>
          <div>
            <span className="text-terminal-text-muted">ADV/DEC: </span>
            <span className="text-terminal-success">1,847</span>
            <span className="text-terminal-text-muted">/</span>
            <span className="text-terminal-danger">1,203</span>
          </div>
          <div>
            <span className="text-terminal-text-muted">NEW HIGHS: </span>
            <span className="text-terminal-success">234</span>
          </div>
          <div>
            <span className="text-terminal-text-muted">NEW LOWS: </span>
            <span className="text-terminal-danger">67</span>
          </div>
          <div>
            <span className="text-terminal-text-muted">TICK: </span>
            <span className="text-terminal-success">+456</span>
          </div>
          <div>
            <span className="text-terminal-text-muted">TRIN: </span>
            <span className="text-terminal-text">0.87</span>
          </div>
        </div>
      </div>
    </div>
  );
};