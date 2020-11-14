import { createContext, useContext } from "react";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {
        console.log("Not Implemented");
    },
});

export const useUser = () => useContext(UserContext);
