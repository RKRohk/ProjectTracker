import { CSSReset, theme } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming";
import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { User } from "./types";
import { UserContext, useUser } from "./UserContext";

const App: React.FC = () => {
    const [user, setUser] = React.useState<User | null>(null);
    useEffect(() => {
        const localUser = localStorage.getItem("user");
        console.log(localUser);
        if (localUser) {
            const u: User = JSON.parse(localUser);
            console.log(u);
            setUser(u);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CSSReset />

            <UserContext.Provider value={{ user, setUser }}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/home">
                            {user ? <HomePage /> : <Redirect to="/login" />}
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <LandingPage />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </ThemeProvider>
    );
};

export default App;
