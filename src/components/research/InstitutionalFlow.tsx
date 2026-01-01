import React from 'react';
import { TrendingUp, TrendingDown, Layers, BarChart3 } from 'lucide-react';

const mockFlow = [
    { time: '10:30', type: 'Block', ticker: 'RELIANCE', size: '₹125Cr', side: 'Buy', sentiment: 'Bullish' },
    { time: '11:15', type: 'Bulk', ticker: 'HDFCBANK', size: '₹450Cr', side: 'Sell', sentiment: 'Bearish' },
    { time: '12:45', type: 'Sweep', ticker: 'ADANIENT', size: '₹45Cr', side: 'Buy', sentiment: 'Bullish' },
    { time: '13:20', type: 'Block', ticker: 'TCS', size: '₹82Cr', side: 'Sell', sentiment: 'Bearish' },
    { time: '14:00', type: 'Bulk', ticker: 'INFY', size: '₹210Cr', side: 'Buy', sentiment: 'Bullish' },
];

export const InstitutionalFlow: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surface/30">
                <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <div>
                        <h3 className="font-bold text-terminal-text text-sm">Institutional Flow (FII/DII)</h3>
                        <p className="text-[10px] text-terminal-text-muted">Block Deals & Bulk Deals</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-green-400">LIVE</span>
                </div>
            </div>

            <div className="flex-1 p-4 space-y-4">
                {/* Visual Header - Net Flow */}
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20 flex flex-col items-center justify-center">
                        <span className="text-[10px] uppercase text-green-400 font-bold mb-1">FII Net Flow</span>
                        <span className="text-lg font-bold text-terminal-text">+₹1,450Cr</span>
                        <TrendingUp className="w-4 h-4 text-green-500 mt-1" />
                    </div>
                    <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20 flex flex-col items-center justify-center">
                        <span className="text-[10px] uppercase text-red-400 font-bold mb-1">DII Net Flow</span>
                        <span className="text-lg font-bold text-terminal-text">-₹850Cr</span>
                        <TrendingDown className="w-4 h-4 text-red-500 mt-1" />
                    </div>
                </div>

                {/* Flow List */}
                <div className="space-y-2 overflow-y-auto max-h-[300px] custom-scrollbar pr-1">
                    {mockFlow.map((trade, idx) => (
                        <div key={idx} className="group flex items-center justify-between p-3 rounded bg-terminal-surface/20 hover:bg-terminal-surface border border-transparent hover:border-terminal-border transition-all cursor-crosshair">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-[10px] text-terminal-text-muted">{trade.time}</span>
                                <div className={`w-1 h-8 rounded-full ${trade.side === 'Buy' ? 'bg-green-500' : 'bg-red-500'}`} />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm text-terminal-text">{trade.ticker}</span>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded border ${trade.type === 'Dark Pool' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' :
                                            'border-terminal-border text-terminal-text-muted bg-terminal-surface'
                                            }`}>{trade.type}</span>
                                    </div>
                                    <div className="text-[10px] text-terminal-text-dim mt-0.5">
                                        {trade.size} • <span className={trade.side === 'Buy' ? 'text-green-400' : 'text-red-400'}>{trade.side.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <BarChart3 className={`w-4 h-4 ml-auto ${trade.sentiment === 'Bullish' ? 'text-green-500' : 'text-red-500'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-2 border-t border-terminal-border bg-terminal-surface/10 text-center">
                <span className="text-[10px] text-terminal-text-muted/50 font-mono">INSTITUTIONAL ACTIVITY TRACKER v2.4</span>
            </div>
        </div>
    );
};
