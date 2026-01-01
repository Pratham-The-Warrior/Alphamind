import React, { useState } from 'react';
import { FileText, Cpu, Upload } from 'lucide-react';

export const ReportsSummarizer: React.FC = () => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analyzed, setAnalyzed] = useState(false);

    const handleSimulateAnalysis = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setAnalyzed(true);
        }, 2000);
    };

    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-terminal-border flex items-center gap-2">
                <FileText className="w-5 h-5 text-terminal-accent" />
                <h3 className="font-bold text-terminal-text">AI Report Analyst</h3>
            </div>

            <div className="flex-1 p-6">
                {!analyzed ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                        <div className={`p-4 rounded-full bg-terminal-surface border border-terminal-border ${isAnalyzing ? 'animate-pulse' : ''}`}>
                            <Upload className="w-8 h-8 text-terminal-text-muted" />
                        </div>
                        <div>
                            <p className="text-terminal-text font-bold">Drop Annual Report (PDF)</p>
                            <p className="text-xs text-terminal-text-muted mt-1">AI extracts KPIs & Risk Factors instantly</p>
                        </div>
                        <button
                            onClick={handleSimulateAnalysis}
                            disabled={isAnalyzing}
                            className={`px-6 py-2 bg-terminal-accent text-terminal-bg font-bold rounded hover:opacity-90 transition-all ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isAnalyzing ? 'EXTRACTING INTELLIGENCE...' : 'SIMULATE ANALYSIS'}
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-2 text-xs font-bold text-terminal-accent uppercase tracking-widest mb-4">
                            <Cpu className="w-3 h-3" /> Analysis Complete
                        </div>

                        <div className="p-3 bg-terminal-surface rounded border border-terminal-border/50">
                            <h4 className="font-bold text-terminal-text text-sm mb-1">Key Takeaways</h4>
                            <p className="text-xs text-terminal-text-dim leading-relaxed">
                                Revenue grew 15% YoY driven by strong cloud adoption. Margins expanded due to cost-cutting measures.
                                Guidance raised for Q4.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-bold text-terminal-text text-xs uppercase text-terminal-text-muted">Extracted KPIs</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 bg-terminal-surface rounded text-center">
                                    <div className="text-xs text-terminal-text-muted">Revenue</div>
                                    <div className="text-sm font-bold text-green-400">$14.2B <span className="text-[10px]">▲ 15%</span></div>
                                </div>
                                <div className="p-2 bg-terminal-surface rounded text-center">
                                    <div className="text-xs text-terminal-text-muted">EPS</div>
                                    <div className="text-sm font-bold text-green-400">$1.45 <span className="text-[10px]">▲ 8%</span></div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setAnalyzed(false)}
                            className="w-full py-2 mt-4 text-xs font-bold text-terminal-text-muted hover:text-terminal-accent border border-terminal-border rounded hover:border-terminal-accent transition-all"
                        >
                            ANALYZE ANOTHER
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
