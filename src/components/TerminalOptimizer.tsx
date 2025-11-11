import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Activity, 
  AlertTriangle,
  Target,
  Brain,
  Newspaper,
  LineChart,
  Filter
} from 'lucide-react';

const marketPredictions = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: 189.84,
    predictedPrice: 205.50,
    confidence: 87,
    direction: 'BUY',
    timeframe: '30D',
    technicalScore: 8.2,
    fundamentalScore: 7.8,
    sentimentScore: 8.9,
    newsImpact: 'POSITIVE',
    keyFactors: ['Strong iPhone sales', 'Services growth', 'AI integration'],
    riskLevel: 'MEDIUM',
    expectedReturn: '+8.2%'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    currentPrice: 234.56,
    predictedPrice: 198.30,
    confidence: 73,
    direction: 'SELL',
    timeframe: '30D',
    technicalScore: 4.1,
    fundamentalScore: 5.8,
    sentimentScore: 3.2,
    newsImpact: 'NEGATIVE',
    keyFactors: ['Production concerns', 'Competition increase', 'Regulatory issues'],
    riskLevel: 'HIGH',
    expectedReturn: '-15.5%'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    currentPrice: 378.92,
    predictedPrice: 395.20,
    confidence: 91,
    direction: 'BUY',
    timeframe: '30D',
    technicalScore: 8.7,
    fundamentalScore: 9.1,
    sentimentScore: 8.4,
    newsImpact: 'POSITIVE',
    keyFactors: ['Cloud growth', 'AI leadership', 'Enterprise demand'],
    riskLevel: 'LOW',
    expectedReturn: '+4.3%'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    currentPrice: 456.78,
    predictedPrice: 520.40,
    confidence: 82,
    direction: 'STRONG_BUY',
    timeframe: '30D',
    technicalScore: 9.2,
    fundamentalScore: 8.8,
    sentimentScore: 9.1,
    newsImpact: 'VERY_POSITIVE',
    keyFactors: ['AI chip demand', 'Data center growth', 'Gaming recovery'],
    riskLevel: 'MEDIUM',
    expectedReturn: '+13.9%'
  },
  {
    symbol: 'BTC-USD',
    name: 'Bitcoin',
    currentPrice: 67234.56,
    predictedPrice: 78500.00,
    confidence: 68,
    direction: 'BUY',
    timeframe: '30D',
    technicalScore: 7.1,
    fundamentalScore: 6.8,
    sentimentScore: 7.9,
    newsImpact: 'POSITIVE',
    keyFactors: ['Institutional adoption', 'ETF inflows', 'Halving effect'],
    riskLevel: 'VERY_HIGH',
    expectedReturn: '+16.8%'
  }
];

const marketSentiment = [
  { source: 'Reuters', sentiment: 'BULLISH', score: 78, articles: 234 },
  { source: 'Bloomberg', sentiment: 'NEUTRAL', score: 52, articles: 189 },
  { source: 'WSJ', sentiment: 'BEARISH', score: 34, articles: 156 },
  { source: 'CNBC', sentiment: 'BULLISH', score: 67, articles: 298 },
  { source: 'Financial Times', sentiment: 'NEUTRAL', score: 48, articles: 123 }
];

const technicalIndicators = [
  { indicator: 'RSI (14)', value: 67.8, signal: 'NEUTRAL', description: 'Relative Strength Index' },
  { indicator: 'MACD', value: 2.34, signal: 'BUY', description: 'Moving Average Convergence Divergence' },
  { indicator: 'Bollinger Bands', value: 0.78, signal: 'SELL', description: 'Price vs Bollinger Bands' },
  { indicator: 'Stochastic', value: 23.4, signal: 'BUY', description: 'Stochastic Oscillator' },
  { indicator: 'Williams %R', value: -18.9, signal: 'BUY', description: 'Williams Percent Range' },
  { indicator: 'ADX', value: 45.6, signal: 'STRONG', description: 'Average Directional Index' }
];

const riskMetrics = [
  { metric: 'Portfolio VaR (95%)', current: '-$42,350', optimized: '-$31,240', improvement: '+26%' },
  { metric: 'Expected Shortfall', current: '-$67,890', optimized: '-$48,230', improvement: '+29%' },
  { metric: 'Sharpe Ratio', current: '1.87', optimized: '2.34', improvement: '+25%' },
  { metric: 'Maximum Drawdown', current: '-12.4%', optimized: '-8.7%', improvement: '+30%' },
  { metric: 'Beta vs Market', current: '1.24', optimized: '0.98', improvement: '+21%' },
  { metric: 'Information Ratio', current: '0.67', optimized: '1.12', improvement: '+67%' }
];

