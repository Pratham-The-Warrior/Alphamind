import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

interface ForgotPasswordProps {
    onBackToLogin: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBackToLogin }) => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen w-screen bg-terminal-bg p-4 flex items-center justify-center">
            <div className="w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                        ALPHA MIND
                    </h1>
                    <p className="text-terminal-text-dim text-sm">
                        Terminal Access Recovery
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-terminal-surface border border-terminal-border rounded-lg p-6 relative overflow-hidden"
                >
                    {/* Progress Bar Effect */}
                    {isLoading && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5 }}
                            className="absolute top-0 left-0 h-1 bg-terminal-accent"
                        />
                    )}

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-6">
                                <h3 className="text-terminal-text font-bold mb-2">RESET PASSWORD</h3>
                                <p className="text-terminal-text-dim text-xs">
                                    Enter your registered email or Trader ID to receive recovery instructions.
                                </p>
                            </div>

                            <div>
                                <label className="block text-terminal-text-muted text-xs font-medium mb-2">
                                    IDENTIFIER
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-text-muted" />
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors"
                                        placeholder="email@example.com or TRADER_ID"
                                        required
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 bg-terminal-accent text-terminal-bg font-bold rounded-lg hover:shadow-terminal-glow transition-all disabled:opacity-50 mt-6"
                            >
                                {isLoading ? "PROCESSING RECOVERY..." : "SEND RECOVERY LINK"}
                            </motion.button>
                        </form>
                    ) : (
                        <div className="text-center py-4">
                            <CheckCircle2 className="w-16 h-16 text-terminal-success mx-auto mb-4" />
                            <h3 className="text-terminal-text font-bold mb-2">RECOVERY SENT</h3>
                            <p className="text-terminal-text-dim text-sm mb-6">
                                If an account exists for <span className="text-terminal-accent">{email}</span>,
                                you will receive a recovery link shortly.
                            </p>
                            <div className="bg-terminal-bg p-3 rounded-lg border border-terminal-border text-xs text-terminal-text-muted mb-4 text-left">
                                <p>• Check your encrypted inbox</p>
                                <p>• Link expires in 15 minutes</p>
                                <p>• Check spam folder if not received</p>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={onBackToLogin}
                        className="w-full mt-4 flex items-center justify-center space-x-2 text-xs text-terminal-text-dim hover:text-terminal-accent transition-colors"
                    >
                        <ArrowLeft className="w-3 h-3" />
                        <span>RETURN TO LOGIN</span>
                    </button>
                </motion.div>

                <div className="mt-8 bg-terminal-panel border border-terminal-warning rounded-lg p-3">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                        <Shield className="w-3 h-3 text-terminal-warning" />
                        <span className="text-terminal-warning text-xs font-bold">
                            SECURITY PROTOCOL
                        </span>
                    </div>
                    <p className="text-xs text-terminal-text-dim text-center">
                        Recovery attempts are logged. Multiple failed attempts will trigger IP lock.
                    </p>
                </div>
            </div>
        </div>
    );
};
