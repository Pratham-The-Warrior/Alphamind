import { Target, AlertTriangle, TrendingUp } from 'lucide-react';
import { MarketItem, TopMover } from '../types/market';
import { PortfolioHolding, SectorAllocation } from '../types/portfolio';
import { MarketPrediction, MarketSentiment, TechnicalIndicator, RiskMetric } from '../types/optimizer';

// Terminal Dashboard Data (India-focused)
export const terminalDashboardMetrics = [
    { label: 'TOTAL VALUE', value: '₹70,47,293', change: '+12.4%', changeType: 'up' },
    { label: 'P&L TODAY', value: '+₹1,98,473', change: '+2.89%', changeType: 'up' },
    { label: 'BETA', value: '1.24', change: '+0.08', changeType: 'up' },
    { label: 'SHARPE RATIO', value: '2.14', change: '+0.18', changeType: 'up' },
];

export const terminalTopPositions = [
    {
        symbol: 'RELIANCE',
        shares: '250',
        avgCost: '2,456.50',
        currentPrice: '2,678.35',
        pnl: '+55,462.50',
        pnlPct: '+9.03%',
        weight: '15.2%'
    },
    {
        symbol: 'TCS',
        shares: '150',
        avgCost: '3,845.20',
        currentPrice: '4,012.75',
        pnl: '+25,132.50',
        pnlPct: '+4.36%',
        weight: '12.8%'
    },
    {
        symbol: 'INFY',
        shares: '300',
        avgCost: '1,678.90',
        currentPrice: '1,612.45',
        pnl: '-19,935.00',
        pnlPct: '-3.96%',
        weight: '8.9%'
    },
    {
        symbol: 'HDFCBANK',
        shares: '200',
        avgCost: '1,589.45',
        currentPrice: '1,678.90',
        pnl: '+17,890.00',
        pnlPct: '+5.63%',
        weight: '7.3%'
    },
];

export const terminalMarketOverview = [
    { symbol: 'NIFTY 50', value: '24,567.85', change: '+234.50', pct: '+0.96%', volume: '18.2Cr' },
    { symbol: 'SENSEX', value: '81,234.65', change: '+789.25', pct: '+0.98%', volume: '3.8Cr' },
    { symbol: 'BANKNIFTY', value: '52,345.20', change: '-156.70', pct: '-0.30%', volume: '12.5Cr' },
    { symbol: 'INDIA VIX', value: '13.45', change: '-0.78', pct: '-5.48%', volume: '2.4Cr' },
];

// AI Dashboard Data
export const aiInsights = [
    {
        type: 'opportunity',
        title: 'IT Sector Breakout',
        description: 'AI detected strong momentum in Indian IT stocks with 15.3% upside potential',
        confidence: 87,
        risk: 'Medium',
        action: 'Consider allocation',
        icon: Target,
        color: 'text-lime-accent'
    },
    {
        type: 'warning',
        title: 'Banking Sector Overexposure',
        description: 'Portfolio shows 42% banking allocation - recommend diversification',
        confidence: 94,
        risk: 'High',
        action: 'Rebalance needed',
        icon: AlertTriangle,
        color: 'text-orange-400'
    },
    {
        type: 'optimization',
        title: 'Pharma Sector Signal',
        description: 'Defensive pharma stocks showing strong momentum for next 30 days',
        confidence: 76,
        risk: 'Low',
        action: 'Monitor closely',
        icon: TrendingUp,
        color: 'text-blue-400'
    }
];

export const aiPortfolioMetrics = [
    { label: 'Total Portfolio Value', value: '₹70,47,293', change: '+12.4%', period: '30 days' },
    { label: 'AI Confidence Score', value: '89/100', change: '+5 points', period: 'this week' },
    { label: 'Risk-Adjusted Return', value: '18.7%', change: '+2.3%', period: 'YTD' },
    { label: 'Sharpe Ratio', value: '2.14', change: '+0.18', period: 'current' }
];

