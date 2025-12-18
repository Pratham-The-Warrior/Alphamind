import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, CheckCircle2, AlertTriangle, Info, AlertCircle } from 'lucide-react';

export interface Notification {
    id: string;
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
    timestamp: Date;
}

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((type: Notification['type'], message: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        setNotifications(prev => [...prev, { id, type, message, timestamp: new Date() }]);
    }, []);

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);

    return { notifications, addNotification, removeNotification };
};

export const NotificationSystem: React.FC<{
    notifications: Notification[];
    onRemove: (id: string) => void;
}> = ({ notifications, onRemove }) => {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 max-w-sm w-full">
            <AnimatePresence>
                {notifications.map((n) => (
                    <motion.div
                        key={n.id}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className={`terminal-panel p-4 flex items-start space-x-3 border-l-4 shadow-2xl relative overflow-hidden ${n.type === 'success' ? 'border-l-terminal-success bg-terminal-surface' :
                                n.type === 'warning' ? 'border-l-terminal-warning bg-terminal-surface' :
                                    n.type === 'error' ? 'border-l-terminal-danger bg-terminal-surface' :
                                        'border-l-terminal-info bg-terminal-surface'
                            }`}
                    >
                        {/* Auto-dismiss progress bar */}
                        <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: 5, ease: "linear" }}
                            onAnimationComplete={() => onRemove(n.id)}
                            className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left ${n.type === 'success' ? 'bg-terminal-success' :
                                    n.type === 'warning' ? 'bg-terminal-warning' :
                                        n.type === 'error' ? 'bg-terminal-danger' :
                                            'bg-terminal-info'
                                }`}
                        />

                        <div className="flex-shrink-0 mt-0.5">
                            {n.type === 'success' && <CheckCircle2 className="w-5 h-5 text-terminal-success" />}
                            {n.type === 'warning' && <AlertTriangle className="w-5 h-5 text-terminal-warning" />}
                            {n.type === 'error' && <AlertCircle className="w-5 h-5 text-terminal-danger" />}
                            {n.type === 'info' && <Info className="w-5 h-5 text-terminal-info" />}
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <span className={`text-[10px] font-bold tracking-widest uppercase ${n.type === 'success' ? 'text-terminal-success' :
                                        n.type === 'warning' ? 'text-terminal-warning' :
                                            n.type === 'error' ? 'text-terminal-danger' :
                                                'text-terminal-info'
                                    }`}>
                                    {n.type} SIGNAL
                                </span>
                                <span className="text-terminal-text-muted text-[9px] font-mono">
                                    {n.timestamp.toLocaleTimeString([], { hour12: false })}
                                </span>
                            </div>
                            <p className="text-terminal-text text-xs leading-relaxed">{n.message}</p>
                        </div>

                        <button
                            onClick={() => onRemove(n.id)}
                            className="flex-shrink-0 text-terminal-text-muted hover:text-terminal-text transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
