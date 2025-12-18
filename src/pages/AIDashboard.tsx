import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Target } from 'lucide-react';

import {
  aiInsights,
  aiPortfolioMetrics as portfolioMetrics
} from '../services/mockData';

export const AIDashboard: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-light-text dark:text-dark-text font-editorial">AI Dashboard</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">
            Real-time AI analysis of your wealth optimization opportunities
          </p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-2 bg-lime-accent/10 px-4 py-2 rounded-full"
        >
          <Brain className="w-5 h-5 text-lime-accent" />
          <span className="text-lime-accent font-medium">AI Active</span>
        </motion.div>
      </motion.div>

      {/* Portfolio Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-lime-accent/30 transition-all duration-300"
          >
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-2">{metric.label}</p>
            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial"
            >
              {metric.value}
            </motion.p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lime-accent text-sm">{metric.change}</span>
              <span className="text-light-text-secondary dark:text-dark-text-secondary text-xs">{metric.period}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-6 h-6 text-lime-accent" />
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">AI Insights & Recommendations</h2>
        </div>

        <div className="space-y-4">
          {aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-light-glass dark:bg-dark-glass rounded-xl hover:bg-light-border/20 dark:hover:bg-dark-border/20 transition-all duration-300"
            >
              <div className={`p-2 rounded-full bg-light-surface dark:bg-dark-surface ${insight.color}`}>
                <insight.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-light-text dark:text-dark-text">{insight.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-lime-accent/20 text-lime-accent px-2 py-1 rounded-full">
                      {insight.confidence}% confidence
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${insight.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                      insight.risk === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                      {insight.risk} Risk
                    </span>
                  </div>
                </div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-2">
                  {insight.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-lime-accent text-sm font-medium hover:underline"
                >
                  {insight.action} →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-lime-accent/10 to-lime-accent/5 border border-lime-accent/20 rounded-xl p-6 cursor-pointer hover:shadow-glow transition-all duration-300"
        >
          <Shield className="w-8 h-8 text-lime-accent mb-4" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">Risk Analysis</h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            Get AI-powered risk assessment of your current portfolio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 cursor-pointer hover:shadow-glow transition-all duration-300"
        >
          <Zap className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">Auto-Optimize</h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            Let AI automatically rebalance your portfolio for maximum returns
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6 cursor-pointer hover:shadow-glow transition-all duration-300"
        >
          <Target className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">Goal Tracker</h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            Track progress towards your wealth goals with AI predictions
          </p>
        </motion.div>
      </div>
    </div>
  );
};