"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

interface User {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (data: any) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: async () => { },
    logout: () => { },
    isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user from local storage on mount
    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem("accessToken");
            const storedUser = localStorage.getItem("user");

            if (token && storedUser) {
                setUser(JSON.parse(storedUser));
                // Optional: Verify token with backend /me endpoint here
            }
            setLoading(false);
        };
        initAuth();
    }, []);

    const login = async (credentials: any) => {
        try {
            const response = await api.post("/auth/login", credentials);
            const { user, accessToken, refreshToken } = response.data.data;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("user", JSON.stringify(user));

            setUser(user);
            router.push("/dashboard");
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    const logout = () => {
        // Optional: Call logout endpoint
        // api.post("/auth/logout").catch(...)

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        setUser(null);
        router.push("/login"); // or root
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
