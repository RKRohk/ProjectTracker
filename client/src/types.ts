export interface User {
    username: string;
    email: string;
}

export interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
}
