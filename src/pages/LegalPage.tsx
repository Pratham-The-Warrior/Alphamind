import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock, FileText, Globe } from 'lucide-react';

interface LegalPageProps {
    title: string;
    onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, onBack }) => {
    return (
        <div className="min-h-screen w-screen bg-terminal-bg p-6 flex items-center justify-center overflow-auto scrollbar-thin scrollbar-thumb-terminal-border scrollbar-track-terminal-surface">
            <div className="max-w-3xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between mb-8 border-b border-terminal-border pb-4"
                >
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-terminal-accent/10 border border-terminal-accent rounded">
                            <Shield className="w-5 h-5 text-terminal-accent" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-terminal-text tracking-tight uppercase">{title}</h1>
                            <p className="text-[10px] text-terminal-text-muted font-mono tracking-widest uppercase mt-0.5">Classification: PUBLIC / ALPHA-MIND PROTOCOL</p>
                        </div>
                    </div>
                    <button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-xs text-terminal-text-muted hover:text-terminal-accent transition-colors uppercase font-bold tracking-widest"
                    >
                        <ArrowLeft className="w-3 h-3" />
                        <span>Return</span>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-terminal-surface border border-terminal-border rounded-lg p-8 shadow-2xl font-mono text-xs leading-relaxed text-terminal-text-dim space-y-6"
                >
                    <section className="space-y-3">
                        <div className="flex items-center space-x-2 text-terminal-text font-bold uppercase tracking-wider">
                            <span className="text-terminal-accent">01.</span>
                            <span>SYSTEM ACCEPTANCE</span>
                        </div>
                        <p>By accessing the Alpha Mind Trading Terminal, you acknowledge that you are entering an encrypted trading environment. All transactions are final and subject to the liquidity protocols defined by our AI engine. You accept full responsibility for all trades executed under your Trader ID.</p>
                    </section>

                    <section className="space-y-3">
                        <div className="flex items-center space-x-2 text-terminal-text font-bold uppercase tracking-wider">
                            <span className="text-terminal-accent">02.</span>
                            <span>DATA PRIVACY & ENCRYPTION</span>
                        </div>
                        <p>We utilize AES-256 polymorphic encryption for all user data. Your trade history, portfolio allocation, and identification markers are stored in distributed nodes. Under no circumstances will Alpha Mind technicians request your master encryption key. All support communication is end-to-end encrypted.</p>
                    </section>

                    <section className="space-y-3">
                        <div className="flex items-center space-x-2 text-terminal-text font-bold uppercase tracking-wider">
                            <span className="text-terminal-accent">03.</span>
                            <span>ALGORITHMIC EXECUTION</span>
                        </div>
                        <p>The Alpha Mind AI Optimizer provides statistical predictions based on real-time market data. These are mathematical probabilities, not financial guarantees. Users are advised to calibrate their Risk Threshold settings before deploying automated trading scripts.</p>
                    </section>

                    <section className="space-y-3">
                        <div className="flex items-center space-x-2 text-terminal-text font-bold uppercase tracking-wider">
                            <span className="text-terminal-accent">04.</span>
                            <span>LIQUIDITY & RISK</span>
                        </div>
                        <p>Trading in financial markets involves high risk. Alpha Mind does not provide insurance against market volatility or system latency during periods of extreme high-volume throughput. Users must maintain adequate margin buffers as specified in the margin calculator.</p>
                    </section>

                    <div className="pt-8 border-t border-terminal-border grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3">
                            <Lock className="w-4 h-4 text-terminal-success" />
                            <span className="text-[9px] uppercase font-bold tracking-widest text-terminal-text-muted">Encrypted Storage</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FileText className="w-4 h-4 text-terminal-blue" />
                            <span className="text-[9px] uppercase font-bold tracking-widest text-terminal-text-muted">GDPR Compliant</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Globe className="w-4 h-4 text-terminal-warning" />
                            <span className="text-[9px] uppercase font-bold tracking-widest text-terminal-text-muted">Global Protocol</span>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-8 text-center">
                    <p className="text-[9px] text-terminal-text-muted font-mono uppercase tracking-[0.2em]">Alpha Mind v2.1.4 // Legal Document Revision 2025.12.A</p>
                </div>
            </div>
        </div>
    );
};
