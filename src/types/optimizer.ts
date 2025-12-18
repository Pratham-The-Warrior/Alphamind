export interface MarketPrediction {
    symbol: string;
    name: string;
    currentPrice: number;
    predictedPrice: number;
    confidence: number;
    direction: string;
    timeframe: string;
    technicalScore: number;
    fundamentalScore: number;
    sentimentScore: number;
    newsImpact: string;
    keyFactors: string[];
    riskLevel: string;
    expectedReturn: string;
}

export interface MarketSentiment {
    source: string;
    sentiment: string;
    score: number;
    articles: number;
}

export interface TechnicalIndicator {
    indicator: string;
    value: number;
    signal: string;
    description: string;
}

export interface RiskMetric {
    metric: string;
    current: string;
    optimized: string;
    improvement: string;
}
