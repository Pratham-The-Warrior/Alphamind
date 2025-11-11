import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, TrendingDown, Zap, Target } from 'lucide-react';

const portfolioAssets = [
  { 
    category: 'Equities', 
    allocation: 45, 
    value: 381283, 
    change: +12.4, 
    assets: ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
    color: 'bg-blue-500',
    risk: 'High'
  },
  { 
    category: 'Bonds', 
    allocation: 25, 
    value: 211823, 
    change: +3.2, 
    assets: ['US Treasury', 'Corporate Bonds', 'Municipal'],
    color: 'bg-green-500',
    risk: 'Low'
  },
  { 
    category: 'Crypto', 
    allocation: 15, 
    value: 127094, 
    change: +28.7, 
    assets: ['BTC', 'ETH', 'SOL', 'ADA'],
    color: 'bg-orange-500',
    risk: 'Very High'
  },
  { 
    category: 'Commodities', 
    allocation: 10, 
    value: 84729, 
    change: +5.8, 
    assets: ['Gold', 'Silver', 'Oil', 'Copper'],
    color: 'bg-yellow-500',
    risk: 'Medium'
  },
  { 
    category: 'REITs', 
    allocation: 5, 
    value: 42365, 
    change: +7.1, 
    assets: ['Residential', 'Commercial', 'Industrial'],
    color: 'bg-purple-500',
    risk: 'Medium'
  }
];

const aiRecommendations = [
  {
    action: 'Increase',
    category: 'Bonds',
    percentage: '+5%',
    reason: 'Market volatility expected, increase stability',
    impact: 'Reduce portfolio risk by 12%'
  },
  {
    action: 'Decrease',
    category: 'Equities',
    percentage: '-3%',
    reason: 'Tech sector showing overvaluation signals',
    impact: 'Improve risk-adjusted returns'
  },
  {
    action: 'Hold',
    category: 'Crypto',
    percentage: '0%',
    reason: 'Current allocation optimal for risk tolerance',
    impact: 'Maintain growth potential'
  }
];

export const SmartPortfolio: React.FC = () => {
  const totalValue = portfolioAssets.reduce((sum, asset) => sum + asset.value, 0);

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
          <h1 className="text-4xl font-bold text-light-text dark:text-dark-text font-editorial">Smart Portfolio</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">
            AI-optimized asset allocation across all markets
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-lime-accent text-dark-base px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
        >
          <Zap className="w-5 h-5" />
          <span>Auto-Optimize</span>
        </motion.button>
      </motion.div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Portfolio Value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-light-surface to-light-glass dark:from-dark-surface dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass transition-colors duration-300"
        >
          <div className="flex items-center space-x-3 mb-6">
            <PieChart className="w-6 h-6 text-lime-accent" />
            <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">Total Portfolio</h2>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="text-center"
          >
            <p className="text-5xl font-bold text-lime-accent font-editorial mb-2">
              ${totalValue.toLocaleString()}
            </p>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-lime-accent" />
              <span className="text-lime-accent text-lg">+15.2% this month</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Asset Allocation Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-8 transition-colors duration-300"
        >
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-6">Asset Allocation</h3>
          <div className="space-y-4">
            {portfolioAssets.map((asset, index) => (
              <div key={asset.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-light-text dark:text-dark-text font-medium">{asset.category}</span>
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">{asset.allocation}%</span>
                </div>
                <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${asset.allocation}%` }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    className={`h-2 ${asset.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Asset Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioAssets.map((asset, index) => (
          <motion.div
            key={asset.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-lime-accent/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text font-editorial">{asset.category}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                asset.risk === 'Very High' ? 'bg-red-500/20 text-red-400' :
                asset.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                asset.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {asset.risk} Risk
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-light-text-secondary dark:text-dark-text-secondary">Value</span>
                <span className="text-light-text dark:text-dark-text font-bold">${asset.value.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-light-text-secondary dark:text-dark-text-secondary">Change</span>
                <div className="flex items-center space-x-1">
                  {asset.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-lime-accent" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={asset.change >= 0 ? 'text-lime-accent' : 'text-red-400'}>
                    {asset.change > 0 ? '+' : ''}{asset.change}%
                  </span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-light-border dark:border-dark-border">
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-1">Top Holdings:</p>
                <div className="flex flex-wrap gap-1">
                  {asset.assets.slice(0, 3).map((holding) => (
                    <span key={holding} className="text-xs bg-light-glass dark:bg-dark-glass px-2 py-1 rounded">
                      {holding}
                    </span>
                  ))}
                  {asset.assets.length > 3 && (
                    <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                      +{asset.assets.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-gradient-to-br from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-6 h-6 text-lime-accent" />
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">AI Rebalancing Recommendations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiRecommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="bg-light-glass dark:bg-dark-glass rounded-xl p-4 hover:bg-light-border/20 dark:hover:bg-dark-border/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-bold ${
                  rec.action === 'Increase' ? 'text-lime-accent' :
                  rec.action === 'Decrease' ? 'text-red-400' :
                  'text-blue-400'
                }`}>
                  {rec.action} {rec.category}
                </span>
                <span className="text-lg font-bold text-light-text dark:text-dark-text">{rec.percentage}</span>
              </div>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">{rec.reason}</p>
              <p className="text-xs text-lime-accent">{rec.impact}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 py-3 bg-lime-accent text-dark-base rounded-xl font-medium hover:shadow-glow transition-all"
        >
          Apply AI Recommendations
        </motion.button>
      </motion.div>
    </div>
  );
};