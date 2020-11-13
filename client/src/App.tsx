import { CSSReset, theme } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <div className="App">
                <LandingPage />
            </div>
        </ThemeProvider>
    );
};

export default App;