// Terminal Markets Data (Indian Stocks & Markets)
export const marketData: MarketItem[] = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2678.35, change: 45.80, pct: 1.74, volume: '12.5Cr', bid: 2677.50, ask: 2679.20, market: 'NSE' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 4012.75, change: -28.45, pct: -0.70, volume: '5.2Cr', bid: 4011.80, ask: 4013.70, market: 'NSE' },
    { symbol: 'INFY', name: 'Infosys Ltd', price: 1612.45, change: 23.60, pct: 1.49, volume: '8.7Cr', bid: 1611.50, ask: 1613.40, market: 'NSE' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1678.90, change: 18.35, pct: 1.10, volume: '9.1Cr', bid: 1678.10, ask: 1679.70, market: 'NSE' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', price: 1245.60, change: -12.30, pct: -0.98, volume: '7.8Cr', bid: 1244.80, ask: 1246.40, market: 'NSE' },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel', price: 1567.80, change: 34.50, pct: 2.25, volume: '4.3Cr', bid: 1566.90, ask: 1568.70, market: 'NSE' },
    { symbol: 'GOLD', name: 'Gold MCX', price: 62450.00, change: 285.00, pct: 0.46, volume: '2.1Cr', bid: 62440.00, ask: 62460.00, market: 'MCX' },
    { symbol: 'SILVER', name: 'Silver MCX', price: 74820.00, change: -145.00, pct: -0.19, volume: '1.8Cr', bid: 74810.00, ask: 74830.00, market: 'MCX' },
    { symbol: 'NIFTYBEES', name: 'Nippon India ETF', price: 245.67, change: 2.34, pct: 0.96, volume: '15.2Cr', bid: 245.60, ask: 245.74, market: 'NSE' },
    { symbol: 'BANKBEES', name: 'Kotak Bank ETF', price: 523.45, change: -1.56, pct: -0.30, volume: '8.6Cr', bid: 523.38, ask: 523.52, market: 'NSE' },
];

export const marketCategories = ['ALL', 'STOCKS', 'CRYPTO', 'BONDS', 'COMMODITIES', 'ETFS', 'FOREX'];

export const topMovers: TopMover[] = [
    { symbol: 'TATAMOTORS', change: '+5.45%', volume: '18Cr' },
    { symbol: 'ADANIENT', change: '+4.23%', volume: '12Cr' },
    { symbol: 'BAJFINANCE', change: '+3.67%', volume: '8Cr' },
    { symbol: 'WIPRO', change: '-3.32%', volume: '6Cr' },
    { symbol: 'SBIN', change: '-2.89%', volume: '14Cr' },
];

// Terminal Portfolio Data (Indian Holdings)
export const portfolioHoldings: PortfolioHolding[] = [
    {
        symbol: 'RELIANCE',
        name: 'Reliance Industries',
        shares: 250,
        avgCost: 2456.50,
        currentPrice: 2678.35,
        marketValue: 669587.50,
        pnl: 55462.50,
        pnlPct: 9.03,
        weight: 15.2,
        sector: 'Energy'
    },
    {
        symbol: 'TCS',
        name: 'Tata Consultancy Services',
        shares: 150,
        avgCost: 3845.20,
        currentPrice: 4012.75,
        marketValue: 601912.50,
        pnl: 25132.50,
        pnlPct: 4.36,
        weight: 12.8,
        sector: 'Technology'
    },
    {
        symbol: 'HDFCBANK',
        name: 'HDFC Bank Ltd',
        shares: 200,
        avgCost: 1589.45,
        currentPrice: 1678.90,
        marketValue: 335780.00,
        pnl: 17890.00,
        pnlPct: 5.63,
        weight: 8.9,
        sector: 'Financials'
    },
];

export const sectorAllocation: SectorAllocation[] = [
    { sector: 'Financials', weight: 32.5, value: 2290475.00, pnl: 98234.50 },
    { sector: 'Technology', weight: 24.3, value: 1712655.00, pnl: 45678.00 },
    { sector: 'Energy', weight: 18.7, value: 1318245.00, pnl: 67890.00 },
    { sector: 'Consumer Goods', weight: 12.4, value: 874120.00, pnl: -12543.00 },
    { sector: 'Pharma', weight: 7.8, value: 549660.00, pnl: 23456.00 },
    { sector: 'Others', weight: 4.3, value: 303145.00, pnl: -4789.00 },
];