export const TerminalOptimizer: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30D');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('MEDIUM');
  const [showTechnicals, setShowTechnicals] = useState(true);

  const timeframes = ['1D', '7D', '30D', '90D', '1Y'];
  const riskLevels = ['LOW', 'MEDIUM', 'HIGH', 'AGGRESSIVE'];

  return (
    <div className="p-4 space-y-4 h-full overflow-auto">
      {/* Header with Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-terminal-accent text-lg font-bold">MARKET OPTIMIZER</h1>
          <p className="text-terminal-text-muted text-xs">Statistical analysis, news sentiment & predictive modeling</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-text-muted text-xs">TIMEFRAME:</span>
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="terminal-input text-xs"
            >
              {timeframes.map(tf => (
                <option key={tf} value={tf}>{tf}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-terminal-text-muted text-xs">RISK:</span>
            <select 
              value={selectedRiskLevel}
              onChange={(e) => setSelectedRiskLevel(e.target.value)}
              className="terminal-input text-xs"
            >
              {riskLevels.map(risk => (
                <option key={risk} value={risk}>{risk}</option>
              ))}
            </select>
          </div>
          
          <button 
            onClick={() => setShowTechnicals(!showTechnicals)}
            className={`terminal-button px-3 py-1 ${showTechnicals ? 'bg-terminal-accent text-terminal-bg' : ''}`}
          >
            TECHNICALS
          </button>
        </div>
      </div>

      {/* Market Predictions Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="terminal-panel p-4"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-4 h-4 text-terminal-accent" />
          <span className="text-terminal-accent text-sm font-bold">MARKET PREDICTIONS & SIGNALS</span>
        </div>
        
        <div className="overflow-auto">
          <table className="w-full data-grid">
            <thead className="bg-terminal-surface">
              <tr className="border-b border-terminal-border">
                <th className="text-left p-2 text-terminal-text-muted text-xs">SYMBOL</th>
                <th className="text-right p-2 text-terminal-text-muted text-xs">CURRENT</th>
                <th className="text-right p-2 text-terminal-text-muted text-xs">TARGET</th>
                <th className="text-center p-2 text-terminal-text-muted text-xs">SIGNAL</th>
                <th className="text-right p-2 text-terminal-text-muted text-xs">RETURN</th>
                <th className="text-center p-2 text-terminal-text-muted text-xs">CONFIDENCE</th>
                <th className="text-center p-2 text-terminal-text-muted text-xs">TECH</th>
                <th className="text-center p-2 text-terminal-text-muted text-xs">FUND</th>
                <th className="text-center p-2 text-terminal-text-muted text-xs">NEWS</th>
                <th className="text-center p-2 text-terminal-text-muted text-xs">RISK</th>
              </tr>
            </thead>
            <tbody>
              {marketPredictions.map((pred, index) => (
                <motion.tr
                  key={pred.symbol}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-terminal-border hover:bg-terminal-surface"
                >
                  <td className="p-2">
                    <div>
                      <div className="text-terminal-text font-bold text-sm">{pred.symbol}</div>
                      <div className="text-terminal-text-muted text-xs">{pred.name}</div>
                    </div>
                  </td>
                  <td className="p-2 text-right text-terminal-text font-mono text-sm">
                    ${pred.currentPrice.toLocaleString()}
                  </td>
                  <td className="p-2 text-right text-terminal-text font-mono text-sm">
                    ${pred.predictedPrice.toLocaleString()}
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      pred.direction === 'STRONG_BUY' ? 'bg-terminal-success text-terminal-bg' :
                      pred.direction === 'BUY' ? 'bg-terminal-success bg-opacity-70 text-terminal-bg' :
                      pred.direction === 'SELL' ? 'bg-terminal-danger text-terminal-bg' :
                      'bg-terminal-warning text-terminal-bg'
                    }`}>
                      {pred.direction.replace('_', ' ')}
                    </span>
                  </td>
                  <td className={`p-2 text-right font-mono text-sm ${
                    pred.expectedReturn.startsWith('+') ? 'text-terminal-success' : 'text-terminal-danger'
                  }`}>
                    {pred.expectedReturn}
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-8 bg-terminal-surface h-1 rounded">
                        <div 
                          className="bg-terminal-accent h-1 rounded" 
                          style={{ width: `${pred.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-terminal-text text-xs">{pred.confidence}%</span>
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`text-sm font-mono ${
                      pred.technicalScore >= 7 ? 'text-terminal-success' :
                      pred.technicalScore >= 5 ? 'text-terminal-warning' :
                      'text-terminal-danger'
                    }`}>
                      {pred.technicalScore}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`text-sm font-mono ${
                      pred.fundamentalScore >= 7 ? 'text-terminal-success' :
                      pred.fundamentalScore >= 5 ? 'text-terminal-warning' :
                      'text-terminal-danger'
                    }`}>
                      {pred.fundamentalScore}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 text-xs rounded ${
                      pred.newsImpact === 'VERY_POSITIVE' ? 'bg-terminal-success bg-opacity-20 text-terminal-success' :
                      pred.newsImpact === 'POSITIVE' ? 'bg-terminal-success bg-opacity-20 text-terminal-success' :
                      pred.newsImpact === 'NEGATIVE' ? 'bg-terminal-danger bg-opacity-20 text-terminal-danger' :
                      'bg-terminal-warning bg-opacity-20 text-terminal-warning'
                    }`}>
                      {pred.newsImpact.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      pred.riskLevel === 'LOW' ? 'bg-terminal-success bg-opacity-20 text-terminal-success' :
                      pred.riskLevel === 'MEDIUM' ? 'bg-terminal-warning bg-opacity-20 text-terminal-warning' :
                      pred.riskLevel === 'HIGH' ? 'bg-terminal-danger bg-opacity-20 text-terminal-danger' :
                      'bg-terminal-red bg-opacity-20 text-terminal-red'
                    }`}>
                      {pred.riskLevel}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-4">
        {/* Technical Indicators */}
        {showTechnicals && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="terminal-panel p-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <LineChart className="w-4 h-4 text-terminal-blue" />
              <span className="text-terminal-blue text-sm font-bold">TECHNICAL INDICATORS</span>
            </div>
            
            <div className="space-y-3">
              {technicalIndicators.map((indicator, index) => (
                <div key={indicator.indicator} className="bg-terminal-surface p-3 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-terminal-text text-xs font-bold">{indicator.indicator}</span>
                    <span className={`px-2 py-1 text-xs rounded font-bold ${
                      indicator.signal === 'BUY' ? 'bg-terminal-success text-terminal-bg' :
                      indicator.signal === 'SELL' ? 'bg-terminal-danger text-terminal-bg' :
                      indicator.signal === 'STRONG' ? 'bg-terminal-accent text-terminal-bg' :
                      'bg-terminal-warning text-terminal-bg'
                    }`}>
                      {indicator.signal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-terminal-text font-mono text-sm">{indicator.value}</span>
                    <span className="text-terminal-text-muted text-xs">{indicator.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* News Sentiment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Newspaper className="w-4 h-4 text-terminal-warning" />
            <span className="text-terminal-warning text-sm font-bold">NEWS SENTIMENT</span>
          </div>
          
          <div className="space-y-3">
            {marketSentiment.map((news, index) => (
              <div key={news.source} className="bg-terminal-surface p-3 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-terminal-text text-sm font-bold">{news.source}</span>
                  <span className={`px-2 py-1 text-xs rounded ${
                    news.sentiment === 'BULLISH' ? 'bg-terminal-success bg-opacity-20 text-terminal-success' :
                    news.sentiment === 'BEARISH' ? 'bg-terminal-danger bg-opacity-20 text-terminal-danger' :
                    'bg-terminal-warning bg-opacity-20 text-terminal-warning'
                  }`}>
                    {news.sentiment}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 bg-terminal-surface h-1 rounded">
                      <div 
                        className={`h-1 rounded ${
                          news.sentiment === 'BULLISH' ? 'bg-terminal-success' :
                          news.sentiment === 'BEARISH' ? 'bg-terminal-danger' :
                          'bg-terminal-warning'
                        }`}
                        style={{ width: `${news.score}%` }}
                      ></div>
                    </div>
                    <span className="text-terminal-text text-xs font-mono">{news.score}</span>
                  </div>
                  <span className="text-terminal-text-muted text-xs">{news.articles} articles</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risk Optimization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="terminal-panel p-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-terminal-purple" />
            <span className="text-terminal-purple text-sm font-bold">RISK OPTIMIZATION</span>
          </div>
          
          <div className="space-y-3">
            {riskMetrics.map((risk, index) => (
              <div key={risk.metric} className="bg-terminal-surface p-3 rounded">
                <div className="text-terminal-text-muted text-xs mb-1">{risk.metric}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-terminal-text-muted">CURRENT: </span>
                    <span className="text-terminal-text font-mono">{risk.current}</span>
                  </div>
                  <div>
                    <span className="text-terminal-text-muted">OPTIMIZED: </span>
                    <span className="text-terminal-success font-mono">{risk.optimized}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-terminal-success" />
                    <span className="text-terminal-success text-xs font-bold">{risk.improvement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex space-x-4"
      >
        <button className="flex-1 bg-terminal-success text-terminal-bg py-3 px-6 font-bold text-sm hover:bg-opacity-90 transition-all">
          EXECUTE OPTIMIZATION
        </button>
        <button className="flex-1 bg-terminal-accent text-terminal-bg py-3 px-6 font-bold text-sm hover:bg-opacity-90 transition-all">
          BACKTEST STRATEGY
        </button>
        <button className="flex-1 bg-terminal-blue text-terminal-bg py-3 px-6 font-bold text-sm hover:bg-opacity-90 transition-all">
          EXPORT SIGNALS
        </button>
      </motion.div>
    </div>
  );
};