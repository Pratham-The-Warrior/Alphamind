import React from 'react';
import { UserCheck, TrendingUp, TrendingDown, Shield } from 'lucide-react';

const insiderTrades = [
    { name: 'Rakesh Jhunjhunwala', role: 'Estate', ticker: 'TITAN', type: 'Sell', val: '₹280Cr', date: '2 days ago', flag: 'High' },
    { name: 'Sunil Mittal', role: 'Promoter', ticker: 'BHARTIARTL', type: 'Buy', val: '₹120Cr', date: '5 days ago', flag: 'Critical' },
    { name: 'Adani Family', role: 'Promoter', ticker: 'ADANIENT', type: 'Buy', val: '₹1400Cr', date: '1 week ago', flag: 'Routine' },
    { name: 'LIC of India', role: 'DII', ticker: 'ITC', type: 'Buy', val: '₹500Cr', date: '2 weeks ago', flag: 'High' },
];

export const InsiderTracker: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surface/30">
                <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-400" />
                    <div>
                        <h3 className="font-bold text-terminal-text text-sm">Insider Sentinel</h3>
                        <p className="text-[10px] text-terminal-text-muted">Smart Money & Senate Activity</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-terminal-surface/20 text-[10px] text-terminal-text-muted uppercase sticky top-0 backdrop-blur-sm z-10">
                        <tr>
                            <th className="px-4 py-2 font-bold">Insider</th>
                            <th className="px-2 py-2 font-bold">Ticker</th>
                            <th className="px-2 py-2 font-bold">Action</th>
                            <th className="px-4 py-2 font-bold text-right">Value</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-terminal-border/30">
                        {insiderTrades.map((trade, idx) => (
                            <tr key={idx} className="group hover:bg-terminal-surface/30 transition-colors">
                                <td className="px-4 py-3">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-terminal-text">{trade.name}</span>
                                        <span className="text-[10px] text-terminal-text-dim flex items-center gap-1">
                                            {trade.role === 'Senate' ? <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> : null}
                                            {trade.role}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-2 py-3">
                                    <span className="text-xs font-mono font-bold text-terminal-text bg-terminal-surface px-1.5 py-0.5 rounded border border-terminal-border">{trade.ticker}</span>
                                </td>
                                <td className="px-2 py-3">
                                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${trade.type === 'Buy'
                                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                                        }`}>
                                        {trade.type === 'Buy' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        {trade.type}
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <div className="text-xs font-bold text-terminal-text">{trade.val}</div>
                                    <div className="text-[10px] text-terminal-text-muted">{trade.date}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Alert Footer */}
            <div className="p-3 bg-indigo-500/5 border-t border-indigo-500/10 flex items-center justify-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span className="text-[10px] text-indigo-300">Unusual Promoter buying detected in Power sector</span>
            </div>
        </div>
    );
};
