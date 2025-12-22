import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Lock,
    Shield,
    ArrowLeft,
    Zap
} from "lucide-react";

interface SignupPageProps {
    onBackToLogin: () => void;
    onSignupComplete: (user: { username: string }) => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onBackToLogin, onSignupComplete }) => {
    const [formData, setFormData] = useState({
        traderId: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [step] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onSignupComplete({ username: formData.traderId });
        }, 2000);
    };

    return (
        <div className="h-screen w-screen bg-terminal-bg p-4 flex items-center justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-border scrollbar-track-terminal-surface matrix-bg relative">
            <div className="w-full max-w-lg">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                        ALPHA MIND
                    </h1>
                    <p className="text-terminal-text-dim text-sm uppercase tracking-widest">
                        New Account Registration Protocol
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
                >
                    {/* Progress Sidebar */}
                    <div className="bg-terminal-panel border-r border-terminal-border p-6 md:w-48 hidden md:block">
                        <div className="space-y-8 relative">
                            {[
                                { n: 1, label: 'IDENTITY', sub: 'Trader Credentials' },
                                { n: 2, label: 'SECURITY', sub: 'Secure Setup' },
                                { n: 3, label: 'ACCESS', sub: 'Terminal Login' }
                            ].map((s, i) => (
                                <div key={i} className="flex flex-col relative z-10">
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 font-bold text-xs ${step > s.n ? 'bg-terminal-success border-terminal-success text-terminal-bg' :
                                        step === s.n ? 'border-terminal-accent text-terminal-accent shadow-[0_0_10px_rgba(255,107,53,0.3)]' :
                                            'border-terminal-border text-terminal-text-muted'
                                        }`}>
                                        {step > s.n ? '✓' : s.n}
                                    </div>
                                    <div className={`text-[10px] font-bold ${step === s.n ? 'text-terminal-text' : 'text-terminal-text-muted'}`}>{s.label}</div>
                                    <div className="text-[9px] text-terminal-text-muted uppercase">{s.sub}</div>
                                </div>
                            ))}
                            <div className="absolute left-4 top-4 bottom-4 w-px bg-terminal-border -z-0"></div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="flex-1 p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-terminal-text font-bold text-sm">REGISTRATION DATA</h3>
                                <span className="text-[10px] text-terminal-accent font-mono">STEP {step} / 3</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-terminal-text-muted text-[10px] font-bold mb-1.5 tracking-wider">TRADER ID (USERNAME)</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                                        <input
                                            type="text"
                                            className="w-full pl-10 pr-4 py-2.5 bg-terminal-bg border border-terminal-border rounded text-terminal-text text-sm focus:border-terminal-accent outline-none transition-all"
                                            placeholder="e.g. TRADER_DELTA_7"
                                            required
                                            value={formData.traderId}
                                            onChange={e => setFormData({ ...formData, traderId: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-terminal-text-muted text-[10px] font-bold mb-1.5 tracking-wider">SECURE EMAIL</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                                        <input
                                            type="email"
                                            className="w-full pl-10 pr-4 py-2.5 bg-terminal-bg border border-terminal-border rounded text-terminal-text text-sm focus:border-terminal-accent outline-none transition-all"
                                            placeholder="trader@alphamind.ai"
                                            required
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-terminal-text-muted text-[10px] font-bold mb-1.5 tracking-wider">PASSWORD</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                                            <input
                                                type="password"
                                                className="w-full pl-10 pr-4 py-2.5 bg-terminal-bg border border-terminal-border rounded text-terminal-text text-sm focus:border-terminal-accent outline-none transition-all"
                                                placeholder="••••••••"
                                                required
                                                value={formData.password}
                                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-terminal-text-muted text-[10px] font-bold mb-1.5 tracking-wider">CONFIRM</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                                            <input
                                                type="password"
                                                className="w-full pl-10 pr-4 py-2.5 bg-terminal-bg border border-terminal-border rounded text-terminal-text text-sm focus:border-terminal-accent outline-none transition-all"
                                                placeholder="••••••••"
                                                required
                                                value={formData.confirmPassword}
                                                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 pt-2">
                                    <div className="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-terminal-border bg-terminal-bg text-terminal-accent focus:ring-terminal-accent transition-colors cursor-pointer"
                                            id="terms"
                                            required
                                            checked={formData.acceptTerms}
                                            onChange={e => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                        />
                                    </div>
                                    <label htmlFor="terms" className="text-[10px] text-terminal-text-muted leading-tight">
                                        I acknowledge and accept the Alpha Mind <span className="text-terminal-accent hover:underline cursor-pointer">Protocol Terms of Service</span> and <span className="text-terminal-accent hover:underline cursor-pointer">Data Privacy Policy</span>.
                                    </label>
                                </div>
                            </div>

                            <div className="pt-4 space-y-3">
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full py-3 bg-terminal-accent text-terminal-bg font-bold rounded flex items-center justify-center space-x-2 disabled:opacity-50 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin" />
                                            <span>INITIALIZING ACCOUNT...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Zap className="w-4 h-4" />
                                            <span>INITIALIZE TRADER PROFILE</span>
                                        </>
                                    )}
                                </motion.button>

                                <button
                                    type="button"
                                    onClick={onBackToLogin}
                                    className="w-full py-2 text-[10px] text-terminal-text-muted hover:text-terminal-text flex items-center justify-center space-x-2 transition-colors uppercase font-bold tracking-widest"
                                >
                                    <ArrowLeft className="w-3 h-3" />
                                    <span>Existing User Login</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Security Notice */}
                <div className="mt-8 bg-terminal-panel border border-terminal-border rounded p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-terminal-success" />
                        <span className="text-terminal-success text-[10px] font-bold uppercase tracking-widest">Enterprise Grade Security</span>
                    </div>
                    <p className="text-[10px] text-terminal-text-muted leading-relaxed">
                        All account data is encrypted using industry-standard protocols. Your privacy and security are our top priority.
                    </p>
                </div>
            </div>
        </div>
    );
};
