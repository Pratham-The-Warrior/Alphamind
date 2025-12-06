import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const data = [
    { date: 'Oct 09', portfolio: 47000, sp500: 47000 },
    { date: 'Oct 11', portfolio: 52000, sp500: 47500 },
    { date: 'Oct 13', portfolio: 53500, sp500: 48000 },
    { date: 'Oct 15', portfolio: 53000, sp500: 47800 },
    { date: 'Oct 17', portfolio: 57000, sp500: 48500 },
    { date: 'Oct 19', portfolio: 62000, sp500: 49000 },
    { date: 'Oct 21', portfolio: 60000, sp500: 49200 },
    { date: 'Oct 23', portfolio: 68000, sp500: 50000 },
    { date: 'Oct 25', portfolio: 78000, sp500: 51000 },
    { date: 'Oct 27', portfolio: 75000, sp500: 51500 },
    { date: 'Oct 29', portfolio: 82000, sp500: 52000 },
    { date: 'Oct 31', portfolio: 90000, sp500: 52500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-terminal-bg/95 backdrop-blur-md border border-terminal-accent/30 p-4 rounded-xl shadow-terminal-glow">
                <p className="text-terminal-text-muted text-xs mb-3 font-mono border-b border-terminal-border/50 pb-2">{label}</p>
                <div className="space-y-2">
                    <div className="flex items-center justify-between space-x-4">
                        <span className="text-terminal-text-dim text-xs">MY Portfolio</span>
                        <span className="text-terminal-accent text-sm font-mono font-bold">
                            ${payload[0].value.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                        <span className="text-terminal-text-dim text-xs">S&P 500</span>
                        <span className="text-terminal-blue text-sm font-mono font-bold">
                            ${payload[1].value.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export const PortfolioHistoryChart: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="terminal-panel p-4 h-full flex flex-col"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-terminal-accent" />
                    <span className="text-terminal-accent text-sm font-bold">PORTFOLIO HISTORY (YTD)</span>
                </div>

                {/* Legend */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 border border-terminal-accent bg-terminal-accent/20 rounded-sm"></div>
                        <span className="text-terminal-text text-xs">MY Portfolio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-terminal-blue/20 border border-terminal-blue/50 rounded-sm"></div>
                        <span className="text-terminal-text text-xs">S&P 500</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        {/* Gradients */}
                        <defs>
                            <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorSp500" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#1E90FF" stopOpacity={0} />
                            </linearGradient>
                            {/* Enhanced Glow Filter */}
                            <filter id="glow" height="300%" width="300%" x="-100%" y="-100%">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#2A3441" strokeOpacity={0.2} vertical={false} />

                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 10, fill: '#5F6368', fontFamily: 'JetBrains Mono, monospace' }}
                            axisLine={false}
                            tickLine={false}
                            dy={10}
                        />

                        <YAxis
                            tick={{ fontSize: 10, fill: '#5F6368', fontFamily: 'JetBrains Mono, monospace' }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: '#2A3441', strokeDasharray: '4 4' }}
                        />

                        <Area
                            type="monotone"
                            dataKey="sp500"
                            stroke="#1E90FF"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSp500)"
                        />

                        <Area
                            type="monotone"
                            dataKey="portfolio"
                            stroke="#FF6B35"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPortfolio)"
                            filter="url(#glow)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};
