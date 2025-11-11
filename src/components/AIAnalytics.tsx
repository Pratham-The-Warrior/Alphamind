import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Brain,
  Target,
  AlertCircle,
  Zap,
} from "lucide-react";

// later will be automated //
const analyticsData = [
  {
    title: "Portfolio Performance",
    value: "+18.7%",
    subtitle: "vs S&P 500: +12.3%",
    trend: "up",
    confidence: 94,
  },
  {
    title: "Risk Score",
    value: "6.2/10",
    subtitle: "Moderate Risk",
    trend: "stable",
    confidence: 87,
  },
  {
    title: "Sharpe Ratio",
    value: "2.14",
    subtitle: "Excellent",
    trend: "up",
    confidence: 91,
  },
  {
    title: "Max Drawdown",
    value: "-8.4%",
    subtitle: "Better than benchmark",
    trend: "up",
    confidence: 89,
  },
];

// later we will automate these //
const predictions = [
  {
    asset: "Technology Sector",
    prediction: "Bullish",
    timeframe: "3 months",
    confidence: 78,
    expectedReturn: "+12-18%",
    reasoning: "AI adoption acceleration and strong earnings growth",
  },
  {
    asset: "Emerging Markets",
    prediction: "Neutral",
    timeframe: "6 months",
    confidence: 65,
    expectedReturn: "+3-8%",
    reasoning: "Mixed economic indicators, currency volatility",
  },
  {
    asset: "Cryptocurrency",
    prediction: "Bullish",
    timeframe: "1 month",
    confidence: 82,
    expectedReturn: "+15-25%",
    reasoning: "Institutional adoption and regulatory clarity",
  },
];
// later we will use news predictor here...
const riskFactors = [
  {
    factor: "Market Volatility",
    level: "Medium",
    impact: "Portfolio may see 10-15% swings",
  },
  {
    factor: "Interest Rate Risk",
    level: "Low",
    impact: "Minimal impact on current allocation",
  },
  {
    factor: "Sector Concentration",
    level: "High",
    impact: "Tech exposure at 45% - consider diversification",
  },
  {
    factor: "Currency Risk",
    level: "Medium",
    impact: "International holdings subject to FX fluctuations",
  },
];

export const AIAnalytics: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-light-text dark:text-dark-text font-editorial">
            AI Analytics
          </h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">
            Advanced AI-powered insights and market predictions
          </p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-2 bg-lime-accent/10 px-4 py-2 rounded-full"
        >
          <Brain className="w-5 h-5 text-lime-accent" />
          <span className="text-lime-accent font-medium">
            AI Analysis Active
          </span>
        </motion.div>
      </motion.div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-lime-accent/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                {metric.title}
              </h3>
              <div className="flex items-center space-x-1">
                {metric.trend === "up" && (
                  <TrendingUp className="w-4 h-4 text-lime-accent" />
                )}
                <span className="text-xs bg-lime-accent/20 text-lime-accent px-2 py-1 rounded-full">
                  {metric.confidence}%
                </span>
              </div>
            </div>
            <motion.p
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial mb-1"
            >
              {metric.value}
            </motion.p>
            <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
              {metric.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

      {/* AI Predictions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-6 h-6 text-lime-accent" />
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">
            AI Market Predictions
          </h2>
        </div>

        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-light-glass dark:bg-dark-glass rounded-xl p-6 hover:bg-light-border/20 dark:hover:bg-dark-border/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text font-editorial">
                    {prediction.asset}
                  </h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {prediction.timeframe} outlook
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      prediction.prediction === "Bullish"
                        ? "bg-lime-accent/20 text-lime-accent"
                        : prediction.prediction === "Bearish"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {prediction.prediction}
                  </span>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1">
                    {prediction.confidence}% confidence
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">
                    Expected Return
                  </p>
                  <p className="text-lg font-bold text-lime-accent">
                    {prediction.expectedReturn}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">
                    AI Reasoning
                  </p>
                  <p className="text-sm text-light-text dark:text-dark-text">
                    {prediction.reasoning}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Risk Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 transition-colors duration-300"
        >
          <div className="flex items-center space-x-3 mb-6">
            <AlertCircle className="w-6 h-6 text-orange-400" />
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">
              Risk Factors
            </h2>
          </div>

          <div className="space-y-4">
            {riskFactors.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-start justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-medium text-light-text dark:text-dark-text">
                      {risk.factor}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        risk.level === "High"
                          ? "bg-red-500/20 text-red-400"
                          : risk.level === "Medium"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {risk.level}
                    </span>
                  </div>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {risk.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-gradient-to-br from-lime-accent/10 to-lime-accent/5 border border-lime-accent/20 rounded-2xl p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-6 h-6 text-lime-accent" />
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">
              AI Recommendations
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-xl p-4">
              <h3 className="font-bold text-light-text dark:text-dark-text mb-2">
                Immediate Actions
              </h3>
              <ul className="space-y-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <li>• Reduce tech sector exposure by 5-8%</li>
                <li>• Increase bond allocation for stability</li>
                <li>• Consider emerging market opportunities</li>
              </ul>
            </div>

            <div className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-xl p-4">
              <h3 className="font-bold text-light-text dark:text-dark-text mb-2">
                Long-term Strategy
              </h3>
              <ul className="space-y-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <li>• Maintain 15-20% alternative investments</li>
                <li>• Dollar-cost average into crypto positions</li>
                <li>• Monitor interest rate environment</li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-lime-accent text-dark-base rounded-xl font-medium hover:shadow-glow transition-all"
            >
              Apply AI Strategy
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
