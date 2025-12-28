import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    Search,
    ExternalLink,
    BarChart2,
    Activity,
    Globe,
    TrendingUp,
    Cpu,
    Target,
    Info
} from 'lucide-react';

interface Concept {
    id: string;
    category: 'ratio' | 'matrix' | 'strategy';
    title: string;
    definition: string;
    formula?: string;
    importance: string;
    link?: string;
}

const concepts: Concept[] = [
    {
        id: 'sharpe',
        category: 'ratio',
        title: 'Sharpe Ratio',
        definition: 'Measures the performance of an investment compared to a risk-free asset, after adjusting for its risk.',
        formula: '(Portfolio Return - Risk-Free Rate) / Portfolio Standard Deviation',
        importance: 'The higher the Sharpe ratio, the better the risk-adjusted return. A ratio above 1 is generally considered good.',
        link: 'https://www.investopedia.com/terms/s/sharperatio.asp'
    },
    {
        id: 'alpha',
        category: 'ratio',
        title: 'Alpha',
        definition: 'The excess return of an investment relative to the return of a benchmark index.',
        formula: 'Alpha = R - [Rf + Beta * (Rm - Rf)]',
        importance: 'Positive alpha indicates the portfolio manager has "beaten" the market. It represents the value added by active management.',
        link: 'https://www.investopedia.com/terms/a/alpha.asp'
    },
    {
        id: 'beta',
        category: 'ratio',
        title: 'Beta',
        definition: "A measure of a stock's volatility in relation to the overall market.",
        formula: 'Covariance(Stock, Market) / Variance(Market)',
        importance: 'Beta of 1 means the stock moves with the market. Beta > 1 means more volatile than market; Beta < 1 means less volatile.',
        link: 'https://www.investopedia.com/terms/b/beta.asp'
    },
    {
        id: 'var',
        category: 'ratio',
        title: 'Value at Risk (VaR)',
        definition: 'A statistic that quantifies the extent of possible financial losses within a firm, portfolio, or position over a specific time frame.',
        importance: 'Critically used for risk management to estimate the maximum loss with a given confidence level (e.g., 95%).',
        link: 'https://www.investopedia.com/terms/v/var.asp'
    },
    {
        id: 'correlation',
        category: 'matrix',
        title: 'Correlation Matrix',
        definition: 'A table showing correlation coefficients between variables. Each cell shows the relationship between two specific assets.',
        importance: 'Essential for diversification. Assets with low or negative correlation help reduce overall portfolio risk.',
        link: 'https://www.investopedia.com/terms/c/correlationcoefficient.asp'
    },
    {
        id: 'sortino',
        category: 'ratio',
        title: 'Sortino Ratio',
        definition: 'A variation of the Sharpe ratio that differentiates harmful volatility from total overall volatility by using the asset\'s standard deviation of negative portfolio returns.',
        formula: '(Portfolio Return - Risk-Free Rate) / Downside Deviation',
        importance: 'More specific than Sharpe as it only penalizes "bad" (downside) volatility.',
        link: 'https://www.investopedia.com/terms/s/sortinoratio.asp'
    }
];

const externalTools = [
    {
        name: 'TradingView',
        description: 'Advanced charting and technical analysis platform.',
        url: 'https://www.tradingview.com/chart/',
        icon: BarChart2,
        color: 'text-blue-400'
    },
    {
        name: 'Moneycontrol',
        description: 'Real-time Indian market news, analysis, and data.',
        url: 'https://www.moneycontrol.com',
        icon: Globe,
        color: 'text-orange-400'
    },
    {
        name: 'Screener.in',
        description: 'Powerful stock analysis and screening tool for Indian equities.',
        url: 'https://www.screener.in',
        icon: Search,
        color: 'text-emerald-400'
    },
    {
        name: 'NSE India',
        description: 'Official National Stock Exchange of India website for raw market data.',
        url: 'https://www.nseindia.com',
        icon: Activity,
        color: 'text-red-400'
    },
    {
        name: 'Tickertape',
        description: 'Content-driven investment analysis platform for Indian stocks.',
        url: 'https://www.tickertape.in',
        icon: TrendingUp,
        color: 'text-yellow-400'
    }
];