// Terminal Optimizer Data (Indian Market Predictions)
export const marketPredictions: MarketPrediction[] = [
    {
        symbol: 'RELIANCE',
        name: 'Reliance Industries',
        currentPrice: 2678.35,
        predictedPrice: 2950.00,
        confidence: 87,
        direction: 'BUY',
        timeframe: '30D',
        technicalScore: 8.2,
        fundamentalScore: 7.8,
        sentimentScore: 8.9,
        newsImpact: 'POSITIVE',
        keyFactors: ['Jio growth momentum', 'Retail expansion', 'Green energy investments'],
        riskLevel: 'LOW',
        expectedReturn: '+10.1%'
    },
    {
        symbol: 'TATAMOTORS',
        name: 'Tata Motors Ltd',
        currentPrice: 987.50,
        predictedPrice: 875.00,
        confidence: 64,
        direction: 'SELL',
        timeframe: '14D',
        technicalScore: 4.5,
        fundamentalScore: 6.2,
        sentimentScore: 3.8,
        newsImpact: 'NEGATIVE',
        keyFactors: ['EV competition', 'Raw material costs', 'Export slowdown'],
        riskLevel: 'HIGH',
        expectedReturn: '-11.4%'
    }
];

export const marketSentiment: MarketSentiment[] = [
    { source: 'Economic Times', sentiment: 'BULLISH', score: 78, articles: 234 },
    { source: 'Moneycontrol', sentiment: 'NEUTRAL', score: 52, articles: 189 },
    { source: 'Business Standard', sentiment: 'BEARISH', score: 34, articles: 156 },
    { source: 'Mint', sentiment: 'NEUTRAL', score: 48, articles: 123 }
];

export const technicalIndicators: TechnicalIndicator[] = [
    { indicator: 'RSI (14)', value: 67.8, signal: 'NEUTRAL', description: 'Relative Strength Index' },
    { indicator: 'MACD', value: 2.34, signal: 'BUY', description: 'Moving Average Convergence Divergence' },
    { indicator: 'Bollinger Bands', value: 0.78, signal: 'SELL', description: 'Price vs Bollinger Bands' },
    { indicator: 'ADX', value: 45.6, signal: 'STRONG', description: 'Average Directional Index' }
];

export const riskMetrics: RiskMetric[] = [
    { metric: 'Portfolio VaR (95%)', current: '-₹3,52,350', optimized: '-₹2,60,240', improvement: '+26%' },
    { metric: 'Expected Shortfall', current: '-₹5,64,890', optimized: '-₹4,01,230', improvement: '+29%' },
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
    { metric: 'Value at Risk (95%)', value: '-₹3,52,350', description: '1-Day VaR' },
    { metric: 'Expected Shortfall', value: '-₹5,64,890', description: 'Conditional VaR' },
    { metric: 'Maximum Drawdown', value: '-8.4%', description: 'Peak to Trough' },
    { metric: 'Calmar Ratio', value: '3.71', description: 'Return/Max DD' },
    { metric: 'Sortino Ratio', value: '2.89', description: 'Downside Risk Adj.' },
    { metric: 'Information Ratio', value: '1.45', description: 'Active Return/Risk' },
];

export const correlationMatrix = [
    { asset: 'NIFTY50', correlation: 0.85 },
    { asset: 'BANKNIFTY', correlation: 0.78 },
    { asset: 'NIFTYMIDCAP', correlation: 0.72 },
    { asset: 'NIFTYIT', correlation: 0.68 },
    { asset: 'NIFTYPHARMA', correlation: 0.45 },
    { asset: 'GOLD', correlation: -0.18 },
    { asset: 'USDINR', correlation: -0.25 },
    { asset: 'INDIAVIX', correlation: -0.62 },
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
        subtitle: "vs NIFTY 50: +12.3%",
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
        asset: "IT Sector",
        prediction: "Bullish",
        timeframe: "3 months",
        confidence: 78,
        expectedReturn: "+12-18%",
        reasoning: "Strong dollar, global IT spending recovery, and cost optimization",
    },
    {
        asset: "Banking Sector",
        prediction: "Neutral",
        timeframe: "6 months",
        confidence: 65,
        expectedReturn: "+3-8%",
        reasoning: "NPA concerns, RBI rate decisions, credit growth normalization",
    },
    {
        asset: "Pharma Sector",
        prediction: "Bullish",
        timeframe: "1 month",
        confidence: 82,
        expectedReturn: "+8-15%",
        reasoning: "Defensive play, export recovery, and new drug approvals",
    },
];

export const aiRiskFactors = [
    {
        factor: "Market Volatility",
        level: "Medium",
        impact: "Portfolio may see 10-15% swings",
    },
    {
        factor: "RBI Interest Rate Risk",
        level: "Low",
        impact: "Minimal impact on current allocation",
    },
    {
        factor: "Banking Concentration",
        level: "High",
        impact: "BFSI exposure at 42% - consider diversification",
    },
    {
        factor: "Currency Risk (USD/INR)",
        level: "Medium",
        impact: "IT holdings subject to forex fluctuations",
    },
];

