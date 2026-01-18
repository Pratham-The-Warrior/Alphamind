import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ShieldCheck, AlertCircle } from 'lucide-react';


// hardcoded temporary data
const data = [
    { name: 'Nifty 50 Index', value: 35, color: 'rgba(37, 99, 235, 0.9)', type: 'Growth' }, // Blue
    { name: 'Fixed Deposits', value: 25, color: 'rgba(16, 185, 129, 0.9)', type: 'Safety' }, // Green
    { name: 'Gold', value: 15, color: 'rgba(234, 179, 8, 0.9)', type: 'Hedge' }, // Yellow
    { name: 'Silver', value: 10, color: 'rgba(148, 163, 184, 0.9)', type: 'Commodity' }, // Slate/Silver
    { name: 'Crypto (BTC/ETH)', value: 15, color: 'rgba(139, 92, 246, 0.9)', type: 'High Risk' }, // Purple
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
        const item = payload[0].payload;
        return (
            <div className="bg-terminal-surface border border-terminal-border p-3 rounded shadow-xl z-50">
                <p className="text-terminal-text font-bold text-sm mb-1">{item.name}</p>
                <div className="flex justify-between space-x-4">
                    <span className="text-terminal-text-muted text-xs">Allocation:</span>
                    <span className="font-mono font-bold text-terminal-accent">{item.value}%</span>
                </div>
                <div className="flex justify-between space-x-4">
                    <span className="text-terminal-text-muted text-xs">Role:</span>
                    <span className="font-mono text-xs text-white">{item.type}</span>
                </div>
            </div>
        );
    }
    return null;
};

export const BestDiversificationRatio: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="terminal-panel p-6 bg-[#0B0D14]"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-terminal-success" />
                    <span className="text-terminal-success text-sm font-bold uppercase tracking-wider">
                        Smart Diversification
                    </span>
                </div>
                <div className="flex items-center space-x-1 bg-terminal-surface/50 px-2 py-1 rounded">
                    <span className="text-[10px] text-terminal-text-muted uppercase">Risk Score:</span>
                    <span className="text-xs font-bold text-terminal-warning">Low-Moderate</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Donut Chart */}
                <div className="w-[200px] h-[200px] relative flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-bold text-white font-mono">12.5%</span>
                        <span className="text-[9px] text-terminal-text-muted uppercase">Exp. Return</span>
                    </div>
                </div>

                {/* Legend & Details */}
                <div className="flex-1 w-full space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        {data.map((item) => (
                            <div key={item.name} className="flex items-center space-x-2 bg-terminal-surface/20 p-2 rounded border border-white/5 hover:border-white/10 transition-colors">
                                <div className="w-2 h-8 rounded-sm" style={{ backgroundColor: item.color }} />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-terminal-text-muted uppercase font-bold">{item.name}</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-mono font-bold text-white">{item.value}%</span>
                                        <span className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded text-terminal-text-muted">{item.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded flex items-start space-x-3">
                        <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="text-xs text-blue-200/80 leading-relaxed">
                            <strong className="text-blue-200">Why this works:</strong> FD guarantees safety, Gold & Silver hedge against inflation, while Nifty & Crypto drive growth. This mix offers <span className="text-white font-bold">diversified returns</span> across multiple asset classes.
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
