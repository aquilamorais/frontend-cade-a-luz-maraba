import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User } from "../types/userType";
import { UserContextType } from "../types/userContextType";
import { api } from "./api";


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const refreshUser = async () => {
        try {
            const response = await api.get("/me");
            setUser(response.data);
        } catch {
            alert("Erro ao buscar dados do usuário. Faça login novamente.");
            navigate("/login");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (location.pathname !== '/login' && location.pathname !== '/register') {
            refreshUser();
        }
    }, [location.pathname]);

    const logout = async () => {
        try {
            await api.post("/logout");
        } catch {
            alert("Erro ao fazer logout. Tente novamente.");
        } finally {
            localStorage.removeItem("token");
            setUser(null);
            navigate("/login");
        }
    }

    return (
        <UserContextType.Provider value={{ user, isLoading, refreshUser, logout }}>
            {children}
        </UserContextType.Provider>
    );
}