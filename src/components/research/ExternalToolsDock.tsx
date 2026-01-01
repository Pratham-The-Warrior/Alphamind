import React from 'react';
import { ExternalLink, Globe, BarChart2, BookOpen, Search, TrendingUp, Monitor } from 'lucide-react';

interface Tool {
    id: string;
    name: string;
    desc: string;
    url: string;
    icon: React.ReactNode;
    color: string;
    isIndian?: boolean;
}

const tools: Tool[] = [
    {
        id: 'bloomberg',
        name: 'Bloomberg',
        desc: 'Global Markets & News',
        url: 'https://www.bloomberg.com/asia',
        icon: <Monitor className="w-4 h-4" />,
        color: 'text-indigo-400'
    },
    {
        id: 'alphasense',
        name: 'AlphaSense',
        desc: 'AI Market Intelligence',
        url: 'https://www.alpha-sense.com',
        icon: <Search className="w-4 h-4" />,
        color: 'text-purple-400'
    },
    {
        id: 'tijori',
        name: 'Tijori Finance',
        desc: 'Deep Dive Indian Equities',
        url: 'https://www.tijorifinance.com',
        icon: <BookOpen className="w-4 h-4" />,
        color: 'text-orange-400',
        isIndian: true
    },
    {
        id: 'screener',
        name: 'Screener.in',
        desc: 'Fundamental Analysis',
        url: 'https://www.screener.in',
        icon: <BarChart2 className="w-4 h-4" />,
        color: 'text-emerald-400',
        isIndian: true
    },
    {
        id: 'trendlyne',
        name: 'Trendlyne',
        desc: 'Analytics & Forensics',
        url: 'https://trendlyne.com',
        icon: <TrendingUp className="w-4 h-4" />,
        color: 'text-blue-400',
        isIndian: true
    },
    {
        id: 'tradingview',
        name: 'TradingView',
        desc: 'Technical Charting',
        url: 'https://in.tradingview.com',
        icon: <Globe className="w-4 h-4" />,
        color: 'text-cyan-400'
    }
];

export const ExternalToolsDock: React.FC = () => {
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-2 px-1">
                <ExternalLink className="w-4 h-4 text-terminal-accent" />
                <h3 className="text-sm font-bold text-terminal-text">External Intelligence Suite</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {tools.map((tool) => (
                    <a
                        key={tool.id}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-3 bg-terminal-surface/40 border border-terminal-border rounded-lg hover:border-terminal-accent/50 hover:bg-terminal-surface transition-all duration-200"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className={`p-1.5 rounded-md bg-[#0E1118] border border-terminal-border group-hover:border-terminal-accent/30 ${tool.color}`}>
                                {tool.icon}
                            </div>
                            <ExternalLink className="w-3 h-3 text-terminal-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="mt-1">
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-terminal-text">{tool.name}</span>
                                {tool.isIndian && (
                                    <span className="text-[9px] font-bold text-orange-400 bg-orange-400/10 px-1 rounded">IN</span>
                                )}
                            </div>
                            <span className="text-[10px] text-terminal-text-muted line-clamp-1 mt-0.5">{tool.desc}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
