import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft, Shield, Terminal as TerminalIcon } from "lucide-react";

interface ContactSupportProps {
    onBackToLogin: () => void;
}

export const ContactSupport: React.FC<ContactSupportProps> = ({ onBackToLogin }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Technical Inquiry",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsSubmitted(true);
            }, 1000);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-screen bg-terminal-bg p-4 flex items-center justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-accent scrollbar-track-terminal-surface">
            <div className="w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                        ALPHA MIND
                    </h1>
                    <p className="text-terminal-text-dim text-sm">
                        Technical Support & Help Desk
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Sidebar Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:col-span-1 space-y-4"
                    >
                        <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4">
                            <h3 className="text-terminal-accent font-bold text-xs mb-3 flex items-center">
                                <TerminalIcon className="w-3 h-3 mr-2" />
                                SYSTEM STATUS
                            </h3>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-terminal-text-dim">Support Live</span>
                                    <span className="text-terminal-success">ONLINE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-terminal-text-dim">API Latency</span>
                                    <span className="text-terminal-success">12ms</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-terminal-text-dim">Queue Size</span>
                                    <span className="text-terminal-warning">LOW</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-terminal-panel border border-terminal-border rounded-lg p-4 text-xs">
                            <Shield className="w-4 h-4 text-terminal-accent mb-2" />
                            <p className="text-terminal-text leading-relaxed">
                                Encrypted support channel. All communication is secured via end-to-end PGP protocols.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-2 bg-terminal-surface border border-terminal-border rounded-lg p-6"
                    >
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-terminal-text-muted text-xs font-medium mb-1">TRADER NAME</label>
                                        <input
                                            type="text"
                                            className="w-full bg-terminal-bg border border-terminal-border rounded p-2 text-terminal-text text-sm focus:border-terminal-accent outline-none"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-terminal-text-muted text-xs font-medium mb-1">ENCRYPTED EMAIL</label>
                                        <input
                                            type="email"
                                            className="w-full bg-terminal-bg border border-terminal-border rounded p-2 text-terminal-text text-sm focus:border-terminal-accent outline-none"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-terminal-text-muted text-xs font-medium mb-1">INQUIRY SUBJECT</label>
                                    <select
                                        className="w-full bg-terminal-bg border border-terminal-border rounded p-2 text-terminal-text text-sm focus:border-terminal-accent outline-none"
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option>Technical Inquiry</option>
                                        <option>Account Access</option>
                                        <option>Trading Terminal Bug</option>
                                        <option>Feature Request</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-terminal-text-muted text-xs font-medium mb-1">MESSAGE DATA</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-terminal-bg border border-terminal-border rounded p-2 text-terminal-text text-sm focus:border-terminal-accent outline-none resize-none"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="pt-2">
                                    <motion.button
                                        type="submit"
                                        disabled={isLoading}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full py-3 bg-terminal-accent text-terminal-bg font-bold rounded flex items-center justify-center space-x-2 disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin" />
                                                <span>TRANSMITTING...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>SUBMIT TICKET</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center py-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-terminal-accent rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-terminal-bg" />
                                </motion.div>
                                <h3 className="text-terminal-text font-bold text-xl mb-2">TICKET RECEIVED</h3>
                                <p className="text-terminal-text-dim mb-6"> Ref ID: #AM-SUPPORT-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                                <p className="text-terminal-text-dim text-sm mb-8">
                                    Your inquiry has been queued for processing. A technician will respond via your encrypted email within 24 hours.
                                </p>
                                <button
                                    onClick={onBackToLogin}
                                    className="px-6 py-2 bg-terminal-surface border border-terminal-border text-terminal-text rounded hover:border-terminal-accent transition-colors text-sm"
                                >
                                    RETURN TO BASE
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>

                <button
                    onClick={onBackToLogin}
                    className="mt-8 mx-auto flex items-center space-x-2 text-xs text-terminal-text-dim hover:text-terminal-accent transition-colors"
                >
                    <ArrowLeft className="w-3 h-3" />
                    <span>BACK TO LOGIN</span>
                </button>
            </div>
        </div>
    );
};

// Simple mock for missing checkcircle icon if needed, but I'll use Lucide's 
import { CheckCircle2 } from "lucide-react";
