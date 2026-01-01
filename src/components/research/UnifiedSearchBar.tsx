import React, { useState } from 'react';
import { Search, ExternalLink, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
    id: string;
    type: 'ticker' | 'sector' | 'topic';
    label: string;
    subLabel: string;
}

const mockResults: SearchResult[] = [
    { id: 'RELIANCE', type: 'ticker', label: 'RELIANCE', subLabel: 'Reliance Industries • Oil & Gas/Telecom' },
    { id: 'HDFCBANK', type: 'ticker', label: 'HDFCBANK', subLabel: 'HDFC Bank Ltd • Banking' },
    { id: 'EV', type: 'topic', label: 'Electric Vehicles', subLabel: 'FAME II Subsidy Theme' },
    { id: 'PSU', type: 'sector', label: 'Public Sector (PSU)', subLabel: 'Defense & Rail Rally' },
    { id: 'TATA', type: 'ticker', label: 'TATAMOTORS', subLabel: 'Tata Motors • Auto' },
];

export const UnifiedSearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const filteredResults = mockResults.filter(r =>
        r.label.toLowerCase().includes(query.toLowerCase()) ||
        r.subLabel.toLowerCase().includes(query.toLowerCase())
    );

    const handleExternalSearch = (platform: string) => {
        let url = '';
        const q = encodeURIComponent(query || 'market news');
        switch (platform) {
            case 'perplexity': url = `https://www.perplexity.ai/search?q=${q}`; break;
            case 'bloomberg': url = `https://www.bloomberg.com/search?query=${q}`; break;
            case 'tradingview': url = `https://www.tradingview.com/symbols/${q}`; break;
            case 'google_trends': url = `https://trends.google.com/trends/explore?q=${q}`; break;
            default: return;
        }
        window.open(url, '_blank');
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto z-50">
            <div className={`relative flex items-center bg-[#0B0D14] border rounded-xl transition-all duration-300 ${isFocused ? 'border-terminal-accent shadow-[0_0_20px_rgba(0,194,255,0.15)] ring-1 ring-terminal-accent/30' : 'border-terminal-border'}`}>
                <Search className={`ml-4 w-5 h-5 ${isFocused ? 'text-terminal-accent' : 'text-terminal-text-muted'} transition-colors`} />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="w-full bg-transparent border-none focus:ring-0 text-terminal-text placeholder-terminal-text-muted/50 py-4 px-3 text-lg"
                    placeholder="Search tickers (NSE/BSE), sectors, topics (e.g., 'RELIANCE', 'PSU', 'Budget')..."
                />
                <div className="mr-4 flex gap-2 hidden md:flex">
                    <span className="text-xs text-terminal-text-subtle font-mono px-2 py-1 rounded bg-terminal-surface border border-terminal-border">CMD+K</span>
                </div>
            </div>

            <AnimatePresence>
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0E1118] border border-terminal-border rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        {/* Direct Actions Bar */}
                        {query && (
                            <div className="p-3 border-b border-terminal-border/50 bg-terminal-surface/30 flex gap-2 overflow-x-auto">
                                <button onClick={() => handleExternalSearch('perplexity')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold hover:bg-blue-500/20 border border-blue-500/30 transition-all whitespace-nowrap">
                                    <Globe className="w-3 h-3" /> Ask Perplexity
                                </button>
                                <button onClick={() => handleExternalSearch('bloomberg')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold hover:bg-indigo-500/20 border border-indigo-500/30 transition-all whitespace-nowrap">
                                    <ExternalLink className="w-3 h-3" />Bloomberg
                                </button>
                                <button onClick={() => handleExternalSearch('tradingview')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold hover:bg-green-500/20 border border-green-500/30 transition-all whitespace-nowrap">
                                    <TrendingUp className="w-3 h-3" /> TradingView
                                </button>
                                <button onClick={() => handleExternalSearch('google_trends')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold hover:bg-yellow-500/20 border border-yellow-500/30 transition-all whitespace-nowrap">
                                    <Search className="w-3 h-3" /> Trends
                                </button>
                            </div>
                        )}

                        <div className="py-2">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((result) => (
                                    <div key={result.id} className="px-4 py-3 hover:bg-terminal-surface cursor-pointer flex items-center justify-between group">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${result.type === 'ticker' ? 'bg-terminal-accent/10 text-terminal-accent' :
                                                result.type === 'sector' ? 'bg-purple-500/10 text-purple-400' :
                                                    'bg-pink-500/10 text-pink-400'
                                                }`}>
                                                {result.type === 'ticker' ? 'TCK' : result.type === 'sector' ? 'SEC' : 'TPC'}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-terminal-text group-hover:text-terminal-accent transition-colors">{result.label}</div>
                                                <div className="text-xs text-terminal-text-muted">{result.subLabel}</div>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-terminal-text-muted opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-terminal-text-muted">
                                    <Search className="w-8 h-8 mx-auto mb-2 opacity-20" />
                                    <p className="text-sm">No internal results. Try external search buttons above.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
