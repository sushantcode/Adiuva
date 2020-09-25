import React from "react";
import WelcomeNavbar from "./components/WelcomeNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Router>
                <WelcomeNavbar />
                <Switch>
                    <Route path="/" exact />
                </Switch>
            </Router>
        </>
    );
}

export default App;
