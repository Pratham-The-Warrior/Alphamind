import { Target, AlertTriangle, TrendingUp } from 'lucide-react';
import { MarketItem, TopMover } from '../types/market';
import { PortfolioHolding, SectorAllocation } from '../types/portfolio';
import { MarketPrediction, MarketSentiment, TechnicalIndicator, RiskMetric } from '../types/optimizer';

// Terminal Dashboard Data
export const terminalDashboardMetrics = [
    { label: 'TOTAL VALUE', value: '847,293.45', change: '+12.4%', changeType: 'up' },
    { label: 'P&L TODAY', value: '+23,847.32', change: '+2.89%', changeType: 'up' },
    { label: 'BETA', value: '1.24', change: '+0.08', changeType: 'up' },
    { label: 'SHARPE RATIO', value: '2.14', change: '+0.18', changeType: 'up' },
];

export const terminalTopPositions = [
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

export const terminalMarketOverview = [
    { symbol: 'SPX', value: '4,567.89', change: '+23.45', pct: '+0.52%', volume: '3.2B' },
    { symbol: 'NDX', value: '14,234.56', change: '+89.12', pct: '+0.63%', volume: '2.8B' },
    { symbol: 'DJI', value: '34,567.89', change: '-45.67', pct: '-0.13%', volume: '1.9B' },
    { symbol: 'VIX', value: '18.45', change: '-1.23', pct: '-6.25%', volume: '245M' },
];

// AI Dashboard Data
export const aiInsights = [
    {
        type: 'opportunity',
        title: 'High-Yield Bond Opportunity',
        description: 'AI detected 12.3% yield potential in emerging market bonds',
        confidence: 87,
        risk: 'Medium',
        action: 'Consider allocation',
        icon: Target,
        color: 'text-lime-accent'
    },
    {
        type: 'warning',
        title: 'Tech Sector Overexposure',
        description: 'Portfolio shows 45% tech allocation - recommend diversification',
        confidence: 94,
        risk: 'High',
        action: 'Rebalance needed',
        icon: AlertTriangle,
        color: 'text-orange-400'
    },
    {
        type: 'optimization',
        title: 'Crypto Momentum Signal',
        description: 'Bitcoin showing strong momentum indicators for next 30 days',
        confidence: 76,
        risk: 'High',
        action: 'Monitor closely',
        icon: TrendingUp,
        color: 'text-blue-400'
    }
];

export const aiPortfolioMetrics = [
    { label: 'Total Portfolio Value', value: '$847,293', change: '+12.4%', period: '30 days' },
    { label: 'AI Confidence Score', value: '89/100', change: '+5 points', period: 'this week' },
    { label: 'Risk-Adjusted Return', value: '18.7%', change: '+2.3%', period: 'YTD' },
    { label: 'Sharpe Ratio', value: '2.14', change: '+0.18', period: 'current' }
];

// Terminal Markets Data
export const marketData: MarketItem[] = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.84, change: 2.34, pct: 1.25, volume: '45.2M', bid: 189.82, ask: 189.86, market: 'NASDAQ' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.67, change: -1.23, pct: -0.85, volume: '23.1M', bid: 142.65, ask: 142.69, market: 'NASDAQ' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 234.56, change: 5.67, pct: 2.48, volume: '67.8M', bid: 234.54, ask: 234.58, market: 'NASDAQ' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.92, change: 3.45, pct: 0.92, volume: '28.9M', bid: 378.90, ask: 378.94, market: 'NASDAQ' },
    { symbol: 'BTC-USD', name: 'Bitcoin', price: 67234.56, change: 1234.56, pct: 1.87, volume: '2.1B', bid: 67230.00, ask: 67240.00, market: 'CRYPTO' },
    { symbol: 'ETH-USD', name: 'Ethereum', price: 3456.78, change: 89.12, pct: 2.64, volume: '1.8B', bid: 3456.00, ask: 3457.00, market: 'CRYPTO' },
    { symbol: 'GLD', name: 'Gold ETF', price: 189.45, change: 0.89, pct: 0.47, volume: '12.3M', bid: 189.43, ask: 189.47, market: 'COMMODITY' },
    { symbol: 'TLT', name: '20+ Year Treasury', price: 89.34, change: -0.45, pct: -0.50, volume: '8.7M', bid: 89.32, ask: 89.36, market: 'BOND' },
    { symbol: 'SPY', name: 'SPDR S&P 500', price: 456.78, change: 2.34, pct: 0.52, volume: '89.2M', bid: 456.76, ask: 456.80, market: 'ETF' },
    { symbol: 'QQQ', name: 'Invesco QQQ', price: 378.45, change: 3.21, pct: 0.86, volume: '45.6M', bid: 378.43, ask: 378.47, market: 'ETF' },
];

