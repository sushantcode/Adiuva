import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import WelcomeNavbar from "./components/WelcomeNavbar";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <WelcomeNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactus" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
