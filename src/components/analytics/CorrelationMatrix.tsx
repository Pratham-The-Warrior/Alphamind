import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const assets = [
    'NIFTY50',
    'BANKNIFTY',
    'BANKNIFTY',
    'NIFTYIT',
    'NIFTYPHARMA',
    'GOLD',
    'USDINR'
];

const headers = ['W', '1.0', '10', '30', '5', '50', '30', '5', '300', '1.0', '1.0'];

const bottomLabels = [
    { label: 'CODD', span: 2, color: 'bg-blue-600' },
    { label: 'ULISDINR', span: 3, color: 'bg-emerald-600' },
    { label: 'BITCCL OL', span: 3, color: 'bg-lime-600' },
    { label: 'BITCOIN', span: 3, color: 'bg-orange-600' },
];

const rightBars = [
    { value: '1.28', pct: 85, color: 'bg-red-500' },
    { value: '0.0%', pct: 40, color: 'bg-red-500' },
    { value: '0.76', pct: 65, color: 'bg-red-500' },
    { value: '0.0%', pct: 30, color: 'bg-red-500' },
    { value: '9.76', pct: 80, color: 'bg-orange-500' },
    { value: '-9.53', pct: 75, color: 'bg-orange-500' },
    { value: '-2.85', pct: 45, color: 'bg-yellow-500' },
];

// Mock matrix data
const matrixData = [
    [8.5, 7.5, 7.2, 7.5, 3.0, 5.4, 3.2, 3.4, 5.5, 1.0, 1.0],
    [7.1, 8.2, 8.7, 7.5, 4.0, 6.8, 6.3, 8.5, 5.5, 8.7, 8.7],
    [6.3, 5.5, 5.5, 7.5, 6.0, 6.6, 6.7, 5.8, 8.5, 5.3, 5.3],
    [8.2, 6.8, 5.8, 6.2, 3.0, 6.9, 6.2, 6.2, 8.1, 8.4, 8.4],
    [8.3, 8.9, 8.8, 7.3, 9.0, 6.8, 8.2, 8.2, 8.1, 8.5, 8.5],
    [3.3, 7.3, 8.2, 8.3, 8.0, 8.3, 6.2, 6.2, 8.2, 4.3, 4.3],
    [-3.8, -3.8, -3.1, -3.4, 1.0, 4.8, -3.1, -3.2, 4.1, -4.3, -4.3],
];

const getCellColor = (value: number) => {
    // Mapping to the specific gradient colors from the reference image
    // Blue (-10 to -5) -> Green (-4 to 0) -> Yellow/Lime (1 to 3) -> Orange (4 to 7) -> Red (8 to 10)
    if (value <= -2) return 'rgba(37, 99, 235, 0.85)'; // Blue
    if (value <= 0) return 'rgba(16, 185, 129, 0.85)'; // Emerald
    if (value <= 3) return 'rgba(163, 230, 53, 0.85)'; // Lime
    if (value <= 6) return 'rgba(234, 179, 8, 0.85)'; // Yellow/Orange
    return 'rgba(239, 68, 68, 0.85)'; // Red
};

export const CorrelationMatrix: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="terminal-panel p-6 bg-[#0B0D14]"
        >
            <div className="flex items-center space-x-2 mb-6">
                <Activity className="w-4 h-4 text-terminal-blue" />
                <span className="text-terminal-blue text-xs font-bold uppercase tracking-wider">
                    CORRELATION MATRIX
                </span>
            </div>

            <div className="flex overflow-x-auto pb-4">
                {/* Asset Names */}
                <div className="w-32 flex flex-col pt-[28px] flex-shrink-0">
                    {assets.map((asset, i) => (
                        <div key={`${asset}-${i}`} className="h-10 flex items-center pr-4">
                            <span className="text-terminal-text-muted text-[10px] font-bold uppercase whitespace-nowrap">
                                {asset}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Main Grid Section */}
                <div className="flex-shrink-0 flex flex-col">
                    {/* Grid Headers */}
                    <div className="grid grid-cols-11 mb-[6px] h-[22px]">
                        {headers.map((header, i) => (
                            <div key={i} className="text-center text-terminal-text-muted text-[10px] font-bold flex items-end justify-center">
                                {header}
                            </div>
                        ))}
                    </div>

                    {/* The Matrix */}
                    <div className="grid grid-cols-11 gap-[1px]">
                        {matrixData.map((row, rowIndex) =>
                            row.map((val, colIndex) => {
                                const isHighlight = rowIndex === 0 && colIndex === 9; // Highlight NIFTY50 1.0 cell
                                return (
                                    <div
                                        key={`${rowIndex}-${colIndex}`}
                                        className={`w-[4.2rem] h-10 flex items-center justify-center text-[10px] font-mono group relative
                                            ${isHighlight ? 'ring-2 ring-red-400/80 z-10' : ''}`}
                                        style={{
                                            backgroundColor: getCellColor(val),
                                            color: val > 6 || val < -2 ? 'white' : 'rgba(0,0,0,0.8)',
                                            boxShadow: isHighlight ? '0 0 12px rgba(220, 38, 38, 0.4)' : 'none'
                                        }}
                                    >
                                        {val.toFixed(1)}
                                        {isHighlight && (
                                            <div className="absolute inset-0 bg-white/10 animate-pulse" />
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Bottom Indicators */}
                    <div className="grid grid-cols-11 gap-[1px] mt-[1px]">
                        {bottomLabels.map((item, i) => (
                            <div
                                key={i}
                                className={`${item.color} h-[24px] flex items-center justify-center text-[9px] font-bold text-white uppercase whitespace-nowrap px-1 opacity-90`}
                                style={{ gridColumn: `span ${item.span}` }}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Distribution Bars */}
                <div className="w-48 flex flex-col pt-[28px] ml-8 flex-shrink-0">
                    {rightBars.map((bar, i) => (
                        <div key={i} className="h-10 flex items-center space-x-3">
                            <div className="flex-1 h-[6px] bg-terminal-surface/50 rounded-full overflow-hidden flex items-center">
                                <div
                                    className={`h-full ${bar.color} rounded-r-full shadow-[0_0_8px_rgba(239,68,68,0.4)]`}
                                    style={{ width: `${bar.pct}%` }}
                                />
                            </div>
                            <span className="text-[10px] font-mono font-bold text-terminal-warning w-12 text-right">
                                {bar.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Legend and Toggle */}
            <div className="mt-8 flex justify-end items-end">
                <div className="bg-[#121620]/50 p-4 rounded-md border border-terminal-border/50 max-w-sm w-full">
                    <div className="h-3 w-full bg-gradient-to-r from-blue-600 via-emerald-500 via-lime-400 via-yellow-400 to-red-600 mb-2 rounded-sm" />
                    <div className="flex justify-center mb-6">
                        <span className="text-[10px] font-bold text-terminal-text-muted uppercase tracking-widest">
                            TIME PERIOD: 1-YEAR
                        </span>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <span className="text-[10px] font-bold text-terminal-text-muted">90-DAY</span>
                        <div className="w-12 h-6 bg-terminal-surface rounded-full relative p-1 cursor-pointer border border-terminal-border flex items-center">
                            <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
