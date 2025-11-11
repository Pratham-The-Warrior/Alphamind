import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "./components/LoginForm";
import { TerminalHeader } from "./components/TerminalHeader";
import { TerminalSidebar } from "./components/TerminalSidebar";
import { TerminalDashboard } from "./components/TerminalDashboard";
import { TerminalMarkets } from "./components/TerminalMarkets";
import { TerminalPortfolio } from "./components/TerminalPortfolio";
import { TerminalAnalytics } from "./components/TerminalAnalytics";
import { TerminalOptimizer } from "./components/TerminalOptimizer";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // In a real app, you'd validate credentials against a backend
    setUser({ username: credentials.username });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setActiveSection("dashboard");
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const renderMainContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <TerminalDashboard />;
      case "markets":
        return <TerminalMarkets />;
      case "portfolio":
        return <TerminalPortfolio />;
      case "analytics":
        return <TerminalAnalytics />;
      case "optimizer":
        return <TerminalOptimizer />;
      case "settings":
        return (
          <div className="p-4 flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-terminal-accent text-lg font-bold mb-2">
                SYSTEM SETTINGS
              </div>
              <div className="text-terminal-text-muted">
                Terminal configuration coming soon...
              </div>
            </div>
          </div>
        );
      default:
        return <TerminalDashboard />;
    }
  };

  return (
    <div className="h-screen bg-terminal-bg text-terminal-text font-mono overflow-hidden matrix-bg">
      {/* Terminal Header */}
      <TerminalHeader user={user} onLogout={handleLogout} />

      <div className="flex h-[calc(100vh-40px)]">
        {/* Sidebar */}
        <TerminalSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Main Content */}
        <div className="flex-1 bg-terminal-bg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderMainContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
