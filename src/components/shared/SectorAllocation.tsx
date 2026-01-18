import React, { useState } from 'react';
import { PieChart as PieChartIcon, Info } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { sectorAllocation } from '../../services/mockData';

export const SectorAllocation: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Color mapping
    const getSectorColor = (sector: string) => {
        switch (sector) {
            case 'Financials': return '#2563eb'; // blue-600
            case 'Technology': return '#9333ea'; // purple-600
            case 'Energy': return '#059669'; // emerald-600
            case 'Consumer Goods': return '#f97316'; // orange-500
            case 'Pharma': return '#14b8a6'; // teal-500
            default: return '#eab308'; // yellow-500
        }
    };

    const data = sectorAllocation.map(s => ({
        ...s,
        color: getSectorColor(s.sector)
    }));

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
    };

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const item = payload[0].payload;
            return (
                <div className="bg-[#0B0D14] border border-white/10 p-2 rounded shadow-xl backdrop-blur-sm z-50">
                    <div className="text-xs font-bold text-white mb-1">{item.sector}</div>
                    <div className="space-y-0.5">
                        <div className="text-[10px] text-terminal-text-muted">
                            Val: <span className="font-mono text-white">₹{(item.value / 100000).toFixed(1)}L</span>
                        </div>
                        <div className="text-[10px] text-terminal-text-muted">
                            Alloc: <span className="font-mono text-white">{item.weight}%</span>
                        </div>
                        <div className="text-[10px] text-terminal-text-muted">
                            PnL: <span className={`font-mono ${item.pnl >= 0 ? 'text-terminal-success' : 'text-terminal-danger'}`}>
                                {item.pnl >= 0 ? '+' : ''}₹{Math.abs(item.pnl).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="terminal-panel p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <PieChartIcon className="w-4 h-4 text-terminal-accent" />
                    <span className="text-terminal-accent text-sm font-bold">SECTOR ALLOCATION</span>
                </div>
                <Info className="w-3 h-3 text-terminal-text-muted cursor-help" />
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center gap-4 min-h-[180px]">
                {/* Donut Chart */}
                <div className="relative w-[160px] h-[160px] flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={70}
                                paddingAngle={4}
                                dataKey="weight"
                                onMouseEnter={onPieEnter}
                                onMouseLeave={onPieLeave}
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                                        stroke={activeIndex === index ? '#fff' : 'none'}
                                        strokeWidth={1}
                                        className="transition-all duration-300 ease-in-out outline-none"
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Centered Total */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xs text-terminal-text-muted uppercase">Total</span>
                        <span className="text-sm font-bold text-white">100%</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex-1 w-full grid grid-cols-1 gap-2 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
                    {data.map((item, index) => (
                        <div
                            key={item.sector}
                            className={`flex items-center justify-between p-1.5 rounded border transition-colors cursor-pointer group ${activeIndex === index
                                    ? 'bg-white/10 border-white/20'
                                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
                                }`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-[10px] text-terminal-text font-medium group-hover:text-white transition-colors">{item.sector}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-mono font-bold text-white">{item.weight}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Info */}
            <div className="mt-2 pt-2 border-t border-white/5 flex justify-between text-[9px] text-terminal-text-muted">
                <span>Top Exposure: <span className="text-blue-400 font-bold">Financials (32.5%)</span></span>
                <span>Div. Score: <span className="text-terminal-success font-bold">8.4/10</span></span>
            </div>
        </div>
    );
};