export const marketCategories = ['ALL', 'STOCKS', 'CRYPTO', 'BONDS', 'COMMODITIES', 'ETFS', 'FOREX'];

export const topMovers: TopMover[] = [
    { symbol: 'NVDA', change: '+8.45%', volume: '125M' },
    { symbol: 'AMD', change: '+6.23%', volume: '89M' },
    { symbol: 'TSLA', change: '+5.67%', volume: '67M' },
    { symbol: 'META', change: '-4.32%', volume: '45M' },
    { symbol: 'NFLX', change: '-3.89%', volume: '34M' },
];

// Terminal Portfolio Data
export const portfolioHoldings: PortfolioHolding[] = [
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
];

export const sectorAllocation: SectorAllocation[] = [
    { sector: 'Technology', weight: 36.9, value: 604637.50, pnl: 26234.50 },
    { sector: 'Financials', weight: 18.3, value: 91404, pnl: 4002.00 },
    { sector: 'Healthcare', weight: 15.7, value: 69156, pnl: 1776.00 },
    { sector: 'Consumer Disc.', weight: 12.4, value: 45321, pnl: -843.00 },
    { sector: 'Energy', weight: 9.2, value: 34120, pnl: 2156.00 },
    { sector: 'Others', weight: 7.5, value: 22654.95, pnl: -478.18 },
];

// Terminal Optimizer Data
export const marketPredictions: MarketPrediction[] = [
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
        keyFactors: ['Strong iPhone demands', 'Services growth', 'AI integration focus'],
        riskLevel: 'LOW',
        expectedReturn: '+8.2%'
    },
    {
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        currentPrice: 234.56,
        predictedPrice: 215.00,
        confidence: 64,
        direction: 'SELL',
        timeframe: '14D',
        technicalScore: 4.5,
        fundamentalScore: 6.2,
        sentimentScore: 3.8,
        newsImpact: 'NEGATIVE',
        keyFactors: ['Margin pressures', 'Inventory levels', 'Macro headwinds'],
        riskLevel: 'HIGH',
        expectedReturn: '-8.3%'
    }
];

export const marketSentiment: MarketSentiment[] = [
    { source: 'Reuters', sentiment: 'BULLISH', score: 78, articles: 234 },
    { source: 'Bloomberg', sentiment: 'NEUTRAL', score: 52, articles: 189 },
    { source: 'WSJ', sentiment: 'BEARISH', score: 34, articles: 156 },
    { source: 'Financial Times', sentiment: 'NEUTRAL', score: 48, articles: 123 }
];

export const technicalIndicators: TechnicalIndicator[] = [
    { indicator: 'RSI (14)', value: 67.8, signal: 'NEUTRAL', description: 'Relative Strength Index' },
    { indicator: 'MACD', value: 2.34, signal: 'BUY', description: 'Moving Average Convergence Divergence' },
    { indicator: 'Bollinger Bands', value: 0.78, signal: 'SELL', description: 'Price vs Bollinger Bands' },
    { indicator: 'ADX', value: 45.6, signal: 'STRONG', description: 'Average Directional Index' }
];

export const riskMetrics: RiskMetric[] = [
    { metric: 'Portfolio VaR (95%)', current: '-$42,350', optimized: '-$31,240', improvement: '+26%' },
    { metric: 'Expected Shortfall', current: '-$67,890', optimized: '-$48,230', improvement: '+29%' },
    { metric: 'Sharpe Ratio', current: '1.87', optimized: '2.34', improvement: '+25%' },
    { metric: 'Max Drawdown', current: '-15.4%', optimized: '-8.2%', improvement: '+47%' }
];

// Terminal Analytics Data
export const performanceData = [
    { period: '1D', portfolio: '+2.89%', benchmark: '+1.24%', alpha: '+1.65%' },
    { period: '1W', portfolio: '+5.67%', benchmark: '+3.21%', alpha: '+2.46%' },
    { period: '1M', portfolio: '+12.4%', benchmark: '+8.9%', alpha: '+3.5%' },
    { period: '3M', portfolio: '+18.7%', benchmark: '+14.2%', alpha: '+4.5%' },
    { period: '6M', portfolio: '+24.8%', benchmark: '+19.1%', alpha: '+5.7%' },
    { period: '1Y', portfolio: '+31.2%', benchmark: '+22.8%', alpha: '+8.4%' },
];

