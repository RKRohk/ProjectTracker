import { CSSReset, theme } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            {/* <div className="App">
                <LandingPage />
            </div> */}
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
