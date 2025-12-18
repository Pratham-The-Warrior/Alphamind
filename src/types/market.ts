export interface MarketItem {
    symbol: string;
    name: string;
    price: number;
    change: number;
    pct: number;
    volume: string;
    bid: number;
    ask: number;
    market: string;
}

export interface TopMover {
    symbol: string;
    change: string;
    volume: string;
}
