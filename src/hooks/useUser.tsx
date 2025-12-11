import { useContext } from "react";
import { UserContextType } from "./../types/userContextType";

export const useUser = () => {
    const context = useContext(UserContextType)
    if (!context) throw new Error("The useUser hook must be used within a UserProvider");

    return context;
}