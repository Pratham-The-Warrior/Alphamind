import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ShieldAlert, ArrowLeft, RefreshCw } from 'lucide-react';

interface NotFoundPageProps {
    onReturnBase: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnBase }) => {
    return (
        <div className="min-h-screen w-screen bg-terminal-bg flex items-center justify-center p-6 relative overflow-hidden">
            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

            <div className="max-w-xl w-full text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="inline-block p-4 bg-terminal-danger/10 border-2 border-terminal-danger rounded-full mb-6 animate-pulse">
                        <ShieldAlert className="w-16 h-16 text-terminal-danger" />
                    </div>
                    <h1 className="text-6xl font-black text-terminal-danger mb-2 tracking-tighter">404</h1>
                    <div className="text-terminal-text font-mono text-xl font-bold uppercase tracking-[0.3em] mb-4">
                        Session Fragmented
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-terminal-surface border border-terminal-border p-8 rounded-lg shadow-2xl text-left"
                >
                    <div className="flex items-center space-x-2 mb-6 border-b border-terminal-border pb-4">
                        <TerminalIcon className="w-4 h-4 text-terminal-danger" />
                        <span className="text-terminal-danger text-xs font-bold uppercase tracking-widest font-mono">System Error Log</span>
                    </div>

                    <div className="space-y-4 font-mono text-xs mb-8">
                        <div className="flex space-x-4">
                            <span className="text-terminal-text-muted">[TIME]</span>
                            <span className="text-terminal-text">{new Date().toISOString()}</span>
                        </div>
                        <div className="flex space-x-4">
                            <span className="text-terminal-text-muted">[INFO]</span>
                            <span className="text-terminal-text">Requested resource could not be located on terminal nodes.</span>
                        </div>
                        <div className="flex space-x-4">
                            <span className="text-terminal-text-muted">[CODE]</span>
                            <span className="text-terminal-danger font-bold">ERR_SESSION_INVALID_OR_NOT_FOUND</span>
                        </div>
                        <div className="flex space-x-4">
                            <span className="text-terminal-text-muted">[ACTION]</span>
                            <span className="text-terminal-warning">Terminate session and return to base.</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="flex items-center justify-center space-x-2 py-3 bg-terminal-panel border border-terminal-border text-terminal-text hover:border-terminal-accent transition-all rounded text-xs font-bold uppercase"
                        >
                            <RefreshCw className="w-3 h-3" />
                            <span>Retry Session</span>
                        </button>
                        <button
                            onClick={onReturnBase}
                            className="flex items-center justify-center space-x-2 py-3 bg-terminal-accent text-terminal-bg transition-all rounded text-xs font-bold uppercase hover:shadow-[0_0_15px_rgba(255,107,53,0.4)]"
                        >
                            <ArrowLeft className="w-3 h-3" />
                            <span>Return to Base</span>
                        </button>
                    </div>
                </motion.div>

                <div className="mt-8 text-[10px] text-terminal-text-muted font-mono uppercase tracking-widest">
                    Node Address: 0xFD404-AM // Alpha Mind Security Protocol Active
                </div>
            </div>
        </div>
    );
};
