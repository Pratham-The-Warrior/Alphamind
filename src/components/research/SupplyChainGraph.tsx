import React from 'react';
import { Share2, AlertTriangle } from 'lucide-react';

export const SupplyChainGraph: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-terminal-border flex items-center justify-between bg-terminal-surface/30">
                <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-orange-400" />
                    <div>
                        <h3 className="font-bold text-terminal-text text-sm">Supply Chain Map</h3>
                        <p className="text-[10px] text-terminal-text-muted">Dependency & Risk Analysis</p>
                    </div>
                </div>
                <div className="text-[10px] font-bold text-orange-400 border border-orange-400/20 bg-orange-400/5 px-2 py-1 rounded">
                    SEMI: SHORTAGE ALERT
                </div>
            </div>

            <div className="flex-1 p-6 relative flex items-center justify-center">
                {/* Visual Graph Representation using absolute positioning for a 'Network' look */}

                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center animate-pulse-slow">
                    <div className="w-20 h-20 rounded-full bg-terminal-bg border-2 border-terminal-accent shadow-[0_0_20px_rgba(0,194,255,0.2)] flex items-center justify-center z-10 transition-transform hover:scale-110 cursor-pointer">
                        <span className="font-black text-xs text-terminal-accent tracking-tighter text-center leading-tight">TATA<br />MOTORS</span>
                    </div>
                    <div className="mt-2 text-xs font-bold text-terminal-text bg-terminal-bg/50 px-2 rounded">Tata Motors Ltd</div>
                </div>

                {/* Supplier Tier (Left) */}
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-16">
                    <div className="group flex items-center gap-3">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-terminal-text-muted">Steel</span>
                            <span className="text-sm font-bold text-terminal-text group-hover:text-orange-400 transition-colors">Tata Steel</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse border-2 border-terminal-bg" />

                        {/* Connection Line */}
                        <div className="hidden md:block absolute left-full top-1/2 w-32 h-[1px] bg-gradient-to-r from-orange-400/50 to-terminal-accent/50 -z-10 origin-left rotate-12 translate-y-2 opacity-50" />
                    </div>

                    <div className="group flex items-center gap-3">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-terminal-text-muted">Chips</span>
                            <span className="text-sm font-bold text-terminal-text group-hover:text-blue-400 transition-colors">Bosch Ltd</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-blue-400 border-2 border-terminal-bg" />
                    </div>
                </div>

                {/* Customer Tier (Right) */}
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-16">
                    <div className="group flex items-center gap-3 flex-row-reverse">
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] text-terminal-text-muted">Global Luxury</span>
                            <span className="text-sm font-bold text-terminal-text group-hover:text-terminal-accent transition-colors">JLR UK</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-terminal-accent border-2 border-terminal-bg" />
                    </div>

                    <div className="group flex items-center gap-3 flex-row-reverse">
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] text-terminal-text-muted">Defense</span>
                            <span className="text-sm font-bold text-terminal-text group-hover:text-terminal-accent transition-colors">Indian Army</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-terminal-accent border-2 border-terminal-bg" />
                    </div>
                </div>

                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(14,17,24,0)_1px,transparent_1px),linear-gradient(90deg,rgba(14,17,24,0)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1F2937 1px, transparent 1px)' }}></div>

                {/* Floating Risk Alert */}
                <div className="absolute bottom-4 left-4 bg-red-500/10 border border-red-500/30 rounded p-2 flex items-start gap-2 max-w-[200px] backdrop-blur-sm">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <div className="text-[10px] font-bold text-red-400">Geopolitical Risk High</div>
                        <p className="text-[9px] text-red-300/70 leading-tight">Taiwan Strait tension index elevated. 85% of supply dependent on TSMC.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
