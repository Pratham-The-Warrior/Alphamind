import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    Search,
    ExternalLink,
    Target,
    Activity,
    Cpu,
    Info
} from 'lucide-react';
import { UnifiedSearchBar } from '../components/research/UnifiedSearchBar';
import { ResearchFeed } from '../components/research/ResearchFeed';
import { InstitutionalFlow } from '../components/research/InstitutionalFlow';
import { MacroHeatmap } from '../components/research/MacroHeatmap';
import { SupplyChainGraph } from '../components/research/SupplyChainGraph';
import { InsiderTracker } from '../components/research/InsiderTracker';
import { ExternalToolsDock } from '../components/research/ExternalToolsDock';
import { EventsCalendar } from '../components/research/EventsCalendar';

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
                        className="space-y-6"
                    >
                        {/* Unified Search & Lookup */}
                        <div className="mb-8">
                            <UnifiedSearchBar />
                        </div>

                        {/* External Tools Dock */}
                        <div className="mb-8">
                            <ExternalToolsDock />
                        </div>

                        {/* Main Dashboard Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
                            {/* Left Column: Feed (7 cols) */}
                            <div className="lg:col-span-7 h-full">
                                <ResearchFeed />
                            </div>

                            {/* Right Column: Calendar (5 cols) */}
                            <div className="lg:col-span-5 h-full">
                                <EventsCalendar />
                            </div>
                        </div>

                        {/* Advanced Intelligence Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[450px]">
                            <InstitutionalFlow />
                            <MacroHeatmap />
                            <SupplyChainGraph />
                            <InsiderTracker />
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
