export interface PortfolioHolding {
    symbol: string;
    name: string;
    shares: number;
    avgCost: number;
    currentPrice: number;
    marketValue: number;
    pnl: number;
    pnlPct: number;
    weight: number;
    sector: string;
}

export interface SectorAllocation {
    sector: string;
    weight: number;
    value: number;
    pnl: number;
}
