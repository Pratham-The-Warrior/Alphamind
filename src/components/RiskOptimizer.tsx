import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const riskProfiles = [
  { id: 'conservative', label: 'Conservative', risk: 'Low', expectedReturn: '6-8%', description: 'Capital preservation focused' },
  { id: 'moderate', label: 'Moderate', risk: 'Medium', expectedReturn: '8-12%', description: 'Balanced growth and stability' },
  { id: 'aggressive', label: 'Aggressive', risk: 'High', expectedReturn: '12-18%', description: 'Maximum growth potential' },
  { id: 'custom', label: 'Custom', risk: 'Variable', expectedReturn: 'Variable', description: 'AI-optimized for your goals' }
];

const optimizationScenarios = [
  {
    name: 'Current Portfolio',
    allocation: { stocks: 45, bonds: 25, crypto: 15, commodities: 10, reits: 5 },
    expectedReturn: 15.2,
    volatility: 18.4,
    sharpeRatio: 1.87,
    maxDrawdown: 22.1
  },
  {
    name: 'AI Optimized',
    allocation: { stocks: 38, bonds: 32, crypto: 12, commodities: 13, reits: 5 },
    expectedReturn: 14.8,
    volatility: 14.2,
    sharpeRatio: 2.14,
    maxDrawdown: 16.8
  },
  {
    name: 'Conservative',
    allocation: { stocks: 25, bonds: 50, crypto: 5, commodities: 15, reits: 5 },
    expectedReturn: 9.4,
    volatility: 8.7,
    sharpeRatio: 1.92,
    maxDrawdown: 8.2
  }
];

const riskMetrics = [
  { label: 'Value at Risk (95%)', current: '$42,350', optimized: '$31,240', improvement: '+26%' },
  { label: 'Beta vs Market', current: '1.24', optimized: '0.98', improvement: '+21%' },
  { label: 'Correlation Risk', current: '0.78', optimized: '0.62', improvement: '+21%' },
  { label: 'Tail Risk', current: 'High', optimized: 'Medium', improvement: 'Reduced' }
];

export const RiskOptimizer: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState('moderate');
  const [selectedScenario, setSelectedScenario] = useState('AI Optimized');

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
          <h1 className="text-4xl font-bold text-light-text dark:text-dark-text font-editorial">Risk Optimizer</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">
            AI-powered portfolio optimization to minimize risk and maximize returns
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-lime-accent text-dark-base px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
        >
          <Zap className="w-5 h-5" />
          <span>Optimize Now</span>
        </motion.button>
      </motion.div>

      {/* Risk Profile Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 transition-colors duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-6 h-6 text-lime-accent" />
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">Risk Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {riskProfiles.map((profile, index) => (
            <motion.button
              key={profile.id}
              onClick={() => setSelectedProfile(profile.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                selectedProfile === profile.id
                  ? 'border-lime-accent bg-lime-accent/10'
                  : 'border-light-border dark:border-dark-border bg-light-glass dark:bg-dark-glass hover:border-lime-accent/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-light-text dark:text-dark-text">{profile.label}</h3>
                {selectedProfile === profile.id && (
                  <CheckCircle className="w-5 h-5 text-lime-accent" />
                )}
              </div>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">{profile.description}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  profile.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                  profile.risk === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                  profile.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {profile.risk} Risk
                </span>
                <span className="text-xs text-lime-accent font-medium">{profile.expectedReturn}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Optimization Scenarios */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-lime-accent" />
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">Optimization Scenarios</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {optimizationScenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              onClick={() => setSelectedScenario(scenario.name)}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                selectedScenario === scenario.name
                  ? 'border-lime-accent bg-lime-accent/5'
                  : 'border-light-border dark:border-dark-border bg-light-glass dark:bg-dark-glass hover:border-lime-accent/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-light-text dark:text-dark-text font-editorial">{scenario.name}</h3>
                {selectedScenario === scenario.name && (
                  <CheckCircle className="w-5 h-5 text-lime-accent" />
                )}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Expected Return</span>
                  <span className="text-sm font-medium text-lime-accent">{scenario.expectedReturn}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Volatility</span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">{scenario.volatility}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Sharpe Ratio</span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">{scenario.sharpeRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Max Drawdown</span>
                  <span className="text-sm font-medium text-red-400">{scenario.maxDrawdown}%</span>
                </div>
              </div>

              {/* Allocation Chart */}
              <div className="mt-4 pt-4 border-t border-light-border dark:border-dark-border">
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2">Asset Allocation</p>
                <div className="space-y-1">
                  {Object.entries(scenario.allocation).map(([asset, percentage]) => (
                    <div key={asset} className="flex items-center justify-between">
                      <span className="text-xs text-light-text dark:text-dark-text capitalize">{asset}</span>
                      <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Risk Metrics Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 transition-colors duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">Risk Metrics Improvement</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-light-glass dark:bg-dark-glass rounded-xl p-4 hover:bg-light-border/20 dark:hover:bg-dark-border/20 transition-all duration-300"
            >
              <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">{metric.label}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Current</span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">{metric.current}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Optimized</span>
                  <span className="text-sm font-medium text-lime-accent">{metric.optimized}</span>
                </div>
                <div className="flex items-center justify-center pt-2">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-lime-accent" />
                    <span className="text-xs text-lime-accent font-medium">{metric.improvement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-4 bg-lime-accent text-dark-base rounded-xl font-medium hover:shadow-glow transition-all flex items-center justify-center space-x-2"
        >
          <Zap className="w-5 h-5" />
          <span>Apply Optimization</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border text-light-text dark:text-dark-text rounded-xl font-medium hover:border-lime-accent/30 transition-all flex items-center justify-center space-x-2"
        >
          <Target className="w-5 h-5" />
          <span>Simulate Changes</span>
        </motion.button>
      </motion.div>
    </div>
  );
};