// All Markets Data (India-focused)
export const allMarketsCategories = [
    { id: 'all', label: 'All Markets', count: 2847 },
    { id: 'stocks', label: 'NSE/BSE Stocks', count: 1234 },
    { id: 'crypto', label: 'Crypto (INR)', count: 156 },
    { id: 'bonds', label: 'Govt Securities', count: 289 },
    { id: 'commodities', label: 'MCX Commodities', count: 134 },
    { id: 'forex', label: 'Forex', count: 34 }
];

export const allMarketsAssets = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2678.35, change: 45.80, changePercent: 1.74, market: 'NSE', category: 'stocks' },
    { symbol: 'BTC', name: 'Bitcoin (INR)', price: 5642150, change: 78450, changePercent: 1.41, market: 'Crypto', category: 'crypto' },
    { symbol: 'TCS', name: 'Tata Consultancy', price: 4012.75, change: -28.45, changePercent: -0.70, market: 'NSE', category: 'stocks' },
    { symbol: 'ETH', name: 'Ethereum (INR)', price: 287890, change: 5680, changePercent: 2.01, market: 'Crypto', category: 'crypto' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1678.90, change: 18.35, changePercent: 1.10, market: 'NSE', category: 'stocks' },
    { symbol: 'GOLD', name: 'Gold MCX', price: 62450, change: 285, changePercent: 0.46, market: 'MCX', category: 'commodities' },
    { symbol: 'GSEC10Y', name: '10Y Govt Bond', price: 101.45, change: 0.12, changePercent: 0.12, market: 'NSE', category: 'bonds' },
    { symbol: 'SILVER', name: 'Silver MCX', price: 74820, change: -145, changePercent: -0.19, market: 'MCX', category: 'commodities' }
];

export const allMarketsIndices = [
    { name: 'NIFTY 50', value: 24567.85, change: 234.50, changePercent: 0.96 },
    { name: 'SENSEX', value: 81234.65, change: 789.25, changePercent: 0.98 },
    { name: 'BANK NIFTY', value: 52345.20, change: -156.70, changePercent: -0.30 },
    { name: 'NIFTY IT', value: 38456.75, change: 456.80, changePercent: 1.20 }
];

// Smart Portfolio Data (India-focused)
export const smartPortfolioAssets = [
    {
        category: 'Indian Equities',
        allocation: 50,
        value: 3523646,
        change: 12.4,
        assets: ['RELIANCE', 'TCS', 'HDFCBANK', 'INFY'],
        color: 'bg-blue-500',
        risk: 'High'
    },
    {
        category: 'Govt Securities',
        allocation: 20,
        value: 1409459,
        change: 4.2,
        assets: ['GSEC 10Y', 'SGBs', 'T-Bills'],
        color: 'bg-green-500',
        risk: 'Low'
    },
    {
        category: 'Crypto (INR)',
        allocation: 10,
        value: 704729,
        change: 28.7,
        assets: ['BTC', 'ETH', 'SOL', 'MATIC'],
        color: 'bg-orange-500',
        risk: 'Very High'
    },
    {
        category: 'Gold & Commodities',
        allocation: 15,
        value: 1057094,
        change: 5.8,
        assets: ['Gold MCX', 'Silver MCX', 'Crude'],
        color: 'bg-yellow-500',
        risk: 'Medium'
    },
    {
        category: 'REITs (India)',
        allocation: 5,
        value: 352365,
        change: 7.1,
        assets: ['Embassy REIT', 'Mindspace REIT', 'Brookfield REIT'],
        color: 'bg-purple-500',
        risk: 'Medium'
    }
];

export const smartPortfolioRecommendations = [
    {
        action: 'Increase',
        category: 'Govt Securities',
        percentage: '+5%',
        reason: 'RBI rate pause expected, bond prices may appreciate',
        impact: 'Reduce portfolio risk by 12%'
    },
    {
        action: 'Decrease',
        category: 'Indian Equities',
        percentage: '-3%',
        reason: 'BFSI sector showing overvaluation signals',
        impact: 'Improve risk-adjusted returns'
    },
    {
        action: 'Hold',
        category: 'Gold & Commodities',
        percentage: '0%',
        reason: 'Geopolitical hedge optimal for current risk tolerance',
        impact: 'Maintain stability buffer'
    }
];


