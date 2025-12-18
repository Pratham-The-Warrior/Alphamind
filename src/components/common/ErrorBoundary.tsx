import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4">
                    <div className="terminal-panel p-8 max-w-md w-full text-center">
                        <h1 className="text-terminal-danger text-2xl font-bold mb-4">SYSTEM ERROR</h1>
                        <p className="text-terminal-text-dim mb-6">
                            An unexpected error has occurred in the terminal.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-terminal-accent text-terminal-bg px-6 py-2 font-bold rounded hover:bg-opacity-90 transition-all"
                        >
                            REBOOT SYSTEM
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
