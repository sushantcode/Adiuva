import React from "react";
import WelcomeNavbar from "./components/WelcomeNavbar";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";

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
          {/* <Route path="/signin" component={Sign} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
