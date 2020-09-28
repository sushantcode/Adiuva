import React from "react";
import WelcomeNavbar from "./components/WelcomeNavbar";
import Contact from "./components/pages/Contact";
import Main from "./components/pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <WelcomeNavbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/contactus" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
