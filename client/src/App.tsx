import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPageBody from "./components/LandingPage/LandingPageBody";
import Login from "./components/Login/Login";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <div className="App">
                            <LandingPageBody />
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
