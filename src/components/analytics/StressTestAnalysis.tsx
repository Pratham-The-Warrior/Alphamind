import React from 'react';
import { AlertTriangle, TrendingDown, Flame, Thermometer } from 'lucide-react';

const scenarios = [
    {
        name: '2008 Crisis Repeat',
        impact: '-42.5%',
        probability: 'Low',
        icon: AlertTriangle,
        color: 'text-red-500'
    },
    {
        name: 'Tech Bubble Burst',
        impact: '-28.4%',
        probability: 'Medium',
        icon: TrendingDown,
        color: 'text-orange-500'
    },
    {
        name: 'Interest Rate Spike',
        impact: '-12.3%',
        probability: 'High',
        icon: Thermometer,
        color: 'text-yellow-500'
    },
    {
        name: 'Geopolitical Conflict',
        impact: '-18.7%',
        probability: 'Medium',
        icon: Flame,
        color: 'text-terminal-danger'
    }
];

export const StressTestAnalysis: React.FC = () => {
    return (
        <div className="mt-6 border-t border-terminal-border pt-6">
            <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-terminal-danger" />
                <span className="text-terminal-danger text-sm font-bold">STRESS TEST SCENARIOS</span>
            </div>

            <div className="space-y-3">
                {scenarios.map((scenario) => (
                    <div key={scenario.name} className="bg-terminal-surface/50 p-3 rounded border border-white/5 hover:border-terminal-danger/30 transition-colors group">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-terminal-text text-xs font-bold group-hover:text-white transition-colors">
                                {scenario.name}
                            </span>
                            <span className={`font-mono text-sm font-bold ${scenario.color}`}>
                                {scenario.impact}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-terminal-text-muted">
                            <span className="flex items-center space-x-1">
                                <scenario.icon className="w-3 h-3 opacity-70" />
                                <span>Prob: {scenario.probability}</span>
                            </span>
                            <span>Est. Drawdown</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 p-2 bg-red-500/10 rounded border border-red-500/20 text-[10px] text-red-200/70 text-center">
                Portfolio fails 1/4 critical stress tests. Consider increasing hedge allocation.
            </div>
        </div>
    );
};
