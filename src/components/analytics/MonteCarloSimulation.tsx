import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MoreHorizontal } from 'lucide-react';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

// Dynamic Data Generation
const generateSimulationData = (years: number) => {
    const startYear = 2024;
    const startValue = 70; // 70L
    const data = [];

    // CAGR Assumptions
    const optimisticRate = 0.16; // 16% Bull
    const expectedRate = 0.12;   // 12% Base
    const pessimisticRate = 0.05; // 5% Bear

    for (let i = 0; i <= years; i++) {
        const optimistic = Math.round(startValue * Math.pow(1 + optimisticRate, i));
        const expected = Math.round(startValue * Math.pow(1 + expectedRate, i));
        const pessimistic = Math.round(startValue * Math.pow(1 + pessimisticRate, i));

        data.push({
            year: (startYear + i).toString(),
            optimistic,
            expected,
            pessimistic,
            base: pessimistic, // Base for the stacked area
            range: optimistic - pessimistic // Range for the cloud
        });
    }
    return data;
};

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
        // Find the actual data point (payload might refer to the range/stack)
        // Usually payload[0] corresponds to the first series rendered or hovered.
        // We look for the "expected" value in the payload item's payload (the original data object)
        const originalData = payload[0].payload;

        return (
            <div className="bg-[#0B0D14] border border-terminal-border p-3 rounded shadow-xl z-50">
                <p className="text-terminal-text font-bold text-xs mb-2 font-mono">Year: {label}</p>

                <div className="space-y-1">
                    <div className="flex justify-between space-x-4">
                        <span className="text-[10px] text-terminal-success">Optimistic</span>
                        <span className="text-xs font-mono font-bold text-white">₹{originalData.optimistic}L</span>
                    </div>
                    <div className="flex justify-between space-x-4">
                        <span className="text-[10px] text-terminal-accent">Expected</span>
                        <span className="text-xs font-mono font-bold text-white">₹{originalData.expected}L</span>
                    </div>
                    <div className="flex justify-between space-x-4">
                        <span className="text-[10px] text-terminal-danger">Pessimistic</span>
                        <span className="text-xs font-mono font-bold text-white">₹{originalData.pessimistic}L</span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export const MonteCarloSimulation: React.FC = () => {
    const [timeFrame, setTimeFrame] = useState<number>(10);

    const data = useMemo(() => generateSimulationData(timeFrame), [timeFrame]);
    const finalValues = data[data.length - 1];

    const formatCurrency = (val: number) => {
        if (val >= 100) return `₹${(val / 100).toFixed(2)} Cr`;
        return `₹${val} L`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="terminal-panel p-6 bg-[#0B0D14] flex flex-col h-full"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-terminal-accent" />
                        <span className="text-terminal-accent text-xs font-bold uppercase tracking-wider">
                            Wealth Projection (Monte Carlo)
                        </span>
                    </div>
                    <div className="text-[10px] text-terminal-text-muted mt-1">
                        1,000 simulations • CAGR ~12%
                    </div>
                </div>

                <div className="flex bg-terminal-surface/50 rounded-lg p-0.5 border border-terminal-border/50">
                    {[5, 10, 20].map((year) => (
                        <button
                            key={year}
                            onClick={() => setTimeFrame(year)}
                            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${timeFrame === year
                                    ? 'bg-terminal-accent text-black shadow-lg'
                                    : 'text-terminal-text-muted hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {year}Y
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[280px] w-full -ml-2">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" opacity={0.4} vertical={false} />
                        <XAxis
                            dataKey="year"
                            stroke="#6b7280"
                            tick={{ fontSize: 10 }}
                            tickLine={false}
                            axisLine={{ stroke: '#374151' }}
                            dy={5}
                            interval={timeFrame > 15 ? 2 : 0} // Skip labels for 20Y to align better
                        />
                        <YAxis
                            stroke="#6b7280"
                            tick={{ fontSize: 10 }}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => value >= 100 ? `₹${(value / 100).toFixed(1)}Cr` : `₹${value}L`}
                            dx={-5}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#374151', strokeWidth: 1, strokeDasharray: '4 4' }} />

                        {/* Invisible Base Area */}
                        <Area
                            type="monotone"
                            dataKey="base"
                            stackId="1"
                            stroke="none"
                            fill="transparent"
                            legendType="none"
                            tooltipType="none"
                            isAnimationActive={false}
                        />

                        {/* Probability Cloud */}
                        <Area
                            type="monotone"
                            dataKey="range"
                            name="Probable Range"
                            stackId="1"
                            stroke="none"
                            fill="url(#splitColor)"
                            animationDuration={1000}
                        />

                        {/* Dashed Boundaries */}
                        <Line type="monotone" dataKey="optimistic" stroke="#10b981" strokeWidth={1} strokeDasharray="3 3" dot={false} activeDot={false} opacity={0.5} />
                        <Line type="monotone" dataKey="pessimistic" stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" dot={false} activeDot={false} opacity={0.5} />

                        {/* Expected Median */}
                        <Line
                            type="monotone"
                            dataKey="expected"
                            name="Median Outcome"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                            animationDuration={1500}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-4 border-t border-terminal-border/50 pt-4">
                <div>
                    <div className="flex items-center space-x-1.5 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-[9px] text-terminal-text-muted uppercase">Upside Case</span>
                    </div>
                    <div className="text-sm font-mono font-bold text-terminal-text">{formatCurrency(finalValues.optimistic)}</div>
                </div>
                <div>
                    <div className="flex items-center space-x-1.5 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                        <span className="text-[9px] text-terminal-text-muted uppercase">Base Case</span>
                    </div>
                    <div className="text-sm font-mono font-bold text-terminal-text">{formatCurrency(finalValues.expected)}</div>
                </div>
                <div>
                    <div className="flex items-center space-x-1.5 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                        <span className="text-[9px] text-terminal-text-muted uppercase">Downside Risk</span>
                    </div>
                    <div className="text-sm font-mono font-bold text-terminal-text">{formatCurrency(finalValues.pessimistic)}</div>
                </div>
            </div>
        </motion.div>
    );
};
