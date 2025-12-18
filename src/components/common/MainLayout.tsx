import { motion, AnimatePresence } from 'framer-motion';
import { TerminalHeader } from './TerminalHeader';
import { TerminalSidebar } from './TerminalSidebar';

interface MainLayoutProps {
    children: React.ReactNode;
    activeSection: string;
    onSectionChange: (section: string) => void;
    user: { username: string } | null;
    onLogout: () => void;
}

export const MainLayout = ({
    children,
    activeSection,
    onSectionChange,
    user,
    onLogout,
}: MainLayoutProps) => {
    return (
        <div className="h-screen bg-terminal-bg text-terminal-text font-mono overflow-hidden matrix-bg relative flex flex-col">
            <TerminalHeader user={user} onLogout={onLogout} onNavigate={onSectionChange} />

            <div className="flex flex-1 overflow-hidden">
                <TerminalSidebar
                    activeSection={activeSection}
                    onSectionChange={onSectionChange}
                />

                <div className="flex-1 bg-terminal-bg overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-border scrollbar-track-terminal-surface"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
