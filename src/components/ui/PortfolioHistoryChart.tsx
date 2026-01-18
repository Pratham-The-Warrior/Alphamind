import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Eye, EyeOff } from 'lucide-react';
import { portfolioHistoryRanges } from '../../services/mockData';

type TimeRange = '1M' | '6M' | 'YTD' | '1Y' | 'ALL';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-terminal-surface/95 backdrop-blur-md border border-terminal-border p-4 rounded-xl shadow-2xl z-50">
                <p className="text-terminal-text-muted text-xs mb-3 font-mono border-b border-terminal-border/50 pb-2">{label}</p>
                <div className="space-y-2">
                    {payload.map((entry: any) => (
                        <div key={entry.name} className="flex items-center justify-between space-x-6">
                            <span className="text-terminal-text-dim text-xs flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                                {entry.name === 'portfolio' ? 'MY Portfolio' : 'S&P 500'}
                            </span>
                            <span className={`text-sm font-mono font-bold ${entry.name === 'portfolio' ? 'text-terminal-accent' : 'text-terminal-blue'}`}>
                                ${entry.value.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

export const PortfolioHistoryChart: React.FC = () => {
    const [range, setRange] = useState<TimeRange>('YTD');
    const [visibleSeries, setVisibleSeries] = useState({ portfolio: true, sp500: true });

    const toggleSeries = (series: 'portfolio' | 'sp500') => {
        setVisibleSeries(prev => ({ ...prev, [series]: !prev[series] }));
    };

    const data = portfolioHistoryRanges[range];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="terminal-panel p-6 h-full flex flex-col bg-[#0B0D14] border-l-4 border-l-terminal-accent"
        >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-terminal-accent/10 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-terminal-accent" />
                    </div>
                    <div>
                        <h3 className="text-terminal-text font-bold text-sm tracking-wide">PORTFOLIO HISTORY</h3>
                        <p className="text-[10px] text-terminal-text-muted uppercase font-mono mt-0.5">Performance vs Benchmark</p>
                    </div>
                </div>

                {/* Time Range Selector */}
                <div className="flex bg-terminal-surface border border-terminal-border rounded-lg p-1">
                    {(Object.keys(portfolioHistoryRanges) as TimeRange[]).map((r) => (
                        <button
                            key={r}
                            onClick={() => setRange(r)}
                            className={`px-3 py-1 text-[10px] font-bold rounded transition-all duration-200 ${range === r
                                ? 'bg-terminal-accent text-black shadow-lg shadow-terminal-accent/20'
                                : 'text-terminal-text-muted hover:text-terminal-text hover:bg-white/5'
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 w-full min-h-0 relative group">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorSp500" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" strokeOpacity={0.4} vertical={false} />

                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 10, fill: '#6B7280', fontFamily: 'JetBrains Mono, monospace' }}
                            axisLine={false}
                            tickLine={false}
                            dy={10}
                        />

                        <YAxis
                            tick={{ fontSize: 10, fill: '#6B7280', fontFamily: 'JetBrains Mono, monospace' }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: '#374151', strokeDasharray: '4 4' }}
                        />

                        {visibleSeries.sp500 && (
                            <Area
                                type="monotone"
                                dataKey="sp500"
                                name="sp500"
                                stroke="#3B82F6"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorSp500)"
                                animationDuration={1000}
                            />
                        )}

                        {visibleSeries.portfolio && (
                            <Area
                                type="monotone"
                                dataKey="portfolio"
                                name="portfolio"
                                stroke="#FF6B35"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorPortfolio)"
                                filter="url(#glow)" // Assuming global glow filter exists, or we can re-add defs
                                animationDuration={1000}
                            />
                        )}

                        {/* Re-adding glow filter locally to ensure it works */}
                        <defs>
                            <filter id="glow" height="300%" width="300%" x="-100%" y="-100%">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Interactive Legend */}
            <div className="flex justify-end mt-4 space-x-6 border-t border-white/5 pt-4">
                <button
                    onClick={() => toggleSeries('portfolio')}
                    className={`flex items-center space-x-2 transition-opacity ${visibleSeries.portfolio ? 'opacity-100' : 'opacity-40 grayscale'}`}
                >
                    <div className="w-3 h-3 rounded-full bg-[#FF6B35] shadow-[0_0_8px_rgba(255,107,53,0.6)]"></div>
                    <span className="text-terminal-text text-xs font-medium cursor-pointer hover:text-white">MY Portfolio</span>
                    {visibleSeries.portfolio ? <Eye className="w-3 h-3 text-terminal-text-dim" /> : <EyeOff className="w-3 h-3 text-terminal-text-dim" />}
                </button>

                <button
                    onClick={() => toggleSeries('sp500')}
                    className={`flex items-center space-x-2 transition-opacity ${visibleSeries.sp500 ? 'opacity-100' : 'opacity-40 grayscale'}`}
                >
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                    <span className="text-terminal-text text-xs font-medium cursor-pointer hover:text-white">S&P 500</span>
                    {visibleSeries.sp500 ? <Eye className="w-3 h-3 text-terminal-text-dim" /> : <EyeOff className="w-3 h-3 text-terminal-text-dim" />}
                </button>
            </div>
        </motion.div>
    );
};
