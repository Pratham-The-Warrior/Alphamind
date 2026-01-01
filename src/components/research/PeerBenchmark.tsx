import React, { useState } from 'react';
import { BarChart2, Layers } from 'lucide-react';

interface PeerData {
    ticker: string;
    pe: number;
    pb: number;
    growth: number;
    performance: number;
}

const mockPeers: PeerData[] = [
    { ticker: 'NVDA', pe: 95.4, pb: 45.2, growth: 125, performance: 240 },
    { ticker: 'AMD', pe: 85.1, pb: 8.5, growth: 15, performance: 110 },
    { ticker: 'INTC', pe: 35.2, pb: 1.8, growth: -5, performance: -25 },
    { ticker: 'TSM', pe: 24.5, pb: 5.6, growth: 22, performance: 65 },
];

export const PeerBenchmark: React.FC = () => {
    const [metric, setMetric] = useState<'pe' | 'performance'>('performance');

    const maxVal = Math.max(...mockPeers.map(p => metric === 'pe' ? p.pe : p.performance));

    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-terminal-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-terminal-accent" />
                    <h3 className="font-bold text-terminal-text">Peer Benchmark</h3>
                </div>
                <select
                    value={metric}
                    onChange={(e) => setMetric(e.target.value as any)}
                    className="bg-terminal-surface border border-terminal-border rounded-md text-xs text-terminal-text px-2 py-1 focus:outline-none focus:border-terminal-accent"
                >
                    <option value="performance">Performance (1Y)</option>
                    <option value="pe">P/E Ratio</option>
                </select>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-center space-y-6">
                {mockPeers.map((peer) => (
                    <div key={peer.ticker} className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="font-bold text-terminal-text">{peer.ticker}</span>
                            <span className="text-terminal-text-muted">{metric === 'pe' ? peer.pe : `${peer.performance}%`}</span>
                        </div>
                        <div className="h-2 w-full bg-terminal-surface rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${peer.ticker === 'NVDA' ? 'bg-terminal-accent' : 'bg-terminal-text-muted/30'
                                    }`}
                                style={{ width: `${((metric === 'pe' ? peer.pe : peer.performance) / maxVal) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-terminal-border bg-terminal-surface/30">
                <div className="flex items-center gap-2 text-xs text-terminal-text-dim">
                    <Layers className="w-3 h-3" />
                    <span>Sector: Semiconductors & AI Hardware</span>
                </div>
            </div>
        </div>
    );
};