export const AlphaReference: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'glossary' | 'research'>('glossary');

    const filteredConcepts = concepts.filter(c =>
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 h-full overflow-auto space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-terminal-accent flex items-center gap-2">
                        <BookOpen className="w-6 h-6" />
                        ALPHA REFERENCE
                    </h1>
                    <p className="text-terminal-text-muted text-sm mt-1">
                        Knowledge base and research hub for modern alpha generation.
                    </p>
                </div>

                <div className="flex bg-terminal-surface rounded-lg p-1 border border-terminal-border">
                    <button
                        onClick={() => setActiveTab('glossary')}
                        className={`px-4 py-2 rounded-md transition-all text-xs font-bold ${activeTab === 'glossary'
                                ? 'bg-terminal-accent text-terminal-bg'
                                : 'text-terminal-text-muted hover:text-terminal-text'
                            }`}
                    >
                        GLOSSARY
                    </button>
                    <button
                        onClick={() => setActiveTab('research')}
                        className={`px-4 py-2 rounded-md transition-all text-xs font-bold ${activeTab === 'research'
                                ? 'bg-terminal-accent text-terminal-bg'
                                : 'text-terminal-text-muted hover:text-terminal-text'
                            }`}
                    >
                        RESEARCH HUB
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'glossary' ? (
                    <motion.div
                        key="glossary"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                    >
                        {/* Search Bar */}
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                            <input
                                type="text"
                                placeholder="Search concepts, ratios, or metrics..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-terminal-surface border border-terminal-border rounded-lg py-2 pl-10 pr-4 text-sm text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors"
                            />
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredConcepts.map((concept, index) => (
                                <motion.div
                                    key={concept.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="terminal-panel p-5 group hover:border-terminal-accent transition-colors cursor-default"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className={`p-2 rounded bg-terminal-surface text-terminal-accent`}>
                                            {concept.category === 'ratio' ? <Target className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                                        </div>
                                        <span className="text-[10px] font-bold text-terminal-text-muted uppercase tracking-widest bg-terminal-surface px-2 py-1 rounded">
                                            {concept.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-terminal-text mb-2 group-hover:text-terminal-accent transition-colors">
                                        {concept.title}
                                    </h3>
                                    <p className="text-sm text-terminal-text-dim mb-4 leading-relaxed">
                                        {concept.definition}
                                    </p>

                                    {concept.formula && (
                                        <div className="bg-[#0B0D14] p-3 rounded border border-terminal-border mb-4 font-mono text-[11px] text-terminal-warning overflow-x-auto">
                                            <div className="text-terminal-text-muted text-[9px] mb-1 uppercase font-bold">Standard Formula</div>
                                            {concept.formula}
                                        </div>
                                    )}

                                    <div className="border-t border-terminal-border pt-4 mt-auto">
                                        <div className="text-[10px] text-terminal-text-muted mb-2 uppercase font-bold flex items-center gap-1">
                                            <Cpu className="w-3 h-3" /> Alpha Mind Perspective
                                        </div>
                                        <p className="text-xs text-terminal-text italic leading-snug">
                                            {concept.importance}
                                        </p>
                                    </div>

                                    {concept.link && (
                                        <a
                                            href={concept.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[10px] font-bold text-terminal-accent mt-4 hover:underline"
                                        >
                                            READ MORE <ExternalLink className="w-2 h-2" />
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {filteredConcepts.length === 0 && (
                            <div className="text-center py-20">
                                <Info className="w-12 h-12 text-terminal-text-muted mx-auto mb-4 opacity-20" />
                                <p className="text-terminal-text-muted">No tactical documentation found matching "{searchTerm}"</p>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="research"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                    >
                        {/* Research Hub Intro */}
                        <div className="terminal-panel p-8 text-center bg-gradient-to-b from-terminal-surface to-terminal-bg">
                            <TrendingUp className="w-12 h-12 text-terminal-accent mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-terminal-text">Integrated Research Suite</h2>
                            <p className="text-terminal-text-muted max-w-2xl mx-auto mt-2 leading-relaxed">
                                Connect your Alpha Mind analysis with world-class research tools. We've curated the most powerful external resources to help you conduct deep-dive fundamental and technical research.
                            </p>
                        </div>

                        {/* External Tools Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {externalTools.map((tool, index) => (
                                <motion.a
                                    key={tool.name}
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="terminal-panel p-6 flex flex-col items-center text-center group hover:bg-[#121620] transition-all hover:-translate-y-1"
                                >
                                    <div className={`p-4 rounded-full bg-terminal-bg border border-terminal-border mb-4 group-hover:border-terminal-accent transition-colors`}>
                                        <tool.icon className={`w-8 h-8 ${tool.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-terminal-text group-hover:text-terminal-accent transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-sm text-terminal-text-dim mt-2 mb-6">
                                        {tool.description}
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-xs font-bold text-terminal-accent px-4 py-2 border border-terminal-accent/30 rounded-full group-hover:bg-terminal-accent group-hover:text-terminal-bg transition-all">
                                        LAUNCH TOOL <ExternalLink className="w-3 h-3" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Custom Research Module Concept */}
                        <div className="terminal-panel p-6 border-dashed border-terminal-border flex flex-col md:flex-row items-center justify-between gap-6 opacity-80 bg-terminal-surface/30">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-terminal-surface border border-terminal-border">
                                    <Search className="w-6 h-6 text-terminal-text-muted" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-terminal-text">Need a custom research module?</h4>
                                    <p className="text-xs text-terminal-text-muted">Suggest any other financial tool you'd like to see integrated here.</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-terminal-surface border border-terminal-border rounded-md text-xs font-bold text-terminal-text hover:border-terminal-accent transition-all">
                                SUBMIT SUGGESTION
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
