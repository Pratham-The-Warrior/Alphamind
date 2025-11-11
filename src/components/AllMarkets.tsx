import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Search, Filter, Star } from 'lucide-react';

const marketCategories = [
  { id: 'all', label: 'All Markets', count: 2847 },
  { id: 'stocks', label: 'Stocks', count: 1234 },
  { id: 'crypto', label: 'Crypto', count: 456 },
  { id: 'bonds', label: 'Bonds', count: 789 },
  { id: 'commodities', label: 'Commodities', count: 234 },
  { id: 'forex', label: 'Forex', count: 134 }
];

const topAssets = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 189.84, change: +2.34, changePercent: +1.25, market: 'NASDAQ', category: 'stocks' },
  { symbol: 'BTC', name: 'Bitcoin', price: 67234.56, change: +1234.56, changePercent: +1.87, market: 'Crypto', category: 'crypto' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.67, change: -1.23, changePercent: -0.85, market: 'NASDAQ', category: 'stocks' },
  { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: +89.12, changePercent: +2.64, market: 'Crypto', category: 'crypto' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 234.56, change: +5.67, changePercent: +2.48, market: 'NASDAQ', category: 'stocks' },
  { symbol: 'GLD', name: 'Gold ETF', price: 189.45, change: +0.89, changePercent: +0.47, market: 'NYSE', category: 'commodities' },
  { symbol: 'TLT', name: '20+ Year Treasury', price: 89.34, change: -0.45, changePercent: -0.50, market: 'NYSE', category: 'bonds' },
  { symbol: 'SOL', name: 'Solana', price: 156.78, change: +12.34, changePercent: +8.54, market: 'Crypto', category: 'crypto' }
];

const marketIndices = [
  { name: 'S&P 500', value: 4567.89, change: +23.45, changePercent: +0.52 },
  { name: 'NASDAQ', value: 14234.56, change: +89.12, changePercent: +0.63 },
  { name: 'Dow Jones', value: 34567.89, change: -45.67, changePercent: -0.13 },
  { name: 'Bitcoin Index', value: 67234.56, change: +1234.56, changePercent: +1.87 }
];

export const AllMarkets: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAssets = topAssets.filter(asset => {
    const matchesCategory = activeCategory === 'all' || asset.category === activeCategory;
    const matchesSearch = asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-light-text dark:text-dark-text font-editorial">All Markets</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">
            Trade across stocks, crypto, bonds, commodities, and forex
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
            />
          </div>
          <button className="p-2 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl hover:border-lime-accent/30 transition-colors duration-300">
            <Filter className="w-5 h-5 text-light-text dark:text-dark-text" />
          </button>
        </div>
      </motion.div>

      {/* Market Indices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 transition-colors duration-300"
      >
        <h2 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-4">Market Indices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketIndices.map((index, i) => (
            <motion.div
              key={index.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              className="bg-light-glass dark:bg-dark-glass rounded-xl p-4 hover:bg-light-border/20 dark:hover:bg-dark-border/20 transition-all duration-300"
            >
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">{index.name}</p>
              <p className="text-lg font-bold text-light-text dark:text-dark-text font-editorial">
                {index.value.toLocaleString()}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                {index.change >= 0 ? (
                  <TrendingUp className="w-3 h-3 text-lime-accent" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-400" />
                )}
                <span className={`text-xs ${index.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                  {index.change > 0 ? '+' : ''}{index.change} ({index.changePercent > 0 ? '+' : ''}{index.changePercent}%)
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        {marketCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-lime-accent text-dark-base shadow-glow'
                : 'bg-light-glass dark:bg-dark-glass text-light-text dark:text-dark-text hover:bg-lime-accent/10'
            }`}
          >
            {category.label} ({category.count})
          </motion.button>
        ))}
      </motion.div>

      {/* Assets Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl overflow-hidden transition-colors duration-300"
      >
        <div className="p-6 border-b border-light-border dark:border-dark-border">
          <h2 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">
            {activeCategory === 'all' ? 'All Assets' : marketCategories.find(c => c.id === activeCategory)?.label}
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-glass dark:bg-dark-glass">
              <tr>
                <th className="text-left p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">Asset</th>
                <th className="text-left p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">Market</th>
                <th className="text-right p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">Price</th>
                <th className="text-right p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">Change</th>
                <th className="text-right p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map((asset, index) => (
                <motion.tr
                  key={asset.symbol}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="border-b border-light-border dark:border-dark-border hover:bg-light-glass dark:hover:bg-dark-glass transition-colors duration-300"
                >
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-lime-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-lime-accent font-bold text-sm">{asset.symbol[0]}</span>
                      </div>
                      <div>
                        <p className="font-bold text-light-text dark:text-dark-text">{asset.symbol}</p>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{asset.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-light-text dark:text-dark-text">{asset.market}</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-bold text-light-text dark:text-dark-text font-editorial">
                      ${asset.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      {asset.change >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-lime-accent" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                      <div className="text-right">
                        <p className={`font-medium ${asset.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                          {asset.change > 0 ? '+' : ''}{asset.change}
                        </p>
                        <p className={`text-xs ${asset.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                          {asset.changePercent > 0 ? '+' : ''}{asset.changePercent}%
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 hover:bg-lime-accent/10 rounded transition-colors">
                        <Star className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-lime-accent" />
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-lime-accent text-dark-base text-sm rounded-lg font-medium hover:shadow-glow transition-all"
                      >
                        Trade
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};