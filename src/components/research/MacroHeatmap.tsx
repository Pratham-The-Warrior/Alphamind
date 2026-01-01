import React from 'react';
import { Globe } from 'lucide-react';

const macroData = [
    { country: 'India', gdp: '7.6%', cpi: '5.1%', rate: '6.50%', trend: 'booming' },
    { country: 'USA', gdp: '2.4%', cpi: '3.1%', rate: '5.50%', trend: 'cooling' },
    { country: 'China', gdp: '5.2%', cpi: '-0.8%', rate: '3.45%', trend: 'slowing' },
    { country: 'Euroz', gdp: '0.5%', cpi: '2.8%', rate: '4.50%', trend: 'stagnant' },
    { country: 'Vietnam', gdp: '5.5%', cpi: '3.2%', rate: '4.50%', trend: 'turning' },
];

export const MacroHeatmap: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surface/30">
                <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                        <h3 className="font-bold text-terminal-text text-sm">Global Macro Heatmap</h3>
                        <p className="text-[10px] text-terminal-text-muted">Economic Vitals</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 grid gap-3 overflow-y-auto">
                {/* Header Row */}
                <div className="grid grid-cols-4 px-2 py-1 text-[10px] font-bold text-terminal-text-muted uppercase tracking-wider">
                    <span>Region</span>
                    <span className="text-right">GDP (YoY)</span>
                    <span className="text-right">Inflation</span>
                    <span className="text-right">Rates</span>
                </div>

                {macroData.map((data, idx) => (
                    <div key={idx} className="grid grid-cols-4 items-center p-3 rounded-lg bg-terminal-surface/20 border border-transparent hover:border-terminal-border hover:bg-terminal-surface/40 transition-all group">
                        <div className="flex items-center gap-2">
                            <div className={`w-1 h-8 rounded-full ${data.trend === 'booming' ? 'bg-gradient-to-b from-green-400 to-emerald-600' :
                                data.trend === 'slowing' ? 'bg-gradient-to-b from-red-400 to-red-600' :
                                    'bg-gradient-to-b from-yellow-400 to-orange-500'
                                }`} />
                            <span className="font-bold text-sm text-terminal-text group-hover:text-blue-400 transition-colors">{data.country}</span>
                        </div>

                        <div className="text-right font-mono text-sm text-terminal-text">
                            {data.gdp}
                        </div>

                        <div className={`text-right font-mono text-sm ${parseFloat(data.cpi) > 3 ? 'text-red-400' : 'text-green-400'
                            }`}>
                            {data.cpi}
                        </div>

                        <div className="text-right font-mono text-sm text-terminal-text-dim">
                            {data.rate}
                        </div>
                    </div>
                ))}

                {/* Mini Legend/Status */}
                <div className="mt-auto pt-2 grid grid-cols-3 gap-2">
                    <div className="bg-terminal-surface/30 rounded p-2 text-center">
                        <div className="text-[10px] text-terminal-text-muted mb-1">GST Collect</div>
                        <div className="text-sm font-bold text-green-400">₹1.7L Cr</div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded p-2 text-center">
                        <div className="text-[10px] text-terminal-text-muted mb-1">Liquidity</div>
                        <div className="text-sm font-bold text-terminal-text">Neutral</div>
                    </div>
                    <div className="bg-terminal-surface/30 rounded p-2 text-center">
                        <div className="text-[10px] text-terminal-text-muted mb-1">India VIX</div>
                        <div className="text-sm font-bold text-terminal-text">13.5</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
