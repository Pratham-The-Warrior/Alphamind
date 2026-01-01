import React, { useState } from 'react';
import { Newspaper, ArrowUpRight } from 'lucide-react';

interface NewsItem {
    id: string;
    title: string;
    source: string;
    time: string;
    impact: 'High' | 'Medium' | 'Low';
    tickers: string[];
    isPortfolio: boolean;
    summary: string;
}

const mockNews: NewsItem[] = [
    {
        id: '1',
        title: 'RBI signals stance change to "Neutral" as core inflation eases',
        source: 'Moneycontrol',
        time: '2h ago',
        impact: 'High',
        tickers: ['BANKNIFTY', 'SBIN'],
        isPortfolio: true,
        summary: 'Reserve Bank of India governor hints at possible rate cuts later this fiscal year provided food inflation stabilizes.'
    },
    {
        id: '2',
        title: 'Tata Electronics to expand Hosur plant for Apple iPhone casings',
        source: 'Economic Times',
        time: '4h ago',
        impact: 'High',
        tickers: ['TATACOMM', 'VOLTAS'],
        isPortfolio: true,
        summary: 'The expansion is part of a larger plan to increase indigenous manufacturing components for the upcoming iPhone series.'
    },
    {
        id: '3',
        title: 'Brent Crude dips below $75, positive for OMCs',
        source: 'CNBC-TV18',
        time: '5h ago',
        impact: 'Medium',
        tickers: ['BPCL', 'HPCL'],
        isPortfolio: false,
        summary: 'Oil Marketing Companies rally as crude prices soften, improving marketing margins for the quarter.'
    },
    {
        id: '4',
        title: 'Adani Green secures funding for Khavda Renewable Energy Park',
        source: 'Bloomberg Quint',
        time: '6h ago',
        impact: 'High',
        tickers: ['ADANIGREEN', 'ADANIENT'],
        isPortfolio: true,
        summary: 'The conglomerate has raised $400M via green bonds to accelerate the development of the world\'s largest renewable park.'
    }
];

export const ResearchFeed: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'portfolio'>('portfolio');

    const filteredNews = filter === 'all' ? mockNews : mockNews.filter(n => n.isPortfolio);

    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-terminal-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-terminal-accent" />
                    <h3 className="font-bold text-terminal-text">Market Intelligence</h3>
                </div>
                <div className="flex bg-terminal-surface rounded-lg p-1 border border-terminal-border">
                    <button
                        onClick={() => setFilter('portfolio')}
                        className={`px-3 py-1 rounded text-xs font-bold transition-all ${filter === 'portfolio' ? 'bg-terminal-accent text-terminal-bg' : 'text-terminal-text-muted hover:text-terminal-text'}`}
                    >
                        PORTFOLIO
                    </button>
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-3 py-1 rounded text-xs font-bold transition-all ${filter === 'all' ? 'bg-terminal-accent text-terminal-bg' : 'text-terminal-text-muted hover:text-terminal-text'}`}
                    >
                        ALL MARKET
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {filteredNews.map((item) => (
                    <div key={item.id} className="group p-4 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-accent transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex flex-wrap gap-2">
                                {item.tickers.map(t => (
                                    <span key={t} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-terminal-border/50 text-terminal-text-muted">{t}</span>
                                ))}
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.impact === 'High' ? 'bg-red-500/10 text-red-500 border-red-500/30' :
                                item.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30' :
                                    'bg-blue-500/10 text-blue-500 border-blue-500/30'
                                }`}>
                                {item.impact.toUpperCase()} IMPACT
                            </span>
                        </div>
                        <h4 className="text-sm font-bold text-terminal-text mb-2 group-hover:text-terminal-accent transition-colors leading-snug">
                            {item.title}
                        </h4>
                        <p className="text-xs text-terminal-text-muted mb-3 line-clamp-2">
                            {item.summary}
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-terminal-text-dim">
                            <div className="flex items-center gap-2">
                                <span>{item.source}</span>
                                <span>•</span>
                                <span>{item.time}</span>
                            </div>
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-terminal-accent" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
