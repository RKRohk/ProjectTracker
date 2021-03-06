import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import { User } from "../types";

const register = async (username: string, email: string, password: string) => {
    const response = await axios.post<User>("/api/user/createUser", {
        username,
        email,
        password,
    });
    return response;
};

const login = async (email: string, password: string) => {
    const response = await axios.post<User & { token: string }>("/api/login", {
        email,
        password,
    });
    //Remove this later
    console.info(typeof response);
    return response;
};

export default { register, login };
