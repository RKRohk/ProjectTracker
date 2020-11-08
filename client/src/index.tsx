import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CSSReset, theme } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming";
import "./index.css";
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CSSReset />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
