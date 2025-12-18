import { useState, useCallback } from 'react';

export interface User {
    username: string;
}

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const login = useCallback((credentials: { username: string; password: string }) => {
        // In a real app, this would involve API calls and token management
        setUser({ username: credentials.username });
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        setIsAuthenticated(false);
        setUser(null);
    }, []);

    return {
        isAuthenticated,
        user,
        login,
        logout
    };
};