export const analyticsRiskMetrics = [
    { metric: 'Value at Risk (95%)', value: '-$42,350', description: '1-Day VaR' },
    { metric: 'Expected Shortfall', value: '-$67,890', description: 'Conditional VaR' },
    { metric: 'Maximum Drawdown', value: '-8.4%', description: 'Peak to Trough' },
    { metric: 'Calmar Ratio', value: '3.71', description: 'Return/Max DD' },
    { metric: 'Sortino Ratio', value: '2.89', description: 'Downside Risk Adj.' },
    { metric: 'Information Ratio', value: '1.45', description: 'Active Return/Risk' },
];

export const correlationMatrix = [
    { asset: 'SPY', correlation: 0.78 },
    { asset: 'QQQ', correlation: 0.85 },
    { asset: 'IWM', correlation: 0.62 },
    { asset: 'EFA', correlation: 0.45 },
    { asset: 'EEM', correlation: 0.38 },
    { asset: 'TLT', correlation: -0.23 },
    { asset: 'GLD', correlation: -0.15 },
    { asset: 'VIX', correlation: -0.67 },
];

export const attributionData = [
    { factor: 'Asset Selection', contribution: '+4.2%', description: 'Stock picking alpha' },
    { factor: 'Sector Allocation', contribution: '+2.1%', description: 'Sector timing' },
    { factor: 'Market Timing', contribution: '+1.8%', description: 'Entry/exit timing' },
    { factor: 'Currency Effect', contribution: '-0.3%', description: 'FX impact' },
    { factor: 'Interaction Effect', contribution: '+0.6%', description: 'Combined effects' },
];

// AI Analytics Data
export const aiAnalyticsData = [
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

export const aiPredictions = [
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

export const aiRiskFactors = [
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

// All Markets Data
export const allMarketsCategories = [
    { id: 'all', label: 'All Markets', count: 2847 },
    { id: 'stocks', label: 'Stocks', count: 1234 },
    { id: 'crypto', label: 'Crypto', count: 456 },
    { id: 'bonds', label: 'Bonds', count: 789 },
    { id: 'commodities', label: 'Commodities', count: 234 },
    { id: 'forex', label: 'Forex', count: 134 }
];

export const allMarketsAssets = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.84, change: 2.34, changePercent: 1.25, market: 'NASDAQ', category: 'stocks' },
    { symbol: 'BTC', name: 'Bitcoin', price: 67234.56, change: 1234.56, changePercent: 1.87, market: 'Crypto', category: 'crypto' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.67, change: -1.23, changePercent: -0.85, market: 'NASDAQ', category: 'stocks' },
    { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: 89.12, changePercent: 2.64, market: 'Crypto', category: 'crypto' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 234.56, change: 5.67, changePercent: 2.48, market: 'NASDAQ', category: 'stocks' },
    { symbol: 'GLD', name: 'Gold ETF', price: 189.45, change: 0.89, changePercent: 0.47, market: 'NYSE', category: 'commodities' },
    { symbol: 'TLT', name: '20+ Year Treasury', price: 89.34, change: -0.45, changePercent: -0.50, market: 'NYSE', category: 'bonds' },
    { symbol: 'SOL', name: 'Solana', price: 156.78, change: 12.34, changePercent: 8.54, market: 'Crypto', category: 'crypto' }
];

export const allMarketsIndices = [
    { name: 'S&P 500', value: 4567.89, change: 23.45, changePercent: 0.52 },
    { name: 'NASDAQ', value: 14234.56, change: 89.12, changePercent: 0.63 },
    { name: 'Dow Jones', value: 34567.89, change: -45.67, changePercent: -0.13 },
    { name: 'Bitcoin Index', value: 67234.56, change: 1234.56, changePercent: 1.87 }
];

// Smart Portfolio Data
export const smartPortfolioAssets = [
    {
        category: 'Equities',
        allocation: 45,
        value: 381283,
        change: 12.4,
        assets: ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
        color: 'bg-blue-500',
        risk: 'High'
    },
    {
        category: 'Bonds',
        allocation: 25,
        value: 211823,
        change: 3.2,
        assets: ['US Treasury', 'Corporate Bonds', 'Municipal'],
        color: 'bg-green-500',
        risk: 'Low'
    },
    {
        category: 'Crypto',
        allocation: 15,
        value: 127094,
        change: 28.7,
        assets: ['BTC', 'ETH', 'SOL', 'ADA'],
        color: 'bg-orange-500',
        risk: 'Very High'
    },
    {
        category: 'Commodities',
        allocation: 10,
        value: 84729,
        change: 5.8,
        assets: ['Gold', 'Silver', 'Oil', 'Copper'],
        color: 'bg-yellow-500',
        risk: 'Medium'
    },
    {
        category: 'REITs',
        allocation: 5,
        value: 42365,
        change: 7.1,
        assets: ['Residential', 'Commercial', 'Industrial'],
        color: 'bg-purple-500',
        risk: 'Medium'
    }
];

export const smartPortfolioRecommendations = [
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


