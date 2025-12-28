import { useState } from "react";
import { LoginForm } from "./pages/LoginForm";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ContactSupport } from "./pages/ContactSupport";
import { SignupPage } from "./pages/SignupPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./components/common/MainLayout";
import { NotificationSystem, useNotifications } from "./components/ui/NotificationSystem";
import { TerminalDashboard } from "./pages/TerminalDashboard";
import { TerminalMarkets } from "./pages/TerminalMarkets";
import { TerminalPortfolio } from "./pages/TerminalPortfolio";
import { TerminalAnalytics } from "./pages/TerminalAnalytics";
import { TerminalOptimizer } from "./pages/TerminalOptimizer";
import { TerminalSettings } from "./pages/TerminalSettings";
import { AlphaReference } from "./pages/AlphaReference";
import { useAuth } from "./hooks/useAuth";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [publicView, setPublicView] = useState<"login" | "forgot-password" | "contact-support" | "signup" | "privacy" | "terms" | "404">("login");
  const { isAuthenticated, user, login, logout } = useAuth();
  const { notifications, addNotification, removeNotification } = useNotifications();

  const handleLogout = () => {
    logout();
    setActiveSection("dashboard");
    setPublicView("login");
    addNotification('info', 'Session terminated by user request.');
  };

  const handleLogin = (credentials: any) => {
    login(credentials);
    addNotification('success', `Welcome back, ${credentials.username}. Secure channel established.`);
  };

  const handleSignup = (userData: any) => {
    login({ username: userData.username, password: 'temp' });
    addNotification('success', `Account created successfully. Welcome, ${userData.username}.`);
  };

  if (!isAuthenticated) {
    if (publicView === "404") {
      return <NotFoundPage onReturnBase={() => setPublicView("login")} />;
    }

    switch (publicView) {
      case "forgot-password":
        return <ForgotPassword onBackToLogin={() => setPublicView("login")} />;
      case "contact-support":
        return <ContactSupport onBackToLogin={() => setPublicView("login")} />;
      case "signup":
        return <SignupPage onBackToLogin={() => setPublicView("login")} onSignupComplete={handleSignup} />;
      case "privacy":
        return <LegalPage title="Privacy Policy" onBack={() => setPublicView("login")} />;
      case "terms":
        return <LegalPage title="Terms of Service" onBack={() => setPublicView("login")} />;
      default:
        return (
          <LoginForm
            onLogin={handleLogin}
            onNavigate={(view: any) => setPublicView(view)}
          />
        );
    }
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
        return <TerminalSettings />;
      case "reference":
        return <AlphaReference />;
      default:
        // Instead of returning dashboard, we could show 404 if it's an invalid section
        return <TerminalDashboard />;
    }
  };

  return (
    <>
      <MainLayout
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        user={user}
        onLogout={handleLogout}
      >
        {renderMainContent()}
      </MainLayout>
      <NotificationSystem notifications={notifications} onRemove={removeNotification} />
    </>
  );
}

export default App;


